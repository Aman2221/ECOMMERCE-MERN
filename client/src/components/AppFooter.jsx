import React from 'react'

const AppFooter = () => {
    return (
        <div className='footer_div'>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="footer_">
                <h5 className="white-text">About</h5>
                <p className="footer_about">This is an e-commerce website for selling laptops online.</p>
              </div>
              <div className="connect_div">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <div className="social-links">
                    <a href="https://github.com/Aman2221"><i className="fab fa-github"></i></a>
                    <a href="https://twitter.com/Aman23398618"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100012875318770"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/aman_singhhhhhh/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aman-singh-6a81281b3/"><i className="fab fa-linkedin-in"></i></a>
                </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container_footer">
            © 2021 All rights reserved
            </div>
          </div>
        </footer> 
        </div>
    )
}

export default AppFooter
