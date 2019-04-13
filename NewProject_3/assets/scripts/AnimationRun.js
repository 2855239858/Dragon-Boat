cc.Class({
    extends: cc.Component,

    properties: {},

    start() {

    },

    onLoad: function () {
        var animationComponent = this.getComponent(cc.Animation);
        animationComponent.play('Animation_1_nomalSpeed');
        //animationComponent.play('Animation_6_lefthandHIThead');
    },

    aniStop: function () {
        var animationComponent = this.getComponent(cc.Animation);
        animationComponent.stop('Ani1');
    },

});