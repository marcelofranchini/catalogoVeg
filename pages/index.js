import React, { useState } from 'react';
import HeadPage from '../components/head'
import NavbarPage from '../components/navbar/index'
import JumbotronPage from '../components/jumbotron'
import Footer from '../components/footer'


function HomePage() {

    return (
        <div>
            
            <HeadPage/>
            <NavbarPage/>
            <JumbotronPage/>
            <Footer/>
        </div>

    )
}

export default HomePage