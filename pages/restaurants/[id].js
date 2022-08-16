// 동적 라우팅을 위함 
export async function getStaticPaths() {
    const res = await fetch(`http://127.0.0.1:8000/meomeok/restaurants/`)
    const restaurants = await res.json()

    // const paths = [{params: { id: "1" }}, {params: { id: "2"}}]
    // const paths = posts.map((post) => {
    const paths = restaurants.map((restaurant) => {
        return {params: { id: restaurant.restaurant_id.toString() }}
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts
    const res = await fetch(`http://127.0.0.1:8000/meomeok/restaurants/${params.id}/`)
    const restaurant = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: { restaurant } }
  }

export default function Restaurant({ restaurant }) {
    return (
      <div>
        <h1>{restaurant.restaurant_name}</h1>
        <h2>{restaurant.number}</h2>
        <h2>{restaurant.address}</h2>
        <h2>{restaurant.category}</h2>
      </div>
    )
  }