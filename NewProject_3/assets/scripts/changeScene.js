cc.Class({
    extends: cc.Component,

    properties: {
        scene1:"start",
        scene2:"game",
    },

    start () {

    },

    changeScene1:function(){
        cc.director.loadScene(this.scene1);
    },

    changeScene2:function(){
        cc.director.loadScene(this.scene2);
    },
});
