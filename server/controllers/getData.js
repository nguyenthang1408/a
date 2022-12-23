import travelModel from "../model/index.js";

const getData = async (req, res) => {
  await travelModel.find({}).then((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

export default getData;
