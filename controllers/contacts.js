
const {Contact} = require("../models/contact")

const {  ctrlWrapper } = require("../helpers");


const getAll = async (req, res) => {
    const result = await Contact.find();
    res.json(result);
};

// const getById = async (req, res) => {
//     const { contactId } = req.params;
//     const contact = await getContactById(contactId);
//     if (!contact) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json(contact);
// };

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    res.status(201).json(result);
};

// const updateById = async (req, res) => {
//     const { contactId } = req.params;
//     const contact = await updateContact(contactId, req.body);
//     if (!contact) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json(contact);
// };

// const deleteById = async (req, res) => {
//     const { contactId } = req.params;
//     const contact = await removeContact(contactId);
//     if (!contact) {
//       throw HttpError(404, "Not found");
//     }
//     res.status(200).json({ message: "contact deleted" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
