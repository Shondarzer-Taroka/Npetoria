import React from 'react';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import ProductCard from '../ProductCard/ProductCard';

const Pets = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-[270px_1fr] gap-2'>
            <FilterSidebar/>
            <ProductCard/>
        </div>
    );
};

export default Pets;