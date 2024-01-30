import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const SectionWrapper = styled.div`
  max-width: 750px;
  background-color: #334155;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  padding: 2.5rem;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 2rem;

  font-size: 3rem;
`;
