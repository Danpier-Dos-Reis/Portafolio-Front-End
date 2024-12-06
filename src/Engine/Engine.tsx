import {Articulo,ArticuloApiResponse} from "../models/Articulo";
import { Project,ProjectApiResponse } from "../models/Project";
import { Work, WorkApiResponse } from "../models/Work";

class Engine {
   /**
  * Convierte un JSON en un modelo Articulo
  * @param {Array} jsonData - Datos JSON provenientes de la API
  * @returns {Articulo[]} - Lista de instancias del modelo Articulo
  */
  static parseArticles(jsonData:ArticuloApiResponse[]) {
    return jsonData.map(
      (item) =>
        new Articulo(
          item.id,
          item.titulo,
          item.descripcion,
          item.categoria,
          item.contenido,
          item.fecha
        )
    );
  }

  /**
  * Convierte un JSON en un modelo Project
  * @param {Array} jsonData - Datos JSON provenientes de la API
  * @returns {Project[]} - Lista de instancias del modelo Project
  */
  static parseProjects(jsonData:ProjectApiResponse[]) {
    return jsonData.map(
      (item) =>
        new Project(
          item.id,
          item.titulo,
          item.descripcion,
          item.tecnologias,
          item.github_link,
          item.image_link
        )
    );
  }

  /**
  * Convierte un JSON en un modelo Work
  * @param {Array} jsonData - Datos JSON provenientes de la API
  * @returns {Work[]} - Lista de instancias del modelo Work
  */
  static parseWorks(jsonData:WorkApiResponse[]) {
    return jsonData.map(
      (item) =>
        new Work(
          item.id,
          item.titulo,
          item.descripcion,
          item.tecnologias,
          item.image_link
        )
    );
  }

  /**
  * Regresa un diccionario con el id y las tecnologias del objeto
  * @param {Array} projects - Una lista de objetos Projects
  * @returns {Dictionary} - Un diccionário
  */
  static getTecnologies(objs:Project[]|Work[]){
    const technologiesMap: { [key: number]: string[] } = {};
    const randomNumber: number = Math.floor(Math.random() * 30) + 1;
    
    objs.forEach((obj) => {
      // Dividir las tecnologías del objeto y asignarlas al ID
      technologiesMap[obj.Id == undefined ? randomNumber:obj.Id] = obj.Tecnologias == undefined ? ["nada"]:obj.Tecnologias.split(", ");
    })

    return technologiesMap;
  }
}
  
  export default Engine;