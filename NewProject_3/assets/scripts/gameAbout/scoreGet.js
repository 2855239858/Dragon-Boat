cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel:cc.Label,
    },

    start () {

    },

    update() {
        var scor = cc.sys.localStorage.getItem("sco");
        this.scoreLabel.string = "分数为：" + scor;
    },
});
