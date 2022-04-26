module.exports = {
    obtener : (conexion,funcion)=>{
        conexion.query('SELECT * FROM empleados', funcion)
    },
    insertar : (conexion, datos, funcion)=>{
        conexion.query('INSERT INTO empleados (legajo,apellido,nombre,dni,sector,fechaIngreso,activo) VALUES (?,?,?,?,?,?,?)', [datos.legajo, datos.apellido, datos.nombre, datos.dni, datos.sector, datos.fechaIngreso, datos.activo], funcion)
    },
    retornaDatos : (conexion, legajo, funcion)=>{
        conexion.query('SELECT * FROM empleados WHERE legajo=?', [legajo], funcion)
    },
    borrar : (conexion, legajo, funcion)=>{
        conexion.query('DELETE FROM empleados WHERE legajo=?', [legajo], funcion)
    },
    actualizar : (conexion, datos, funcion)=>{
        conexion.query('UPDATE empleados SET apellido=?, nombre=?, dni=?, sector=?, fechaIngreso=?, activo=? WHERE legajo=?', [datos.apellido, datos.nombre, datos.dni, datos.sector, datos.fechaIngreso, datos.activo, datos.legajo], funcion)
    }
}