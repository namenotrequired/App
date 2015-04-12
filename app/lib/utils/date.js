module.exports = {
    getCurrentTime: function getCurrentTime () {
        var today = new Date(),
            h = today.getHours(),
            m = today.getMinutes(),
            s = today.getSeconds();

        s = s < 10 ? '0' + s : s;
        m = m < 10 ? '0' + m : m;

        return h + ':' + m + ':' + s;
    }
};
