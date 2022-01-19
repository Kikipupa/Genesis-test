export class FirstScene extends Phaser.Scene {
  constructor() {
    super({ key: "FirstScene", active: true });
  }
  preload() {
    this.load.image("bedroom", "images/backgrounds/bedroom.png");
    this.load.image("introboy", "images/man.png");
    let joy = this.load.image("boyemotion", "images/emotions/joyman.png");
    let neutral = this.load.image(
      "neutralface",
      "images/emotions/neutralman.png"
    );
    this.load.image("fronthair", "images/clothes/fronthair.png");
    this.load.image("backhair", "images/clothes/backhair.png");
    this.load.image("message", "images/message.png");
    this.load.image("girlbody", "images/girlbody.png");
    this.load.image("girlsurprized", "images/emotions/surprized.png");
    this.load.image("neutralgirl", "images/emotions/girlneutral.png");
    this.load.image("pyjama", "images/clothes/pyjama.png");
    this.load.image("hair", "images/clothes/hairgirl.png");
    this.load.image("girlmessage", "images/lexy1.png");
    this.load.image("rectangle", "images/Rectangle.png");
    this.load.image("whitebutton", "images/whitebutton.png");
  }

  create() {
    const bedroom = this.add.image(150, 300, "bedroom");
    const overlay = this.add.renderTexture(0, 0, 360, 600);
    overlay.fill(0x000000, 0.75);
    const girlContainer = this.add.container(0, 0);
    const boyContainer = this.add.container(0, 0);
    const rectangleContainer = this.add.container(180, -200);
    const whiteButtonContainer = this.add.container(95, 1000);
    const girl = this.add.image(-200, 320, "girlbody");
    girl.setScale(0.32);
    const pyjama = this.add.image(-200, 320, "pyjama");
    pyjama.setScale(0.32);

    this.anims.create({
      key: "girlspeak",
      frames: [{ key: "neutralgirl" }, { key: "girlsurprized" }],
      frameRate: 3,
      repeat: 2,
    });

    const girlspeak2 = this.add
      .sprite(-200, 320, "girlsurprized")
      .setScale(0.32);

    function girlAnimation() {
      girlspeak2.play("girlspeak");
    }

    const girlhair = this.add.image(-200, 320, "hair");
    girlhair.setScale(0.32);

    const popupgirl = this.add.image(-200, 320, "girlmessage");
    popupgirl.setScale(0.1);

    const boy = this.add.image(180, 320, "introboy");
    boy.setScale(0.5);

    this.anims.create({
      key: "speak",
      frames: [{ key: "boyemotion" }, { key: "neutralface" }],
      frameRate: 3,
      repeat: 4,
    });
    const backhair = this.add.image(180, 320, "backhair");
    backhair.setScale(0.5);
    const speak = this.add
      .sprite(180, 320, "neutralface")
      .setScale(0.5)
      .play("speak");
    const fronthair = this.add.image(180, 320, "fronthair");
    fronthair.setScale(0.5);

    const popupman = this.add.image(180, 350, "message");
    popupman.setScale(0.1);

    girlContainer.add([girl, pyjama, girlspeak2, girlhair, popupgirl]);
    boyContainer.add([boy, backhair, speak, fronthair, popupman]);

    const showMessage = (popup) => {
      const tween = this.tweens.add({
        targets: popup,
        scaleX: 0.25,
        scaleY: 0.25,
        ease: "Linear",
        duration: 200,
        repeat: 0,
        yoyo: false,
      });
    };

    const hideMessage = (popup) => {
      const tween = this.tweens.add({
        targets: popup,
        scaleX: 0,
        scaleY: 0,
        ease: "Linear",
        duration: 200,
        repeat: 0,
        yoyo: false,
      });
    };

    const girlMove = () => {
      const moveGirl = this.tweens.add({
        targets: girlContainer,
        x: 380,
        ease: "Linear",
        duration: 500,
        repeat: 0,
        yoyo: false,
      });
    };

    const boyAnimation = () => {
      const boymove = this.tweens.add({
        targets: boyContainer,
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
        showMessage(popupgirl);
      },
      callbackScope: this,
    });

    let timerMessage = this.time.addEvent({
      delay: 300,
      callback: () => {
        showMessage(popupman);
      },
      callbackScope: this,
    });

    const girlScale = () => {
      this.tweens.add({
        targets: girlContainer,
        scaleX: 1.1,
        scaleY: 1.1,
        x: 410,
        y: 20,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    let rectangle = this.add.image(0, 0, "rectangle");
    rectangle.setScale(0.3);
    let rectangleText = this.add
      .text(0, 0, "Choose your appearance", {
        font: "18px arial",
        boundsAlignH: "center",
      })
      .setOrigin(0.5);

    rectangleContainer.add([rectangle, rectangleText]);

    let buttonOne = this.add.image(0, 0, "whitebutton").setScale(0.6);
    let buttonTwo = this.add.image(170, 0, "whitebutton").setScale(0.6);

    whiteButtonContainer.add([buttonOne, buttonTwo]);

    const rectangleAnim = () => {
      this.tweens.add({
        targets: rectangleContainer,
        y: 30,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    const buttonAnim = () => {
      this.tweens.add({
        targets: whiteButtonContainer,
        y: 500,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    let timerScale = this.time.addEvent({
      delay: 3500,
      callback: () => {
        girlScale();
        hideMessage(popupgirl);
        rectangleAnim();
        buttonAnim();
      },
      callbackScope: this,
    });
  }
}
