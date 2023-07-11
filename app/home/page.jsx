import React from 'react';
import Nav from '@/components/Nav';
import HomeCategories from '@/components/HomeCategories';
import FeaturedCourses from '@/components/FeaturedCourses';

const Page = () => {
    return (
        <section>
            <div>
                <h2 className="p-2 font-bold">Featured Courses</h2>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                    <FeaturedCourses />
                    <FeaturedCourses />
                    <FeaturedCourses />
                    <FeaturedCourses />
                </div>
            </div>
        <div>
        </div>
            <h2 className="p-2 font-bold">Categories</h2>
            <li>
                <HomeCategories />
            </li>
        </section>

    );
};

export default Page;
