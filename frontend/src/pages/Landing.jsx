
import Navbar from "../components/Navbar";
import heroImg from "../assets/personal-finance.png";
import { Wallet, BarChart3, Target } from "lucide-react"
function Landing() {
    return (
        <div className="bg-[#f8fafc] min-h-screen">
            <div className="max-w-7xl mx-auto p-6">
                <Navbar />
                <div className="flex flex-col md:flex-row justify-between  items-center gap-12 mt-8 md:mt-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
                            Take Control of Your <br /> Finances Smarter
                        </h1>
                        <p className="text-gray-600 mt-4 text-lg max-w-lg">Track Expenses, manage budgets and achieve your financial goals
                            with powerful insights and smart analytics.</p>

                        <div className="flex gap-8 md:gap-10 mt-6 md:mt-8">
                            <button className="bg-blue-600 px-6 py-3 text-white text-sm md:text-base rounded-xl font-medium shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition duration-300">Get Started</button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 hover:-translate-y-1 hover:shadow-md transition duration-300">Demo</button>
                        </div>

                    </div>


                    <div>
                        <img
                            src={heroImg}
                            alt="Finance Illustration"
                            className="w-64 md:w-[380px] object-contain rounded-2xl drop-shadow-xl hover:scale-105 transition duration-500"
                        />
                    </div>
                </div>
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">

                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <h3 className="text-3xl font-bold text-blue-600">
                            10K+
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Active Users
                        </p>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl py-5 px-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <h3 className="text-3xl font-bold text-blue-600">
                            $2M+
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Expenses Tracked
                        </p>

                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">

                        <h3 className="text-3xl font-bold text-blue-600">
                            99.9%
                        </h3>

                        <p className="text-gray-600 mt-2">
                            Secure Transactions
                        </p>

                    </div>

                </div>

                {/* Feature Section */}
                <div className="mt-28">
                    <h2 className="text-4xl font-bold text-center text-blue-600">Why Choose FinTrackr?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-white cursor-pointer border border-gray-250 p-5 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">

                            <div className="text-blue-600">
                                <Wallet size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 mt-3">
                                Expense Tracking
                            </h3>
                            <p className="text-gray-600 mt-3">
                                Track your daily expenses and manage spending efficiently.
                            </p>
                        </div>

                        <div className="bg-white cursor-pointer border border-gray-250 p-5 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">
                            <div className="text-blue-600">
                                <BarChart3 size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 mt-3">
                                Smart Analytics
                            </h3>
                            <p className="text-gray-600 mt-3">
                                Get smart financial insights and analyze spending patterns.
                            </p>
                        </div>

                        <div className="bg-white cursor-pointer border border-gray-250 rounded-xl p-5 hover:-translate-y-1 shadow-sm hover:shadow-lg transition duration-300">
                            <div className="text-blue-600">
                                <Target size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 mt-3">Budget Goal</h3>
                            <p className="text-gray-600 mt-3">Set monthly budget goals and track financial progress easily.</p>

                        </div>

                    </div>
                </div>
            </div>

           
            {/* Footer */}
            <div className="bg-gray-900 border-t border-gray-800 mt-28">

                <div className="max-w-7xl mx-auto">
                    <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">

                        © 2026 FinTrackr. All rights reserved.

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">


                        <div>

                            <h2 className="text-3xl font-bold text-white tracking-tight">
                                FinTrackr
                            </h2>

                            <p className="text-gray-400 mt-4 leading-relaxed max-w-sm">
                                Smart finance tracking platform to manage expenses, analyze spending,
                                and achieve financial goals efficiently.
                            </p>

                        </div>

                        <div>

                            <h3 className="text-xl font-semibold text-white">
                                Quick Links
                            </h3>

                            <div className="flex flex-col gap-4 mt-4 text-gray-400">

                                <a href="#" className="hover:text-white transition duration-300">
                                    Features
                                </a>

                                <a href="#" className="hover:text-white transition duration-300">
                                    Pricing
                                </a>

                                <a href="#" className="hover:text-white transition duration-300">
                                    About
                                </a>

                            </div>
                        </div>

                        <div>

                            <h3 className="text-xl font-semibold text-white">
                                Connect
                            </h3>

                            <div className="flex flex-col gap-4 mt-4 text-gray-400">

                                <a href="#" className="hover:text-white transition duration-300">
                                    LinkedIn
                                </a>

                                <a href="#" className="hover:text-white transition duration-300">
                                    GitHub
                                </a>

                                <a href="#" className="hover:text-white transition duration-300">
                                    Twitter
                                </a>



                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>);
}
export default Landing;

