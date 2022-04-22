import React from 'react';
import ExerciseCard from './ExerciseCard';
import { getAllExercises } from '../../api/exercise';

const MuscleExercises = () => {
  const [exercises, setExercises] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllExercises();
        console.log(data);
        setExercises(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className='section has-background-grey-lighter'>
      <div className='container'>
        <div className='columns is-multiline'>
          {!exercises ? (
            <p>Loading Exercises...</p>
          ) : (
            exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} {...exercise} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MuscleExercises;
