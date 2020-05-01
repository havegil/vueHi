import React from 'react';

const FullPageContact = props => {

    return(

        <div className="contact">				
										
            <div className="contact_content">
                
                <div className="contact_connect">
                    <div className="contact_copy_lrg">Contact us</div>
                    <div className="contact_copy_blurb">Reach out and say hello.</div>
                </div>
                
                <div className="contact_address">
                    
                    <p>
                        <span className="contact_address_bold">VUE Health</span><br/>
                        <span className="contact_address_italic">100 Summer St, Suite 1600<br/>
                        Boston, MA 02110<br/>
                        <a href="tel:+1-617-456-5001">617-456-5010</a><br/>
                        <a href="mailto:info@vue-health.com?subject=Vue Health contact" rel="noopener noreferrer">info@vue-health.com</a></span>
                    </p>
                    <div className="contact_social_wrapper">						
                        <div><a href="https://www.linkedin.com/company/11076625/" target="_blank" rel="noopener noreferrer"><img src="images/social/social_linkedin.jpg" alt=""/></a></div>
                        <div><a href="https://www.facebook.com/vuehealthinsights/" target="_blank" rel="noopener noreferrer"><img src="images/social/social_facebook.jpg" alt=""/></a></div>
                        <div><img src="images/social/social_twitter.jpg" alt=""/></div>
                        <div><img src="images/social/social_instagram.jpg" alt=""/></div>
                    </div>

                </div>	

            </div>

        </div>
    );
}
export default FullPageContact;