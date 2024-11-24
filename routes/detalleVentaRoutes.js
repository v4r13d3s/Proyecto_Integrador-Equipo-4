/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleVenta:
 *       type: object
 *       required:
 *         - folio
 *         - idProducto
 *         - cantidad
 *         - total
 *       properties:
 *         folio:
 *           type: integer
 *           example: 1
 *         idProducto:
 *           type: integer
 *           example: 2
 *         cantidad:
 *           type: integer
 *           example: 5
 *         total:
 *           type: number
 *           format: float
 *           example: 100.50
 *
 * /detalleventas:
 *   get:
 *     summary: Obtener todos los detalles de ventas
 *     tags: [Detalles Ventas]
 *     responses:
 *       200:
 *         description: Lista de detalles de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DetalleVenta'
 *       500:
 *         description: Error en la recuperación de detalles de ventas
 *
 *   post:
 *     summary: Crear un nuevo detalle de venta
 *     tags: [Detalles Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetalleVenta'
 *     responses:
 *       201:
 *         description: Detalle de venta creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       500:
 *         description: Error en la creación del detalle de venta
 *
 * /detalleventas/{folio}/{idProducto}:
 *   get:
 *     summary: Obtener un detalle de venta por folio y ID de producto
 *     tags: [Detalles Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio del detalle de venta
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idProducto
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de venta encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       404:
 *         description: Detalle de venta no encontrado
 *       500:
 *         description: Error en la recuperación del detalle de venta
 *
 *   put:
 *     summary: Actualizar un detalle de venta
 *     tags: [Detalles Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio del detalle de venta
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idProducto
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetalleVenta'
 *     responses:
 *       200:
 *         description: Detalle de venta actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       404:
 *         description: Detalle de venta no encontrado
 *       500:
 *         description: Error en la actualización del detalle de venta
 *
 *   delete:
 *     summary: Eliminar un detalle de venta
 *     tags: [Detalles Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio del detalle de venta
 *         schema:
 *           type: integer
 *       - in: path
 *         name: idProducto
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Detalle de venta eliminado
 *       404:
 *         description: Detalle de venta no encontrado
 *       500:
 *         description: Error en la eliminación del detalle de venta
 */



const express = require('express');
const router = express.Router();
const DetalleVentasController = require('../controllers/detalleVentasController');

router.get('/', DetalleVentasController.getAll);
router.get('/:folio/:idProducto', DetalleVentasController.getById);
router.post('/', DetalleVentasController.create);
router.put('/:folio/:idProducto', DetalleVentasController.update);
router.delete('/:folio/:idProducto', DetalleVentasController.delete);

module.exports = router;
