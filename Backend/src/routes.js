const routes = require('express').Router()
const conexion = require('./app')
const multer = require('multer')
const id = require('uuid')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null,  id.v4() + '.' + file.originalname.split('.')[1])
        
       
    }
})

const upload = multer({ storage: storage })

routes.post('/fotos',upload.array("image",10), (req, res) =>{
    console.log("agregado")
    console.log(req.files)
   
    req.files.forEach((file) => {
        let sql = `insert into post(foto)
            values('${file.filename}')`

        conexion.query(sql,(err,rows,fields, result)=>{
            if(err) throw err
            else{
                res.json({status: 'post'})
            }
        })    
    })

    
  

})
routes.get('/fotos',(req,res,next)=>{
    var ar = []
    let sql = 'SELECT * from post'
    conexion.query(sql,(err,rows,fields)=>{
      if(err) throw err;
      else{
        for (let i = 0; i < rows.length; i++) {
            ar.push(rows[i].foto)
        }
        res.status(200).json(ar)
      }
    })
  
  })

module.exports = routes;