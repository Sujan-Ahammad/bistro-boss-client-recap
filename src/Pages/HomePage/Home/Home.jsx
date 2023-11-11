import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecom from '../ChefRecom/ChefRecom';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import Testimonials from '../TestiMonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | HOME</title>
            </Helmet>

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