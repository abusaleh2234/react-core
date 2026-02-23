import { useEffect, useState } from "react";

const Posts = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    // console.log(post);
    
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <li className="card">{post.title}</li>)
            }
        </div>
    );
};

export default Posts;