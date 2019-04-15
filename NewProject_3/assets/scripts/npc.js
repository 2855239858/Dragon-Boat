const ENDLINE = 500;
const SPEEDTEMP = 100;

cc.Class({
    extends: cc.Component,

    properties: {
        drumer: cc.Node,
        xSpeed:0,
        randomSpeed:0,
    },

    start() {
        
    },

    onLoad: function(){
        this.randomSpeed = this.randomFrom(50,150);
    },

    // onLoad: function () {
    //     var a = this.node.getPosition();
    //     cc.log(a.y);
    //     var npcMove = cc.moveTo(this.randomFrom(4,7), cc.v2(ENDLINE, a.y));
    //     this.node.runAction(npcMove);
    // },

    randomFrom(lowerValue, upperValue) {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    },

    update: function (dt) {
        if (this.node.x < ENDLINE) {
            this.xSpeed = this.randomSpeed;
        }else{
            this.xSpeed = 0
        }
        this.node.x += this.xSpeed * dt;
    }

});