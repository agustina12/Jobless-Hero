import "../assets/css/style.css";
function Nav() {
  return (
    <nav className="main-nav">
      <div className="header-logo">
        <h3>Jobless</h3>
      </div>
      <div className="menu-nav">
        <ul>
          <li>Home</li>
          <li>Discover</li>
          <li>Post a Job</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button>Sing Up</button>
      </div>
    </nav>
  );
}
export default Nav;
