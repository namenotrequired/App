module.exports = {
    knots: function knots (meterPerSecond) {
        return Math.floor(meterPerSecond / 0.51) + ' knots';
    }
};
