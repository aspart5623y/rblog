import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div>
            <div class="max-w-[1480px] mx-auto px-5 sm:px-8 dark:text-white text-black text-center my-40">
                <h2 class="text-6xl md:text-[100px] font-bold">404</h2>
                <p class="text-lg md:text-2xl mt-3 text-gray-600 dark:text-white">Page Not Found</p>
                <Link to="/" class="btn inline-flex items-center relative bg-black h-16 text-white px-7 font-[600] rounded-full dark:bg-white dark:text-gray-600 mt-6"><span class="">Back Home</span></Link>
            </div>
        </div>
    );
}
 
export default NotFound;