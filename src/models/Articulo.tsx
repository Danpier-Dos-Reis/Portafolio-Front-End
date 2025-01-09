/**
 * Interface que nos permite indicar los parámetros esperados del Json
 * 
 * Nota:Como en la base de datos las propiedades vienen en
 * minúsculas por eso en la interface debe se igual para
 * que haga MATCH con el Json
*/
export interface ArticuloApiResponse {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  contenido: string;
  fecha: string;
}

export class Articulo{
    public Id?:number;
    public Titulo?:string;
    public Descripcion?:string;
    public Categoria?:string;
    public Contenido?:string;
    public Fecha?:string;

    constructor(id:number,titulo:string,descripcion:string,categoria:string,contenido:string,fecha:string){
        this.Id = id;
        this.Titulo = titulo;
        this.Descripcion = descripcion;
        this.Categoria = categoria;
        this.Contenido = contenido;
        this.Fecha = fecha;
    }

    /*// Método estático para convertir un JSON a una instancia de la clase
    public fromJson(json: ArticuloApiResponse): Articulo {
      return new Articulo(
        json.id,
        json.titulo,
        json.descripcion,
        json.categoria,
        json.contenido,
        json.fecha
      );
    }*/
}