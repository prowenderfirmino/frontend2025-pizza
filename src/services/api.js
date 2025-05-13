const API_BASE_URL = 'http://localhost:8099';

export async function getPizzas() {
  try {
    const response = await fetch(`${API_BASE_URL}/pizza`);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar pizzas:', error);
    throw error;
  }
}
