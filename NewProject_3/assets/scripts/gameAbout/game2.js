cc.Class({
    extends: cc.Component,

    properties: {
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
        comboDisplay: {
            default: null,
            type: cc.Label
        },
        good_or_badDisplay: {
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
        this.combo = 0;
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
    gainCombo: function (i) {
        this.combo += 1;
        if (i == 0) {
            this.combo = 0;
            this.comboDisplay.string = 'combo:' + this.combo.toString();
        }
        else { this.comboDisplay.string = 'combo:' + this.combo.toString(); }
    },
    dis_g_or_b: function (i) {
        if (i >= 0 && i < 1){this.good_or_badDisplay.string = 'BAD';}
        else if (i >= 1 && i < 2) { this.good_or_badDisplay.string = 'GOOD';}
        else if (i >= 2 && i < 3) { this.good_or_badDisplay.string = 'PREFECT';}  
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
