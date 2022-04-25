import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import ViewController from './components/controller/ViewController';

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <Header />
      <ViewController />
    </AppContainer>
  );
}

export default App;
