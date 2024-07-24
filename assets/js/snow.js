document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; 

    const snowflakes = [];

    function createSnowflakes() {
        const snowflakeCount = 100;
        for (let i = 0; i < snowflakeCount; i++) {
            snowflakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 4 + 1,
                speed: Math.random() * 1 + 0.5,
                direction: Math.random() * 2 * Math.PI,
            });
        }
    }

    function updateSnowflakes() {
        snowflakes.forEach(flake => {
            flake.y += flake.speed;
            flake.x += Math.sin(flake.direction);

            if (flake.y > canvas.height) {
                flake.y = -flake.radius;
                flake.x = Math.random() * canvas.width;
            }

            if (flake.x > canvas.width) {
                flake.x = 0;
            } else if (flake.x < 0) {
                flake.x = canvas.width;
            }
        });
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        snowflakes.forEach(flake => {
            ctx.moveTo(flake.x, flake.y);
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        });
        ctx.fill();
    }

    function animate() {
        updateSnowflakes();
        drawSnowflakes();
        requestAnimationFrame(animate);
    }

    createSnowflakes();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const direction = (mouseX / canvas.width - 0.5) * 2;

        snowflakes.forEach(flake => {
            flake.direction = direction * Math.PI;
        });
    });
});
