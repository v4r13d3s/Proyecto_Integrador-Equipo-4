/** 
 * @swagger
 * components:
 *   schemas:
 *     TipoPago:
 *       type: object
 *       required:
 *         - descripcion
 *         - activo
 *       properties:
 *         idTipoPago:
 *           type: integer
 *           example: 1
 *         descripcion:
 *           type: string
 *           example: 'Tarjeta de crédito'
 *         activo:
 *           type: boolean
 *           example: true
 *
 * /tipos-pago:
 *   get:
 *     summary: Obtener todos los tipos de pago
 *     tags: [Tipos de Pago]
 *     responses:
 *       200:
 *         description: Lista de tipos de pago
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TipoPago'
 *       500:
 *         description: Error en la recuperación de tipos de pago
 *
 *   post:
 *     summary: Crear un nuevo tipo de pago
 *     tags: [Tipos de Pago]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPago'
 *     responses:
 *       201:
 *         description: Tipo de pago creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoPago'
 *       500:
 *         description: Error en la creación del tipo de pago
 *
 * /tipos-pago/{id}:
 *   get:
 *     summary: Obtener un tipo de pago por ID
 *     tags: [Tipos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de pago
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle del tipo de pago
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoPago'
 *       404:
 *         description: Tipo de pago no encontrado
 *       500:
 *         description: Error en la recuperación del tipo de pago
 *
 *   put:
 *     summary: Actualizar un tipo de pago
 *     tags: [Tipos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de pago
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPago'
 *     responses:
 *       200:
 *         description: Tipo de pago actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoPago'
 *       404:
 *         description: Tipo de pago no encontrado
 *       500:
 *         description: Error en la actualización del tipo de pago
 *
 *   delete:
 *     summary: Eliminar un tipo de pago
 *     tags: [Tipos de Pago]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de pago
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tipo de pago eliminado
 *       404:
 *         description: Tipo de pago no encontrado
 *       500:
 *         description: Error en la eliminación del tipo de pago
 */


const express = require('express');
const router = express.Router();
const TiposPagoController = require('../controllers/tipoPagoController');

router.get('/', TiposPagoController.getAll);
router.get('/:id', TiposPagoController.getById);
router.post('/', TiposPagoController.create);
router.put('/:id', TiposPagoController.update);
router.delete('/:id', TiposPagoController.delete);

module.exports = router;
