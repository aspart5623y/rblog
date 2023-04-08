import { useEffect } from "react";
import { motion } from 'framer-motion';
import { useCallback, useState } from "react";
import Author from "../components/Author";
import Pagination from "../components/Pagination";
import { useGetAuthorsQuery } from "../features/api/authorApiSlice";

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState(0);
    const { data, isLoading, isSuccess } = useGetAuthorsQuery()

    const paginateData = useCallback(() => {
        const indexOfLastPage = currentPage * 8;
        const indexOfFirstPage = indexOfLastPage - 8;
        const paginatedUsers = data.users.slice(indexOfFirstPage, indexOfLastPage)
        setAuthors(paginatedUsers)
        setPageNumbers(Math.ceil(data.users.length/8))
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
            <div>
                <div className="max-w-[1480px] mx-auto px-5 sm:px-8 text-black dark:text-white">
                    <div className="mb-24 text-center max-w-screen-sm mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-[700] capitalize">Meet Our Authors</h2>
                        {/* <p className="mt-4 text-lg">Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p> */}
                    </div>

                    {isLoading && 
                        <p className="text-base text-black text-center dark:text-white">
                            <i className='bx bx-loader-alt animate-spin text-7xl'></i>
                        </p>
                    }
                    {!isLoading && 
                        <div>
                            <div className="grid grid-cols-4 gap-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))' }}>
                                {
                                    authors.map((author, index) => (
                                        <Author author={author} key={index} />
                                    ))
                                }
                            </div>
                            <Pagination currentPage={currentPage} setPage={setPage} pageNumbers={pageNumbers} />
                        </div>
                    }
                </div>
            </div>
        </motion.div>
    );
}
 
export default Authors;