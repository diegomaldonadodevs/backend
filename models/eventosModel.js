var pool = require('./bd');

//listar eventos READ
async function getEventos() {
    var query = 'select * from eventos order by id desc';
    var rows = await pool.query(query);
    return rows;
};

//insertar evento CREATE
async function insertEvento(obj) {
    try {
        var query = 'insert into eventos set ?';
        var rows = await pool.query(query, [obj])
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    };
};

//borrar evento DELETE
async function deleteEventoById(id) {
    var query = 'delete from eventos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
};

//mostrar evento por id
async function getEventoById(id) {
    var query = 'select * from eventos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
};

//modificar evento por id UPDATE
async function modificarById(obj, id) {
    try {
        var query = 'update eventos set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    };
};

module.exports = { getEventos, insertEvento, deleteEventoById, getEventoById, modificarById };