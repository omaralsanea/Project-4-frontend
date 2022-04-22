import React from 'react';
import { useParams } from 'react-router-dom';
import { getExerciseById } from '../../api/exercise';
import { Link } from 'react-router-dom';

const ShowExercise = () => {
  const { id } = useParams();
  const [exercise, setExercise] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getExerciseById(id);
        console.log(data);
        setExercise(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className='section hero is-fullheight-with-navbar has-background-dark'>
      <div className='container'>
        {!exercise ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className='title has-text-centered has-text-white'>
              {exercise.title}
            </h2>
            <div className='columns'>
              <div className='column is-half'>
                <figure className='image'>
                  <img src={exercise.image} alt={exercise.title} />
                </figure>
              </div>
              <div className='column is-half has-text-white'>
                <h3>Description and How To:</h3>
                <p className='my-2'>{exercise.description}</p>
                {/* {exercise.description.map((description) => (
                    <div key={description.id} className='image is-128x128 m-2'>
                      <Link to={`/exercises/${exercise.id}`}>
                        {description.name}
                      </Link>
                    </div>
                  ))} */}
                <br></br>
                <p className='my-2'>{exercise.level.name}</p>
                <br></br>
                <h2>Muscle Groups Targeted:</h2>
                <div className='container is-flex'>
                  {exercise.muscles.map((muscle) => (
                    <div key={muscle.id} className='image is-128x128 m-2'>
                      <Link to={`/exercises/${exercise.id}`}>
                        {muscle.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowExercise;
