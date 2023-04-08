import { motion } from 'framer-motion';
import FeaturedPosts from "../features/FeaturedPosts";
import LatestPosts from "../features/LatestPosts";

const Home = () => {
    return (  
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[1480px] mx-auto px-5 sm:px-8">
                <h1 className="text-gray-900 dark:text-white text-3xl sm:text-6xl sm:leading-tight max-w-screen-xl font-normal">
                    <b>This is RBlog.</b> A blog that covers productivity, tips, inspiration, and strategies for massive profits.
                </h1>

                <FeaturedPosts />

                <LatestPosts />
            </div>
        </motion.div>
    );
}
 
export default Home;