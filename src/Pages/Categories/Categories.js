import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({ category }) => {
    const { picture, company } = category;
    return (
        <>
            <Link to={`/category/${company}`}>
                <div className="card w-3/4 bg-base-100 shadow-2xl">
                    <figure><img src={picture} alt="logo" /></figure>
                </div>
            </Link>
        </>
    );
};

export default Categories;