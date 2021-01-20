const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
      let choreDoor = Math.floor(Math.random() * numClosedDoors);
      if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
        console.log("choredoor in 1");
      } else if (choreDoor === 1) {
          openDoor1 = spaceDoorPath
          openDoor2 = botDoorPath;
          openDoor3 = beachDoorPath;
          console.log("choredoor in 2");
        } else {
          openDoor1 = beachDoorPath;
          openDoor2 = spaceDoorPath;
          openDoor3 = botDoorPath;
          console.log("choredoor in 3");
        }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
  return true;
  }
}

if (currentlyPlaying && !isClicked(doorImage1)) {
  doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

if (!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
if (!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}
const startRound = () => {
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
}

let startButton = document.getElementById("start");
startButton.onclick = () => {
  if (!currentlyPlaying) {
  startRound();
  }
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = "You Win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}
startRound();
