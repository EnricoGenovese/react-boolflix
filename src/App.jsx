import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {

  return (
    <>
      <GlobalProvider >
        <Header />
        <Main />
      </GlobalProvider>
    </>
  )
}

export default App
