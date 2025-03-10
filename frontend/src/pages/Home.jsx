import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardsPizza";
import { PizzaContext } from "../Context/PizzaContext";



const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas/");

      if(!res.ok) {
        throw new Error(`HTTP ERROR! status: ${res.status}`)
      }

      const data = await res.json();
      console.log(data);
      
      setPizzas(data)
    } catch (error) {
      console.log('Error al cargar las pizzas: ', error);
      
    }

  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <main className="d-flex flex-wrap justify-content-around p-1 home-background ">
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div key={pizza.id} className="col-md-4 mb-3">
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
