import './footer.css';

 export function Footer() {
     return (
         <footer className="footer-container">
             <div className="footer-content">
                 <div className="footer-section about">
                     <div className="footer-logo">
                         <img src="src/assets/img-removebg-preview.png" alt="Company Logo" />
                     </div>
                     <p className="footer-description">
                         We provide innovative solutions to help businesses grow and succeed in today's digital landscape.
                     </p>
                     <div className="footer-social">
                         <div className="social-icon"><i className="fa fa-facebook"> <img src="src/assets/img_1.png"/></i></div>
                         <div className="social-icon"><i className="fa fa-twitter"><img src="src/assets/img_3.png"/></i></div>
                         <div className="social-icon"><i className="fa fa-instagram"><img src="src/assets/img_4.png"/></i></div>
                         <div className="social-icon"><i className="fa fa-linkedin"><img src="src/assets/img_2.png"/></i></div>
                     </div>
                 </div>

                 <div className="footer-section links">
                     <h3>Quick Links</h3>
                     <ul>
                         <li><a href="#home">Home</a></li>
                         <li><a href="#about">About Us</a></li>
                         <li><a href="#services">Services</a></li>
                         <li><a href="#portfolio">Portfolio</a></li>
                         <li><a href="#contact">Contact</a></li>
                     </ul>
                 </div>

                 <div className="footer-section contact">
                     <h3>Contact Us</h3>
                     <p><i className="fa fa-map-marker"></i> 123 Shilawansha Road Goviyapana Ahangama</p>
                     <p><i className="fa fa-phone"></i> +94 5678980</p>
                     <p><i className="fa fa-envelope"></i> Dinithi@gmail.com</p>
                 </div>
             </div>

             <div className="footer-bottom">
                 <p>&copy; {new Date().getFullYear()} Company Name. All Rights Reserved.</p>
             </div>
         </footer>
     );
 }