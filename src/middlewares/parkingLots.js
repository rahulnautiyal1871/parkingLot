const { search } = require("../services/parkingLot/index");

exports.checkParkingLot = async (req, res, next) => {
  const buildingName = req.body.buildingName;
  const obj = {
    buildingName: buildingName,
  };
  try {
    const data = await search(obj);
    if (data){
        res.status(301).json({ status: true, result: data, message: "Already Exist!" });
    }else{
        next();
    }
  } catch (e) {
    res.json({ status: false, result: e });
  }
};
