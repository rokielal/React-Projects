// Api call

import React, { useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts/';

function Fetch() {

    const [posts , setPost] = useState([]);

    async function fetchData() {
        try{

            const response = await fetch(url)
            const data = await response.json()

            console.log(data);
            setPost(data)
        }catch(error){
            console.log("Error Found")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post)=>{
        return (
            <>
                <div key={post.id}>
                    Title: {post.title}
                </div>
                <div>
                    Body : {post.body}
                </div>
            </>
        )
      })}
    </div>
  )
}

export default Fetch
