// this calls the connection module for use
const connection = require("./connection");

// these are orm methods to be used in the model to view all burger, create a burger, update a burger, and delete a burger
const orm = {
    all: function(tableInput, cb) {
        const queryStr = `SELECT * FROM ${tableInput}`
        connection.query(queryStr, [tableInput], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        const queryStr = `INSERT INTO ${table} (${cols.toString()}) VALUES (?,?)`
        connection.query(queryStr, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        
        const queryStr = `UPDATE ${table} SET ${objColVals} WHERE ${condition}`
        connection.query(queryStr);
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(table, id, cb) {
        const queryStr = `DELETE FROM ${table} WHERE id = ?`
        
        connection.query(queryStr, id, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;