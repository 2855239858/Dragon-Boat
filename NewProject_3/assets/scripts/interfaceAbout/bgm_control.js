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
        BGM: {
            default: null,
            type:cc.AudioClip,
        },
        BGM_button: {
            default: null,
            type: cc.Button,
        },
    },

    Button_onClick: function () {
        var self = this;
        self.BGM_button.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self.dd += 1;
            self.dd = self.dd % 2;
            cc.log(self.dd);
        });
        self.BGM_button.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            //cc.log('akhai');
        });
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.dd = 0;
        var qwe = cc.audioEngine.playMusic(this.BGM, false,1);
    },

    start() {
        this.Button_onClick();
        if (this.dd == 0) {
            cc.audioEngine.setMusicVolume(this.qwe,0);
        } else {
            cc.audioEngine.setMusicVolume(this.qwe,1);
        }
    },

    //update(dt) {},
});
