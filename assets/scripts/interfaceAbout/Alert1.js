var Alert1 = {
    _alert: null,           // prefab
    _detailLabel:   null,   // 内容
    _cancelButton:  null,   // 确定按钮
    _enterButton:   null,   // 取消按钮
    _enterCallBack: null,   // 回调事件
    _animSpeed:     0.3,    // 动画速度
};

/**
 * detailString :   内容 string 类型.
 * enterCallBack:   确定点击事件回调  function 类型.
 * neeCancel:       是否展示取消按钮 bool 类型 default YES.
 * duration:        动画速度 default = 0.3.
*/
Alert1.show = function (detailString, enterCallBack, needCancel, animSpeed) {

    // 引用
    var self = this;

    // 判断
    if (Alert1._alert != undefined) return;

    // 
    Alert1._animSpeed = animSpeed ? animSpeed : Alert1._animSpeed;

    // 加载 prefab 创建
    cc.loader.loadRes("Blert", cc.Prefab, function (error, prefab) {

        if (error) {
            cc.error(error);
            return;
        }

        // 实例 
        var alert = cc.instantiate(prefab);

        // Alert 持有
        Alert1._alert = alert;

        // 动画 
        var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
        var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
        self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(Alert1._animSpeed, 255), cc.scaleTo(Alert1._animSpeed, 1.0)), cbFadeIn);
        self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(Alert1._animSpeed, 0), cc.scaleTo(Alert1._animSpeed, 2.0)), cbFadeOut);

        // 获取子节点
        Alert1._detailLabel = cc.find("alertBackground/detailLabel", alert).getComponent(cc.Label);
        Alert1._cancelButton = cc.find("alertBackground/cancelButton", alert);
        Alert1._enterButton = cc.find("alertBackground/enterButton", alert);

        // 添加点击事件
        Alert1._enterButton.on('click', self.onButtonClicked, self);
        Alert1._cancelButton.on('click', self.onButtonClicked, self);

        // 父视图
        Alert1._alert.parent = cc.find("Canvas");

        // 展现 alert
        self.startFadeIn();

        // 参数
        self.configAlert(detailString, enterCallBack, needCancel, animSpeed);
        
    });

    // 参数
    self.configAlert = function (detailString, enterCallBack, needCancel, animSpeed) {

        // 回调
        Alert1._enterCallBack = enterCallBack;

        // 内容
        Alert1._detailLabel.string = detailString;
        // 是否需要取消按钮
        if (needCancel || needCancel == undefined) { // 显示
            Alert1._cancelButton.active = true;
        } else {  // 隐藏
            Alert1._cancelButton.active = false;
            Alert1._enterButton.x = 0;
        }
    };

    // 执行弹进动画
    self.startFadeIn = function () {
        cc.eventManager.pauseTarget(Alert1._alert, true);
        Alert1._alert.position = cc.p(0, 0);
        Alert1._alert.setScale(2);
        Alert1._alert.opacity = 0;
        Alert1._alert.runAction(self.actionFadeIn);
    };

    // 执行弹出动画
    self.startFadeOut = function () {
        cc.eventManager.pauseTarget(Alert1._alert, true);
        Alert1._alert.runAction(self.actionFadeOut);
    };

    // 弹进动画完成回调
    self.onFadeInFinish = function () {
        cc.eventManager.resumeTarget(Alert1._alert, true);
    };

    // 弹出动画完成回调
    self.onFadeOutFinish = function () {
        self.onDestory();
    };

    // 按钮点击事件
    self.onButtonClicked = function(event){
        if(event.target.name == "enterButton"){
            if(self._enterCallBack){
                self._enterCallBack();
            }
        }
        self.startFadeOut();
    };

    // 销毁 alert 
    self.onDestory = function () {
        Alert1._alert.destroy();
        Alert1._enterCallBack = null;
        Alert1._alert = null;
        Alert1._detailLabel = null;
        Alert1._cancelButton = null;
        Alert1._enterButton = null;
        Alert1._animSpeed = 0.3;
    };
};

//module.exports = Alert1.show;