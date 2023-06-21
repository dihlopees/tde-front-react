import { useState } from 'react';
import './App.css';
import Todo from './pages/Todo'
// import Header from './components/Header';
// import OrderComponent from './components/OrderComponent';

function App() {
  const [array, setArray] = useState([5, 10, 60, 20, 2]);
  const [title, setTitle] = useState();
  const [newTitle, setNewTitle] = useState();

  const orderArray = () => {
    const newArray = [...array].sort((a, b) => a - b);
    setArray(newArray);
  };

  const setarH4 = () => {
    setNewTitle(title);
  };
  return (
    <div>
      {/* <Header title={newTitle} />
      <OrderComponent arrayNumber={array} />

      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <button onClick={setarH4}>Setar Titulo</button>
      <button onClick={orderArray}>Ordernar números</button> */}

      <Todo />
    </div>
  );
}

export default App;
