import Vlogo from "./assets/Vlogo.png"
import social1 from "./assets/social1.png"
import social2 from "./assets/social2.png"
import social3 from "./assets/social3.png"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="brand section1">
          <img src={Vlogo} alt="" className="logo" />
          <h1 className="logo-text">Veloura</h1>
        </div>

      <div className="section2">Learn More
        <p>About Veloura</p>
        <p>Press Release</p>
        <p>Environment</p>
        <p>Jobs</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>


      <div className="section3">Tickets & Booking
        <p>Veloura Tickets</p>
        <p>Season Pass</p>
        <p>Vecation Package</p>
      </div>


      <div className="section4">Contact Us
        <p>Reservation: +91 1234 5678</p>
        <p>Customer Service: +91 8765 4321</p>
      </div>


      <div className="section5">Social
        <div className="social-icons">
            <img src={social1} alt="Social Icon 1" className="social-icon" />
            <img src={social2} alt="Social Icon 2" className="social-icon" />
            <img src={social3} alt="Social Icon 3" className="social-icon" />
        </div>
      </div>
  </div>

      <span className="line"></span>

      <div className="section6">
        <p>© 2025 Veloura. All rights reserved.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </footer>
  );
}
export default Footer;