class Chandrayaan3 {
  constructor(x, y, z, direction) {
    this.position = { x, y, z };
    this.direction = direction;
  }
  //function for move forward command
  moveForward() {
    switch (this.direction) {
      case "N":
        this.position.y += 1;
        break;
      case "S":
        this.position.y -= 1;
        break;
      case "E":
        this.position.x += 1;
        break;
      case "W":
        this.position.x -= 1;
        break;
      case "Up":
        this.position.z += 1;
        break;
      case "Down":
        this.position.z -= 1;
        break;
    }
  }
  //function for move backward command
  moveBackward() {
    switch (this.direction) {
      case "N":
        this.position.y -= 1;
        break;
      case "S":
        this.position.y += 1;
        break;
      case "E":
        this.position.x -= 1;
        break;
      case "W":
        this.position.x += 1;
        break;
      case "Up":
        this.position.z -= 1;
        break;
      case "Down":
        this.position.z += 1;
        break;
    }
  }
  rotateLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
      case "Up":
        this.direction = "N";
        break;
      case "Down":
        this.direction = "S";
        break;
    }
  }
  rotateRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
      case "Up":
        this.direction = "S";
        break;
      case "Down":
        this.direction = "N";
        break;
    }
  }
}
