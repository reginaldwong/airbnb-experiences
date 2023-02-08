import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        price={item.price}
        image={item.coverImg}
        rating={item.stats.rating}
        review={item.stats.reviewCount}
        location={item.location}
        title={item.title} 
        host={item.host}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App;
