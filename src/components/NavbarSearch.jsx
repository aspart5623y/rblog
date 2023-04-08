
const NavbarSearch = ({ toggleSearchState }) => {

   

    return (  
        <div className={`fixed top-0 left-0 block h-screen w-screen px-5`}>
            <div className="bg-white z-10 shadow-md relative flex items-center rounded-md dark:bg-black w-full px-5 py-3 mt-24 max-w-lg mx-auto">
                <label><i className="bx bx-search text-gray-500 block mt-1 text-[20px] dark:text-white"></i></label>
                <input type="text" placeholder="Search..." className="bg-transparent w-full text-gray-600 dark:text-white text-[15px] p-3 out focus:outline-none" />
                <button type="button" onClick={toggleSearchState}><i className="bx bx-x text-[25px] block pl-3 py-3 text-gray-500 dark:text-white"></i></button>
            </div>
            <span className="absolute z-0 top-0 left-0 block bg-gray-600/20 dark:bg-white/20 h-full w-full" onClick={toggleSearchState}></span>
        </div>
    );
}
 
export default NavbarSearch;