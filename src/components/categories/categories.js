// Categories.js
import React from 'react';
import Button from '../ui/button';

const Categories = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Marketing & Strategy', 'UX & Development', 'Performance Marketing'];

    return (
        <div className='flex overflow-y-auto md:overflow-y-hidden md:flex-row md:mt-32'>
            {categories.map((category,i) => (
                <Button 
                    key={i} 
                    title={category} 
                    active={category === activeCategory}
                    onClick={() => setActiveCategory(category)}
                />
            ))}
        </div>
    );
};

export default Categories;
