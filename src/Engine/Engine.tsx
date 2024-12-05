import {Articulo,ArticuloApiResponse} from "../models/Articulo";
import { Project,ProjectApiResponse } from "../models/Project";

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
  * Regresa un diccionario con el id y las tecnologias del proyecto
  * @param {Array} projects - Una lista de objetos Projects
  * @returns {Dictionary} - Un diccionário
  */
  static getTecnologies(_projects:Project[]){

    const technologiesMap: { [key: number]: string[] } = {};
    const randomNumber: number = Math.floor(Math.random() * 30) + 1;
      
    _projects.forEach((project) => {
        // Dividir las tecnologías del proyecto y asignarlas al ID
        technologiesMap[project.Id == undefined ? randomNumber:project.Id] = project.Tecnologias == undefined ? ["nada"]:project.Tecnologias.split(", ");

    })

    return technologiesMap;
  }
}
  
  export default Engine;