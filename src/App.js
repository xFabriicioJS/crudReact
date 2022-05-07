import "./App.css";


function App(){
  return(
    <div className="app-container">
      <div className="register-container">
        <h1>Scrim Shop</h1>
        <input
        type="text"
        name="name"
        placeholder="Nome"
        className="register-input"
        />

        <input
        type="text"
        name="cost"
        placeholder="Custo"
        className="register-input"
        />

        <input
        type="text"
        name="category"
        placeholder="Categoria"
        className="register-input"
        />
        
        <button>Cadastrar</button>
      </div>
    </div>
  )
}

export default App