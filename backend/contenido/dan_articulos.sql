DROP TABLE dan_articulos;

CREATE TABLE dan_articulos(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    categoria VARCHAR(300) NOT NULL,
    contenido TEXT NOT NULL,
    fecha TEXT NOT NULL
);

INSERT INTO dan_articulos (titulo, descripcion, categoria, contenido, fecha)
VALUES 
(
    'Convertir listas de objetos en JSON utilizando FastAPI y Pydantic',
    'Cuando trabajamos con APIs, es necesario transformar listas de objetos en formato JSON. Con FastAPI y Pydantic podemos hacerlo de forma eficiente y con menos errores.',
    'Python',
    '<h3>📋 Modelo Pydantic:</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
    from pydantic import BaseModel
    
    class Persona(BaseModel):
        Id: int
        nombre: str
        telefono: str | None = None
        edad: int | None = None
        passw: str
    </pre>

    <h3>🔄 Conversión a JSON:</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">
    from fastapi.responses import JSONResponse
    
    personas = [{"Id": 1, "nombre": "Juan", "edad": 25}]
    
    if personas:
        json_result = [{"id": p["Id"], "nombre": p["nombre"], "edad": p["edad"]} for p in personas]
        response = JSONResponse(json_result)
    else:
        response = JSONResponse(content={"error": "Usuario no encontrado"}, status_code=404)
    </pre>

    <h3>✅ Explicación:</h3>
    <p>El modelo define la estructura de los datos. Luego, iteramos sobre la lista de objetos y los convertimos en un diccionario JSON que FastAPI devuelve como respuesta.</p>

    <h3>🚀 Conclusión:</h3>
    <p>Con FastAPI y Pydantic, puedes devolver listas de objetos como JSON de forma rápida y ordenada.</p>',
    '2025-01-09'
);

/*
INSERT INTO dan_articulos (titulo, descripcion, categoria, contenido, fecha)
VALUES 
('Artículo 1', 'Descripción del artículo 1', 'Categoría 1', 'Contenido del artículo 1', '2024-12-09'),
('Artículo 2', 'Descripción del artículo 2', 'Categoría 2', 'Contenido del artículo 2', '2024-12-09'),
('Artículo 3', 'Descripción del artículo 3', 'Categoría 3', 'Contenido del artículo 3', '2024-12-09');
*/