/** 
 * @swagger
 * components:
 *   schemas:
 *     Rol:
 *       type: object
 *       required:
 *         - tipo
 *       properties:
 *         idRol:
 *           type: integer
 *           example: 1
 *         tipo:
 *           type: string
 *           example: 'Administrador'
 *
 * /roles:
 *   get:
 *     summary: Obtener todos los roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Lista de roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error en la recuperación de roles
 *
 *   post:
 *     summary: Crear un nuevo rol
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       201:
 *         description: Rol creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       500:
 *         description: Error en la creación del rol
 *
 * /roles/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle del rol
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error en la recuperación del rol
 *
 *   put:
 *     summary: Actualizar un rol
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Rol actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error en la actualización del rol
 *
 *   delete:
 *     summary: Eliminar un rol
 *     tags: [Roles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del rol
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Rol eliminado
 *       404:
 *         description: Rol no encontrado
 *       500:
 *         description: Error en la eliminación del rol
 */


const express = require('express');
const router = express.Router();
const RolesController = require('../controllers/rolesController');

router.get('/', RolesController.getAll);
router.get('/:id', RolesController.getById);
router.post('/', RolesController.create);
router.put('/:id', RolesController.update);
router.delete('/:id', RolesController.delete);

module.exports = router;
