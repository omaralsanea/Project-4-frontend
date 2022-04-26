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
        <h1 className='rateify title has-text-centered pt-5 is-underlined'>
          intelliHench
        </h1>
        <h2 className='rateify title has-text-centered is-size-3 is-italic'>
          Work smarter - not harder
        </h2>
        <div className='container'>
          <h2 className='has-text-centered is-size-3'>
            {' '}
            Pick an area to target:{' '}
            <figure className='image artist-img'>
              <img
                src='https://i.imgur.com/NLPbloT.png'
                alt='Muscle Diagram'
                className='mt-5 about-pic'
              />
            </figure>
          </h2>
        </div>

        <div className='muscles1'>
          <Link to='/muscleexercises/5' className='navbar-item has-text-white'>
            1. Biceps
          </Link>
          <Link to='/muscleexercises/1' className='navbar-item has-text-white'>
            2. Shoulders
          </Link>
          <Link to='/muscleexercises/2' className='navbar-item has-text-white'>
            3. Chest
          </Link>
          <Link to='/muscleexercises/12' className='navbar-item has-text-white'>
            4. Abdominals
          </Link>
          <Link to='/muscleexercises/11' className='navbar-item has-text-white'>
            5. Quadriceps
          </Link>
        </div>
        <div className='muscles2'>
          <Link to='/muscleexercises/9' className='navbar-item has-text-white'>
            6. Traps
          </Link>
          <Link to='/muscleexercises/6' className='navbar-item has-text-white'>
            7. Triceps
          </Link>
          <Link to='/muscleexercises/8' className='navbar-item has-text-white'>
            8. Latissimus Dorsi
          </Link>
          <Link to='/muscleexercises/10' className='navbar-item has-text-white'>
            9. Gluteals and Hamstrings
          </Link>
          <Link to='/muscleexercises/4' className='navbar-item has-text-white'>
            10. Calves
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
