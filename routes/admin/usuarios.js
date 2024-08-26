var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

router.get('/', function (req, res, next) {
    res.render('admin/usuarios', {
        layout: 'admin/layout'
    });
});

router.get('/alta', function (req, res, next) {
    res.render('admin/usuarios', {
        layout: 'admin/layout'
    });
});

router.post('/alta', async (req, res, next) => {
    try {
        if (req.body.usuario != "" && req.body.password != "") {
            await usuariosModel.insertUsuario(req.body);
            res.redirect('/admin/login')
        } else {
            res.render('admin/usuarios', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos!'
            });
        }
    } catch (error) {
        console.log(error)
        res.render('admin/usuarios', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        });
    };
});

module.exports = router;