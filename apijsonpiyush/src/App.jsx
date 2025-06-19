// import React, { useEffect, useState } from 'react';
// import { getPosts } from './api'; // Make sure your file path is correct

// export const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const posts = await getPosts();
//         setData(posts); // Save posts to state
//         console.log(posts);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Posts</h1>
//         {data.length === 0 ? (
//           <p>Loading...</p>
//         ) : (
//           <ul>
//             {data.map(post => (
//               <li key={post.id}>
//                 <strong>{post.title}</strong>
//                 <p>{post.body}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };
//  ----------------------example 2
import React, { useState } from 'react';
import { getRandomUser } from './api'; // adjust path if needed

export const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const randomUser = await getRandomUser();
      setUser(randomUser);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Random User Generator</h1>

      <button onClick={fetchUser} style={{ padding: '10px 20px', marginBottom: '20px' }}>
        Get Random User
      </button>

      {loading && <p>Loading...</p>}

      {!loading && user && (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <img src={user.picture.large} alt="User" />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      )}
    </div>
  );
};
