import React from 'react';
import SidebarMain from '../SharedComponents/Sidebars/SidebarMain';
import HomeTwoBannerArea from './HomeTwoBannerArea';
import CategoryArea from '../home/CategoryArea';
import CategoryAreaTwo from './CategoryAreaTwo';

const HomeTwoMain = () => {
  return (
    <>
      <HomeTwoBannerArea />
      {/* <CategoryArea /> */}
      <CategoryAreaTwo />
      <SidebarMain />
    </>
  );
};

export default HomeTwoMain;
