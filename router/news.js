const express = require('express')
const multer = require('multer')
const md5 = require('md5')
const path = require('path')

const router = express.Router()

const { AddNews} = require('../controllers/news')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename : function (req, file, cb) {
      //cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`) ;
      cb(null,file.fieldname + '-'+ Date.now())
    }
  }) ;
 
  const upload = multer({storage: storage})


router.post('/add', upload.single('image') , AddNews) ;
//router.delete('/:id',deleteFile)

module.exports = router ;
