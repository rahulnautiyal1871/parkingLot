const { findByIdAndUpdate } = require("../../models/parking_lot");
const parkingLotModel = require("../../models/parking_lot");

exports.findAll = async () => {
  return await parkingLotModel.find();
};

exports.findById = async (id) => {
  return await parkingLotModel.findById(id);
};

exports.search = async (obj) => {
  return await parkingLotModel.findOne(obj);
};

exports.create = async (dataObj) => {
  return await new parkingLotModel(dataObj).save();
};

exports.updateById = async (id,dataObj) => {
  return await  parkingLotModel.findByIdAndUpdate(id,dataObj).exec();
};

exports.deleteById = async (id) => {
  console.log(id)
  return await  parkingLotModel.findByIdAndDelete(id).exec();
};
