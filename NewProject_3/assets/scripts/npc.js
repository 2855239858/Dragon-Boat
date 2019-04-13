const ENDLINE = 500;
const SPEEDTEMP = 100;

cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {

    },

    onLoad: function () {
        var a=this.node.getPosition();
        cc.log(a.y);
        var npcMove = cc.moveTo(ENDLINE / SPEEDTEMP, cc.v2(ENDLINE, a.y));
        this.node.runAction(npcMove);
    }


});
