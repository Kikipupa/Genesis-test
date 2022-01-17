import { FirstScene } from "./scene1.js";

let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 600,
  scene: [FirstScene],
};

let game = new Phaser.Game(config);
