var express = require('express');
var multer  = require('multer');
var router = express.Router();
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads/');
    },
    filename: function(req, file, cb){
        var name=new Date().getTime();
        var str=file.originalname;
        cb(null, str);
    }
});
var upload = multer({storage: storage});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/upload', upload.single('avatar'), function(req, res, next) {
    console.log(req.body);
    res.json({file: req.file});
    // console.log(req.file);
    // console.log(req.text);
   // res.render('index', { title: 'Express' });
});
module.exports = router;
