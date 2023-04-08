import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from "react";
import { useGetPostsQuery } from "../features/api/postApiSlice";
import Pagination from "../components/Pagination";
import Post from "../components/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState(0);
    const { data, isLoading, isSuccess } = useGetPostsQuery()

    const paginateData = useCallback(() => {
        const indexOfLastPage = currentPage * 6;
        const indexOfFirstPage = indexOfLastPage - 6;
        const paginatedPosts = data.posts.slice(indexOfFirstPage, indexOfLastPage)
        setPosts(paginatedPosts)
        setPageNumbers(Math.ceil(data.posts.length/6))
        // showPagination()
    }, [currentPage, data]);


    function setPage (page) {
        setCurrentPage(page)
        paginateData()
    }

    
    useEffect(() => {
        if (isSuccess && data) {
            paginateData()
        } 
        
    }, [data, isSuccess, paginateData]);


    return (  
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
                <div className="mb-24 text-center max-w-screen-sm mx-auto">
                    <h2 className="text-3xl sm:text-5xl font-[700] capitalize text-black dark:text-white">All Posts</h2>
                </div>

                {isLoading && 
                    <p className="text-base text-black text-center dark:text-white">
                        <i className='bx bx-loader-alt animate-spin text-7xl'></i>
                    </p>
                }

                {!isLoading && 
                    <div>
                        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                posts.map((post, index) => (
                                    <Post post={post} key={index} />
                                ))
                            }
                        </div>
                        
                        <Pagination currentPage={currentPage} setPage={setPage} pageNumbers={pageNumbers} />
                    </div>
                }
            </div>    
        </motion.div>
    );
}
 
export default Posts;