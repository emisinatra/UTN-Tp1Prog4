var con = require('../config/conexion')
var empleado = require('../models/empleado')

module.exports={
    index:function(req,res){
        empleado.obtener(con,(err,datos)=>{
            console.log(datos)
            res.render('empleados/index', { title: 'Aplicación', empleados:datos });
        })
    },
    crear:(req,res)=>{
        res.render('empleados/crear');
    },
    guardar:(req,res)=>{
        console.log(req.body);
        empleado.insertar(con,req.body,function (err) {
                res.redirect('/empleados')
            })
    },
    eliminar:(req,res)=>{
        console.log('Recepción de datos')
        console.log(req.params.legajo)
        empleado.borrar(con, req.params.legajo, function (err) {
                res.redirect('/empleados')
            })
    },
    editar:(req,res)=>{
        console.log(req.params.legajo)
        empleado.retornaDatos(con, req.params.legajo, (err,registros)=>{
            console.log(registros[0])
            res.render('empleados/editar', {empleado:registros[0]})
        })
    },
    actualizar:(req,res)=>{
        console.log(req.body)
        empleado.actualizar(con, req.body, (err)=>{

        })
        res.redirect('/empleados')
    }
}