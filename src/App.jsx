import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <div className="grid max-w-7xl mx-auto p-6">
        <Header/>
        <Hero/>
        <Footer/>
      </div>
    </>
  );
}

export default App;