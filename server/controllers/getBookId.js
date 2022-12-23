import travelModel from "../model/index.js";

const getBookId = (req, res) => {
  const _id = req.body.data.id.id;

  travelModel.findById(_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

export default getBookId;
