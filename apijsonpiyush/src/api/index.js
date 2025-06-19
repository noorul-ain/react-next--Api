// // api.js (or wherever you're calling API)
// export const getPosts = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };


// ------------ example 2----------- Random user data API
export const getRandomUser = async () => {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0]; // return only the user object
  } catch (error) {
    console.error('Error fetching random user:', error);
    throw error;
  }
};
