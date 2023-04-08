import { motion } from 'framer-motion';

const Contact = () => {
    return (  
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[1480px] mx-auto px-5 sm:px-8 text-black dark:text-white">
                <div className="mb-24 text-center max-w-screen-sm mx-auto">
                    <h2 className="text-3xl sm:text-5xl font-[700] capitalize">Get in Touch</h2>
                    <p className="mt-4 text-lg">Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-24">
                    <form className="grid grid-cols-1 gap-6">
                        <label className="sr-only" htmlFor="contact-name">contact-name</label>
                        <input className="w-full bg-transparent border-[1px] border-black/50 dark:border-gray-50/50 focus:border-black dark:focus:border-white rounded-full px-8 h-16" id="contact-name" name="contact-name" placeholder="Name" />
                        
                        <label className="sr-only" htmlFor="contact-email">contact-email</label>
                        <input className="w-full bg-transparent border-[1px] border-black/50 dark:border-gray-50/50 focus:border-black dark:focus:border-white rounded-full px-8 h-16" id="contact-email" name="contact-email" placeholder="Email" />
                        
                        <label className="sr-only" htmlFor="message">message</label>
                        <textarea className="bg-transparent border-[1px] border-black/50 dark:border-gray-50/50 focus:border-black dark:focus:border-white rounded-3xl px-8 py-4 !h-auto " id="message" name="message" rows="6" placeholder="Message" required="" minLength="10"></textarea>
                        
                        <button className="btn relative bg-black dark:bg-white text-white dark:text-black h-16 rounded-full font-[700]" type="button"><span className="">Send</span></button>
                    </form>
                    
                    <div>
                        <h3 className="text-2xl mb-6">Contact Info</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex gap-3 items-center">
                                <i className='bx bx-envelope'></i>
                                <a href="mailto:address@yoursite.com">address@yoursite.com</a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <i className='bx bx-phone'></i>
                                <a href="tel:123-456-789">123-456-789</a>
                            </div>
                        </div>
                        
                        <h3 className="text-2xl mb-6 mt-12">Socials</h3>
                        <div className="flex gap-5 text-xl heading-color ">
                            <a href="https://twitter.com/Twitter" aria-label="Twitter link" target="_blank" rel="noreferrer">
                                <i className="bx bxl-twitter"></i>
                            </a>
                            <a href="https://youtube.com" aria-label="Youtube link" target="_blank" rel="noreferrer">    
                                <i className="bx bxl-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com" aria-label="LinkedIn link" target="_blank" rel="noreferrer">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a href="https://github.com" aria-label="Github link" target="_blank" rel="noreferrer">
                                <i className="bx bxl-github"></i>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </motion.div>
    );
}
 
export default Contact;