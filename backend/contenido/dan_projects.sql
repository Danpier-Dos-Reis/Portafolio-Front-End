DROP TABLE dan_projects;

CREATE TABLE dan_projects(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    tecnologias VARCHAR(100) NOT NULL,
    github_link TEXT NOT NULL,
    image_link TEXT NOT NULL
);

INSERT INTO dan_projects (titulo, descripcion, tecnologias, github_link, image_link)
VALUES 
(
    'Secure_API', 
    'Este proyecto encapsula una página web (UI) donde los usuarios ingresan datos para registrarse en el sistema y obtener credenciales para ingresar la solicitud de envío al sistema back-end.',
    'C#, JavaScript',
    'https://github.com/Danpier-Dos-Reis/Secure_API',
    'https://raw.githubusercontent.com/Danpier-Dos-Reis/Secure_API/main/frontendSecureAPI/src/assets/Docs/Register.png'
),
(
    'Php Excel Manipulation', 
    'En este proyecto pruebo cómo gestionar datos de documentos .xlsx y .csv.',
    'Php',
    'https://github.com/Danpier-Dos-Reis/php_getexceldata',
    'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/php-programming-language.jpg'
),
(
    'Php Button', 
    'En este proyecto aprendo cómo cargar archivos binarios en mi servidor a través de un objeto JavaScript para luego procesar los datos del archivo con Php.',
    'Php',
    'https://github.com/Danpier-Dos-Reis/Php-Button',
    'https://www.devopsschool.com/blog/wp-content/uploads/2022/03/php-programming-language.jpg'
),
(
    'C# Advanced', 
    'Este proyecto posee tres ramas donde cada una utilizo herramientas avanzadas de C# (Linq , JWT , Loggin System)',
    'C#',
    'https://github.com/Danpier-Dos-Reis/CsharpAdvance',
    'https://blog.educalix.com/wp-content/uploads/2023/04/Desktop-1.jpg'
);

/*
INSERT INTO dan_projects (titulo, descripcion, tecnologias, github_link, image_link)
VALUES 
('Proyecto 1', 'Descripción del proyecto 1', 'HTML, CSS, JS', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2017/11/10/14/23/dogs-2936442_1280.png'),
('Proyecto 2', 'Descripción del proyecto 2', 'Python, Flask', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2024/03/15/17/50/dogs-8635461_1280.jpg'),
('Proyecto 3', 'Descripción del proyecto 3', 'React, Node.js', 'https://www.google.com', 'https://cdn.pixabay.com/photo/2024/11/03/22/57/dogs-9172481_1280.jpg');
*/