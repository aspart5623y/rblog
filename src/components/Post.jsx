import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (  
        <div>
            <div className="text-black dark:text-white">
                <div className="basis-full xl:basis-[65%] shrink-0">
                    <Link className="block" to={`/post/${post?.id}`}>
                        <div className="block relative pt-[75%] bg-black/5 dark:bg-white/5 ">
                            <img alt="Post thumbnail" sizes="(max-width: 1279px) 95vw, 950px" src={`https://picsum.photos/2400/3200?random=${post?.id}`} loading="lazy" style={{ position: 'absolute', height: 100+'%', width: 100+'%', inset: 0+'px', objectFit: 'cover', color: 'transparent' }} />
                        </div>
                    </Link>
                    <div className="flex flex-wrap gap-3 items-center mt-8">
                        <span className="whitespace-nowrap flex items-center">
                            <i className='bx bx-wink-smile'></i>
                            &nbsp;
                            {post?.reactions} 
                        </span>
                        <span className="whitespace-nowrap flex items-center">
                            <i className='bx bx-purchase-tag'></i>
                            &nbsp;
                            {post?.tags.length} 
                        </span>
                    </div>
                    <h2 className="font-bold leading-snug mt-4 text-2xl sm:text-3xl">
                        <Link to={`/post/${post?.id}`}>
                            {post?.title}
                        </Link>
                    </h2>
                    <p className="mt-4 sm:text-lg">
                        {post?.body.slice(0, 100) + '...'}
                    </p>
                    <div className="flex gap-2 items-center mt-6">
                        <div className="flex">
                            <div className="rounded-full overflow-hidden border-gray-200 dark:border-gray-700 inline-block leading-[0] !border-2" style={{ width: 30+'px', height: 30+'px' }}>
                                <div className="pt-[100%] relative">
                                    <img alt="author avatar" sizes="30px" src={`https://loremflickr.com/240/240/paris,boy?random=${post?.id}`} loading="lazy" style={{ position: 'absolute', height: 100+'%', width: 100+'%', inset: 0+'px', objectFit: 'cover', color: 'transparent' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Keith Brandie</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Post;