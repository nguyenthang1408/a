import travelModel from "../model/index.js";

const createData = async (req, res) => {
  const img = req.body.img;
  const title = req.body.title;
  const star = req.body.star;
  const numberReview = req.body.numberReview;
  const address = req.body.address;

  const createTicket = new travelModel({
    img: "src/assets/ht6.jpg",
    title: "Premier Village Phú Quốc Resort",
    star: 5,
    numberReview: 854,
    address: "Mũi Ông Đội, An Thới, Phú Quốc",
    price: 4161000,
    bookHotel: true,
  });

  try {
    await createTicket.save();
    res.send(createTicket);
  } catch (error) {
    console.log(error);
  }
};

export default createData;
