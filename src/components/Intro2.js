import "../assets/css/style.css";
import figmaLogo from "../assets/image1.png";
import facebookLogo from "../assets/image2.png";
import vercelLogo from "../assets/image3.png";

function Intro2() {
  return (
    <div className="main-card">
      <h3>Feature Jobs</h3>
      <div className="group-card">
        <div className="card active">
          <div className="header-card">
            <div className="logo-figma">
              <img src={figmaLogo} alt="Logo" />
            </div>
            <div className="title-card">
              <h2>Front-End Developer</h2>
              <p>Figma</p>
            </div>
          </div>
          <div className="body-card">
            <p>
              We are looking for an experienced front-end developer to join our
              team.
            </p>
          </div>
          <hr />
          <div className="footer-card">
            <p className="cat"> Rust</p>
            <p className="price">$70,000 - $90,000</p>
          </div>
        </div>
        <div className="card">
          <div className="header-card">
            <div className="logo-facebook">
              <img src={facebookLogo} alt="Logo" />
            </div>
            <div className="title-card">
              <h2>Data Scientist</h2>
              <p>Facebook</p>
            </div>
          </div>
          <div className="body-card">
            <p>We are seeking a data scientist to join our team.</p>
          </div>
          <div className="footer-card">
            <span>Python</span>
            <p>$100,000 - $130,000</p>
          </div>
        </div>
        <div className="card">
          <div className="header-card">
            <div className="logo-vercel">
              <img src={vercelLogo} alt="Logo" />
            </div>
            <div className="title-card">
              <h2>Technical Writer</h2>
              <p>Vercel</p>
            </div>
          </div>
          <div className="body-card">
            <p>We are seeking a technical writer to join our team.</p>
          </div>
          <div className="footer-card">
            <span>Documentation</span>
            <p>$60,000 - $80,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro2;
