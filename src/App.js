// import './App.css';
// import Layout from './layout/layout';

// function App() {
//   return (
//     <Layout>
//     </Layout>
//   );
// }

// export default App;
// import { Component } from 'react';

// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }
  
// export default MyApp
  
import React, { Component } from 'react';

class App extends Component {
    state = {
      restaurants: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/meomeok/restaurants/');
            const restaurants = await res.json();
            this.setState({
              restaurants
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.restaurants.map(restaurant => (
                    <div key={restaurant.restaurant_id}>
                        <h1>{restaurant.restaurant_name}</h1>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;

