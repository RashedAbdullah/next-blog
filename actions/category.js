const { connectMongo } = require("@/connections/mongo-connection");
const { categoryModel } = require("@/models/category-model");

const getCategories = async () => {
  try {
    await connectMongo();

    const categories = await categoryModel.find({});
    return categories;
  } catch (err) {
    console.log(err.message);
  }
};

const createCategory = async (newCategory) => {
  try {
    await connectMongo();

    const category = await categoryModel.create(newCategory);
    return category;
  } catch (err) {
    console.log(err.message);
  }
};

export { getCategories, createCategory };
