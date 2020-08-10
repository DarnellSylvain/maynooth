import React from 'react';
import rightImage from '../Assets/Images/pexels-mark-mccammon-2724749.jpg'
import left1Image from '../Assets/Images/pexels-pixabay-271743.jpg'
import left2Image from '../Assets/Images/pacific-office-interiors-GDz5SJ3fuAQ-unsplash.jpg'
import left3Image from '../Assets/Images/steve-johnson-MqP5vi4IuSU-unsplash.jpg'
import left4Image from '../Assets/Images/pexels-vecislavas-popa-1571459.jpg'

const InspirationIdeas = () => {
    return ( 
        <div className="inspirationIdeas-container">
            <h2>Inspiration Ideas</h2>
            <div className="inspirationIdeasImage-container">
                <div className="left-images">
                <img src={left1Image} alt=""/>
                <img src={left2Image} alt=""/>
                <img src={left3Image} alt=""/>
                <img src={left4Image} alt=""/>
                </div>
                <div className="right-image">
                    <img src={rightImage} alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default InspirationIdeas;