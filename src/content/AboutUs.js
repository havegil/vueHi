import React from 'react';
import Footer from './Footer';
import QuoteConfig from './QuoteConfig';


const AboutUs = props => {

        return (
            <div id = 'main' className ="main about-us">
                <div className="section" id="section1">
                    <div className="about_us">
                    
                        <div className="about_us_wrapper b-copy">
                            <img src="images/aboutUs.jpg" alt="About us"/>
                            <h1>About us</h1>
                        </div>
                    </div>
                    <div className="about_us_wrapper b-copy">
                        <div className="about_us_content_wraper content_pad">
                            <h2>Our focus is in the pharmaceutical, biotech, and life science industry.</h2>
                            <p>Our expertise spans a vast range of key therapeutic and disease state categories, including hematology,
                neurology, oncology, and rare diseases, to name a few. But what gets us excited are the new
                advancements and innovations in medicine, which may explain our strong affinity for Boston, the life
                science hub of the East coast and our beloved hometown.</p>
                            <p>Whether working with up-and-coming biotech or established pharmaceutical companies, here’s where
                our talents really shine:</p>
                            
                            <ul className="about_us_list">
                                <li>Emerging technologies and therapeutic platforms</li>
                                <li>New product development</li>
                                <li>Novel drug delivery systems</li>
                                <li>New molecules, biologics, and compound discovery</li>	
                            </ul>
                            
                            <p>Download a simple fact sheet about us and our capabilities <a href="pdf/vue_health_capabilities.pdf" target="_blank">here</a></p>                    

                            <h2>We are independent</h2>
                            <p>Being independent allows us to be our own stakeholders. Decisions are made based on who and what
                matters most: our clients and their brands.</p>
                            <p>We have the freedom to take calculated risks. We have the luxury of working with the clients we truly
                want to work with in a way that ensures that they get the services and support they need and deserve.</p>
                            <p>There are no silos. We come at communications from a unique VUE. Sound strategic thinking takes into
                account medical, commercial, and creative, right from the start.</p> 
                            
                            <p>As an independent agency, we also attract a different kind of talent. Our people value autonomy, are
                empowered, and have entrepreneurial instincts. It allows us to build your team with senior-level
                professionals who really do love what they do.</p> 
                        </div>
                        
                        <div className="phrase_container">
                            <div className="phrase_wrapper">
                                <QuoteConfig/>
                            </div>
                        </div>

                    </div>	

                    <Footer />                     
          
                </div>
            </div>
        );
};
export default AboutUs;