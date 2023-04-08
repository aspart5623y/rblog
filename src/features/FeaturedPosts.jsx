import { useState, useEffect } from "react";
import { useGetPostsQuery } from "./api/postApiSlice";
import Post from "../components/Post";

const FeaturedPosts = () => {
    const [posts, setPosts] = useState([]);
    const { data, isLoading, isSuccess } = useGetPostsQuery()


    function selectRandomItems(arr) {
        const randomIndexes = [];
      
        while (randomIndexes.length < 3) {
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
        <div>
            <h2 className="mb-4 font-medium text-base text-black dark:text-white uppercase tracking-wider mt-20">Featured Posts</h2>

            {isLoading && 
                <p className="text-base text-black text-center dark:text-white">
                    <i className='bx bx-loader-alt animate-spin text-7xl'></i>
                </p>
            }

            {!isLoading && 
                <div className="flex flex-wrap xl:flex-nowrap gap-10 ">
                    <div className="basis-full xl:basis-[65%] shrink-0">
                        {posts && <Post post={posts[0]} />}
                    </div>
                    <div className="flex flex-col md:flex-row xl:flex-col gap-10">
                        <div className="flex-1">
                            <Post post={posts[1]} />
                        </div>
                        <div className="flex-1">
                            <Post post={posts[2]} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default FeaturedPosts;