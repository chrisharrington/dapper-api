var moment = require("moment");

var _store = {};

module.exports = {
    get: function(key) {
        var stored = _store[key];
        if (stored && new Date() > store.expiry)
            delete _store[key];
        return _store[key];
    },
    
    set: function(key, value, expiry) {
        _store[key] = { value: value, expiry: expiry };
    }
};