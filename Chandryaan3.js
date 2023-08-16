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
  //function to rotate left
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

  //function to rotate right
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
  //function for up command
  adjustAngleUp() {
    if (
      this.direction === "N" ||
      this.direction === "S" ||
      this.direction === "E" ||
      this.direction === "W"
    ) {
      this.direction = "Up";
    }
  }
  //function for down command
  adjustAngleDown() {
    if (
      this.direction === "N" ||
      this.direction === "S" ||
      this.direction === "E" ||
      this.direction === "W"
    ) {
      this.direction = "Down";
    }
  }

  //   function for process command
  processCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.rotateLeft();
          break;
        case "r":
          this.rotateRight();
          break;
        case "u":
          this.adjustAngleUp();
          break;
        case "d":
          this.adjustAngleDown();
          break;
      }
    }
  }
}
// Example usage
const chandrayaan = new Chandrayaan3(0, 0, 0, "N");
const commands = ["f", "r", "u", "b", "l"];
chandrayaan.processCommands(commands);
console.log("Final Position:", chandrayaan.position);
console.log("Final Direction:", chandrayaan.direction);
