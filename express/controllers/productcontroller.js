const productcontroller = {
//mostrar todos los productos
index: function (req, res){
    res.send('Lista de nuestros productos')
},
//muestra los productos
show: function(req, res){
res.send('Detalle del producto' + req.params.idProducto)

},
//Borra los productos
delete: function(req, res){
    res.send()



}


}


module.exports = productcontroller