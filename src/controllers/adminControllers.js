const path = require("path");
const {
  getAll,
  getOne,
  create,
  deleteOne,
  edit,
} = require("../models/product.model");

const adminControllers = {
  admin: async (req, res) => {
    const data = await getAll();

    res.render(path.resolve(__dirname, "../views/admin/admin.ejs"), {
      data,
    });
  },

  createView: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),

  createItem: async (req, res) => {
    const product_schema = {
      product_name: req.body.name,
      product_description: req.body.description,
      price: Number(req.body.price),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      sku: req.body.sku,
      dues: Number(req.body.dues),
      img_front: "/products/" + req.files[0].filename,
      img_back: "/products/" + req.files[1].filename,
      licence_id: Number(req.body.licence),
      category_id: Number(req.body.category),
    };

    await create([Object.values(product_schema)]);

    res.redirect("/admin");
  },

  editView: async (req, res) => {
    const { id } = req.params;
    const [product] = await getOne({ product_id: id });

    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"), {
      product,
    });
  },
  editItem: async (req, res) => {
    const { id } = req.params;
    const haveImages = req.files.length !== 0;

    const product_schema = haveImages
      ? {
          product_name: req.body.name,
          product_description: req.body.description,
          price: Number(req.body.price),
          stock: Number(req.body.stock),
          discount: Number(req.body.discount),
          sku: req.body.sku,
          dues: Number(req.body.dues),
          img_front: "/products/" + req.files[0].filename,
          img_back: "/products/" + req.files[1].filename,
          licence_id: Number(req.body.licence),
          category_id: Number(req.body.category),
        }
      : {
          product_name: req.body.name,
          product_description: req.body.description,
          price: Number(req.body.price),
          stock: Number(req.body.stock),
          discount: Number(req.body.discount),
          sku: req.body.sku,
          dues: Number(req.body.dues),
          licence_id: Number(req.body.licence),
          category_id: Number(req.body.category),
        };

    await edit(product_schema, { product_id: id });

    res.redirect("/shop");
  },

  deleteItem: async (req, res) => {
    const { id } = req.params;
    await deleteOne({ product_id: id });

    res.redirect("/admin");
  },
};

module.exports = adminControllers;
