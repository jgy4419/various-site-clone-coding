import './Menu2.scss';
import React, { useEffect } from 'react';

const Menu2 = () => {
    useEffect(() => {
        // $('#toggle').click(function() {
        //     $(this).toggleClass('active');
        //     $('#overlay').toggleClass('open');
        //    });
        setTimeout(() => {
            const toggleButton = document.getElementById('toggle');
            const overlay = document.getElementById('overlay');
            if (toggleButton) {
                toggleButton.addEventListener('click', () => {
                    // alert('!')
                    toggleButton.classList.toggle('active');
                    overlay.classList.toggle('open');
                })   
            }
        }, 1000);
    }, []);
    return (
        <>
            <div className="container">
  <h1>Fullscreen Menu</h1>
</div>

<div className="button_container" id="toggle">
  <span className="top"></span>
  <span className="middle"></span>
  <span className="bottom"></span>
</div>

<div className="overlay" id="overlay">
  <nav className="overlay-menu">
    <ul>
      <li ><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
        </>
    );
};

export default Menu2;