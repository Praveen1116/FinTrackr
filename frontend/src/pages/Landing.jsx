
import Navbar from "../components/Navbar";
import heroImg from "../assets/personal-finance.png";
function Landing(){
    return(
        <div className="bg-gray-100 min-h-screen"> 
        <div className="max-w-7xl mx-auto p-6">
             <Navbar />
        <div className="flex flex-col md:flex-row justify-center  items-center gap-16 mt-8 md:mt-10">
        <div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Take Control of Your <br /> Finances Smarter
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-xl">Track Expenses, manage budgets and achieve your financial goals
  with powerful insights and smart analytics.</p> 

        <div className="flex gap-8 md:gap-10 mt-6 md:mt-8">
            <button className="bg-blue-600 px-4 py-2 text-white text-sm md:text-base rounded-lg hover:bg-blue-800 transition duration:300">Get Started</button>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition duration-300">Demo</button>
        </div>

        </div>

   
        <div>
            <img
            src={heroImg}
            alt="Finance Illustration"
            className="w-72 md:w-96 object-contain rounded-lg"
            />
        </div>
        </div>
        </div>

        </div> ); }
export default Landing;

