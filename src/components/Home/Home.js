
import './Home.css'
import img from '../../images/10.webp'
import { useLoaderData } from 'react-router-dom';
import Data from '../Data/Data';


const Home = () => {
  const datas=useLoaderData();
  // console.log(datas);
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
          <section className='data-container'>
      
      {
        datas.data.map(data=> <Data
          key={data.id} 
      data={data}
   
        ></Data> )
      }
    </section>
         
        </div>
    );
};

export default Home;