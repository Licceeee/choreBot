const doorImage =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const botDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath =
    "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const startButton = document.getElementById("start");

let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

let numClosedDoors = 3;

const gameOver = (status) => {
    if (status === "win") {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?";
    }
    currentlyPlaying = false;
};

const isBot = (door) => {
    return door.src === botDoorPath ? true : false;
};

const isClicked = (door) => {
    return door.src === closedDoorPath ? true : false;
};

const playDoor = (door) => {
    numClosedDoors -= 1;
    if (!numClosedDoors) {
        gameOver("win");
    } else if (isBot(door)) {
        gameOver();
    }
};

const randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
        openDoor1 = beachDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }
};

const startRound = () => {
    doorImage1.src = doorImage;
    doorImage2.src = doorImage;
    doorImage3.src = doorImage;
    numClosedDoors = 3;
    startButton.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

startButton.onclick = startRound;

startRound();