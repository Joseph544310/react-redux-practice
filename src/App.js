import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import TodosList from './containers/todosList'

function App() {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <TodosList/>
    </Provider>
  );
}

export default App;
