import React from 'react'
import { useState,useEffect } from 'react';
const FatchApi = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //side effects
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((error) => console.error(error));
    },[])
     if (loading) {
       return <div>loading...</div>;
     }
  return (
    <>
          <ul>
              {data.map((post) => (
                  <li key={post.id}>{post.title}</li>
              ))}
         </ul>
         
    </>
  )
}

export default FatchApi
