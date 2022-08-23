import React, { useState } from "react";
import "../layout/Star.css";
import styled from "styled-components";


// function postRating () 
// {
//   const param = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({user:, restaurant:, star, post_date, post_body}) 
//   }
//   fetch('', param) 
//   .then(type=>type.json())
//   .then(result=>{});
// }
// fetch('http://localhost:3333/topics/', param) 
// .then(type=>type.json())
// .then(result=>{});
const StarButton = styled.button`
background-color: transparent;
border: none;
outline: none;
cursor: pointer;
font-size: 1.5rem;
margin: 0;
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarButton
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => {
              setRating(index);
              // postRating(); 
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            ★ 
          </StarButton>
        );
      })}
    </div>
  );
};
export default StarRating;

// const StarRating = () => {
//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);
//     return (
//       <div className="star-rating">
//         {[1, 2, 3, 4, 5].map((index) => {
//           index += 1;
//           console.log(index);
//           return (
//             <StarButton
//               //type="button"
//               key={index}
//               className={index <= (hover || rating) ? "on" : "off"}
//               onClick={() => setRating(index)}
//               onMouseEnter={() => setHover(index)}
//               onMouseLeave={() => setHover(rating)}
//             >
//               <Star>★</Star>
//             </StarButton>
//           );
//         })}
//       </div>
//     );
//   };

