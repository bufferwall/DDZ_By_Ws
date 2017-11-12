//网络组件
let NetworkComponent = cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad: function () {
        NetTarget.on('net', this.getNetData.bind(this));
        NetTarget.on('netstart', this.netStart.bind(this));
        NetTarget.on('netclose', this.netClose.bind(this));
    },
    onDestroy: function () {
        cc.log('destroy');
        NetTarget.off('net', this.getNetData.bind(this));
        NetTarget.off('netstart', this.netStart.bind(this));
        NetTarget.off('netclose', this.netClose.bind(this));
    },
    /**
     * 获取服务端数据
     */
    getNetData: function (event) {
        let data = event.detail;
        let str = "接受数据：" + JSON.stringify(data);
        cc.log(str);
    },
    /**
     * 网络连接开始
     */
    netStart: function (event) {
        cc.log("net start");
    },
    /**
     * 网络断开
     */
    netClose: function (event) {
        cc.log("net close");
    },
});
