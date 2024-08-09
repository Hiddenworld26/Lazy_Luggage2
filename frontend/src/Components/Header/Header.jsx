import React, { useState, useEffect } from 'react';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
//import LoginSignupScreen from '../../screens/LoginSignupScreen/LoginSignupScreen';
import { useLocation, useNavigate } from 'react-router-dom';
import SlidingPanel from '../../screens/SlidingPanel/SlidingPanel';
import CloseIcon from '@mui/icons-material/Close';
import LoginSignupScreen from '../../screens/LoginSignupScreen/LoginSignupScreen';

const Header = () => {
  const location = useLocation();
  
  const [scrolled, setScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false); 
  const [isPanelOpen2, setIsPanelOpen2] = useState(false); 
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate(); 

  const handleMenuToggle = () => {
    navigate("/menu2");
  };

  const accountIconClickHandler = () => {
    setIsPanelOpen(true);

  };

  const cartIconHandler = () => {
    setIsPanelOpen2(true); 
  };

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev); 
    
  };
  const togglePanel2 = () => {
    
    setIsPanelOpen2(prev => !prev); 
  };

  const addToCart = () => {
    
    setCartItems(prevCount => prevCount + 1);
  };

  const crossiconheader = ['/menu2' ];

  const nocrossiconheader = !crossiconheader.includes(location.pathname);
  return (
    <>
      {nocrossiconheader && (
        <>
          <nav className={`Header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-left">
              <MenuSharpIcon
                className="menu-toggle"
                style={{ color: scrolled ? 'black' : 'black' }}
                onClick={handleMenuToggle}
              />

              <h3 className='header-navbar' style={{ color: scrolled ? 'black' : 'black' }}>THE LAZY LUGGAGE</h3>
            </div>
            <div className="navbar-right">
              {/* <SearchSharpIcon className="right-icons" style={{ color: scrolled ? 'black' : 'white' }} /> */}
              <AccountCircleRoundedIcon className="right-icons" style={{ color: scrolled ? 'black' : 'black' }} onClick={accountIconClickHandler} />
              <ShoppingCartRoundedIcon
        className="right-icons-cart"
        style={{ color: scrolled ? 'black' : 'black' }}
        onClick={cartIconHandler}
      >
        {cartItems > 0 && (
          <span className="cart-badge">{cartItems}</span>
        )}
      </ShoppingCartRoundedIcon>
            </div>
          </nav>
          <SlidingPanel isOpen={isPanelOpen2} togglePanel={togglePanel2} />
          <LoginSignupScreen isOpen={isPanelOpen} togglePanel={togglePanel} />
        </>
      )}

      {location.pathname === '/menu2' && (
        <>
          <nav className="Header" style={{ position: "fixed" , backgroundColor: "white"}}>
            <div className="header-left">
              <CloseIcon className="close-icon" onClick={() => navigate(-1)} />
            </div>
          </nav>
          
        </>
      )}
    </>
  );
};

export default Header;
