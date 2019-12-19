import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from '@emotion/core';
import { EventCard } from "../../services/events/models";

export interface CardProps {
  contain: EventCard;
}

const Card: React.FC<CardProps> = ({ contain }) => {
  return (
    <Container>
      <ContainerImage color={contain.image} />
      <Information>
        <h4>{contain.name}</h4>
        <h5><span role="img" aria-label="mapa">🌍</span> {contain.place}</h5>
        <Description>
          <p>{contain.description}</p>
        </Description>
      </Information>
    </Container>
  );
};


// Animations

const InHoverAnimation = keyframes`
  from {
    transform: translateY(0px);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.25);
  }
  to {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
  }
`;

const OutHoverAnimation = keyframes`
  from {
    transform: translateY(-5px);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.25);
  }
  to {
    transform: translateY(0px);
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.25);
  }
`;

// Wrappers on styled

const Description = styled.div`
  height: 60px;
  overflow: hidden;
  margin-top: 5px;

  & p {
    margin: 0px;
  }
`

const Information = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin: 0px 10px 0px 10px;
  padding-bottom: 5px;

  & h4, h5 {
    margin: 0px;
    margin-top: 3px;
  }

  & h5 {
    color: grey;
  }
`

const ContainerImage = styled.div`
  background-image:url(${props => props.color});
  background-color: lightblue;
  height: 100px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover; 
  transform: translateY(-5px);
`


const Container = styled.div`
  background: white;
  border-radius: 3px;
  border: 1px solid grey;
  margin-left: 10px;
  display:flex;
  flex-direction:column;
  width: 170px;
  height: 200px;
  overflow:hidden;
  animation: ${OutHoverAnimation} 0.2s ease-in-out both alternate;

  &:hover {
    animation: ${InHoverAnimation} 0.2s ease-in-out both alternate;
  }  
`

export default Card;
