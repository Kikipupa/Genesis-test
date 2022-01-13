let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image("bedroom", "images/backgrounds/bedroom.png");
  this.load.image("introboy", "images/man.png");
  joy = this.load.image("boyemotion", "images/emotions/joyman.png");
  neutral = this.load.image("neutralface", "images/emotions/neutralman.png");
  this.load.image("fronthair", "images/clothes/fronthair.png");
  this.load.image("backhair", "images/clothes/backhair.png");
  this.load.image("message", "images/message.png");
}

function create() {
  bedroom = this.add.image(150, 300, "bedroom");
  overlay = this.add.renderTexture(0, 0, 360, 600);
  overlay.fill(0x000000, 0.75);
  boy = this.add.image(180, 320, "introboy");
  boy.setScale(0.5);

  this.anims.create({
    key: "speak",
    frames: [{ key: "boyemotion" }, { key: "neutralface" }],
    frameRate: 3,
    repeat: 4,
  });
  backhair = this.add.image(180, 320, "backhair");
  backhair.setScale(0.5);
  speak = this.add.sprite(180, 320, "neutralface").setScale(0.5).play("speak");
  fronthair = this.add.image(180, 320, "fronthair");
  fronthair.setScale(0.5);

  popup = this.add.image(180, 350, "message");
  popup.setScale(0.1);

  const popupMessage = () => {
    tween = this.tweens.add({
      targets: popup,
      scaleX: 0.25,
      scaleY: 0.25,
      ease: "Linear", // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 200,
      repeat: 0, // -1: infinity
      yoyo: false,
    });
  };

  const move = () => {
    boymove = this.tweens.add({
      targets: [boy, backhair, fronthair, speak, popup],
      x: 900,
      ease: "Linear",
      duration: 500,
      repeat: 0,
      yoyo: false,
    });
  };

  let timer = this.time.addEvent({
    delay: 1500,
    callback: move,
    callbackScope: this,
  });

  let timerMessage = this.time.addEvent({
    delay: 300,
    callback: popupMessage,
    callbackScope: this,
  });
}
