const express = require('express');
const router = express.Router();
const parkingLot = require('../controllers/parkingLots');
const {checkParkingLot} = require('../middlewares/parkingLots');

router.get('/', parkingLot.getAllParkingLots);

router.get('/find/:id', parkingLot.getParkingLotById);

router.post('/create',checkParkingLot, parkingLot.createParkingLot);

router.put('/update/:id', parkingLot.updateParkingLotDetails)

router.delete('/delete/:id', parkingLot.deleteParkingLot)

module.exports = router;
