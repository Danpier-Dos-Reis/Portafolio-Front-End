function Singular_Article() {

  return (
    <>
      <h2>Convertir listas de objetos en JSON utilizando FastAPI y Pydantic</h2>
      <div dangerouslySetInnerHTML={{ __html: `
      <br/>
      <h3>📋 Modelo Pydantic:</h3>
      <pre style="background-color: #1e1e1e; color: #dcdcdc; padding: 15px; border-radius: 5px; overflow-x: auto;">
      <span style="color: #569cd6; font-weight: bold;">from</span> pydantic <span style="color: #569cd6; font-weight: bold;">import</span> BaseModel

      <span style="color: #569cd6; font-weight: bold;">class</span> Persona(BaseModel):
          Id: <span style="color: #b5cea8;">int</span>
          nombre: <span style="color: #b5cea8;">str</span>
          telefono: <span style="color: #b5cea8;">str</span> | <span style="color: #569cd6;">None</span> = <span style="color: #569cd6;">None</span>
          edad: <span style="color: #b5cea8;">int</span> | <span style="color: #569cd6;">None</span> = <span style="color: #569cd6;">None</span>
          passw: <span style="color: #b5cea8;">str</span>
      </pre>
      <br/>
      <h3>🔄 Conversión a JSON:</h3>
      <pre style="background-color: #1e1e1e; color: #dcdcdc; padding: 15px; border-radius: 5px; overflow-x: auto;">
      <span style="color: #569cd6; font-weight: bold;">from</span> fastapi.responses <span style="color: #569cd6; font-weight: bold;">import</span> JSONResponse

      personas = [<span style="color: #ce9178;">{"Id": 1, "nombre": "Juan", "edad": 25}</span>]

      <span style="color: #569cd6; font-weight: bold;">if</span> personas:
          json_result = [{<span style="color: #ce9178;">"id"</span>: p[<span style="color: #ce9178;">"Id"</span>], <span style="color: #ce9178;">"nombre"</span>: p[<span style="color: #ce9178;">"nombre"</span>], <span style="color: #ce9178;">"edad"</span>: p[<span style="color: #ce9178;">"edad"</span>]} <span style="color: #569cd6; font-weight: bold;">for</span> p <span style="color: #569cd6; font-weight: bold;">in</span> personas]
          response = JSONResponse(json_result)
      <span style="color: #569cd6; font-weight: bold;">else</span>:
          response = JSONResponse(content={<span style="color: #ce9178;">"error"</span>: <span style="color: #ce9178;">"Usuario no encontrado"</span>}, status_code=404)
      </pre>
      <br/>
      <h3>✅ Explicación:</h3>
      <p>El modelo define la estructura de los datos. Luego, iteramos sobre la lista de objetos y los convertimos en un diccionario JSON que FastAPI devuelve como respuesta.</p>
      <br/>
      <h3>🚀 Conclusión:</h3>
      <p>Con FastAPI y Pydantic, puedes devolver listas de objetos como JSON de forma rápida y ordenada.</p>
      ` }} />
    </>
  );
}

export default Singular_Article;

/*
function Singular_Article() {
    const { id } = useParams(); // Accedes al id desde la URL

  return (
    <h1>Hola soy el art número = {id}</h1>
  );
}
*/