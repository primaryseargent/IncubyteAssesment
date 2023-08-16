const Chandrayaan3 = require("./Chandryaan3.js"); // Replace with the correct path to your Chandrayaan3 implementation

describe("Chandrayaan3", () => {
  let chandrayaan;

  beforeEach(() => {
    chandrayaan = new Chandrayaan3(0, 0, 0, "N");
  });
  //testing for move forward direction
  it("should move forward correctly", () => {
    chandrayaan.moveForward();
    expect(chandrayaan.position).toEqual({ x: 0, y: 1, z: 0 });
  });
  //testing for rotate right function
  it("should rotate right correctly", () => {
    chandrayaan.rotateRight();
    expect(chandrayaan.direction).toBe("E");
  });
  //testing for adjust angle up function
  it("should rotate up correctly", () => {
    chandrayaan.adjustAngleUp();
    expect(chandrayaan.direction).toBe("Up");
  });
  //testing for move backward function correctly
  it("should move backward correctly", () => {
    chandrayaan.moveBackward();
    expect(chandrayaan.position).toEqual({ x: 0, y: -1, z: 0 });
  });
  //testing for rotate left function correctly
  it("should rotate left correctly", () => {
    chandrayaan.rotateLeft();
    expect(chandrayaan.direction).toBe("W");
  });
});
