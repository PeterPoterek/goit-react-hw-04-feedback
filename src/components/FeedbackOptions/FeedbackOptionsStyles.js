import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FeedbackButton = styled.button`
  background-color: #0f172a;
  color: #f4f4f5;

  font-size: 1.5rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color 0.1s ease;

  &:active {
    background-color: #172554;
  }
`;
