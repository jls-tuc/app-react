export interface Empresa {
    _id: string;
    nombre: string;
    comentarios?: string
}

export interface Linea {
    numero: number,
    plan: string,
    equipo: Equipo[],
    persona: Persona[],
    fecha_entrega: Date,
    estado: string,
    fecha_cambio_estado: Date,
    razon_cambio_estado: string,  
    observaciones: string
}

export interface Equipo {
    modelo: Modelo,
    imei: string,
    estado: string,
    fecha_cambio_estado: Date,
    razon_cambio_estado:string,
    observaciones: string
}

export interface Persona {
    nombre: string,
    apellido: string,
    dependencia: Dependencia,
    observaciones: string
}

export interface Dependencia {
    nombre: string,
    organismo:Organismo,
    observaciones: string
}

export interface Organismo {
    nombre: string,
    observaciones: string
}

export interface Modelo {
    nombre: string,
    marca: Marca,
    observaciones: string
}

export interface Marca {
    nombre: string,
    observaciones: string
}

