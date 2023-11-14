export interface TrunosModel {
    id:           number;
    nombre:       string;
    apellido:     string;
    cedula:       string;
    especialidad: string;
    sintomas:     string;
    observacion:  string;
    comentario:   string;
    receta:       string;
    archivo:      string;
    estado:       string;
    fechaCreacion: Date;
}

export interface nuevoTurno {
    nombre:       string;
    apellido:     string;
    cedula:       string;
    especialidad: string;
    sintomas:     string;
    observacion:  string;
    comentario:   string;
    receta:       string;
    archivo:      string;
    estado:       string;
    fechaCreacion: Date;
}

export interface DataFormTurno {
    formulario: string;
    title: string;
    data: TrunosModel;
  }