const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

router.get('/:vehicleId', authenticateToken, (req, res) => {
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