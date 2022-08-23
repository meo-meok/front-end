import React, { useState } from "react";
import "../layout/Star.css";
import styled from "styled-components";

const StarContainer = styled.div`
display:flex;
flex-direction:row;
text-align:center;
height:100%;
margin: auto 0;
`; 

const StarButton = styled.button`
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
font-size: 1.2rem;
letter-spacing: -10px;
line-height: 1.5;
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <StarContainer>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarButton
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {
              setRating(index);
              // postRating(); 
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >★ 
          </StarButton>
        );
      })}
    </StarContainer>
  );
};
export default StarRating;


