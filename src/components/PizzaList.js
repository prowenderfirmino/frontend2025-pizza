import React, { useEffect, useState } from 'react';
import { getPizzas } from '../services/api';

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPizzas()
      .then(data => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Lista de Pizzas</h2>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}><strong>{pizza.id}-{pizza.sabor}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;
