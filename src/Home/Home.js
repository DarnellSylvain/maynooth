import React from 'react';

import './home.css'
import Clearance from './Clearance';
import Showcase from './Showcase';
import InspirationIdeas from './InspirationIdeas';
import ProductDisplay from '../sharedComponents/ProductDisplay';

const Home = () => {
    return ( 
        <React.Fragment>
            <Showcase />
            <ProductDisplay title="New in Store" />
            <InspirationIdeas/>
            <Clearance/>
        </React.Fragment>
     );
}
 
export default Home;