const ENDLINE = 500;
const SPEEDTEMP = 100;
const NPC = new Array();
const INTERVAL = 80;

cc.Class({
    extends: cc.Component,

    properties: {
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
        xSpeed: 0,
    },

    start() {

    },

    onLoad: function () {
        this.createNpc();
    },
    
    //创建玩家和AI
    createNpc: function () {
        this.INITY = -25;
        this.player1 = cc.instantiate(this.playerPrefab);
        this.node.addChild(this.player1);
        this.player1.setPosition(cc.v2(-337, this.INITY));
        this.INITY -= INTERVAL;
        for (let i = 0; i < 3; i++) {
            switch(i){
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
            this.node.addChild(NPC[i]);
            NPC[i].setPosition(cc.v2(-337, this.INITY));
            this.INITY -= INTERVAL;
        }
    },

    speedUp(){
        this.xSpeed += 100;
    },

    update: function (dt) {
        if (this.player1.x < ENDLINE) {
            this.xSpeed = 100;
            // switch(i){
            //     case 0://基准速度
            //     xSpeed = 100;
            //     break;
            //     case 1://good速度
            //     xSpeed = 120
            //     break;
            //     case 2://bad速度
            //     xSpeed = 70
            //     break;
            //     case 3://perfect速度
            //     xSpeed = 150
            //     break;
            //     case 4://combo速度
            //     xSpeed = 170
            //     break;
            // }
        } else {
            this.xSpeed = 0;
        }
        this.player1.x += this.xSpeed * dt;
        this.mainCamera.x = this.player1.x;
    }



});