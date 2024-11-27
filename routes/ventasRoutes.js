/** 
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       required:
 *         - monto
 *         - idempleado
 *       properties:
 *         folio:
 *           type: integer
 *           example: 1
 *         monto:
 *           type: number
 *           format: float
 *           example: 150.75
 *         idempleado:
 *           type: integer
 *           example: 2
 *         fechaVenta:
 *           type: string
 *           format: date-time
 *           example: '2024-10-21T12:34:56Z'
 *
 * /ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en la recuperación de ventas
 *
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: Venta creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       500:
 *         description: Error en la creación de la venta
 *
 * /ventas/{folio}:
 *   get:
 *     summary: Obtener una venta por folio
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio de la venta
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de la venta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error en la recuperación de la venta
 *
 *   put:
 *     summary: Actualizar una venta
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio de la venta
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       200:
 *         description: Venta actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error en la actualización de la venta
 *
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: folio
 *         required: true
 *         description: Folio de la venta
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Venta eliminada
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error en la eliminación de la venta
 */


const express = require('express');
const router = express.Router();
const VentasController = require('../controllers/ventasController');


router.get('/', VentasController.getAll); 
router.get('/:folio', VentasController.getById); 
router.post('/', VentasController.create); 
router.put('/:folio', VentasController.update); 
router.delete('/:folio', VentasController.delete);

module.exports = router;
