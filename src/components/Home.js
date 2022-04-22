import React from 'react';
import { Link } from 'react-router-dom';
// import MuscleCard from './muscle/MuscleCard';
//import { getAllMuscles } from '../api/muscle';

const Home = () => {
  const [muscles, setMuscles] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllMuscles();
        setMuscles(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className='hero is-fullheight-with-navbar has-background-grey-light'>
        <h1 className='rateify title has-text-centered has-text-info mt-2 pt-6'>
          intelliHench
        </h1>
        <h2 className='rateify title has-text-centered has-text-info is-size-2'>
          Work smarter - not harder
        </h2>
        <div className='container'>
          <h2 className='has-text-centered has-text-info mt-1 mb-5 is-size-3'>
            {' '}
            Pick an area to target:{' '}
            <figure className='image artist-img'>
              <img
                src='https://i.imgur.com/Mqlo58U.png'
                alt='Muscle Diagram'
                className='is-rounded mt-5 about-pic'
              />
            </figure>
          </h2>
        </div>


        <Link to='/muscleexercises/1' className='navbar-item has-text-white'>Shoulder</Link>
        <button className='button label is-fifth is-link'> Bicep</button>
        <button className='button label is-fifth is-warning'> Shoulder</button>
        <button className='button label is-fifth is-success'> Chest</button>
        <button className='button label is-fifth is-danger'> Abs</button>
      </section>
    </>
  );
};

export default Home;
