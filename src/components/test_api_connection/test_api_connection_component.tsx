import "./test_api_connection.css"
import testGetPythonJson from "./test_engine";

function TestPythonAPI() {
  let url: string = "http://127.0.0.1:5000/gettestdata";

  const btnEventHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      let jsondata = await testGetPythonJson(url);
      let btn = event.target as HTMLButtonElement;
      
      // Convertir el JSON a un formato legible
      let paragraph = document.createElement("p");
      paragraph.textContent = JSON.stringify(jsondata, null, 2);
      paragraph.style.whiteSpace = "pre-wrap"; // Para conservar el formato JSON en líneas nuevas

      btn.insertAdjacentElement("afterend",paragraph);
      
      console.log(jsondata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
  <section className="testapiconnection_section">
    <div className="ti_div">
      <h1>Test Python API</h1>
    </div>
    <button className="btn_request" onClick={btnEventHandler}>Click to do a request</button>
  </section>
  );
}

export default TestPythonAPI;