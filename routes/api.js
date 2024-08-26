var express = require('express');
var router = express.Router();
var eventosModel = require('./../models/eventosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/eventos', async function (req, res, next) {
    let eventos = await eventosModel.getEventos();

    eventos = eventos.map(eventos => {
        if (eventos.img_id) {
            const imagen = cloudinary.url(eventos.img_id, {
                width: 600,
                height: 400,
                crop: 'fit'
            });
            return {
                ...eventos,
                imagen
            }
        } else {
            return {
                ...eventos,
                imagen: ''
            }
        }
    });

    res.json(eventos);
    
});

router.post('/contacto', async (req, res) => {
    const mail = {
        subject: 'Contacto Web',
        to: 'misogi.aikikai.arg@gmail.com',
        html: `${req.body.nombre} ${req.body.apellido} se contacto a traves de la web
        y quiere más información a este correo ${req.body.email} <br> Además, hizo el siguiente comentario
        ${req.body.consulta} <br> Su teléfono es ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;
