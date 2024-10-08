var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    };
};

//insertar evento CREATE
async function insertUsuario(obj) {
    try {
        var query = 'INSERT INTO usuarios (usuario, password) VALUES (?, MD5(?))';
        var rows = await pool.query(query, [obj.usuario, obj.password]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    };
};

module.exports = { getUserByUsernameAndPassword, insertUsuario };