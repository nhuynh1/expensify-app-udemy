const moment = require.requireActual('moment'); // can't do regular import

export default (timestamp = 0) => {
    return moment(timestamp);
}