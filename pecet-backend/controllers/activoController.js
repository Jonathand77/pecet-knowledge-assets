const Activo = require('../models/Activo');

// Obtener todos los activos
exports.getAllActivos = async (req, res) => {
  try {
    const activos = await Activo.find();
    res.status(200).json(activos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los activos', error: err });
  }
};

// Obtener un activo por ID
exports.getActivoById = async (req, res) => {
  const { id } = req.params;
  try {
    const activo = await Activo.findById(id);
    if (!activo) {
      return res.status(404).json({ message: 'Activo no encontrado' });
    }
    res.status(200).json(activo);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el activo', error: err });
  }
};

// Crear un nuevo activo
exports.createActivo = async (req, res) => {
  try {
    const newActivo = new Activo(req.body);
    await newActivo.save();
    res.status(201).json(newActivo);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el activo', error: err });
  }
};

// Actualizar un activo existente
exports.updateActivo = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedActivo = await Activo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedActivo) {
      return res.status(404).json({ message: 'Activo no encontrado' });
    }
    res.status(200).json(updatedActivo);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar el activo', error: err });
  }
};

// Eliminar un activo
exports.deleteActivo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedActivo = await Activo.findByIdAndDelete(id);
    if (!deletedActivo) {
      return res.status(404).json({ message: 'Activo no encontrado' });
    }
    res.status(200).json({ message: 'Activo eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el activo', error: err });
  }
};
