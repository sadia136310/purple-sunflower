import React from 'react';
import './Home.css'
import img from '../../images/10.webp'

const Home = () => {
    return (
        <div>
          <section className='home-section'>
            <div>
                <h2>Purple Sunflower's Quizzes</h2>
                <p>Welcome to the quiz community.Test your skills with Purple Sunflower's Quizzes.If you're bored and need something to do, then online quizzes can be a really cool way to entertain yourself.</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
          </section>
        </div>
    );
};

export default Home;