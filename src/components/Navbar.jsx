import { Link, NavLink } from "react-router-dom";


const Navbar = ({ toggleDarkMode, darkMode, toggleSearchState }) => {
    
    return (  
        <>
            <nav className="py-5 px-5 sm:px-8 flex items-center mb-20">
                <Link to={`/`} className='text-gray-900 text-[33px] font-[500] font-serif dark:text-white'>RBlog</Link>

                <div className="ml-auto flex items-center">
                    <ul className="items-center hidden sm:flex">
                        <li>
                            <NavLink className='text-gray-900 text-base px-4 dark:text-white' to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-gray-900 text-base px-4 dark:text-white' to="/posts">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-gray-900 text-base px-4 dark:text-white' to="/authors">Authors</NavLink>
                        </li>
                        <li>
                            <NavLink className='text-gray-900 text-base px-4 dark:text-white' to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="flex items-center ml-3">
                        <li>
                            <button className="px-2 mt-1" onClick={toggleDarkMode}>
                                {darkMode ? <i className='bx bx-sun text-white text-[20px]'></i> :  <i className='bx bx-moon text-gray-900 text-[20px]'></i>}
                            </button>
                        </li>

                        <li>
                            <button className="px-2 mt-1" onClick={toggleSearchState}>
                                <i className='bx bx-search dark:text-white text-gray-900 text-[20px]'></i>
                            </button>
                        </li>

                        <li className="relative hidden group/nav-dropdown max-sm:block">
                            <button type="button" className="py-4 pl-4 group">
                                <span className="h-5 w-5">
                                    <span className="h-[1px] mb-1 w-5 dark:bg-white bg-black block"></span> 
                                    <span className="h-[1px] my-1 w-5 dark:bg-white bg-black block"></span> 
                                    <span className="h-[1px] mt-1 w-5 dark:bg-white bg-black block"></span> 
                                </span>
                            </button>

                            <div className="absolute hidden w-44 bg-white dark:bg-black shadow-lg border-[1px] border-gray-50 dark:border-gray-500 top-10 rounded-lg right-0 group-hover/nav-dropdown:block">
                                <ul className="py-3">
                                    <li>
                                        <NavLink className='block text-gray-900 text-base px-6 py-2 dark:text-white' to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='block text-gray-900 text-base px-6 py-2 dark:text-white' to="/posts">Posts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='block text-gray-900 text-base px-6 py-2 dark:text-white' to="/authors">Authors</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className='block text-gray-900 text-base px-6 py-2 dark:text-white' to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>  
        </>
    );
}
 
export default Navbar;