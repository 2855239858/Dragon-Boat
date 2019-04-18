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
        mianPrefab: {
            default: null,
            type: cc.Prefab
        },
        cePrefab: {
            default: null,
            type: cc.Prefab
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        mianButton: {
            default: null,
            type: cc.Button,
        },
        ceButton: {
            default: null,
            type: cc.Button,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        var self = this;
        this.score = 0;
        this.spanNewStar();
        this.accLeft == false;
        this.accRight == false;
    },
    spanNewStar: function () {
        //
        var head = 0, rail = 0;
        var arr = {};
        //�����½ڵ�  �������
        var newStar;
        var randNum = (Math.random() * 100) % 6;
        if (randNum < 3) {
            newStar = cc.instantiate(this.mianPrefab);
            newStar.getComponent('mian').game2 = this;
        }
        else {
            newStar = cc.instantiate(this.cePrefab);
            newStar.getComponent('ce').game2 = this;
        }
        //�񳡾�������½ڵ�
        this.node.addChild(newStar);
        //�����½ڵ�λ��
        newStar.setPosition(cc.v2(-450, 250));
    },
    //���λ�ú���
    getNewStarPosition: function () {
        var randX = 0;
        var randY = 0;
        randX = this.node.width / 5;
        randY = this.node.height / 5;
        return cc.v2(randX, randY);
    },
    gainScore: function () {
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score.toString();
    },

    Button_onClick: function () {
        var self = this;
        self.mianButton.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accLeft = true;
        });
        self.mianButton.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accLeft = false;
        });
        self.ceButton.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accRight = true;
        });
        self.ceButton.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accRight = false;
        });
    },

    start() {
        var self = this;
        this.spanNewStar();
    },

    //update (dt) {},
});
