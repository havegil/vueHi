import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import BurgerMenuBtnComponent from './components/BurgerMenuBtnComponent';
import Menu from './components/Menu';
import App from './components/App';
import  {AboutUs, WhatWeDo, MeetUs, JoinUs} from './content';


class MainContainer extends React.Component{


    render = () =>{

        return(

            <BrowserRouter> 
            <div>
                <BurgerMenuBtnComponent/>  

                <div className='wrapper'>
                    <div className='global-nav-background'>
                    
                        <div className='global-content-vertical-fix homepage'>
                    
                            <div className='global-content-wrapper'>                        
                               
                                    <Route path="/" exact component={App}/>
                                    <Route path="/about-us" component={AboutUs}/>
                                    <Route path="/what-we-do" component={WhatWeDo}/>
                                    <Route path="/meet-us" component={MeetUs}/>
                                    <Route path="/join-us" component={JoinUs}/>
                                
                            </div>
                        </div>
                    </div>

                    <Menu/>
                </div>
            </div>

            </BrowserRouter>
        );
    }
}
export default MainContainer;   


var destination = document.querySelector('#container');

ReactDOM.render(
   <MainContainer/>,    
    destination
);