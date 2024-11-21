(function() {
  const devTools = /./;
  devTools.toString = function() {
    return 'devtools';
  };

  setInterval(function() {
    if (console.log.toString().indexOf('devtools') !== -1) {
      alert("Developer tools are not allowed on this site.");
      window.location.href = 'about:blank';  // Redirects the user to a blank page
    }
  }, 1000);  // Checks every second
})();
