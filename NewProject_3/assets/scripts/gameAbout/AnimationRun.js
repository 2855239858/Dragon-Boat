const ENDLINE = 4200;

cc.Class({
    extends: cc.Component,

    properties: {
        animationComponent: null,
    },

    start() {

    },

    onLoad: function () {
        this.animationComponent = this.getComponent(cc.Animation);
        this.animationComponent.play('Animation_1_nomalSpeed');
        //animationComponent.play('Animation_6_lefthandHIThead');
    },

    aniStop: function () {
        this.animationComponent.stop('Animation_1_nomalSpeed');
    },

    update(dt) {
        if (this.node.parent.x > ENDLINE-50) {
            //this.aniStop();
            this.animationComponent.playAdditive('c_win');
        }
    }

});