import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

function Header(){
    return (
<>
        <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>




      <header className="site-navbar site-navbar-target bg-white" role="banner">

        <div className="container">
          <div className="row align-items-center position-relative">

            <div className="col-lg-4">
              <nav className="site-navigation text-right ml-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className="active"><a href="index.html" className="nav-link">Shop</a></li>
                  <li><a href="project.html" className="nav-link">Gift Guides</a></li>
                  <li><a href="services.html" className="nav-link">Style Edit</a></li>
                  <li><a href="services.html" className="nav-link">About</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-4 text-center">
              <div className="site-logo">
                <a href="index.html">MEJURI</a>
              </div>
            
            
                
              <div className="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3 text-black"></span></a></div>
            </div>
            <div className="col-lg-4">
              <nav className="site-navigation text-left mr-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
               
                  <li><a href="about.html" className="nav-link">Stores</a></li>
                  <li><a href="blog.html" className="nav-link">Blog</a></li>
                  <li><a href="contact.html" className="nav-link">Contact</a></li>
                 
                </ul>
                <div>
                    
                        </div>
              </nav>
            </div>


          </div>
        </div>

      </header>
      
    
        

</>


    )
}
export default Header;