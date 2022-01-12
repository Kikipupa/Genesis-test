let config = {
  type: Phaser.AUTO,
  width: 380,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image("bedroom", "images/bedroom.png");
  this.load.image("introboy", "images/boy1.png");
}

function create() {
  this.add.image(150, 300, "bedroom");
  this.add.image(190, 300, "introboy");
}
