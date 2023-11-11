import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecom from '../ChefRecom/ChefRecom';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import Testimonials from '../TestiMonials/Testimonials';

const Home = () => {
    return (
        <div>

            <Banner/>
            <Category/>
            <ChefService/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecom/>
            <FeaturedItems/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;