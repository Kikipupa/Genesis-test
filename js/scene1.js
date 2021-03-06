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
    this.load.image("reddress", "images/clothes/reddress.png");
    this.load.image("smallsuit", "images/clothes/smallsuit.png");
    this.load.image("bigsuit", "images/clothes/bigsuit.png");
    this.load.image("progressbar", "images/progressbar.png");
    this.load.image("orangeline", "images/orangeline.png");
    this.load.image("joygirl", "images/emotions/joy.png");
    this.load.image("bag1", "images/clothes/bagblue.png");
    this.load.image("bag2", "images/clothes/bagbrown.png");
    this.load.image("sunglasses", "images/clothes/glasses.png");
    this.load.image("choker", "images/clothes/choker.png");
    this.load.image("makeup1", "images/clothes/makeup1.png");
    this.load.image("makeup2", "images/clothes/makeup2.png");
    this.load.image("bg1", "images/bg1.png");
    this.load.image("bg2", "images/bg2.png");
    this.load.image("beach", "images/backgrounds/beach.png");
    this.load.image("hotel", "images/backgrounds/hotel.png");
    this.load.image("finalpopup", "images/finalmassege.png");
  }

  create() {
    const bedroom = this.add.image(150, 300, "bedroom");
    const hotel = this.add.image(150, 300, "hotel").setVisible(false);
    const beach = this.add.image(150, 300, "beach").setVisible(false);
    const overlay = this.add.renderTexture(0, 0, 360, 600);
    overlay.fill(0x000000, 0.75);
    overlay.setVisible(true);
    const smallSuit = this.add
      .image(170, 0, "smallsuit")
      .setScale(0.6)
      .setVisible(false);
    const smallDress = this.add
      .image(0, -30, "reddress")
      .setScale(0.08)
      .setVisible(false);
    const progressbar = this.add.image(0, 0, "progressbar");
    const orangeLine = this.add
      .image(0, 0, "orangeline")
      .setOrigin(2, 0.5)
      .setVisible(false);
    const orangeLine2 = this.add
      .image(0, 0, "orangeline")
      .setOrigin(1, 0.5)
      .setVisible(false);
    const orangeLine3 = this.add
      .image(0, 0, "orangeline")
      .setOrigin(0, 0.5)
      .setVisible(false);
    const orangeLine4 = this.add
      .image(0, 0, "orangeline")
      .setOrigin(-1, 0.5)
      .setVisible(false);
    const boyContainer = this.add.container(180, 320).setScale(0.5);
    const girlContainer = this.add.container(-200, 360).setScale(0.32);
    const finalMessageContainer = this.add.container(150, 400);
    const rectangleContainer = this.add.container(180, -200);
    const whiteButtonContainer = this.add.container(95, 1000);
    const clothButtonContainer = this.add.container(0, 0);
    const clothButtonContainer2 = this.add.container(0, 0);
    const progressBarContainer = this.add.container(180, -200);
    progressBarContainer.add([progressbar, orangeLine]).setScale(0.6);
    const girl = this.add.image(0, 0, "girlbody");
    const pyjama = this.add.image(0, 0, "pyjama");
    const redDress = this.add.sprite(0, 0, "reddress").setVisible(false);
    const bigBag1 = this.add.sprite(0, 0, "bag1").setVisible(false);
    const bigBag2 = this.add.sprite(0, 0, "bag2").setVisible(false);
    const smallBag1 = this.add
      .sprite(0, 0, "bag1")
      .setOrigin(0.4)
      .setScale(0.15)
      .setVisible(false);
    const smallBag2 = this.add
      .sprite(0, 0, "bag2")
      .setOrigin(-0.7, 0.4)
      .setScale(0.12)
      .setVisible(false);
    const costume = this.add.sprite(0, 0, "bigsuit").setVisible(false);
    const sunGlasses = this.add.sprite(0, 0, "sunglasses").setVisible(false);
    const choker = this.add.sprite(0, 0, "choker").setVisible(false);
    const sunGlassesSmall = this.add
      .sprite(-10, 250, "sunglasses")
      .setScale(0.4)
      .setVisible(false);
    const chokerSmall = this.add
      .sprite(170, 190, "choker")
      .setScale(0.4)
      .setVisible(false);

    const bg1 = this.add.image(170, 0, "bg1").setScale(0.6).setVisible(false);
    const bg2 = this.add.image(0, 0, "bg2").setScale(0.6).setVisible(false);

    this.anims.create({
      key: "girlspeak",
      frames: [{ key: "neutralgirl" }, { key: "girlsurprized" }],
      frameRate: 3,
      repeat: 2,
    });

    const girlspeak2 = this.add.sprite(0, 0, "girlsurprized");
    const girlhair = this.add.image(0, 0, "hair");

    const popupgirl = this.add.image(0, 0, "girlmessage");
    popupgirl.setScale(0);
    const makeup1Small = this.add
      .sprite(-15, 210, "makeup1")
      .setScale(0.35)
      .setVisible(false);
    const makeup2Small = this.add
      .sprite(155, 210, "makeup2")
      .setScale(0.35)
      .setVisible(false);
    const makeup1 = this.add.sprite(0, 0, "makeup1").setVisible(false);
    const makeup2 = this.add.sprite(0, 0, "makeup2").setVisible(false);

    girlContainer.add([
      girl,
      pyjama,
      girlspeak2,
      redDress,
      costume,
      bigBag1,
      bigBag2,
      sunGlasses,
      choker,
      makeup1,
      makeup2,
      girlhair,
      popupgirl,
    ]);

    let clickCount = 0;

    function clickButton() {
      clickCount++;
    }

    this.anims.create({
      key: "girlemotion",
      frames: [{ key: "girlsurprized" }, { key: "joygirl" }],
      frameRate: 25,
      repeat: 0,
    });

    function girlAnimation() {
      girlspeak2.play("girlspeak");
    }

    function girlEmotionJoy() {
      girlspeak2.play("girlemotion");
    }

    const boy = this.add.image(0, 0, "introboy");

    this.anims.create({
      key: "speak",
      frames: [{ key: "boyemotion" }, { key: "neutralface" }],
      frameRate: 3,
      repeat: 4,
    });
    const backhair = this.add.image(0, 0, "backhair");

    const speak = this.add.sprite(0, 0, "neutralface").play("speak");
    const fronthair = this.add.image(0, 0, "fronthair");
    const finalPopup = this.add.image(0, 0, "finalpopup");
    const popupman = this.add.image(0, 0, "message");
    popupman.setScale(0);
    const finalText = this.add.text(-120, 0, "You are beautiful!", {
      font: "36px arial",
      color: "black",
      boundsAlignH: "left",
    });
    finalMessageContainer.add([finalPopup, finalText]).setScale(0);

    boyContainer.add([boy, backhair, speak, fronthair, popupman]);

    const showMessage = (popup, scale) => {
      const tween = this.tweens.add({
        targets: popup,
        scaleX: scale,
        scaleY: scale,
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
        x: 200,
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
        showMessage(popupgirl, 0.7);
      },
      callbackScope: this,
    });

    let timerMessage = this.time.addEvent({
      delay: 300,
      callback: () => {
        showMessage(popupman, 0.5);
      },
      callbackScope: this,
    });

    const girlScale = () => {
      this.tweens.add({
        targets: girlContainer,
        scaleX: 0.34,
        scaleY: 0.34,
        y: 370,
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

    const rectangleAnim = (y, target) => {
      this.tweens.add({
        targets: target,
        y: y,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    rectangleContainer.add([rectangle, rectangleText]);

    const buttonOne = this.add.image(0, 0, "whitebutton").setScale(0.6);
    const buttonTwo = this.add.image(170, 0, "whitebutton").setScale(0.6);

    clothButtonContainer.add([buttonOne, smallDress]);
    clothButtonContainer2.add([buttonTwo, smallSuit]);
    buttonOne
      .setSize(100, 100)
      .setInteractive()
      .on("pointerdown", () => {
        clickButton();
        if (clickCount === 1) {
          pyjama.setVisible(false);
          redDress.setVisible(true);
          girlContainer.bringToTop(girlhair);
          costume.setVisible(false);
          overlay.setVisible(false);
          rectangleAnim(-30, rectangleContainer);
          orangeLine.setVisible(true);
          rectangleAnim(30, progressBarContainer);
          girlEmotionJoy();
          buttonsToggle(false);
          clothButtonContainer.add(smallBag1);
          clothButtonContainer2.add(smallBag2);
          smallDress.setVisible(false);
          smallSuit.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              smallBag1.setVisible(true);
              smallBag2.setVisible(true);
              buttonsToggle(true);
            },
            callbackScope: this,
          });
        } else if (clickCount === 2) {
          orangeLine2.setVisible(true);
          progressBarContainer.add(orangeLine2);
          bigBag1.setVisible(true);
          girlContainer.bringToTop(girlhair);
          buttonsToggle(false);
          clothButtonContainer.add(sunGlassesSmall);
          clothButtonContainer2.add(chokerSmall);
          smallBag1.setVisible(false);
          smallBag2.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              sunGlassesSmall.setVisible(true);
              chokerSmall.setVisible(true);
              buttonsToggle(true);
            },
            callbackScope: this,
          });
        } else if (clickCount === 3) {
          orangeLine3.setVisible(true);
          progressBarContainer.add(orangeLine3);
          sunGlasses.setVisible(true);
          buttonsToggle(false);
          clothButtonContainer.add(makeup1Small);
          clothButtonContainer2.add(makeup2Small);
          sunGlassesSmall.setVisible(false);
          chokerSmall.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              makeup1Small.setVisible(true);
              makeup2Small.setVisible(true);
              buttonsToggle(true);
            },
          });
        } else if (clickCount === 4) {
          orangeLine4.setVisible(true);
          progressBarContainer.add(orangeLine4);
          makeup1.setVisible(true);
          buttonsToggle(false);
          makeup1Small.setVisible(false);
          makeup2Small.setVisible(false);
          rectangleText.setText("Choose your location");
          clothButtonContainer.add(bg2);
          clothButtonContainer2.add(bg1);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              bg1.setVisible(true);
              bg2.setVisible(true);
              rectangleAnim(-30, progressBarContainer);
              rectangleAnim(30, rectangleContainer);
              buttonsToggle(true);
            },
          });
        } else if (clickCount === 5) {
          hotel.setVisible(true);
          rectangleAnim(-30, rectangleContainer);
          buttonsToggle(false);
          popupman.setVisible(false);
          finalMove(90, girlContainer);
          finalMove(230, boyContainer);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              if (redDress.visible) {
                showMessage(finalMessageContainer, 0.6);
              } else if (!redDress.visible) {
                finalText.x = -200;
                finalText.setText("What a weird appearance!");
                showMessage(finalMessageContainer, 0.6);
              }
            },
          });
        }
      });

    buttonTwo
      .setSize(100, 100)
      .setInteractive()
      .on("pointerdown", () => {
        clickButton();
        if (clickCount === 1) {
          pyjama.setVisible(false);
          costume.setVisible(true);
          costume.setVisible(true);
          girlContainer.bringToTop(girlhair);
          redDress.setVisible(false);
          overlay.setVisible(false);
          rectangleAnim(-30, rectangleContainer);
          orangeLine.setVisible(true);
          rectangleAnim(30, progressBarContainer);
          girlEmotionJoy();
          buttonsToggle(false);
          clothButtonContainer.add(smallBag1);
          clothButtonContainer2.add(smallBag2);
          smallSuit.setVisible(false);
          smallDress.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              smallBag1.setVisible(true);
              smallBag2.setVisible(true);
              buttonsToggle(true);
            },
            callbackScope: this,
          });
        } else if (clickCount === 2) {
          orangeLine2.setVisible(true);
          progressBarContainer.add(orangeLine2);
          bigBag2.setVisible(true);
          girlContainer.bringToTop(girlhair);
          buttonsToggle(false);
          clothButtonContainer.add(sunGlassesSmall);
          clothButtonContainer2.add(chokerSmall);
          smallBag1.setVisible(false);
          smallBag2.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              sunGlassesSmall.setVisible(true);
              chokerSmall.setVisible(true);
              buttonsToggle(true);
            },
            callbackScope: this,
          });
        } else if (clickCount === 3) {
          orangeLine3.setVisible(true);
          progressBarContainer.add(orangeLine3);
          choker.setVisible(true);
          buttonsToggle(false);
          clothButtonContainer.add(makeup1Small);
          clothButtonContainer2.add(makeup2Small);
          sunGlassesSmall.setVisible(false);
          chokerSmall.setVisible(false);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              makeup1Small.setVisible(true);
              makeup2Small.setVisible(true);
              buttonsToggle(true);
            },
          });
        } else if (clickCount === 4) {
          orangeLine4.setVisible(true);
          progressBarContainer.add(orangeLine4);
          makeup1.setVisible(true);
          buttonsToggle(false);
          makeup1Small.setVisible(false);
          makeup2Small.setVisible(false);
          rectangleText.setText("Choose your location");
          clothButtonContainer.add(bg2);
          clothButtonContainer2.add(bg1);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              bg1.setVisible(true);
              bg2.setVisible(true);
              rectangleAnim(-30, progressBarContainer);
              rectangleAnim(30, rectangleContainer);
              buttonsToggle(true);
            },
          });
        } else if (clickCount === 5) {
          beach.setVisible(true);
          rectangleAnim(-30, rectangleContainer);
          buttonsToggle(false);
          popupman.setVisible(false);
          finalMove(90, girlContainer);
          finalMove(230, boyContainer);
          this.time.addEvent({
            delay: 500,
            callback: () => {
              if (redDress.visible) {
                showMessage(finalMessageContainer, 0.6);
              } else if (!redDress.visible) {
                finalText.x = -200;
                finalText.setText("What a weird appearance!");
                showMessage(finalMessageContainer, 0.6);
              }
            },
          });
        }
      });

    const finalMove = (x, target) => {
      this.tweens.add({
        targets: target,
        x: x,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    whiteButtonContainer.add([clothButtonContainer, clothButtonContainer2]);

    const buttonsToggle = (show) => {
      this.tweens.add({
        targets: whiteButtonContainer,
        y: show ? 500 : 1000,
        ease: "Linear",
        duration: 400,
        repeat: 0,
        yoyo: false,
      });
    };

    const timerScale = this.time.addEvent({
      delay: 3500,
      callback: () => {
        girlScale();
        hideMessage(popupgirl);
        smallDress.setVisible(true);
        smallSuit.setVisible(true);
        rectangleAnim(30, rectangleContainer);
        buttonsToggle(true);
      },
      callbackScope: this,
    });
  }
}
