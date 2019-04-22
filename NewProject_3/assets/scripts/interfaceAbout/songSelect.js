cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start () {

    },

    song1Play(){
        //1.播放对应音乐
        cc.director.loadScene('game');
        cc.director.resume();
    }

    // update (dt) {},
});
