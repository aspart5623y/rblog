import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <>
            <div className="max-w-[1480px] mx-auto px-5 sm:px-8 text-center lg:text-left lg:flex lg:gap-20 xl:gap-36 items-center mt-36">
                <div className="flex-grow mb-12 lg:mb-0 text-gray-800 dark:text-white">
                    <h2 className="text-4xl font-[700] mb-4">Subscribe to our newsletter</h2>
                    <p className=" mb-8">Get all the latest posts delivered straight to your inbox. </p>
                </div>
                <div>
                    <form className="flex flex-wrap sm:flex-nowrap gap-y-4 gap-x-2 sm:gap-x-0 bg-transparent sm:bg-gray-100 sm:dark:bg-white/10 rounded-full lg:min-w-[450px] max-w-[500px] mx-auto">
                        <input className="w-full h-16 border-none max-sm:bg-gray-100 max-sm:dark:bg-white/10 rounded-full dark:text-white px-6 bg-transparent focus:outline-none" id="email" name="email" placeholder="Your email address" type="email" required="" />
                        <button className="btn relative bg-black h-16 flex-grow sm:flex-grow-0 text-white px-7 font-[600] rounded-full dark:bg-white dark:text-gray-600" type="button">
                            <span className="">Subscribe</span>
                        </button>
                    </form>
                </div>
            </div>


            
            <div className="max-w-[1480px] mx-auto px-5 sm:px-8 mt-28">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 pt-20 border-t border-gray-100 dark:border-gray-900 pb-24">
                    <div className="lg:col-span-2 max-sm:col-span-full">
                        <div>
                            <div className="mb-4">
                                <Link to={`/`} className='text-gray-900 text-[33px] font-[500] font-serif dark:text-white'>RBlog</Link>
                            </div>
                            <p className="text-gray-900 dark:text-white">Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 max-sm:col-span-full">
                        <h3 className="uppercase text-sm tracking-wider mb-6 text-gray-900 dark:text-white font-[700]">categories</h3>
                        <div>
                            <div className="flex flex-wrap gap-3">
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">mind</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">idea</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">dream</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">fun</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">productivity</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">inspirational</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">modern</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">life lessons</span>
                                <span className="text-xs font-medium uppercase rounded-full py-1.5 px-2.5 border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black tracking-wide whitespace-nowrap">goals</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="uppercase text-sm tracking-wider mb-6 text-gray-900 dark:text-white font-[700]">links</h3>
                        <ul className="flex flex-col gap-2 text-[15px] capitalize font-medium ">
                            <li>
                                <Link className='block text-gray-700 text-base py-[1px] font-[400] dark:text-white' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='block text-gray-700 text-base py-[1px] font-[400] dark:text-white' to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link className='block text-gray-700 text-base py-[1px] font-[400] dark:text-white' to="/authors">Authors</Link>
                            </li>
                            <li>
                                <Link className='block text-gray-700 text-base py-[1px] font-[400] dark:text-white' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="uppercase text-sm tracking-wider mb-6 text-gray-900 dark:text-white font-[700]">follow us</h3>
                        <ul className="flex flex-row gap-2 text-gray-900 dark:text-white">
                            <li>
                                <a href="https://twitter.com" rel="noreferrer" className="py-1 pr-2" target="_blank">
                                    <i className='bx bxl-twitter text-[25px]'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" rel="noreferrer" className="py-1 pr-2" target="_blank">
                                    <i className='bx bxl-youtube text-[25px]'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" rel="noreferrer" className="py-1 pr-2" target="_blank">
                                    <i className='bx bxl-linkedin text-[22px]'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" rel="noreferrer" className="py-1 pr-2" target="_blank">
                                    <i className='bx bxl-github text-[22px]'></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            
            <div className="text-center block p-7 text-base uppercase text-gray-800 dark:text-white">
                &copy; 2022 RBlog. All rights reserved.
            </div>
        </>
    );
}
 
export default Footer;