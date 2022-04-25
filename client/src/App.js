import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import MainLayout from './components/layouts/MainLayout';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainLayout />
    </AppContainer>
  );
}

export default App;
