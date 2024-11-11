import { useState } from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdGitCompare } from "react-icons/io";

import './ProductCard.css'
const ProductCard = () => {
    const [hover, setHover] = useState(false);

    return (
        <section className='grid grid-cols-4 gap-3'>
            <aside>
                <div id='product-card' className='rounded-3xl'>
                    <img src="https://themedox.com/demo/petpal/assets/img/products/products_img01.jpg" alt="photo" />
                    <div id='bg-side'>
                        <div>
                            <FaHeart/>
                            <FaMagnifyingGlass />

                        </div>
                        <button className='px-4 py-2 bg-red-600 rounded-2xl'>Add to cat</button>
                    </div>

                </div>
                <div id='content'>
                    <div className='flex items-center gap-1'>
                        <span className='text-yellow-300 flex gap-1'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </span>
                        <span className='text-gray-400'>
                            (5 reviews)
                        </span>
                    </div>

                    <h4 className='text-xl'>Hartz Groomer&apos;s Best Extra Gentle <br /> Puppy Shampoo, 18oz Shampoo</h4>
                </div>
            </aside>
        </section>
    );
};

export default ProductCard;
