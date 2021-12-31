import React from 'react';
import {Navbar, Header, Section1, Sectionb, SectionC, SectionD, SectionE, Photo, TextSection } from './components'
import './App.css'
import './index.css'

const App = () => {
    return (
        <div className="App">
            <div className=''>
                <Header />
                <Navbar />

                <div className='section-container'>
                    <Photo style={{order:'1'}} p={''} h1={'How to Dismatle a Nuclear Bomb'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2020-05/Screen%20Shot%202019-03-28%20at%202.42.27%20PM.png?h=8f74817f&amp;itok=vKIgW4LX'} />
                    <TextSection p={'It is possible to dismantle our nuclear weapons. Over the years, the U.S. and Russia have reduced their arsenals to less than one-sixth of what they were during the Cold War. The current security climate threatens to undo all that work, but we can choose another path. Learn how you can help.'}
                                h3={'Solutions'}/>
                 </div>


                <Photo logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_56455409_master.jpg?h=9a3874b6&amp;itok=6USK-MnG'} 
                p={'Article'} h1={'What You Can Do About Nuclear Weapons'}
                style={{ width: '91%' }}
                />

                <TextSection h3={'Impacts'} p={'Nuclear weapons are the most destructive weapons on the planet. You may not even realize how powerful they really are. Use this tool to better understand the effects of a nuclear detonation. Learn more about how the fireball, shock wave, radiation, and heat would separately impact a targeted city.'}
                    style={{ padding:'80px', width:'90%'}}
                />

                <Photo p={'Interactive'} h1={'What happens in a bomb blast'}  style={{width:'91%'}}
                logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-03/us-nuclear-weapons-test-at-eniwetok-in-1952_7936245684_o.jpg?itok=WkjA590x'} 
                />

                <div className='section-container'>
                    <TextSection p={'A lack of political will is the main barrier to getting rid of nuclear weapons. The technical know-how is there, but countries believe they need their nuclear weapons for security. Learn more about the rivalries that drive countries to pursue nuclear weapons.'}
                                h3={'Politics'}/>
                    <Photo p={'Article'} h1={'U.S. and Russia: Arms Race to Nowhere'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_170982266_master.jpg?h=5098d91f&itok=o664takg'} />
                 </div>
                
                 <div className='section-container'>
                    <Photo style={{width: '33.33%'}} s={{height:'400px'}} p={'Article'} h1={'The Threat of a Nuclear Iran'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_868691436_master.jpg?h=c95bc20e&itok=8N3mEkpc'}/>
                    <Photo style={{width: '33.33%'}} s={{height:'400px'}} p={'Article'} h1={'North Korea on the Brink'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_851817428_master.jpg?h=b1dadf27&itok=ZTk5pIz7'} />
                    <Photo style={{width: '33.33%'}} s={{height:'400px'}}  p={'Article'} h1={'Will India and Pakistan’s Conflict Go Nuclear?'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_498922226_master.jpg?h=cb0d593c&itok=zYqAzruU'} />
                 </div>

                 <TextSection h3={'Costs and Risks'} p={'It doesn’t take a war for nuclear weapons to hurt people. The truth is that nuclear weapons cause ongoing harm, including environmental contamination and exploitation of marginalized communities. Learn more about the costs and risks of just having nuclear weapons, even if they remain unused.'}
                 style={{ padding:'80px', width:'90%'}}
                    />

                <div className="section-container">
                    <Photo />
                    <Photo style={{width:'33.33%'}} s={{height:'377px'}}/>

                    <Photo style={{width:'33.33%' , order:'4' }} s={{height:'377px'}}/>
                    <Photo style={{width:'33.33%'}} s={{height:'377px'}}/>
                    <Photo style={{width:'33.33%'}} s={{height:'377px'}}/>
                </div>

            </div>
        </div>
    );
}

export default App;
