const express = require('express');
const categoriasRoutes = require('./routes/categoriasRoutes');
const detalleVentasRoutes = require('./routes/detalleVentaRoutes');
const empleadosRoutes = require('./routes/empleadosRoutes');
const metodosVentaRoutes = require('./routes/metodoVentaRoutes');
const pedidosDetalleRoutes = require('./routes/pedidoDetalleRoutes');
const pedidosRoutes = require('./routes/pedidoRoutes');
const productosRoutes = require('./routes/productosRoutes');
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const rolesRoutes = require('./routes/rolesRoutes'); 
const tiposPagoRoutes = require('./routes/tipoPagoRoutes'); 
const routes = require('./routes/usuarioRoutes');
const ventasRoutes = require('./routes/ventasRoutes'); 
const swaggerDocs = require('./config/swagger');
require('dotenv').config(); 

const app = express();
app.use(express.json());

// middlawere para Swagger
swaggerDocs(app);

// Rutas
app.use('/usuarios', routes);
app.use('/empleados', empleadosRoutes);
app.use('/ventas', ventasRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/detalle-ventas', detalleVentasRoutes);
app.use('/metodos-venta', metodosVentaRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/detalle-pedidos', pedidosDetalleRoutes);
app.use('/productos', productosRoutes);
app.use('/proveedores', proveedoresRoutes);
app.use('/roles', rolesRoutes);
app.use('/tipos-pago', tiposPagoRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });

