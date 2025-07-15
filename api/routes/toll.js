const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, param, validationResult } = require('express-validator');

// Security middleware
router.use(helmet());

// Configure rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// GET /:vehicleId with validation, logging, and improved error handling
router.get(
  '/:vehicleId',
  authenticateToken,
  limiter,
  param('vehicleId').isAlphanumeric().withMessage('Vehicle ID must be alphanumeric'),
  async (req, res) => {
    // Input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.warn('Validation error:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { vehicleId } = req.params;
    try {
      // TODO: Replace with real DB call
      // const tollData = await TollModel.findByVehicleId(vehicleId);
      // if (!tollData) throw new Error('Vehicle not found');

      // Example static response
      const tollData = {
        vehicleId,
        tollAmount: 10.0,
        currency: 'GHS',
        dueDate: '2025-08-01',
        status: 'unpaid'
      };

      // Log successful access
      console.info(`Toll data fetched for vehicleId: ${vehicleId}`);
      res.json(tollData);
    } catch (err) {
      console.error('Error fetching toll data:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

module.exports = router;