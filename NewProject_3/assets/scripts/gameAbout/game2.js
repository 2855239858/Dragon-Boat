const ENDLINE = 4200;
const SPEEDTEMP = 100;
const NPC = new Array();
const INTERVAL = 80;
var speed = 60;
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

        playerPrefab: {
            default: null,
            type: cc.Prefab
        },
        npcPrefab1: {
            default: null,
            type: cc.Prefab
        },
        npcPrefab2: {
            default: null,
            type: cc.Prefab
        },
        npcPrefab3: {
            default: null,
            type: cc.Prefab
        },
        INITY: 0,
        mainCamera: {
            default: null,
            type: cc.Node
        },
        player1: null,
        xSpeed: 60,
        goodSpeed: 70,
        perfectSpeed: 80,
        badSpeed: 50,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.createNpc();
        var self = this;
        this.score = 0;
        this.combo = 0;
        this.spanNewStar();
        this.accLeft == false;
        this.accRight == false;
    },
    spanNewStar: function () {
        //
        var head = 0,
            rail = 0;
        var arr = {};
        //�����½ڵ�  �������
        var newStar;
        var randNum = (Math.random() * 100) % 6;
        if (randNum < 3) {
            newStar = cc.instantiate(this.mianPrefab);
            newStar.getComponent('mian').game2 = this;
        } else {
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
        this.scoreDisplay.string = 'score: ' + this.score.toString();
    },
    gainCombo: function (i) {
        this.combo += 1;
        if (i == 0) {
            this.combo = 0;
            this.comboDisplay.string = 'combo:' + this.combo.toString();
        } else {
            this.comboDisplay.string = 'combo:' + this.combo.toString();
        }
    },
    dis_g_or_b: function (i) {
        if (i >= 0 && i < 1) {
            this.good_or_badDisplay.string = 'BAD';
            return 1;
        } else if (i >= 1 && i < 2) {
            this.good_or_badDisplay.string = 'GOOD';
            return 2;
        } else if (i >= 2 && i < 3) {
            this.good_or_badDisplay.string = 'PREFECT';
            return 3;
        }
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
        this.xSpeed = 60;
        speed = this.xSpeed;
    },

    createNpc: function () {
        this.INITY = -25;
        this.player1 = cc.instantiate(this.playerPrefab);
        this.node.parent.addChild(this.player1);
        this.player1.setPosition(cc.v2(-337, this.INITY));
        this.INITY -= INTERVAL;
        for (let i = 0; i < 3; i++) {
            switch (i) {
                case 0:
                    NPC[0] = cc.instantiate(this.npcPrefab1);
                    break;
                case 1:
                    NPC[1] = cc.instantiate(this.npcPrefab2);
                    break;
                case 2:
                    NPC[2] = cc.instantiate(this.npcPrefab3);
                    break;
            }
            this.node.parent.addChild(NPC[i]);
            NPC[i].setPosition(cc.v2(-337, this.INITY));
            this.INITY -= INTERVAL;
        }
    },

    update: function (dt) {
        if (this.player1.x >= ENDLINE) {
            this.xSpeed = 0;
        }

        if (this.xSpeed > 60)
            this.xSpeed -= 0.2;
        if (this.xSpeed < 60)
            this.xSpeed += 0.2;
        if (this.xSpeed < 62 && this.xSpeed > 58)
            this.xSpeed = 60;
        speed = this.xSpeed;
        this.player1.x += this.xSpeed*dt;
        this.mainCamera.x = this.player1.x;
    },

});
module.exports.bar = function () {
    return speed;
};