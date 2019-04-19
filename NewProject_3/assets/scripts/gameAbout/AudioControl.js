cc.Class({
    extends: cc.Component,

    properties: {
        buttonleft: cc.Button,
        buttonright: cc.Button,
        Audio1: cc.AudioSource,
        Audio2: cc.AudioSource,
        Audio3: cc.AudioSource,
        Audio4: cc.AudioSource,
        Audio5: cc.AudioSource,
        Audio_1: cc.AudioSource,
        Audio_2: cc.AudioSource,
        Audio_3: cc.AudioSource,
        Audio_4: cc.AudioSource,
        Audio_5: cc.AudioSource,
    },

    onLoad: function () {
        this.buttonleft.node.on('click', this.callback1, this);
        this.buttonright.node.on('click', this.callback2, this);
    },

    callback1: function (button) {
        if (this.Audio1.isPlaying == false)
            this.Audio1.play();
        else if (this.Audio2.isPlaying == false)
            this.Audio2.play();
        else if (this.Audio3.isPlaying == false)
            this.Audio3.play();
        else if (this.Audio4.isPlaying == false)
            this.Audio4.play();
        else if (this.Audio5.isPlaying == false)
            this.Audio5.play();
    },
    callback2: function (button) {
        if (this.Audio_1.isPlaying == false)
            this.Audio_1.play();
        else if (this.Audio_2.isPlaying == false)
            this.Audio_2.play();
        else if (this.Audio_3.isPlaying == false)
            this.Audio_3.play();
        else if (this.Audio_4.isPlaying == false)
            this.Audio_4.play();
        else if (this.Audio_5.isPlaying == false)
            this.Audio_5.play();
    },
});
