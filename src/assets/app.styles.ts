import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1440px;
  padding: 32px;
  margin: 0 auto;
`
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: #fb4659;
  }

  padding: 32px;
  gap: 24px;
  .container-agents {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .box-agent {
    display: flex;
    flex-direction: column;

    width: 370px;

    border-radius: 15px;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    outline: none;

    padding: 26px;
    gap: 24px;
  }
`
