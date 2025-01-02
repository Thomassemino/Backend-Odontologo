const { get } = require("mongoose");
const PacienteSchema = require("../models/pacientes/pacienteSchema");

async function create(request) {
  try {
   
    const newPaciente = new PacienteSchema({
      nombre: request.body.nombre,
      edad: request.body.edad,
      telefono: request.body.telefono,
      direccion: request.body.direccion,
      dni: request.body.dni,
      obraSocial: request.body.obraSocial,
      ultCons: request.body.ultCons,
      tratamientoMedico: request.body.tratamientoMedico,
      tomaMedicamentos: request.body.tomaMedicamentos,
      alergias: request.body.alergias,
      embarazada: request.body.embarazada,
      motivoConsulta: request.body.motivoConsulta
    });
    await newPaciente.save();

    return newPaciente;
  }
  catch (error) {
    throw new Error(error.message);    
  }
}

async function findByName(request) {
    return await PacienteSchema.findOne({ nombre: request.params.nombre });
}

async function findByDni(request) {
    return await PacienteSchema.findOne({ dni: request.params.dni });
}




async function deleteByName(request) {
    try {
        const pacienteBorrado = await PacienteSchema.findOneAndDelete({ nombre: request.params.nombre });
        if (!pacienteBorrado) {
            throw new Error('Paciente no encontrado');
        }
        return pacienteBorrado; 
    } catch (error) {
        throw new Error(`Error al eliminar paciente: ${error.message}`);
    }
}

async function getAll() {
      try {
          const pacientes = await PacienteSchema.find({});
          return pacientes;  // Retorna todos los pacientes
      } catch (error) {
          throw new Error(`Error al obtener todos los pacientes: ${error.message}`);
      }
}

module.exports = {
  create,
  findByName,
  deleteByName,
  findByDni,
  getAll
};
