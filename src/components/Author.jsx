const Author = ({ author }) => {
    return (  
        <div>
            <div className="text-center">
                <div>
                    <div className="rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 inline-block leading-[0]" style={{ width: '180px', height: '180px' }}>
                        <div className="pt-[100%] relative">
                            <img alt="author avatar" sizes="180px" src={author?.image} loading="lazy" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent' }} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl my-2">{author?.firstName + ' ' + author?.lastName + ' ' + author?.maidenName}</h3>
                        <p className="text-[14px]">{author?.company?.title} at {author?.company?.name}</p>
                        <i className="text-[12px]">
                            {
                                'Department: ' + author?.company?.department
                            }
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Author;