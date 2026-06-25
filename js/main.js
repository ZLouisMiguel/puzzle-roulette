import { Application, Graphics } from "pixi.js";

const CANVAS_BACKGROUNDS = "#11111b";
async function initGame() {
  const mainCanvas = document.getElementById("main-canvas");
  const leftWheelCanvas = document.getElementById("left-wheel-canvas");
  const rightWheelCanvas = document.getElementById("right-wheel-canvas");

  const mainApp = new Application();
  await mainApp.init({
    canvas: mainCanvas,
    background: "#11111b",
    width: mainCanvas.width,
    height: mainCanvas.height,
  });

  const leftWheelApp = new Application();
  await leftWheelApp.init({
    canvas: leftWheelCanvas,
    background: "#11111b",
    width: leftWheelCanvas.width,
    height: leftWheelCanvas.height,
  });

  const rightWheelApp = new Application();
  await rightWheelApp.init({
    canvas: rightWheelCanvas,
    background: "#11111b",
    width: rightWheelCanvas.width,
    height: rightWheelCanvas.height,
  });

  const craneHead = new Graphics();
  craneHead.rect(0, 0, 40, 20);
  craneHead.fill(0xa6e3a1);
  craneHead.x = mainApp.screen.width / 2 - 20;
  craneHead.y = 20;

  mainApp.stage.addChild(craneHead);
}

initGame().catch(console.error);
