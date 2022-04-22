// import React, { Component, useEffect } from 'react';
// import { createRelease } from '../../api/release';
// import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';
// import { Link } from 'react-router-dom';
// // import CreatableSelect from 'react-select/creatable';
// import { getAllExercises, createExercise } from '../../api/Exercise';

// const AddRelease = () => {
//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       background: '#dbdbdb'
//     }),
//     dropdownIndicator: (provided) => ({
//       ...provided,
//       svg: { fill: '#7a7a7a' }
//     })
//   };
//   const genreOptions = [
//     { value: 'Rock', label: 'Rock' },
//     { value: 'Pop', label: 'Pop' },
//     { value: 'Jazz', label: 'Jazz' },
//     { value: 'Classical', label: 'Classical' },
//     { value: 'Metal', label: 'Metal' },
//     { value: 'Country', label: 'Country' },
//     { value: 'Folk', label: 'Folk' },
//     { value: 'Blues', label: 'Blues' },
//     { value: 'R&B', label: 'R&B' },
//     { value: 'Jungle', label: 'Jungle' },
//     { value: 'Reggae', label: 'Reggae' },
//     { value: 'Afrobeat', label: 'Afrobeat' },
//     { value: 'Electronic', label: 'Electronic' },
//     { value: 'Hip Hop', label: 'Hip Hop' },
//     { value: 'Hard Rock', label: 'Hard Rock' },
//     { value: 'Latin', label: 'Latin' },
//     { value: 'World', label: 'World' },
//     { value: 'Spoken Word', label: 'Spoken Word' },
//     { value: 'Progressive Rock', label: 'Progressive Rock' },
//     { value: 'House Techno', label: 'House/Techno' }
//   ];
//   const [selectedGenres, setGenres] = React.useState([]);
//   const navigate = useNavigate();
//   const [newRelease, setNewRelease] = React.useState({
//     title: '',
//     artwork: '',
//     genres: [],
//     releaseYear: '',
//     url: '',
//     exercise: ''
//   });
//   const [exercisesList, setList] = React.useState([]);

//   React.useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await getAllExercises();
//         const transformedData = data.map(({ _id, name }) => ({
//           value: _id,
//           label: name
//         }));
//         setList(transformedData);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }, []);
//   console.log(exercisesList);
//   const [exercise, setExercise] = React.useState('');

//   function handleChange(event) {
//     setNewRelease({
//       ...newRelease,
//       [event.target.name]: event.target.value,
//       genres: selectedGenres.map((x) => x.value),
//       exercise: exercise.value
//     });
//     console.log(newRelease.exercise);
//   }

//   // function handleCreate(event) {
//   //   console.log('EXERCISE IS', event.target.value);
//   //   const getData = async () => {
//   //     try {
//   //       await createExercise({ exercise: event.target.value });
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };
//   //   getData();
//   // }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const getData = async () => {
//       try {
//         await createRelease(newRelease);
//         console.log(newRelease);
//         navigate('/releases');
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getData();
//   }

//   return (
//     <section className='is-fullheight-with-navbar has-background-dark form-page'>
//       <div className='container pt-6'>
//         <div className='columns pt-6'>
//           <form
//             className='column is-half is-offset-one-quarter box has-background-grey'
//             onSubmit={handleSubmit}
//           >
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Exercise (If exercise is not in list, click{' '}
//                 <Link to='/addexercise' className='has-text-success'>
//                   here
//                 </Link>{' '}
//                 to add)
//               </label>
//               <div className='control'>
//                 {/* <CreatableSelect
//                   isClearable
//                   onChange={setExercise}
//                   options={exercisesList}
//                   placeholder=""
//                   name="exercises"
//                   className="basic-multi-select"
//                   onCreateOption={handleCreate}
//                 /> */}
//                 <Select
//                   styles={customStyles}
//                   isClearable
//                   isSearchable
//                   options={exercisesList}
//                   className='basic-multi-select has-background-grey-lighter'
//                   classNamePrefix='select'
//                   placeholder=''
//                   name='exercises'
//                   onChange={setExercise}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Release Title
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   //placeholder="Release Title"
//                   name='title'
//                   onChange={handleChange}
//                   value={newRelease.title}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered '>
//                 Genres
//               </label>
//               <div className='control'>
//                 <Select
//                   styles={customStyles}
//                   isMulti
//                   isSearchable
//                   options={genreOptions}
//                   className='basic-multi-select has-background-grey-lighter'
//                   classNamePrefix='select'
//                   placeholder=''
//                   name='genres'
//                   onChange={setGenres}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Release Year
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   // placeholder="Release Year"
//                   name='releaseYear'
//                   onChange={handleChange}
//                   value={newRelease.releaseYear}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Release Image URL
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   // placeholder="Release Image URL"
//                   name='artwork'
//                   onChange={handleChange}
//                   value={newRelease.artwork}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Spotify Link
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   // placeholder="Spotify Link"
//                   name='url'
//                   onChange={handleChange}
//                   value={newRelease.url}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <button
//                 type='submit'
//                 className='button label is-fullwidth is-success'
//               >
//                 Submit Release
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddRelease;
