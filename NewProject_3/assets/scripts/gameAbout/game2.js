const ENDLINE = 500;
const SPEEDTEMP = 100;
const NPC = new Array();
const INTERVAL = 80;
var speed = 60;
var arr = new Array(10);
var time, timer;
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
        shuang_mianPrefab: {
            default: null,
            type: cc.Prefab,
        },
        shuang_cePrefab: {
            default: null,
            type: cc.Prefab,
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
        mianButton1: {
            default: null,
            type: cc.Button,
        },
        ceButton1: {
            default: null,
            type: cc.Button,
        },
        mianButton2: {
            default: null,
            type: cc.Button,
        },
        ceButton2: {
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

        this.time = 0;
        this.timer = 59;
        this.arr = [0.1, 1.1, 2.1, 3.1, 0.1, 1.1, 2.1, 3.1, 0.1, 1.1];
        this.spanNewStar(this.arr[9]);
        this.putarr();

        this.accLeft1 = false;
        this.accRight1 = false;
        this.accLeft2 = false;
        this.accRight2 = false;

        var self = this;
        this.xSpeed = 60;
        speed = this.xSpeed;
    },
    spanNewStar: function (randNum) {
        //生成新节点  左或者右
        var newStar;
        //var randNum = (Math.random() * 100) % 4;
        if (randNum >= 0 && randNum < 1) {
            newStar = cc.instantiate(this.mianPrefab);
            newStar.getComponent('mian').game2 = this;
        } else if(randNum >= 1 && randNum < 2) {
            newStar = cc.instantiate(this.cePrefab);
            newStar.getComponent('ce').game2 = this;
        } else if (randNum >= 2 && randNum < 3) {
            newStar = cc.instantiate(this.shuang_mianPrefab);
            newStar.getComponent('shuang_mian').game2 = this;
        } else if (randNum >= 3 && randNum < 4) {
            newStar = cc.instantiate(this.shuang_cePrefab);
            newStar.getComponent('shuang_ce').game2 = this;
        }
        //像场景中添加新节点
        this.node.addChild(newStar);
        //赋予新节点位置
        newStar.setPosition(cc.v2(-450, 250));
    },
    putarr: function () {
        for (var j = 9; j >= 1; j--) { this.arr[j] = this.arr[j - 1]; }
    },
    //随机位置函数
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
            this.timer += 1;
        } else {
            this.comboDisplay.string = 'combo:' + this.combo.toString();
            this.timer -= 1;
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
        self.mianButton1.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accLeft1 = true;
        });
        self.mianButton1.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accLeft1 = false;
        });
        self.ceButton1.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accRight1 = true;
        });
        self.ceButton1.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accRight1 = false;
        });
        self.mianButton2.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accLeft2 = true;
        });
        self.mianButton2.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accLeft2 = false;
        });
        self.ceButton2.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.accRight2 = true;
        });
        self.ceButton2.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.accRight2 = false;
        });
    },

    start() {
        // var self = this;
        // this.spanNewStar();
        // this.xSpeed = 60;
        // speed = this.xSpeed;
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
            cc.director.loadScene('countScore');
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

        //按时间生成prefab
        if (this.time == this.timer) {
            this.spanNewStar(this.arr[9]);
            this.putarr();
        }
        this.time += 1;
        this.time = this.time % 70;
        this.timer = this.timer % 70;
    },

});
module.exports.bar = function () {
    return speed;
};