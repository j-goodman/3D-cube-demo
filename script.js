onload = function () {
  writeCaption();
  var cube = document.getElementById('cube');
  cube.spin = {
    x: 0,
    y: 0,
    z: 0,
  }
  setTimeout(function () {
    cube.style.transition = 'transform 0.5s';
  }, 1000)
  cube.update = function () {
    this.style.transform = 'translateZ(-90px) rotateY(' + cube.spin.y + 'deg) rotateZ(' + cube.spin.z + 'deg) rotateX(' + cube.spin.x + 'deg)';
  }
  cube.update();
  onkeydown = function (event) {
    var validKeyCodes = [87, 69, 68, 88, 90, 65];
    var increment = 30;
    switch (event.keyCode) {
      case 87:
        cube.spin.x += increment;
        break;
      case 88:
        cube.spin.x -= increment;
        break;
      case 69:
        cube.spin.z += increment;
        break;
      case 90:
        cube.spin.z -= increment;
        break;
      case 65:
        cube.spin.y += increment;
        break;
      case 68:
        cube.spin.y -= increment;
        break;
    }
    cube.update();
  }
}

// KEYCODES //
// W  :  87 //
// E  :  69 //
// D  :  68 //
// X  :  88 //
// Z  :  90 //
// A  :  65 //

var writeCaption = function () {
  var text = document.getElementById('caption');
  text.innerText = "Use the W E D X Z and A keys to spin the cube.";
  setTimeout(function () {
    text.innerText = "HINT: The letters opposite each other across the 'S' key are always opposites!"
  }, 12000)
  setTimeout(function () {
    text.innerText = ""
  }, 20000)
}
