import styled from 'styled-components';
import Sidebar from '../Sidebar';
import ViewController from '../controller/ViewController';

const MainLayoutContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

function MainLayout() {
  return (
    <MainLayoutContainer>
      <Sidebar />
      <ViewController />
    </MainLayoutContainer>
  );
}

export default MainLayout;
