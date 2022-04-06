const { findAll, findById, create, updateById, deleteById} = require('../services/parkingLot/index');

exports.getAllParkingLots = async (req, res) => {
  try {
    const data = await findAll();
    res.json({ status: true, result: data, message: 'Fetched Successfully !' });
  } catch (e) {
    res.json({ status: false});
  }
};

exports.getParkingLotById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await findById(id);
    res.json({ status: true, result: data, message: 'Fetched Successfully !' });
  } catch (e) {
    res.json({ status: false});
  }
};

exports.createParkingLot = async (req, res) => {
  const { zipCode, buildingName, totalSpots } = req.body;
  if (zipCode && buildingName && totalSpots) {
    const obj = {
      zipCode: zipCode,
      buildingName: buildingName,
      totalSpots: totalSpots,
    };
    console.log(obj)
    try {
      const data = await create(obj);
      res.json({ status: true, result: data, message: 'Created Successfully !' });
    } catch (e) {
      res.json({ status: false, result: e });
    }
  } else {
    res.json({ status: false, result: 'Some Data is missing!'});
  }
};

exports.updateParkingLotDetails = async (req, res) => {
  const id = req.params.id;
  const { zipCode, buildingName, totalSpots } = req.body;
  if (id) {
    const obj = {
      zipCode: zipCode,
      buildingName: buildingName,
      totalSpots: totalSpots,
    };
    console.log(obj)
    try {
      const data = await updateById(id,obj);
      res.json({ status: true, result: data, message: 'Updated Successfully !' });
    } catch (e) {
      res.json({ status: false, result: e });
    }
  } else {
    res.json({ status: false, result: 'Invalid Request !'});
  }
};

exports.deleteParkingLot = async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      const data = await deleteById(id);
      res.json({ status: true, result: data, message: 'Deleted Successfully !' });
    } catch (e) {
      res.json({ status: false, result: e });
    }
  } else {
    res.json({ status: false, result: 'Invalid Request !'});
  }
};
