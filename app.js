// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === "N") {
    rover.direction = "W"
  } else if(rover.direction === "W") {
    rover.direction = "S"
  } else if(rover.direction === "S") {
    rover.direction = "E"
  } else if(rover.direction === "E") {
    rover.direction = "N"
  } else {
    console.log("Something is wrong when turning left")
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N") {
    rover.direction = "E"
  } else if(rover.direction === "W") {
    rover.direction = "N"
  } else if(rover.direction === "S") {
    rover.direction = "W"
  } else if(rover.direction === "E") {
    rover.direction = "S"
  } else {
    console.log("Something is wrong when turning right")
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === "N" && rover.y >0) {
    rover.y --
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "W" && rover.x >0) {
    rover.x --
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "E" && rover.x <9) {
    rover.x ++
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "S" && rover.y <9) {
    rover.y ++
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else {
    console.log("Something is wrong when moving forward, you can't go outside the grid. Remember the grid is 10x10.")
  }
}

function moveBackward(rover){
  console.log("moveBackward was called")
    if(rover.direction === "N" && rover.y >0) {
    rover.y ++
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "W" && rover.x >0) {
    rover.x ++
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "E" && rover.x <9) {
    rover.x --
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else if(rover.direction === "S" && rover.y <9) {
    rover.y --
    console.log("New position! X: " + rover.x + ", Y: " + rover.y );
    rover.travelLog.push("X: " + rover.x + ", Y: " + rover.y + "|")
  } else {
    console.log("Something is wrong when moving backward, you can't go outside the grid. Remember the grid is 10x10.")
  }
}

function comandos(comando) {
  for (i=0; i< comando.length; i++) {
    if (comando[i] === "f") {
      moveForward(rover);
    } else if (comando[i] === "l") {
      turnLeft(rover)
    } else if (comando[i] === "r") {
      turnRight(rover)
    } else if (comando[i] === "b") {
      moveBackward(rover)
    } else {
      console.log("Something is wrong with comandos, remember you have to use 'f' to move forward, 'b' for backward, 'r' for right and 'l' for left.")
    }
  }
}
comandos("frffrfbflfrffbbb")
console.log("Travel log: " + rover.travelLog)