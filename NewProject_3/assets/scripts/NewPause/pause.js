cc.Class({
    extends: cc.Component,

    properties: {
        pauseButton:cc.Node,
    },

    start () {

    },

    gameStart(){
        cc.director.loadScene('game');
    },

    gamePause(){
        cc.director.pause();
        this.pauseButton.active = true;
    },

    gameResume(){
        cc.director.resume();
        this.pauseButton.active = false;
    },

    gameRestart(){
        cc.director.pause();
        cc.director.loadScene('game');
        cc.director.resume();
    },

    gameBack(){
        cc.director.loadScene('menu');
        cc.director.resume();
    }

    // update (dt) {},
});
