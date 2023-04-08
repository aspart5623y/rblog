import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../features/api/postApiSlice";

const PostDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetPostQuery(id);

    return (  
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                {isLoading && 
                    <p className="text-base text-black text-center dark:text-white">
                        <i className='bx bx-loader-alt animate-spin text-7xl'></i>
                    </p>
                }

                {!isLoading && 
                    <div className="max-w-[1480px] mx-auto px-5 sm:px-8 text-black dark:text-white">
                        <div className="max-w-screen-md mx-auto">
                            <div className="flex flex-wrap items-center gap-6">
                                <span className="whitespace-nowrap flex items-center">
                                    <i className='bx bx-wink-smile'></i>
                                    &nbsp;
                                    {data?.reactions} 
                                </span>
                                <span className="whitespace-nowrap flex items-center">
                                    <i className='bx bx-purchase-tag'></i>
                                    &nbsp;
                                    {data?.tags.length} 
                                </span>
                            </div>

                            <h2 className="font-bold leading-snug text-3xl sm:text-[2.5rem] mt-6">
                                {data?.title}
                            </h2>

                            <div className="flex gap-2 items-center mt-4">
                                <div className="flex">
                                    <a className="flex -ml-3 first:ml-0 first:z-10 hover:z-20 " href="/author/main">
                                        <div className="rounded-full overflow-hidden border-gray-200 dark:border-gray-700 inline-block leading-[0] border-2" style={{ width: '30px', height: '30px' }}>
                                            <div className="pt-[100%] relative">
                                                <img alt="author avatar" src={`https://loremflickr.com/240/240/paris,boy?random=${data?.id}`} sizes="30px" loading="lazy" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent' }} />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a className="text-sm font-medium heading-color" href="/author/main">Keith Brandie</a>
                                </div>
                            </div>

                            <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 mt-12">
                                <img alt="Post thumbnail" src={`https://picsum.photos/2400/3200?random=${data?.id}`} sizes="(max-width: 767px) 95vw, 800px"  loading="lazy" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent' }} />
                            </div>
                            
                            <div className="prose sm:prose-lg max-w-none dark:prose-invert prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:mt-2 mt-16">
                                <p>{data?.body}</p>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-16">
                                {
                                    data?.tags.map((tag, index) => (
                                        <span key={index} className="text-xs font-semibold data-color rounded-full capitalize bg-gray-100 py-2 px-3 dark:bg-zinc-900 whitespace-nowrap">{tag}</span>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                }
                
            </div>
        </motion.div>
    );
}
 
export default PostDetails;