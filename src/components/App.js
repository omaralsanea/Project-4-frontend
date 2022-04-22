import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import ShowRelease from './release/ShowRelease';
import ShowExercise from './exercise/ShowExercise';
import Navbar from './Navbar';
import Login from './auth/Login';
import Register from './Register';
import ExerciseIndex from './exercise/ExerciseIndex';
import AddExercise from './exercise/AddExercise';
// import ReleaseIndex from './release/ReleaseIndex';
// import AddRelease from './release/AddRelease';
import About from './About';

import '../styles/style.scss';
import MuscleExercises from './exercise/MuscleExercises';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/releases/:id' element={<ShowRelease />} /> */}
      <Route path='/exercises/:id' element={<ShowExercise />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/exercises' element={<ExerciseIndex />} />
      <Route path='/addexercise' element={<AddExercise />} />
      <Route path='/muscleexercises' element={<MuscleExercises />} />
      {/* <Route path='/releases' element={<ReleaseIndex />} />
      <Route path='/addrelease' element={<AddRelease />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
