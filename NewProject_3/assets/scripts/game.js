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
        npcPrefab: {
            default: null,
            type: cc.Prefab
        },
        INITY: 0,
    },

    start() {

    },

    onLoad: function () {
        this.createNpc();
    },
    //创建玩家和AI
    createNpc: function () {
        this.INITY = -25;
        var player1 = cc.instantiate(this.playerPrefab);
        this.node.addChild(player1);
        player1.setPosition(cc.v2(-337, this.INITY));
        this.INITY -= INTERVAL;
        for (let i = 0; i < 3; i++) {
            NPC[i] = cc.instantiate(this.npcPrefab);
            this.node.addChild(NPC[i]);
            NPC[i].setPosition(cc.v2(-337, this.INITY));
            this.INITY -= INTERVAL;
        }
    },
});