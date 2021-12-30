import React from 'react';
import {Navbar, Header, Section1, Sectionb, SectionC, SectionD, SectionE } from './components'
import './App.css'
import './index.css'

const App = () => {
    return (
        <div className="App">
            <div className=''>
                <Header />
                <Navbar />
                <Section1 />
                <Sectionb />
                <SectionC />
                <SectionD />
                <SectionE />
            </div>
        </div>
    );
}

export default App;
