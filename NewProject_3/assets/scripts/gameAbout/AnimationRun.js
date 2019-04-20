const ENDLINE = 4200;
var game = require("game2");

var AnimationRun = cc.Class({
    extends: game,
    extends: cc.Component,

    properties: {
        animationComponent: null,
    },

    start() {
    },

    onLoad: function () {
        this.animationComponent = this.getComponent(cc.Animation);
        if (game.xSpeed > 70)
            this.animationComponent.play('Animation_4_comboSpeed');
        else
            this.animationComponent.play('Animation_1_nomalSpeed');
    },

    aniStop: function () {
        this.animationComponent.stop('Animation_1_nomalSpeed');
    },

    update(dt) {

    }

});