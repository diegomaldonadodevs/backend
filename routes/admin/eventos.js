var express = require('express');
var router = express.Router();
var eventosModel = require('../../models/eventosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* listar eventos */
router.get('/', async function (req, res, next) {
  var eventos = await eventosModel.getEventos();
  eventos = eventos.map(evento => {
    if (evento.img_id) {
      const imagen = cloudinary.image(evento.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...evento,
        imagen
      }
    } else {
      return {
        ...evento,
        imagen: ''
      }
    }
  });

  res.render('admin/eventos', {
    layout: 'admin/layout',
    usuario: req.session.nombre,
    eventos
  });
});

/*formulario para agregar*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.fecha != "" && req.body.hora != ""
      && req.body.lugar != "" && req.body.cuerpo != "") {
      await eventosModel.insertEvento({
        ...req.body,
        img_id
      });
      res.redirect('/admin/eventos')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos!'
      });
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    });
  };
});

// para eliminar evento
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  let evento = await eventosModel.getEventoById(id);
  if (evento.img_id) {
    await (destroy(evento.img_id));
  }
  await eventosModel.deleteEventoById(id);
  res.redirect('/admin/eventos');
});

//formulario para cargarlos datos para modificar
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var evento = await eventosModel.getEventoById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    evento
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      fecha: req.body.fecha,
      hora: req.body.hora,
      lugar: req.body.lugar,
      cuerpo: req.body.cuerpo,
      img_id
    }
    await eventosModel.modificarById(obj, req.body.id);
    res.redirect('/admin/eventos');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el evento'
    });
  };
});

module.exports = router;