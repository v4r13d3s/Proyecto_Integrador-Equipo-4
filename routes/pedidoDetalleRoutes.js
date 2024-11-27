/**
 * @swagger
 * components:
 *   schemas:
 *     PedidoDetalle:
 *       type: object
 *       required:
 *         - idPedido
 *         - idProducto
 *         - cantidad
 *       properties:
 *         idPedido:
 *           type: integer
 *           example: 1
 *         idProducto:
 *           type: integer
 *           example: 2
 *         cantidad:
 *           type: integer
 *           example: 10
 *
 * /detalle-pedidos:
 *   get:
 *     summary: Obtener todos los detalles de pedidos
 *     tags: [Detalles de Pedidos]
 *     responses:
 *       200:
 *         description: Lista de detalles de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PedidoDetalle'
 *       500:
 *         description: Error en la recuperación de detalles de pedidos
 *
 *   post:
 *     summary: Crear un nuevo detalle de pedido
 *     tags: [Detalles de Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoDetalle'
 *     responses:
 *       201:
 *         description: Detalle de pedido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoDetalle'
 *       500:
 *         description: Error en la creación del detalle de pedido
 *
 * /detalle-pedidos/{idPedido}/{idProducto}:
 *   get:
 *     summary: Obtener un detalle de pedido por ID
 *     tags: [Detalles de Pedidos]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         required: true
 *         description: ID del pedido
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
 *         description: Detalle de pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoDetalle'
 *       404:
 *         description: Detalle de pedido no encontrado
 *       500:
 *         description: Error en la recuperación del detalle de pedido
 *
 *   put:
 *     summary: Actualizar un detalle de pedido
 *     tags: [Detalles de Pedidos]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         required: true
 *         description: ID del pedido
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
 *             $ref: '#/components/schemas/PedidoDetalle'
 *     responses:
 *       200:
 *         description: Detalle de pedido actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PedidoDetalle'
 *       404:
 *         description: Detalle de pedido no encontrado
 *       500:
 *         description: Error en la actualización del detalle de pedido
 *
 *   delete:
 *     summary: Eliminar un detalle de pedido
 *     tags: [Detalles de Pedidos]
 *     parameters:
 *       - in: path
 *         name: idPedido
 *         required: true
 *         description: ID del pedido
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
 *         description: Detalle de pedido eliminado
 *       404:
 *         description: Detalle de pedido no encontrado
 *       500:
 *         description: Error en la eliminación del detalle de pedido
 */



const express = require('express');
const router = express.Router();
const PedidoDetalleController = require('../controllers/pedidoDetalleController'); 

router.get('/', PedidoDetalleController.getAll);
router.get('/:id', PedidoDetalleController.getById);
router.post('/', PedidoDetalleController.create);
router.put('/:id', PedidoDetalleController.update);
router.delete('/:id', PedidoDetalleController.delete);

module.exports = router;