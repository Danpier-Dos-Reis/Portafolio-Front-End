/**
 * Interface que nos permite indicar los parámetros esperados del Json
 * 
 * Nota:Como en la base de datos las propiedades vienen en
 * minúsculas por eso en la interface debe se igual para
 * que haga MATCH con el Json
*/
export interface WorkApiResponse {
    id: number;
    titulo: string;
    descripcion: string;
    tecnologias: string;
    image_link: string;
    contenido: string;
    fecha: string;
  }
  
  export class Work{
      public Id?:number;
      public Titulo?: string;
      public Descripcion?: string;
      public Tecnologias?: string;
      public Image_Link?: string;
      public Contenido?: string;
      public Fecha?: string;
  
      constructor(id:number,titulo:string,descripcion:string,tecnologias:string,image_link:string,contenido:string,fecha:string){
          this.Id = id;
          this.Titulo = titulo;
          this.Descripcion = descripcion;
          this.Tecnologias = tecnologias;
          this.Image_Link = image_link;
          this.Contenido = contenido;
          this.Fecha = fecha;
      }
  }