// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        //pick:0

        //速度
        moveSpeed: 0,
        //持续时间
        moveDuration: 0,
    },

    //右移函数
    moveAction: function () {
        cc.moveBy(this.moveDuration, cc.v2(500, 0));
    },

    //销毁和重生
    deadANDlife: function () {
        this.game2.spanNewStar();
        this.node.destroy();
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {

    },

    start() {

    },

    // update (dt) {},
    update: function (dt) {
        this.node.x += this.moveSpeed * dt;
        //x值超过某个值是销毁并且重生一个新的节点
        if (this.node.x >= this.moveDuration) {
            this.deadANDlife();
        }
        //this.setInputControl();
        this.game2.Button_onClick();
        if (this.game2.accLeft == true && this.node.x > 0) {
            this.game2.accLeft = false;
            this.deadANDlife();
            this.game2.gainScore();
        } else if (this.game2.accRight == true) {
            this.game2.accRight = false;
            //    //this.deadANDlife();
        }
    },
});