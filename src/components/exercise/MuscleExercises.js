import React from 'react';
import { useParams } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import { getAllExercisesForMuscle } from '../../api/exercise';

const MuscleExercises = () => {
  const { id } = useParams();
  const [exercises, setExercises] = React.useState(null);

  React.useEffect(() => {

    console.log(`The muscle id is :${id}`)

    const getData = async () => {
      try {
        const data = await getAllExercisesForMuscle(id);
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
