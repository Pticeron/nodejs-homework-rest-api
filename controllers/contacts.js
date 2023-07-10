
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");



const getAll = async (req, res) => {
    const contacts = await listContacts();
    res.status(200).json(contacts);
};

const getById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(contact);
};

const add = async (req, res) => {
    const contact = await addContact(req.body);
    res.status(201).json(contact);
};

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await updateContact(contactId, req.body);
    if (!contact) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(contact);
};

const deleteById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await removeContact(contactId);
    if (!contact) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "contact deleted" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
