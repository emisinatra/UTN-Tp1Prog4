var mysql = require("mysql")
var con = mysql.createConnection({
    host: 'localhost',
    user:  'admin',
    password: '',
    database: 'tpnode'
})
con.connect(
    (err)=>{
        if(!err){
            console.log('Conexión establecida')
        }else{
            console.log('Error de conexión')
        }
    }
)
module.exports = con