# Portfafolio Desarrollador Frontend

This project is my front end portfolio

## Base de Datos

* Artículos

    ```sql
    CREATE TABLE dan_articulo(
        id INT PRIMARY KEY NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        categoria VARCHAR(300) NOT NULL,
        contenido TEXT NOT NULL
    );
    ```

* Repositorios github

    ```sql
    CREATE TABLE dan_project(
        id INT  NOT NULL PRIMARY KEY,
        github_link TEXT NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        tecnologias VARCHAR(100) NOT NULL
    );
    ```

* Proyectos

    ```sql
    CREATE TABLE dan_work(
        id INT NOT NULL PRIMARY KEY,
        image_link TEXT NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        tecnologias VARCHAR(100) NOT NULL
    );
    ```