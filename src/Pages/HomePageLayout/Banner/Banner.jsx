// import bgBanner from '../../../assets/banner/petBanner.png'

// const Banner = () => {
//     return (
//         <div>
//             <img className='rounded-xl' src={bgBanner} alt="" />
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faDog } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative rounded-md overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[600px] flex items-center justify-center">
            {/* Animated pet paw icon */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <FontAwesomeIcon icon={faPaw} className="text-purple-500 text-3xl" />
            </motion.div>

            {/* Animated dog icon */}
            <motion.div
                className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            >
                <FontAwesomeIcon icon={faDog} className="text-blue-500 text-4xl" />
            </motion.div>

            {/* Main content */}
            <div className="text-center z-10">
                <motion.h1
                    className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to Pet Haven
                </motion.h1>
                <motion.p
                    className="text-white text-lg md:text-xl font-medium drop-shadow-md mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    Find your perfect companion and help a pet find their forever home.
                </motion.p>
                <motion.button
                    className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.1 }}
                >
                 <Link to={'/petlist'}>Explore Now</Link>
                </motion.button>
            </div>

            {/* Decorative shapes */}
            <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6 }}
            ></motion.div>

            <motion.div
                className="absolute bottom-0 right-1/3 transform translate-x-1/3 w-[400px] h-[400px] bg-gradient-to-l from-blue-400 to-purple-400 rounded-full opacity-50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
            ></motion.div>
        </div>
    );
};

export default Banner;
