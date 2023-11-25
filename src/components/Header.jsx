import React from 'react';

export default function Header() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const navbarHeight = 0;
      const offset = targetSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <nav className="navbar  navbar-expand-lg fixed-top container" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <i className="bi bi-text-paragraph fs-1"></i>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body justify-content-center justify-content-lg-end">
      <ul className="navbar-nav">
           <li className="nav-item ">
           <i className="bi bi-house-fill"></i>
             <a className="nav-link position-relative " href="#about"  data-target="#about" onClick={handleNavClick}>Home</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-journal-bookmark-fill"></i>
             <a className="nav-link position-relative" href="#about"  data-target="#about" onClick={handleNavClick}>About</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-person-lines-fill"></i>
 
             <a className="nav-link position-relative" href="#resume "  data-target="#resume"onClick={handleNavClick}>Resume</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-database-fill-gear"></i>
             <a className="nav-link position-relative " href="#service"  data-target="#service"onClick={handleNavClick}>Services</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-award-fill"></i>
             <a className="nav-link position-relative " href="#skill"  data-target="#skill"onClick={handleNavClick}>Skill</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-boxes"></i>
             <a className="nav-link position-relative " href="#project"  data-target="#project" onClick={handleNavClick}>Projects</a>
           </li>
           <li className="nav-item ">
           <i className="bi bi-chat-square-text-fill"></i>
             <a className="nav-link position-relative " href="#contact" data-target="#contact" onClick={handleNavClick}>Contact</a>
           </li>

         </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
