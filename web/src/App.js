import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./Main.css";
import "./global.css";
import "./App.css";
import "./Sidebar.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
// Componente: bloco isoladod e HTML, CSS e JS o qual não interfere no restante da aplicação
// Propriedade: (title="Dashboard") informações que um compoente PAI passa para um componente filho. Pode ser passado String, função, variavel
// Estado: informação mantida pelo componente. (Lembrar: imutabilidade)

// Componente Header
// import Header from "./Header";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    //não pode ser dado um array.push
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => {
            return <DevItem key={dev._id} dev={dev} />;
          })}
        </ul>
      </main>
    </div>
  );
}

/*function App() {
  const [counter, setCounter] = useState(0);
  
  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    <>
      <Header title="Dashboard" />
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>    
  );
}*/

export default App;
