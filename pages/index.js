import React, { Componet } from 'react';
import ReactDOM from 'react-dom/client';
// import '../src/index.css';
// import App from '../src/App';
// import reportWebVitals from '../src/reportWebVitals';
import Link from 'next/link';

//index가 최종 화면을 노출 시켜주게 된다.

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/meomeok/restaurants/')
  const restaurants = await res.json()
  return {
    props: {
      restaurants,
    }
  }
}

export default function Home({restaurants}) {
  return (
    <div>
      <main>
        <h1>
          Test Resaturant DB in React!
        </h1>
        <ul>
          {restaurants.map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <Link href={`/restaurants/${restaurant.restaurant_id}`}>{restaurant.restaurant_name}</Link>
              </li>
          )})}
        </ul>
        <div>{console.log(restaurants)}</div>
      </main>
    </div>
  )
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );