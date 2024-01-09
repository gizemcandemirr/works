// Categories.js
import React from 'react';
import Button from '../ui/button';

const Categories = ({ activeCategory, setActiveCategory }) => {
    const categories = ['All', 'Marketing & Strategy', 'UX & Development', 'Performance Marketing'];

    return (
        <div className='flex mt-32'>
            {categories.map(category => (
                <Button 
                    key={category} 
                    title={category} 
                    active={category === activeCategory}
                    onClick={() => setActiveCategory(category)}
                />
            ))}
        </div>
    );
};

export default Categories;
