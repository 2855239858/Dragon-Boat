cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        
    },

    showAlertText: function () {
        Alert.show();
    },

    showAlertCallBack: function () {
        Alert.show("这里是游戏玩法", function(){
            cc.log("确定按钮被点击");
        });
    },

    showAlertOnlayEnter: function () {
        Alert.show("这里是游戏玩法", null, false);
    },

    showAlertAnimSpeed: function () {
        Alert.show("这里是游戏玩法", null, null, 0.1);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
