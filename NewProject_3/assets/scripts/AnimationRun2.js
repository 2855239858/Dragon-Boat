const ENDLINE = 500;

cc.Class({
    extends: cc.Component,

    properties: {
        animationComponent: null,
    },

    start() {

    },

    onLoad: function () {
        this.animationComponent = this.getComponent(cc.Animation);
        this.animationComponent.play('Animation_6_lefthandHIThead');
    },

    aniStop: function () {
        this.animationComponent.stop('Animation_6_lefthandHIThead');
    },

    Celebreate: function () {
        this.animationComponent.play('Animation_11_comboSpeed');
    },

    update(dt) {
        if (this.node.parent.x > ENDLINE) {
            this.aniStop();
            this.Celebreate();
        }
    }

});