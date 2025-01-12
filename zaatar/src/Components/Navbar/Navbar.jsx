import './Navbar.css'

const Navbar = () => {
  // const navbarStyle = backgroundImage
  //   ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
  //   : { backgroundColor: 'white' };
  return (
   
    <div >
       {/* <div className='nav-top'> Sign up today for free shipping & 15% off </div> */}
       <div className='navbar'> 
       <div className='zaatar'> ZAATAR </div>
        <ul className='nav-menu'>
          <li>SHOP</li>
          <li>ABOUT</li>
          <li>JOURNAL</li>
          <li>CONTACT</li>
          <li>Cart</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;

