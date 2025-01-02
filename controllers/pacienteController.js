const PacienteLogic = require("../logic/pacienteLogic");

// Controlador para agregar un nuevo paciente
const addPaciente = async (req, res) => {
    try {
        const paciente = await PacienteLogic.create(req);
        res.status(200).json({ paciente: paciente });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// Controlador para buscar un Paciente por nombre
const findByName = async (req, res) => {
    try {
        const paciente = await PacienteLogic.findByName(req);
        if (!paciente) {
            return res.status(404).json({ status: 'error', message: 'Paceinte no encontrado' });
        }
        res.status(200).json({ paciente: paciente });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// Controlador para buscar un paciente por Dni
const findByDni = async (req, res) => {
    try {
        const paciente = await PacienteLogic.findByDni(req);
        if (!paciente) {
            return res.status(404).json({ status: 'error', message: 'Paciente no encontrado' });
        }
        res.status(200).json({ paciente: paciente });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};


// Controlador para eliminar un paciente por usuario
const deleteByName = async (req, res) => {
    try {
        const deletedPaciente = await PacienteLogic.deleteByName(req);
        res.status(200).json({ status: 'success', message: 'Paciente eliminado', paciente: deletedPaciente });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

const getAll = async (req, res) => {
    try {
        const pacientes = await PacienteLogic.getAll();
        res.status(200).json({ pacientes: pacientes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', message: err.message });
    }
};

module.exports = {
    addPaciente,
    findByName,
    findByDni,
    deleteByName,
    getAll
};