import React, { useState, useEffect } from 'react';
import './LoginSignupScreen.css';

const LoginSignupScreen = ({ isOpen, togglePanel }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleFormSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
   
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={togglePanel} />}
      <div className={`login-signup ${isOpen ? 'active' : ''}`}>
        <button onClick={togglePanel} className="close-button">✖</button>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {isSignUp ? (
          <form>
            <div className="input-group">
       
           <input className='input-boxes'
         type="text"
         id="firstName"
         value={inputValues.firstName}
         onChange={handleInputChange}
         required
       />
       <label
         htmlFor="firstName"
         className={inputValues.firstName ? 'filled' : ''}
       >
         First Name
       </label>
     </div>

     <div className="input-group">
       
       <input className='input-boxes'
         type="text"
         id="firstName"
         value={inputValues.firstName}
         onChange={handleInputChange}
         required
       />
       <label
         htmlFor="firstName"
         className={inputValues.firstName ? 'filled' : ''}
       >
         First Name
       </label>
     </div>

     <div className="input-group">
       
       <input className='input-boxes'
         type="text"
         id="firstName"
         value={inputValues.firstName}
         onChange={handleInputChange}
         required
       />
       <label
         htmlFor="firstName"
         className={inputValues.firstName ? 'filled' : ''}
       >
         First Name
       </label>
     </div>

            <p>Already have an account? <button type="button" onClick={handleFormSwitch}>Login</button></p>
          </form>
        ) : (
          <form>
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="login-email" required />

            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" required />

            <button type="submit">Login</button>

            <p className="reset-password">Forgot your password? <button type="button">Reset Password</button></p>
            <p>Don't have an account? <button type="button" onClick={handleFormSwitch}>Sign Up</button></p>
          </form>
        )}
      </div>
    </>
  );
};

export default LoginSignupScreen;
