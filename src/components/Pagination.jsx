const Pagination = ({ setPage, currentPage, pageNumbers }) => {
    return (  
        <div>
            <div className="mt-20">
                <ul className="flex justify-center items-center text-[13px]">
                    {currentPage > 1 && 
                    <li>
                        <button type="button" 
                        onClick={() => setPage(currentPage - 1)}
                            className="flex h-10 w-10 shrink-0 justify-center items-center rounded-full mx-1 animate border-[1px] border-black dark:border-white text-black dark:text-white"
                        >
                            <i className="bx bx-chevron-left text-[30px]"></i>
                        </button>
                    </li>}
                    <li className="text-black dark:text-white text-[13px] px-4">
                        Page {currentPage} of {pageNumbers}
                    </li>
                    {currentPage < pageNumbers &&
                    <li>
                        <button type="button" 
                            onClick={() => setPage(currentPage + 1)}
                            className="flex h-10 w-10 shrink-0 justify-center items-center rounded-full mx-1 animate border-[1px] border-black dark:border-white text-black dark:text-white"
                        >
                            <i className="bx bx-chevron-right text-[30px]"></i>
                        </button>
                    </li>}
                </ul>
            </div>
        </div>
    );
}
 
export default Pagination;