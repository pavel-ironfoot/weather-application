import { useEffect } from 'react';
import { Header } from '../Header';
import { Main } from '../Main';
import './App.scss';

export const App = () => {

  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
