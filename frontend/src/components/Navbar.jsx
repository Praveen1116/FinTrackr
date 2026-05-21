
function Navbar() {
   return (

      <div className="flex justify-between items-center px-4 md:px-8 py-5 bg-white border border-gray-200 shadow-sm rounded-2xl">
         <h1 className="text-3xl tracking-tight font-bold text-blue-600 cursor-pointer transition duration-300 hover:scale-105 hover:text-blue-700">FinTrackr
            <span className="inline-block ml-2 transition duration-300 hover:-translate-y-1 hover:rotate-12">
               💰
            </span>
         </h1>
         <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

            <a href="#" className="hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition duration-300">
               Features
            </a>

            <a href="#" className="hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition duration-300">
               Pricing
            </a>

            <a href="#" className="hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg transition duration-300">
               About
            </a>

         </div>

         <div className="flex gap-2 md:gap-4">
            <button className="bg-blue-600 px-6 py-3 text-white text-sm md:text-base rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition duration-300">Login</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 hover:-translate-y-1 hover:shadow-md transition duration-300">Signup</button>
         </div>

      </div>

   );
}
export default Navbar;