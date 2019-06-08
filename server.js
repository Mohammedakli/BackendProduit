var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
const fs = require("fs");
var path = require('path');

app.use(cors())
var cpt = 0;
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
     fs.exists(path.normalize(__dirname + '/upload'+ '/'+ path.parse(file.originalname).name + path.parse(file.originalname).ext), (exists) => {
        if(exists){
            cb(null, path.parse(file.originalname).name + '(1)' + path.parse(file.originalname).ext);
         }
         else{
            cb(null, file.originalname);
         }
      })
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.listen(8000, function() {

    console.log('App running on port 8000');

});

