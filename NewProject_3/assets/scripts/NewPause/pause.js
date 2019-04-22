cc.Class({
    extends: cc.Component,

    properties: {
        pauseButton:cc.Node,
    },

    start () {

    },

    gamePause(){
        cc.director.pause();
        this.pauseButton.active = true;
    },

    gameResume(){
        cc.director.resume();
        this.pauseButton.active = false;
    }

    // update (dt) {},
});
