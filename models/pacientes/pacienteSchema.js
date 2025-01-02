const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre completo es obligatorio'],  
    trim: true,                                    
    lowercase: true                                
  },
  edad: { 
    type: Number, 
    required: [true, 'La edad es obligatoria'],    
    min: [0, 'La edad no puede ser menor a 0'], 
  },
  telefono: { 
    type: String, 
    required: [true, 'El teléfono es obligatorio'],    
  },
  direccion: { 
    type: String, 
    required: [true, 'La dirección es obligatoria'],  
    trim: true                                    
  },
  dni: { 
    type: String, 
    required: [true, 'El DNI es obligatorio'],    
    unique: true,                                  
  },
  obraSocial: { 
    type: String, 
    required: [true, 'La obra social es obligatoria'], 
    trim: true                                   
  },
  ultCons: { 
    type: Date, // Almacenar como fecha
    default: Date.now
  },
  tratamientoMedico: { 
    type: String, 
    required: [true, 'Indicar si está en un tratamiento médico'], 
  },
  tomaMedicamentos: { 
    type: String, 
    required: [true, 'Indicar si toma medicamentos'], 
  },
  alergias: { 
    type: String, // Puede ser un texto o una lista separada por comas
  },
  embarazada: { 
    type: Boolean, 
    required: [true, 'Indicar si está embarazada'], 
  },
  motivoConsulta: { 
    type: String, 
    required: [true, 'El motivo de la consulta es obligatorio'], 
    trim: true                                   
  },
  historiaClinica: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'HistoriaClinica' 
  }
});

module.exports = mongoose.model('Paciente', pacienteSchema);
