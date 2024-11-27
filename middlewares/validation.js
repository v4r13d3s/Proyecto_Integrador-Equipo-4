const { body, validationResult } = require('express-validator');

const validateMaria = [
  body('name').notEmpty().withMessage('Name is required'),
  body('type').notEmpty().withMessage('Type is required'),
  body('quantity').isNumeric().withMessage('Quantity must be a number'),
  body('price').isNumeric().withMessage('Price must be a number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateMaria };


