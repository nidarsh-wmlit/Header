import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
//import styles from '../../styles/Navbar.css'

 function Navbar () {
    return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Shop <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">Gifts</a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="nav-item nav-link" href="#">Gifts</a>
    </div>
    </div>
    
     
    </nav>

    
    
    )
    
} 

export default Navbar;