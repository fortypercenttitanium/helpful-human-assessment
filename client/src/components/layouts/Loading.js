import styled from 'styled-components';

const LoadingContainer = styled.div`
  @keyframes ldio-g4cc96e736f {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .ldio-g4cc96e736f div {
    position: absolute;
    width: 20px;
    height: 80px;
    top: 60px;
    animation: ldio-g4cc96e736f 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }
  .ldio-g4cc96e736f div:nth-child(1) {
    transform: translate(30px, 0);
    background: #e15b64;
    animation-delay: -0.6s;
  }
  .ldio-g4cc96e736f div:nth-child(2) {
    transform: translate(70px, 0);
    background: #f47e60;
    animation-delay: -0.4s;
  }
  .ldio-g4cc96e736f div:nth-child(3) {
    transform: translate(110px, 0);
    background: #f8b26a;
    animation-delay: -0.2s;
  }
  .ldio-g4cc96e736f div:nth-child(4) {
    transform: translate(150px, 0);
    background: #abbd81;
    animation-delay: -1s;
  }
  .loadingio-spinner-bars-83wykmu65q4 {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-g4cc96e736f {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-g4cc96e736f div {
    box-sizing: content-box;
  }
`;

function Loading() {
  return (
    <LoadingContainer>
      <div className="loadingio-spinner-bars-83wykmu65q4">
        <div className="ldio-g4cc96e736f">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </LoadingContainer>
  );
}

export default Loading;
