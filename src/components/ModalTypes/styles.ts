import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.div``;

export const DetailsModal = styled.div`
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(black, 0.2);
  left: 50%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const DetailsModalClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5em;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 4.5em;

  svg {
    display: block;
  }
`;

export const DetailsModalTitle = styled.header`
  color: #111827;
  padding: 1.5em 2em;
  pointer-events: all;
  position: relative;
  width: calc(100% - 4.5em);

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: normal;
  }
`;

export const DetailsModalContent = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 2em;
  pointer-events: all;
  overflow: auto;
`;

export const DetailsModalOverlay = styled.div`
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background: rgba(#0f172a, 0.8);
  position: fixed;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  details[open] & {
    pointer-events: all;
    opacity: 0.5;
  }
`;

export const Details = styled.details``;

export const Summary = styled.summary`
  list-style: none;
`;

export const Header = styled.div``;
