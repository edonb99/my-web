import React from 'react';
import { Photo, TextSection } from './index'

const Content = () => {
    return (
        <div>
        <div className='section-container'>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumn: 'span 3', gap: '20px'}}>
            <Photo className='span-2 ' h1={'How to Dismatle a Nuclear Bomb'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2020-05/Screen%20Shot%202019-03-28%20at%202.42.27%20PM.png?h=8f74817f&amp;itok=vKIgW4LX'} />
            <TextSection p={'It is possible to dismantle our nuclear weapons. Over the years, the U.S. and Russia have reduced their arsenals to less than one-sixth of what they were during the Cold War. The current security climate threatens to undo all that work, but we can choose another path. Learn how you can help.'}
                    h3={'Solutions'} className='span-1 order-1'/>
        </div>

        <Photo logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_56455409_master.jpg?h=9a3874b6&itok=6USK-MnG'} 
        p={'Article'} h1={'What You Can Do About Nuclear Weapons'}
        className='span-3 order-1'
        />

        <TextSection 
            h3={'Impacts'} 
            p={'Nuclear weapons are the most destructive weapons on the planet. You may not even realize how powerful they really are. Use this tool to better understand the effects of a nuclear detonation. Learn more about how the fireball, shock wave, radiation, and heat would separately impact a targeted city.'}
            className='span-full order-1 padding-80'
        />

        <Photo p={'Interactive'} h1={'What happens in a bomb blast'} className='span-full order-1'
            logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-03/us-nuclear-weapons-test-at-eniwetok-in-1952_7936245684_o.jpg?itok=WkjA590x'} 
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumn: 'span 3', gap: '20px'}}>
            <TextSection p={'A lack of political will is the main barrier to getting rid of nuclear weapons. The technical know-how is there, but countries believe they need their nuclear weapons for security. Learn more about the rivalries that drive countries to pursue nuclear weapons.'}
                         h3={'Politics'} className='span-1 order-1'/>
            <Photo p={'Article'}  className='span-2 order-1' h1={'U.S. and Russia: Arms Race to Nowhere'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_170982266_master.jpg?h=5098d91f&itok=o664takg'} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumn: 'span 3', gap: '20px'}}>
            <Photo className='span-1 order-1' p={'Article'} h1={'The Threat of a Nuclear Iran'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_868691436_master.jpg?h=c95bc20e&itok=8N3mEkpc'}/>
            <Photo className='span-1 order-1' p={'Article'} h1={'North Korea on the Brink'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_851817428_master.jpg?h=b1dadf27&itok=ZTk5pIz7'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Will India and Pakistan’s Conflict Go Nuclear?'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_498922226_master.jpg?h=cb0d593c&itok=zYqAzruU'} />
        </div>

        <TextSection h3={'Costs and Risks'} p={'It doesn’t take a war for nuclear weapons to hurt people. The truth is that nuclear weapons cause ongoing harm, including environmental contamination and exploitation of marginalized communities. Learn more about the costs and risks of just having nuclear weapons, even if they remain unused.'}
                    className='span-full order-1 padding-80'
            />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumn: 'span 3', gap: '20px'}}>
            <Photo className='span-2 order-1' p={'Article'} h1={'The Human Cost'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_118368869_master.jpg?h=0c170278&itok=5ng7-FWT'}/>
            <Photo className='span-1 order-1' p={'Article'} h1={'Smugglers, Thieves, and Terrorists'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_ALA_BH3N28_nuclear_reactor.jpg?h=9a3874b6&itok=epCCpSmV'}/>

            <Photo className='span-1 order-1' p={'Timeline'} h1={'Accidents, Errors, and Explosions'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/Goldsboro_Mk_39_Bomb_1%20%281%29.jpg?h=0afe0da1&itok=w1sSAUFM'}/>
            <Photo className='span-1 order-1' p={'Article'} h1={'The DRC and America’s Nuclear Weapons'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2019-05/GettyImages-521773116.jpg?h=bc8e37b9&itok=XQsG7DIz'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'The Threat of a Paying for America’s Arsenal Iran'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/01_ARC_CL_BQ_NAV_030814-N-0000X-001_USS_Ohio.jpg?h=3d31ca9b&itok=gcdYRHYH'} />
        </div>

        <TextSection h3={'History'} p={'Nuclear weapons were invented about 75 years ago, and they changed the way countries interact with one another. Competition, posturing, and threats bring higher levels of risk when nuclear weapons are involved. Learn more about the history of nuclear weapons, from their invention during World War II to their present-day impacts on international security.'}
                      className='span-full order-1 padding-80'
           />

        <Photo className='span-full order-1' p={'Timeline'} h1={'Nuclear History: World War II'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/01_ARC_CL_BQ_WKI_Atomic_cloud_over_Nagasaki_from_Koyagi-jima.jpg?h=852325d6&itok=keh_8RcV'} />
        <Photo className='span-full order-1' p={'Timeline'} h1={'Nuclear History: The Cold War'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/01_ARC_CL_BQ_WKI_Atomic_cloud_over_Nagasaki_from_Koyagi-jima.jpg?h=852325d6&itok=keh_8RcV'} />
        <Photo className='span-full order-1' p={'Timeline'} h1={'Nuclear History: The Current Era'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2018-02/ARC_CL_BQ_GTY_535308894_master.jpg?h=973df0d5&itok=9XApdCTQ'} />
        <Photo className='span-full order-1' p={'Timeline'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumn: 'span 3', gap: '20px'}}>
            <Photo className='span-1 order-1' p={'Article'} h1={'Sabotaging the Nazi Bomb'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_NIA_sleigh.jpeg?itok=XW5PYxZm'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />

            <Photo className='span-1 order-1' p={'Article'} h1={'The Nuclear Freeze Movement'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-02/ARC_CL_BQ_GTY_56455409_master-slideshow_0.jpg?h=b8aae163&itok=DIKx7nft'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />

            <Photo className='span-1 order-1' p={'Article'} h1={'Project Iceworm'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2018-05/GettyImages-179675095.jpg?h=0edc127b&itok=1N0xqRBM'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />

            <Photo className='span-1 order-1' p={'Article'} h1={'The Gendered Impacts of the Hiroshima & Nagasaki Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/near_square_md/public/2020-07/GettyImages-53313850-crop%282%29_0.jpeg?h=5f2cda5c&itok=38Q1vuWt'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />
            <Photo className='span-1 order-1' p={'Article'} h1={'Hiroshima & Nagasaki: the 76th Anniversary of the Atomic Bombings'} logo={'https://cms.outrider.org/sites/default/files/styles/wide_lg/public/2020-07/GettyImages-78964772.jpg?h=34e32d37&itok=pxClM1Ok'} />
        </div>

    </div>
        </div>
    );
}

export default Content;
