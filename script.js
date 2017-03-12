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
  cube.roll = roll;
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
      case 32:
        cube.roll();
        break;
    }
    cube.update();
  }
}

var roll = function () {
  var face = Math.floor(Math.random() * 6) + 1
  var origSpin = this.spin;
  this.style.transition = 'transform 2s';
  setTimeout(function () {
    this.style.transition = 'transform 0.5s'
  }.bind(this), 2000);
  switch (face) {
    case 1:
      this.spin = {x: 540, y: -540, z: 540};
      break;
    case 2:
      this.spin = {x: -540, y: -990, z: 900};
      break;
    case 3:
      this.spin = {x: 990, y: 360, z: 360}
      break;
    case 4:
      this.spin = {x: -810, y: 180, z: -540}
      break;
    case 5:
      this.spin = {x: -900, y: 630, z: -540}
      break;
    case 6:
      this.spin = {x: 0, y: 180, z: -180}
      break;
  }
  if (
    this.spin.x == origSpin.x &&
    this.spin.y == origSpin.y &&
    this.spin.z == origSpin.z
  ) {
    this.spin.x += 360;
    this.spin.y -= 1080;
    this.spin.z += 720;
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
    text.innerText = "HINT: The keys opposite each other across the 'S' key are always opposites!"
  }, 8000)
  setTimeout(function () {
    text.innerText = "Press the Spacebar to roll the dice";
  }, 14000)
  setTimeout(function () {
    text.innerText = ""
  }, 20000)
}
