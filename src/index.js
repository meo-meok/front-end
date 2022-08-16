// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Link from 'next/link';

// export async function getStaticProps() {
//   const res = await fetch('http://127.0.0.1:8000/meomeok/restaurants/')
//   const restaurants = await res.json()
//   return {
//     props: {
//       restaurants,
//     }
//   }
// }

// export default function Home({restaurants}) {
//   return (
//     <div>
//       <main>
//         <h1>
//           Test Restaurant DB!
//         </h1>
//         <ul>
//           {restaurants.results.map((restaurant) => {
//             return (
//               <li key={restaurant.id}>
//                 <Link href={`/restaurants/${restaurant.id}`}>{restaurant.restaurant_name}</Link>
//               </li>
//           )})}
//         </ul>
//         <div>{console.log(restaurants)}</div>
//       </main>
//     </div>
//   )
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();