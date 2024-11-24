/**
 * @swagger
 * components:
 *   schemas:
 *     MetodoVenta:
 *       type: object
 *       required:
 *         - idTipoPago
 *         - descripcion
 *         - comision
 *         - activo
 *       properties:
 *         idMetodoVenta:
 *           type: integer
 *           example: 1
 *         idTipoPago:
 *           type: integer
 *           example: 1
 *         descripcion:
 *           type: string
 *           example: "Pago con tarjeta"
 *         comision:
 *           type: number
 *           format: float
 *           example: 2.5
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           example: "2023-10-01T00:00:00Z"
 *         activo:
 *           type: boolean
 *           example: true
 *
 * /metodos-venta:
 *   get:
 *     summary: Obtener todos los métodos de venta
 *     tags: [Métodos de Venta]
 *     responses:
 *       200:
 *         description: Lista de métodos de venta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MetodoVenta'
 *       500:
 *         description: Error en la recuperación de métodos de venta
 *
 *   post:
 *     summary: Crear un nuevo método de venta
 *     tags: [Métodos de Venta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MetodoVenta'
 *     responses:
 *       201:
 *         description: Método de venta creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MetodoVenta'
 *       500:
 *         description: Error en la creación del método de venta
 *
 * /metodos-venta/{id}:
 *   get:
 *     summary: Obtener un método de venta por ID
 *     tags: [Métodos de Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de venta
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Método de venta encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MetodoVenta'
 *       500:
 *         description: Error en la recuperación del método de venta
 *
 *   put:
 *     summary: Actualizar un método de venta
 *     tags: [Métodos de Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de venta
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MetodoVenta'
 *     responses:
 *       200:
 *         description: Método de venta actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MetodoVenta'
 *       500:
 *         description: Error en la actualización del método de venta
 *
 *   delete:
 *     summary: Eliminar un método de venta
 *     tags: [Métodos de Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de venta
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Método de venta eliminado
 *       500:
 *         description: Error en la eliminación del método de venta
 */



const express = require('express');
const router = express.Router();
const MetodoVentaController = require('../controllers/metodoVentaController');

router.get('/', MetodoVentaController.getAll);
router.get('/:id', MetodoVentaController.getById);
router.post('/', MetodoVentaController.create);
router.put('/:id', MetodoVentaController.update);
router.delete('/:id', MetodoVentaController.delete);

module.exports = router;
