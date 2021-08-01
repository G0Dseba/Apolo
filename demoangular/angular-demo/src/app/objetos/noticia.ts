export interface Noticia {
    cn: number,
    titulo: string,
    subtitulo: string,
    nombre: string,
    imagen: Blob,
    tipo: string,
    fecha: Date,
    detalle: string,
    autor: string;
}