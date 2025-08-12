import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import founderimg from "./assets/founder.jpg";
function AboutPage() {
  return (
    <>
      <NavBar />
      <section className="about-page">

        <h1>About Us</h1>
        <div className="about-content-row">
          <p>
          Veloura was never about fashion — it’s about feeling.
          Every piece we design is rooted in quiet power. We don’t chase trends or noise; we create timeless silhouettes that speak in their own frequency — subtle, sharp, and unforgettable. Veloura is for those who move through the world with purpose. Those who don’t just wear clothes, but wear vision.
          Our collections are built on precision tailoring, elevated basics, and bold simplicity. Ethically produced and thoughtfully curated, Veloura is committed to quality without compromise. We exist in the space between structure and fluidity — a brand for those who lead, not follow.
          Welcome to Veloura. Where style is instinct, and everything else is detail.
          </p>
          <img src={founderimg} alt="" />
        </div>
      </section>


      <section className="contact-section">
        <h1>Contact Us</h1>

      <div className="grid-two">
        <div className="contact-form-left">
          <section className="names-section">
            <div>
              <p>First Name</p>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </section>
          <section className="email-section">
            <p>Your E-mail adress</p>
            <input type="email" placeholder="example @ mail.com" />
          </section>
        </div>


        <div className="contact-form-right">
          <p>Your Message</p>
          <input type="text" placeholder="Enter your message" />
        </div>
      </div>
      <div className="btn-submit-div">
          <button className="contact-submit-button">Submit</button></div>
      </section>
      <Footer />
    </>
  );
}
export default AboutPage;