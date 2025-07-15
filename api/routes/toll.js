const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

const rateLimit = require('express-rate-limit');

// Configure rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.get('/:vehicleId', authenticateToken, limiter, (req, res) => {
  const { vehicleId } = req.params;
  res.json({
    vehicleId,
    tollAmount: 10.0,
    currency: 'GHS',
    dueDate: '2025-08-01',
    status: 'unpaid'
  });
});

module.exports = router;