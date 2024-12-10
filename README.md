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
        image_link TEXT NOT NULL,
        contenido TEXT NOT NULL,
        fecha TEXT NOT NULL
    );
    ```

* Inserts

    ```sql
    INSERT INTO dan_articulos (titulo, descripcion, categoria, contenido, fecha)
    VALUES 
    ('Artículo 1', 'Descripción del artículo 1', 'Categoría 1', 'Contenido del artículo 1', '2024-12-09'),
    ('Artículo 2', 'Descripción del artículo 2', 'Categoría 2', 'Contenido del artículo 2', '2024-12-09'),
    ('Artículo 3', 'Descripción del artículo 3', 'Categoría 3', 'Contenido del artículo 3', '2024-12-09');
    ```
    ```sql
    INSERT INTO dan_projects (titulo, descripcion, tecnologias, github_link, image_link)
    VALUES 
    ('Proyecto 1', 'Descripción del proyecto 1', 'HTML, CSS, JS', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2017/11/10/14/23/dogs-2936442_1280.png'),
    ('Proyecto 2', 'Descripción del proyecto 2', 'Python, Flask', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2024/03/15/17/50/dogs-8635461_1280.jpg'),
    ('Proyecto 3', 'Descripción del proyecto 3', 'React, Node.js', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg');
    ```
    ```sql
    INSERT INTO dan_works (titulo, descripcion, tecnologias, image_link, contenido, fecha)
    VALUES 
    ('Trabajo 1', 'Descripción del trabajo 1', 'Java, Spring', 'https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png', 'Contenido del trabajo 1', '2024-12-09'),
    ('Trabajo 2', 'Descripción del trabajo 2', 'C#, .NET', 'https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_1280.png', 'Contenido del trabajo 2', '2024-12-09'),
    ('Trabajo 3', 'Descripción del trabajo 3', 'Ruby, Rails', 'https://cdn.pixabay.com/photo/2023/09/17/15/47/halloween-8258842_640.jpg', 'Contenido del trabajo 3', '2024-12-09');
    ```