import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Shirts', 'Gas Cooker', 'Furniture', 'Sneakers', 'Fashion', 'Timberland' , 'Kitchen Blender', 'Gas & Bottle','Carpet', 'TV Smart' , 'Refrigerator', 'Speakers & Sounds', 'Dining Set', 'Air Conditioner', 'Blanket', 'Matrass'];
  res.send(categories);
});

export default handler;
