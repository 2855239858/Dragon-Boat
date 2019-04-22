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

        //�ٶ�
        moveSpeed: 0,
        //����ʱ��
        moveDuration: 0,
    },

    //���ƺ���
    moveAction: function () {
        cc.moveBy(this.moveDuration, cc.v2(500, 0));
    },

    //���ٺ�����
    deadANDlife: function () {
        //this.game2.spanNewStar();
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
        //xֵ����ĳ��ֵ�����ٲ�������һ���µĽڵ�
        if (this.node.x >= this.moveDuration) {
            this.game2.gainCombo(0);
            this.deadANDlife();
        }
        //this.setInputControl();
        this.game2.Button_onClick();
        if ((this.game2.accRight1 == true && this.node.x > 0) || (this.game2.accRight2 == true && this.node.x > 0)) {
            this.game2.accRight1 = false; this.game2.accRight2 = false;
            this.deadANDlife();
            var a = this.game2.dis_g_or_b((this.node.x) / 100);
            switch (a) {
                case 1:
                    if (this.game2.xSpeed > 0)
                    this.game2.xSpeed = 0;
                    break;
                case 2:
                    if (this.game2.xSpeed < 100)
                    this.game2.xSpeed = 100;
                    break;
                case 3:
                    if (this.game2.xSpeed < 200)
                    this.game2.xSpeed = 200;
                    break;
            }
            this.game2.gainScore();
            this.game2.gainCombo(1);
        } else if ((this.game2.accLeft1 == true && this.node.x > 0) || (this.game2.accLeft2 == true && this.node.x > 0)) {
            this.game2.gainCombo(0);
        }
    },
});