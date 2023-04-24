import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './store/slices';

function App() {
  const { counter } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{ counter }</p>
        <button onClick={() => dispatch( increment() ) }>
          Incrementar
        </button>
        <button onClick={() => dispatch( decrement() ) }>
          Decrementar
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) ) }>
          Incrementar por 2 
        </button>
      </div>
    </>
  )
}

export default App
