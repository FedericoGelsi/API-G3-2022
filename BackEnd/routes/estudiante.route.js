var express = require('express')
var router = express.Router()
var estudianteController = require('../controllers/estudiante.controller');
var UploadController = require('../controllers/upload.controller');
var MailController = require('../controllers/mail.controller');
var Authorization = require('../auth/authorization');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res) {
    res.send('Llegaste a la ruta de students');
  });
router.post('/registration', estudianteController.createStudent)
router.post('/login/', estudianteController.loginStudent)
router.get('/',Authorization, estudianteController.getStudent)
router.post('/userByMail', Authorization, estudianteController.getImagenStudentByMail)
router.put('/', Authorization, estudianteController.updatedStudent)
router.delete('/:id', Authorization, estudianteController.removeStudent)
router.post('/guardarImgUser',estudianteController.guardarImagenStudent)
router.post('/uploadImg',UploadController.uploadFilesImgUser);
router.post('/imgUserByMail',Authorization,estudianteController.getImagenStudentByMail)
router.post('/sendMail',MailController.sendEmail)



// Export the Router
module.exports = router;



