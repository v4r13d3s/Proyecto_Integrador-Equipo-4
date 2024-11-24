/**
 * @swagger
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       required:
 *         - nombre
 *         - appaterno
 *         - apmaterno
 *         - fechanacimiento
 *         - curp
 *         - idusuario
 *       properties:
 *         idEmpleado:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: 'Juan'
 *         appaterno:
 *           type: string
 *           example: 'Pérez'
 *         apmaterno:
 *           type: string
 *           example: 'González'
 *         fechanacimiento:
 *           type: string
 *           format: date
 *           example: '1990-01-01'
 *         curp:
 *           type: string
 *           example: 'PEPJ900101HDFGZN05'
 *         idusuario:
 *           type: integer
 *           example: 2
 *
 * /empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     tags: [Empleados]
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en la recuperación de empleados
 *
 *   post:
 *     summary: Crear un nuevo empleado
 *     tags: [Empleados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       201:
 *         description: Empleado creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       500:
 *         description: Error en la creación del empleado
 *
 * /empleados/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del empleado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle del empleado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en la recuperación del empleado
 *
 *   put:
 *     summary: Actualizar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del empleado
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Empleado'
 *     responses:
 *       200:
 *         description: Empleado actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en la actualización del empleado
 *
 *   delete:
 *     summary: Eliminar un empleado
 *     tags: [Empleados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del empleado
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Empleado eliminado
 *       404:
 *         description: Empleado no encontrado
 *       500:
 *         description: Error en la eliminación del empleado
 */


const express = require('express');
const router = express.Router();
const EmpleadosController = require('../controllers/empleadosController');

router.get('/', EmpleadosController.getAll);
router.get('/:id', EmpleadosController.getById);
router.post('/', EmpleadosController.create);
router.put('/:id', EmpleadosController.update);
router.delete('/:id', EmpleadosController.delete);

module.exports = router;
