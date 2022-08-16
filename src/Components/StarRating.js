import React, { useState } from "react";
import "../layout/Star.css"

const StarRating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            ★ 
          </button>
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
// export default StarRating

// const StarButton = styled.button`
// background-color: transparent;
// border: none;
// outline: none;
// cursor: pointer;

// .on {
// color: #000;
// }
// .off {
// color: #ccc;
// }
// `

