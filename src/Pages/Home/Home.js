import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../Assets/banner.png'
import Advertise from '../Advertised/Advertise';
import Categories from '../Categories/Categories';
import Services from './Services';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <div className="carousel w-4/5 mx-auto py-5 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} alt='' className="w-full rounded" />
                </div>
            </div>
            <h2 className='font-bold text-2xl text-center'>Ctegories you may choose for refurbished phone!</h2>
            <div className='grid grid-cols-3 gap-5 items-center justify-items-center py-5 '>

                {
                    categories.map(category => <Categories key={category._id} category={category}></Categories>)
                }
            </div>
            <h2 className='font-bold text-2xl text-center'>Advertised Items!</h2>
            <div className='grid grid-cols-3 gap-5 items-center justify-items-center py-5 '>
                <Advertise></Advertise>
            </div>
            <h2 className='font-bold text-2xl text-center'>Service</h2>
            <div className='grid grid-cols gap-5 justify-items-center py-5 '>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;