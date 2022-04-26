import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function ErrorState() {
  return (
    <ErrorContainer>
      <h1>
        Something went wrong while fetching the data. Please try again later.
      </h1>
    </ErrorContainer>
  );
}

export default ErrorState;
