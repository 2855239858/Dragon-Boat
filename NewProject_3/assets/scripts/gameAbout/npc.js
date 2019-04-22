const ENDLINE = 500;
const SPEEDTEMP = 100;

cc.Class({
    extends: cc.Component,

    properties: {
        drumer: cc.Node,
        xSpeed: 0,
        randomSpeed: 0,
    },

    start() {
        var a = this.npcJudge();
        switch(a){
            case 1:
            this.randomSpeed = this.randomFrom(60,80);
            break;
            case 2:
            this.randomSpeed = this.randomFrom(100,120);
            break;
            case 3:
            this.randomSpeed = this.randomFrom(150,170);
            break;
        }

    },

    onLoad: function () {
    },

    // onLoad: function () {
    //     var a = this.node.getPosition();
    //     cc.log(a.y);
    //     var npcMove = cc.moveTo(this.randomFrom(4,7), cc.v2(ENDLINE, a.y));
    //     this.node.runAction(npcMove);
    // },

    npcJudge() {
        if (this.node.name == 'npc1') {
            console.log('this is npc1');
            return 1;
        } else if (this.node.name == 'npc2') {
            console.log('this is npc2');
            return 2;
        } else if (this.node.name == 'npc3') {
            console.log("this is npc3");
            return 3;
        }else{
            console.log('Wrong');
        }
    },

    randomFrom(lowerValue, upperValue) {
        return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    },

    update: function (dt) {
        if (this.node.x < ENDLINE) {
            this.xSpeed = this.randomSpeed;
        } else {
            this.xSpeed = 0
        }
        this.node.x += this.xSpeed * dt;
    }

});