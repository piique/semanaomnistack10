import React, { useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
// Componente: bloco isoladod e HTML, CSS e JS o qual não interfere no restante da aplicação
// Propriedade: (title="Dashboard") informações que um compoente PAI passa para um componente filho. Pode ser passado String, função, variavel
// Estado: informação mantida pelo componente. (Lembrar: imutabilidade)

// Componente Header
import Header from './Header';

function App() {
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
            
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>
          
          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>

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
