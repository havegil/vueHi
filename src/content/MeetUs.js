
import React from 'react';
import Footer from './Footer';
import QuoteConfig from './QuoteConfig';
import $ from'jquery';

class MeetUs extends React.Component {

    componentDidMount = () => {
        this.ActivateImgSwap();        
    }

     ActivateImgSwap = ()  => {
			
        $('.people img').each(function(){
            $(this).mouseover(function(){
                var imgSrc = $(this).attr('src');
                var strPeep =imgSrc.replace('.jpg', '.gif');
                $(this).prop('src', strPeep) ;
            });
            
            $(this).mouseout(function(){
                var imgSrc = $(this).attr('src');
                var strPeep =imgSrc.replace('.gif', '.jpg');
                $(this).prop('src', strPeep);
            });
        });
	}

    render = () => {
        return(
            <div id = 'main' className ="main about-us">
            <div className="section" id="section3">
                <div className="meet_us_wrapper">
                    <div className="mu_intro">
                        <h2>Meet us</h2>
                        <p>Our people are PhDs, MBAs, highly experienced, professional, and thoroughly original. Get to know us:</p>
                    </div>
                    <div className="row_people">
                        
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/audrey.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Audrey Bera Kauff</span><br/>
                                {/* <!-- <span className="peep_title">Creative Director - Copy</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/audrey-bera-kauff-985375156/" target="_blank"  rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>	
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/glenn.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Glenn Britland</span><br/>
                                {/* <!-- <span className="peep_title">Creative Director</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/glenn-britland-26060a7/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/vikram.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Vikram Kanda, PhD</span><br/>
                                {/* <!-- <span className="peep_title">SVP Medical Strategy</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/vikram-kanda-phd-00536543/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                        
                        {/* <!-- row 2 -->*/}
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/daisy.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Daisy Kaplan, PhD</span><br/>
                                {/* <!-- <span className="peep_title"> Medical Writer</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/daisy-kaplan-b89ba618/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>	
                        <div className="peep_container">
                            <div className="people"><img src="images/meet-us/vanessa.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Vanessa Le</span><br/>
                                {/*<!-- <span className="peep_title">Administrative Assistant</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/vanessa-t-le-4rx4/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/fahmy.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Fahmy Mamuya, PhD</span><br/>
                                {/* <!-- <span className="peep_title">Medical Writer</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/fahmy-mamuya-ph-d-mba-737b6159/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                        
                        {/*<!-- row 3 -->*/}
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/michaela.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Michaela McGrory</span><br/>
                                {/* <!-- <span className="peep_title">Account Executive</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/michaela-mcgrory-44755775/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>

                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/erik.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Erik Ronzone, PhD</span><br/>
                                {/*<!-- <span className="peep_title">Senior Medical Writer</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/erik-ronzone-a828b688/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>										


                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/kathryn.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Kathryn Wilson, MBA</span><br/>
                                {/* <!-- <span className="peep_title">Managing Director</span><br/> -->*/}
                                <span className="peep_social"><a href="https://www.linkedin.com/in/kpwilson/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                        
                    
                        {/* <!-- row 4 -->*/}
                        <div className="peep_container">
                            <div className="people" ><img src="images/meet-us/kristin.jpg" alt=""/></div>
                            <div>
                                <span className="peep_name">Kristin Wilson</span><br/>
                                
                                <span className="peep_social"><a href="https://www.linkedin.com/in/kristinriv/" target="_blank" rel="noreferrer noopener">LinkedIn profile</a></span>
                            </div>
                        </div>
                                            
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
    }
}
export default MeetUs;