import React from 'react';
import { Navbar, Header1, Footer, Section, Content, Footer2 } from './components'
import './App.css'
import './index.css'

const App = () => {
    return (
        <div className="App">
                <Header1 />
                <Navbar />
                <Content />
                <Footer />
                <Section />
                <Footer2 />
        </div>
    );
}

export default App;
