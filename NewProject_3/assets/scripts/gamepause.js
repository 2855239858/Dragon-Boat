cc.Class({
    extends: cc.Component,

    properties: {
        pausebg:cc.Node,
    },


    start () {

    },

    gamePause(){
        cc.director.pause();
        this.pausebg.active = true;
    },

    gameResume(){
        cc.director.resume();
        this.pausebg.active = false;
    }
});
