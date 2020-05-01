
import React from 'react';
import {Link} from 'react-router-dom';

const Footer = props => {

    return (
        <div className="footer">
            
            <div className="footerContent">
                
                <div className="connect">
                    <div className="copy_lrg">Contact us</div>
                    <div className="copy_rg">Reach out and say hello.</div>
                </div>
                
                <div className="address">
                    <p><span className="address_bold">VUE Health</span></p><br/>
                    <p><span className="address_italic">100 Summer St, Suite 1600<br/>
                    Boston, MA 02110<br/>
                        <Link to="tel:+1-617-456-5001" rel="noreferrer noopener" >617-456-5010</Link><br/>
                        <Link to="mailto:info@vue-health.com?subject=Vue Health contact" rel="noreferrer noopener">info@vue-health.com</Link></span>
                    </p>
                    <div className="social_wrapper">						
                        <div className="social"><Link to="https://www.linkedin.com/company/11076625/" target="_blank" rel="noreferrer noopener"><img src="images/social/social_linkedin.jpg" alt=""/></Link></div>
                        <div className="social"><Link to="https://www.facebook.com/vuehealthinsights/" target="_blank" rel="noreferrer noopener"><img src="images/social/social_facebook.jpg" alt=""/></Link></div>
                        <div className="social"><img src="images/social/social_twitter.jpg" alt=""/></div>
                        <div className="social"><img src="images/social/social_instagram.jpg" alt=""/></div>
                    </div>
                </div>	
            </div>
        </div>
    );
};
export default Footer;