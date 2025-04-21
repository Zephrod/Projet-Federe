const MedicalFile = require("../models/medicalFile");

// 🔹 GET all medical files
exports.getAll = async (req, res) => {
  try {
    const files = await MedicalFile.findAll();
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 GET one medical file by ID
exports.getOne = async (req, res) => {
  try {
    const file = await MedicalFile.findByPk(req.params.id);
    if (!file) return res.status(404).json({ error: "Not found" });
    res.json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔹 CREATE a new medical file
exports.create = async (req, res) => {
  try {
    const file = await MedicalFile.create(req.body);
    res.status(201).json(file);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 UPDATE a medical file
exports.update = async (req, res) => {
  try {
    const file = await MedicalFile.findByPk(req.params.id);
    if (!file) return res.status(404).json({ error: "Not found" });

    await file.update(req.body);
    res.json(file);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 DELETE a medical file
exports.delete = async (req, res) => {
  try {
    const file = await MedicalFile.findByPk(req.params.id);
    if (!file) return res.status(404).json({ error: "Not found" });

    await file.destroy();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
