onload = function () {
  var cube = document.getElementById('cube');
  cube.className = 'cube-effect';
  setTimeout(function () {
    cube.className = '';
    setTimeout(function () {
      cube.className = 'cube-effect';
      setTimeout(function () {
        cube.className = '';
      }, 12000)
    }, 6000)
  }, 2000)
}
