/** 
 * @swagger
 * components:
 *   schemas:
 *     Pedido:
 *       type: object
 *       required:
 *         - total
 *         - estado
 *         - idMetodoV
 *         - idProveedor
 *       properties:
 *         idPedido:
 *           type: integer
 *           example: 1
 *         total:
 *           type: number
 *           format: float
 *           example: 150.75
 *         estado:
 *           type: string
 *           example: 'Pendiente'
 *         fechaPedido:
 *           type: string
 *           format: date-time
 *           example: '2024-10-20T10:30:00Z'
 *         idMetodoV:
 *           type: integer
 *           example: 1
 *         idProveedor:
 *           type: integer
 *           example: 2
 *
 * /pedidos:
 *   get:
 *     summary: Obtener todos los pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en la recuperación de pedidos
 *
 *   post:
 *     summary: Crear un nuevo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       201:
 *         description: Pedido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       500:
 *         description: Error en la creación del pedido
 *
 * /pedidos/{id}:
 *   get:
 *     summary: Obtener un pedido por ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del pedido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle del pedido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error en la recuperación del pedido
 *
 *   put:
 *     summary: Actualizar un pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del pedido
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pedido'
 *     responses:
 *       200:
 *         description: Pedido actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error en la actualización del pedido
 *
 *   delete:
 *     summary: Eliminar un pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del pedido
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pedido eliminado
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error en la eliminación del pedido
 */


const express = require('express');
const router = express.Router();
const PedidosController = require('../controllers/pedidosController');

router.get('/', PedidosController.getAll);
router.get('/:id', PedidosController.getById);
router.post('/', PedidosController.create);
router.put('/:id', PedidosController.update);
router.delete('/:id', PedidosController.delete);

module.exports = router;
