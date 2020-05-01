import React from 'react';
import  {AboutUs, WhatWeDo, MeetUs, JoinUs, Footer} from './PageExporter';

class SecondaryPageCmp extends React.Component {

   secondaryPageComponents = {
       about_us: AboutUs, 
        what_we_do: WhatWeDo,            
        join_us: JoinUs,
        meet_us: MeetUs,
        footer:Footer 
    }
                

    render = () => {
        
        const Page =  this.secondaryPageComponents[this.props.currState];
        
        return (
            <Page />            
        );
        
    }
};

export default SecondaryPageCmp;