import React from 'react';
import CategoryBanner from './CategoryBanner';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import HeroBannerSec from './HeroBannerSec';
const HomeMain = () => {
  return (
    <>
      <HeroBannerSec />
      <CategoryBanner />

      <SidebarMain />
    </>
  );
};

export default HomeMain;
