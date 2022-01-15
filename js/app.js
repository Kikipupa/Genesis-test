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
  this.load.image("girlbody", "images/girlbody.png");
  this.load.image("girlsurprized", "images/emotions/surprized.png");
  this.load.image("neutralgirl", "images/emotions/girlneutral.png");
  this.load.image("pyjama", "images/clothes/pyjama.png");
  this.load.image("hair", "images/clothes/hairgirl.png");
  this.load.image("girlmessage", "images/lexy1.png");
}

function create() {
  bedroom = this.add.image(150, 300, "bedroom");
  overlay = this.add.renderTexture(0, 0, 360, 600);
  overlay.fill(0x000000, 0.75);
  girl = this.add.image(-200, 320, "girlbody");
  girl.setScale(0.32);
  pyjama = this.add.image(-200, 320, "pyjama");
  pyjama.setScale(0.32);

  this.anims.create({
    key: "girlspeak",
    frames: [{ key: "neutralgirl" }, { key: "girlsurprized" }],
    frameRate: 3,
    repeat: 4,
  });

  const girlspeak2 = this.add.sprite(-200, 320, "girlsurprized").setScale(0.32);

  function girlAnimation() {
    girlspeak2.play("girlspeak");
  }

  girlhair = this.add.image(-200, 320, "hair");
  girlhair.setScale(0.32);

  const popupgirl = this.add.image(-200, 320, "girlmessage");
  popupgirl.setScale(0.1);

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

  const popupman = this.add.image(180, 350, "message");
  popupman.setScale(0.1);

  const popupMessage = (popup) => {
    tween = this.tweens.add({
      targets: popup,
      scaleX: 0.25,
      scaleY: 0.25,
      ease: "Linear",
      duration: 200,
      repeat: 0,
      yoyo: false,
    });
  };

  const girlMove = () => {
    moveGirl = this.tweens.add({
      targets: [girl, pyjama, girlspeak2, girlhair, popupgirl],
      x: 180,
      ease: "Linear",
      duration: 500,
      repeat: 0,
      yoyo: false,
    });
  };

  const boyAnimation = () => {
    boymove = this.tweens.add({
      targets: [boy, backhair, fronthair, speak, popupman],
      x: 900,
      ease: "Linear",
      duration: 500,
      repeat: 0,
      yoyo: false,
    });
  };

  const move = () => {
    boyAnimation();
    girlMove();
  };

  let timer = this.time.addEvent({
    delay: 1500,
    callback: move,
    callbackScope: this,
  });

  let girlTimer = this.time.addEvent({
    delay: 2000,
    callback: () => {
      girlAnimation();
      popupMessage(popupgirl);
    },
    callbackScope: this,
  });

  let timerMessage = this.time.addEvent({
    delay: 300,
    callback: () => {
      popupMessage(popupman);
    },
    callbackScope: this,
  });
}
