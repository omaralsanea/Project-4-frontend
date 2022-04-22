// import React from 'react';
// import { createExercise } from '../../api/exercise';
// import { useNavigate } from 'react-router-dom';

// const AddExercise = () => {
//   const navigate = useNavigate();

//   const [newExercise, setNewExercise] = React.useState({
//     name: '',
//     bio: '',
//     img: ''
//   });

//   function handleChange(event) {
//     setNewExercise({ ...newExercise, [event.target.name]: event.target.value });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const getData = async () => {
//       try {
//         await createExercise(newExercise);
//         navigate('/exercises');
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
//                 Exercise Name
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   // placeholder="Exercise Name"
//                   name='name'
//                   onChange={handleChange}
//                   value={newExercise.name}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Exercise Description
//               </label>
//               <div className='control'>
//                 <textarea
//                   className='input has-background-grey-lighter'
//                   // placeholder="Exercise Description"
//                   name='bio'
//                   rows={5}
//                   cols={5}
//                   maxLength={500}
//                   onChange={handleChange}
//                   value={newExercise.bio}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <label className='label has-text-white has-text-centered'>
//                 Exercise Image URL
//               </label>
//               <div className='control'>
//                 <input
//                   className='input has-background-grey-lighter'
//                   // placeholder="Exercise Image URL"
//                   name='img'
//                   onChange={handleChange}
//                   value={newExercise.img}
//                 />
//               </div>
//             </div>
//             <div className='field'>
//               <button
//                 type='submit'
//                 className='button label is-fullwidth is-success'
//               >
//                 Submit Exercise
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddExercise;
