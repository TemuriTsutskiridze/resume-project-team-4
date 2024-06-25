import styled from "styled-components";

export default function HomeComponent() {
  return (
    <StyledDiv>
      <img
        src="/images/logoRedberry.png"
        alt="Redberry logo"
        className="logoRedberry"
      />
      <div className="line"></div>
      <img
        src="/images/logoStamp.png"
        alt="Redberry stamp "
        className="logoStamp"
      />
      <button>რეზიუმეს დამატება</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.52),
      rgba(255, 255, 255, 0.52)
    ),
    url("/images/background.jpeg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 192rem;
  max-width: 100%;
  height: 108rem;
  max-height: 100%;
  padding: 2.5rem 7rem;
  position: relative;

  .logoRedberry {
    width: 23.6rem;
    height: auto;
  }
  .line {
    width: 100%;
    height: 0.1rem;
    background-color: rgba(26, 26, 26, 1);
    margin-top: 2.6rem;
  }
  .logoStamp {
    width: 29.9rem;
    height: auto;
    position: absolute;
    top: 47.3rem;
    right: 54.5rem;
    opacity: 0.14;
  }
  button {
    position: absolute;
    width: 46.4rem;
    height: 6rem;
    top: 51.3rem;
    right: 72.8rem;
    padding: 1.8rem 6rem;
    border-radius: 0.8rem;
    background-color: rgba(26, 26, 26, 1);
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.442rem;
    text-align: center;
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
      box-shadow: 0 0 5rem 0 rgba(26, 26, 26, 0.8);
    }
  }
`;
