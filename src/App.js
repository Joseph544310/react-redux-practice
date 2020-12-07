import './App.css';
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
    </Provider>
  );
}

export default App;
