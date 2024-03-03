import React from 'react';
import NavbarComponent from "./componentsHome/navbar";
import HeaderSec from './componentsHome/header'; 
import Done from './componentsHome/whatwedo'; 

function HomePage() { 
    return (
        <div>
            <NavbarComponent/>
            <HeaderSec/>
            <Done/>
        </div>
    );
}

export default HomePage;
