import styled from "styled-components";
import Search from "./components/Search"

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({ valorDoFiltro, setValorDoFiltro }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
    </StyledMenu>
  );
}

function Logo() {
  return (
    <h2 style={{ display: "flex", alignItems: "center" }}>
      <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>Youtube</title>
        <g id="Icon/Social/youtube-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M20.2838235,29.7208546 L20.2817697,19.3775851 L30.0092421,24.5671906 L20.2838235,29.7208546 Z M41.6409276,17.5856462 C41.6409276,17.5856462 41.2890436,15.0488633 40.2097727,13.9319394 C38.8405739,12.4655276 37.3060444,12.4583393 36.6026186,12.3724221 C31.5649942,12 24.008044,12 24.008044,12 L23.9922983,12 C23.9922983,12 16.4356904,12 11.398066,12.3724221 C10.6939556,12.4583393 9.16045298,12.4655276 7.79091194,13.9319394 C6.71164104,15.0488633 6.36009927,17.5856462 6.36009927,17.5856462 C6.36009927,17.5856462 6,20.5646804 6,23.5437145 L6,26.3365376 C6,29.3152295 6.36009927,32.2946059 6.36009927,32.2946059 C6.36009927,32.2946059 6.71164104,34.8310466 7.79091194,35.9483127 C9.16045298,37.4147246 10.9592378,37.3681718 11.7605614,37.5218644 C14.6406709,37.8042616 24.0001711,37.8915481 24.0001711,37.8915481 C24.0001711,37.8915481 31.5649942,37.8799099 36.6026186,37.5074878 C37.3060444,37.4219129 38.8405739,37.4147246 40.2097727,35.9483127 C41.2890436,34.8310466 41.6409276,32.2946059 41.6409276,32.2946059 C41.6409276,32.2946059 42,29.3152295 42,26.3365376 L42,23.5437145 C42,20.5646804 41.6409276,17.5856462 41.6409276,17.5856462 L41.6409276,17.5856462 Z" id="Shape" fill="#E70000"></path>
        </g>
      </svg>
      <span>Youtube</span>
    </h2>
  )
}