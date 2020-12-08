const orm = require("../config/orm");

const burger = {
    // this sets the table to burgers for the orm methods when they are called
    all: function(cb) {
        orm.all("burgers", res => {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },
    delete: function(id, cb) {
        orm.delete("burgers", id, cb, res => {
            cb(res);
        });
    }
}

module.exports = burger;