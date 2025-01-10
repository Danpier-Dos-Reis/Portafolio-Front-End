export default async function testGetPythonJson(url: string): Promise<any> {
  try {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error:', error);
    throw error;
  }
}