const ENDLINE = 4200;
var animState, name;
var game = require("npc1");

var AnimationRun2_2 = cc.Class({
    extends: game,
    extends: cc.Component,

    properties: {
        animationComponent: null,
        frame1: cc.Node,
        frame2: cc.Node,
        frame3: cc.Node,
        frame4: cc.Node,
        frame5: cc.Node,
    },

    start() {
        this.animationComponent = this.getComponent(cc.Animation);
        animState = this.animationComponent.play('Animation_1_nomalSpeed');
    },

    onLoad: function () {
    },
    changeOpcity: function () {
        this.frame1.opacity = 0;
        this.frame2.opacity = 0;
        this.frame3.opacity = 0;
        this.frame4.opacity = 0;
        this.frame5.opacity = 255;
    },
    aniStop: function () {

    },
    update(dt) {
        if ((game.bar() < 100) && animState.name != "c_win") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('c_win');
        }
        if (game.bar() < 110 && game.bar() > 100 && animState.name != "Animation_5_badSpeed") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('Animation_5_badSpeed');
        }
        if (game.bar() == 110 && animState.name != "Animation_1_nomalSpeed") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('Animation_1_nomalSpeed');
        }
        if (game.bar() > 110 && game.bar() < 120 && animState.name != "Animation_2_goodSpeed") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('Animation_2_goodSpeed');
        }
        if (game.bar() > 120 && game.bar() < 130 && animState.name != "Animation_3_perfectSpeed") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('Animation_3_perfectSpeed');
        }
        if (game.bar() > 130 && animState.name != "Animation_4_comboSpeed") {
            this.animationComponent.stop();
            this.changeOpcity();
            animState = this.animationComponent.play('Animation_4_comboSpeed');
        }
    }

});