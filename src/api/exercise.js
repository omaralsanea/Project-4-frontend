import axios from 'axios';

// baseUrl is http://localhost:8000

// export const getAllExercises = async () => {
// const response = await axios.get(url)
// setData(response.data) {
// method: 'GET',
// url: '/api/exercises'
// };

const baseUrl = 'http://localhost:8000';

export const getAllExercises = async () => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/exercises/`
  };

  const { data } = await axios.request(options);
  console.log('GETALLEXERCISE DATA IS', data);
  return data;
};

// export const getExerciseById = async (id) => {
//   const options = {
//     method: 'GET',
//     url: `/exercises/detail/${id}`
//   };

//   const { data } = await axios.request(options);

//   return data;
// };

export const getExerciseById = async (id) => {
  const options = {
    method: 'GET',
    url: `${baseUrl}/exercises/detail/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};

export const createExercise = async (exercise) => {
  const options = {
    method: 'POST',
    url: `/api/exercises`,
    data: exercise,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const createComment = async (exerciseId, comment) => {
  const options = {
    method: 'POST',
    url: `/api/exercises/${exerciseId}/comments`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

// ! Added deleted comment
export const deleteComment = async (exerciseId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/exercises/${exerciseId}/comments/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  console.log(data);
  return data;
};
