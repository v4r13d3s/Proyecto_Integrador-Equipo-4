/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *       properties:
 *         idCategoria:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: 'Electrónica'
 *         descripcion:
 *           type: string
 *           example: 'Productos electrónicos como teléfonos y computadoras'
 *
 * /categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categorías]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error en la recuperación de categorías
 *
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categorías]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoría creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       500:
 *         description: Error en la creación de la categoría
 *
 * /categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de la categoría
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en la recuperación de la categoría
 *
 *   put:
 *     summary: Actualizar una categoría
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoría actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en la actualización de la categoría
 *
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categorías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Categoría eliminada
 *       404:
 *         description: Categoría no encontrada
 *       500:
 *         description: Error en la eliminación de la categoría
 */


const express = require('express');
const router = express.Router();
const CategoriasController = require('../controllers/categoriasController');


router.get('/', CategoriasController.getAll);
router.get('/:id', CategoriasController.getById);
router.post('/', CategoriasController.create);
router.put('/:id', CategoriasController.update);
router.delete('/:id', CategoriasController.delete);

module.exports = router;
