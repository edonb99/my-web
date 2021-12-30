import React from 'react';
import {Navbar, Header, Section1, Sectionb, SectionC } from './components'
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
            </div>
        </div>
    );
}

export default App;
