
function Navbar(){
    return(
        
      <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-white shadow-md rounded-2xl">
         <h1 className="text-2xl font-bold text-blue-600">FinTrackr 💰</h1>
      <div className="flex gap-2 md:gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-blue-800 transition duration-300">Login</button>
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-blue-200 transition duration-300">Signup</button>
   </div>

</div>

);
}
export default Navbar;