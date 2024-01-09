import React, { useState } from 'react';
import Button from '../ui/button';

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Marketing & Strategy', 'UX & Development', 'Performance Marketing'];

    return (
        <div className=' flex mt-32'>
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
}

export default Categories;
