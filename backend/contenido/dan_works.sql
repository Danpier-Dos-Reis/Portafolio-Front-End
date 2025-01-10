DROP TABLE dan_works;

CREATE TABLE dan_works(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    tecnologias VARCHAR(300) NOT NULL,
    image_link TEXT NOT NULL,
    contenido TEXT NOT NULL,
    fecha TEXT NOT NULL
);

INSERT INTO dan_works (titulo, descripcion, tecnologias, image_link, contenido, fecha)
VALUES 
(
    'Hispatec Chile',
    'Me uní a este maravilloso equipo de trabajo en el cual ejercí el cargo de desarrollador jr',
    'C#, SQL Server, Crystal Report',
    'https://i.ytimg.com/vi/XvIw6mQ8kPs/maxresdefault.jpg',
    '<p>En esta oportunidad me uní al equipo de Producto📦 como Desarrollador JR FullStack donde era responsable de desarrollar el módulo de contabilidad para chile para un producto de la empresa, manejar datos de multiples origenes (excel,json,xml,sql-server ...), consumir APIs de otros ERPs.</p>',
    '2025-01-10'
);

/*
INSERT INTO dan_works (titulo, descripcion, tecnologias, image_link, contenido, fecha)
VALUES 
('Trabajo 1', 'Descripción del trabajo 1', 'Java, Spring', 'https://cdn.pixabay.com/photo/2023/07/30/00/12/cat-8157889_1280.png', 'Contenido del trabajo 1', '2024-12-09'),
('Trabajo 2', 'Descripción del trabajo 2', 'C#, .NET', 'https://cdn.pixabay.com/photo/2022/04/10/09/02/cats-7122943_1280.png', 'Contenido del trabajo 2', '2024-12-09'),
('Trabajo 3', 'Descripción del trabajo 3', 'Ruby, Rails', 'https://cdn.pixabay.com/photo/2023/09/17/15/47/halloween-8258842_640.jpg', 'Contenido del trabajo 3', '2024-12-09');
*/