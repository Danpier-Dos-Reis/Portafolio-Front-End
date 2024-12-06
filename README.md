# Portfafolio Desarrollador Frontend

This project is my front end portfolio

## Base de Datos

* Artículos

    ```sql
    CREATE TABLE dan_articulos(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        categoria VARCHAR(300) NOT NULL,
        contenido TEXT NOT NULL,
        fecha TEXT NOT NULL
    );
    ```

* Repositorios github

    ```sql
    CREATE TABLE dan_projects(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        tecnologias VARCHAR(100) NOT NULL,
        <!-- contenido TEXT NOT NULL, -->
        github_link TEXT NOT NULL,
        image_link TEXT NOT NULL
    );
    ```

* Proyectos

    ```sql
    CREATE TABLE dan_works(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        titulo VARCHAR(50) NOT NULL,
        descripcion VARCHAR(300) NOT NULL,
        tecnologias VARCHAR(100) NOT NULL,
        image_link TEXT NOT NULL
    );
    ```