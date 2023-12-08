import Brands from '@/components/Brands';
import Contacts from '@/components/Contacts';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import HowWorks from '@/components/HowWorks';
import Stats from '@/components/Stats';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <HowWorks/>
      <FeaturedProject/>
      <Contacts/>
      <Brands/>
    </div>
  );
};

export default Page;