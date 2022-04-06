const express = require('express');
const router = express.Router()
const parkingLot = require('./parkingLots')

// All routes should be here
router.use('/parking-lot',parkingLot)

module.exports = router;