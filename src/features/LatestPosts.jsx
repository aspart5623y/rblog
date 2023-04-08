import { useState, useEffect } from "react";
import { useGetPostsQuery } from "./api/postApiSlice";
import Post from "../components/Post";

const LatestPosts = () => {
    const [posts, setPosts] = useState([]);
    const { data, isLoading, isSuccess } = useGetPostsQuery()

    function selectRandomItems(arr) {
        const randomIndexes = [];
      
        while (randomIndexes.length < 6) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
      
        const randomItems = randomIndexes.map(index => arr[index]);
        return randomItems;
    }

    
    useEffect(() => {
        if (isSuccess && data) {
            const randomPosts = selectRandomItems(data.posts)
            setPosts(randomPosts);
        }
    }, [data, isSuccess]);


    return (  
        <>
           
            <div>
                <h2 className="mb-4 font-medium text-base text-black dark:text-white uppercase tracking-wider mt-20">Latest Posts</h2>

                {isLoading && 
                    <p className="text-base text-black text-center dark:text-white">
                        <i className='bx bx-loader-alt animate-spin text-7xl'></i>
                    </p>
                }
            
                {!isLoading && 

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((post, index) => (
                            <Post post={post} key={index} />
                        ))
                    }
                </div>}
            </div>
        </>
    );
}
 
export default LatestPosts;