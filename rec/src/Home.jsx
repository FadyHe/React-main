import Footer from "./Footer.jsx"
import NavBar from "./NavBar.jsx"
import homeDesc from "./assets/Home-desc.jpg"
import prod1 from "./assets/prod1.jpg"
import prod2 from "./assets/prod2.jpg"
import prod3 from "./assets/prod3.jpg"
import homeRight from "./assets/home-right.jpg"
import homeLeft from "./assets/home-left.jpg"

function Home() {
  return(
    <> 
      <NavBar />  
      <div className="home">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="hero-content">
            <h1>Step into a world where elegance meets edge. At Veloura, every thread tells a story of refinement, confidence, and timeless style</h1>
            <h2>Veloura isn't just fashion, It's your signature.</h2>
            <button className="home-about-button">About</button>
          </div>
          <div className="hero-image">
            <img src={homeDesc} alt="Model showcasing Veloura fashion" />
          </div>
        </section>

        {/* Products Showcase Section */}
        <section className="home-products-showcase">
          <h2 className="section-title">Discover the Essence of Veloura</h2>
          
          <div className="products-grid">
            <div className="product-card product-card-left">
              <div className="product-content">
                <p>Turn heads with this bold combo of crimson stilettos and a sleek black handbag. Perfect for nights out or power moves during the day. Confidence? Unshakable.</p>
              </div>
              <div className="product-image">
                <img src={prod1} alt="Crimson stilettos with black handbag" />
              </div>
            </div>
            
            <div className="product-card product-card-right">
              <div className="product-image">
                <img src={prod2} alt="Denim and knit casual chic outfit" />
              </div>
              <div className="product-content">
                <p>Stay effortlessly cool with a denim-and-knit pairing that screams casual chic. Whether it's campus runs or weekend brunches, this fit's got your back.</p>
              </div>
            </div>

            <div className="product-card product-card-left">
              <div className="product-content">
                <p>The vibe? Bright, bold, and totally you. This vibrant jacket and easy glam are a match made in selfie heaven. Smile big, you're the main character.</p>
              </div>
              <div className="product-image">
                <img src={prod3} alt="Vibrant jacket with glamorous styling" />
              </div>
            </div>
          </div>
          
          <button className="home-discover-button">Discover More</button>
        </section>

        {/* Lifestyle Section */}
        <section className="home-lifestyle">
          <div className="lifestyle-item">
            <div className="lifestyle-content">
              <p>Tailored strength with effortless movement. Confidence built into every seam.</p>
            </div>
            <div className="lifestyle-image">
              <img src={homeLeft} alt="Tailored fashion with strength and movement" />
            </div>
          </div>
          <button className="lifestyle-button">Get The Fit</button>

          <div className="lifestyle-item lifestyle-item-reverse">
            <div className="lifestyle-image">
              <img src={homeRight} alt="Layered fashion for height and texture" />
            </div>
            <div className="lifestyle-content">
              <p>Layered for height, made to rise. Textures meet open skies in fearless silhouettes.</p>
            </div>
          </div>
          <button className="lifestyle-button">Get The Fit</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home