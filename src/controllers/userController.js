const User = require("../models/user");

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getUsers = (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, rol, correo } = req.body;

  User.updateOne({ _id: id }, { $set: { nombre, rol, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
