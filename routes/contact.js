const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const router = express.Router();

// Validation rules
const validateContact = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('subject').notEmpty().withMessage('Subject is required'),
  body('message')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long'),
];

// POST /api/contact
router.post('/', validateContact, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const contact = new Contact({ name, email, subject, message });
    const savedContact = await contact.save();
    res.status(200).json({ success: true, id: savedContact._id });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;