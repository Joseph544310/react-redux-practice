import './App.css';
import store from '../store'
import {Provider} from 'react-redux'
import TodosList from '../containers/todosList'
import FactsList from '../containers/factsList'

function App() {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <TodosList/>
      <FactsList/>
    </Provider>
  );
}

export default App;
