/**
 * Interface que nos permite indicar los parámetros esperados del Json
 * 
 * Nota:Como en la base de datos las propiedades vienen en
 * minúsculas por eso en la interface debe se igual para
 * que haga MATCH con el Json
*/
export interface ProjectApiResponse {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string;
  github_link: string;
  image_link: string;
}

export class Project{
    public Id?:number;
    public Titulo?: string;
    public Descripcion?: string;
    public Tecnologias?: string;
    public Github_Link?: string;
    public Image_Link?: string;

    constructor(id:number,titulo:string,descripcion:string,tecnologias:string, github_link:string,image_link:string){
        this.Id = id;
        this.Titulo = titulo;
        this.Descripcion = descripcion;
        this.Tecnologias = tecnologias;
        this.Github_Link = github_link;
        this.Image_Link = image_link;
    }
}