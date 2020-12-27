import React from 'react';
import Header from './header.component';
import BodyCards from './body.component';
import SwipeButton from './swipeButton.component';

function Home(){
    return(
        <div>
            <Header/>
            <BodyCards/>
            <SwipeButton/>
        </div>
    )
}

export default Home;