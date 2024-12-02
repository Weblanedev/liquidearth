import menu_data from '@/data/menu-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryAreaTwo = () => {
  const categories = menu_data[1].submenus?.map((item, index) => {
    const imageSource = [
      '/assets/img/category_banner/exploration.jpg',
      '/assets/img/category_banner/renewable.jpeg',
      '/assets/img/category_banner/gas.jpeg',
      '/assets/img/category_banner/transformer.jpg',
    ][index % 4];

    return {
      id: item.id,
      category: item.title,
      imageSource,
    };
  });

  return (
    <>
      <div className="category-area2 pb-120 mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="product-category2-wrapper">
                {categories?.map(item => (
                  <div
                    key={item.id}
                    className="product-category2-single pos-rel"
                  >
                    <div className="product-category-img">
                      {/* <Link href="/shop-sidebar-5-column"> */}
                      <Image
                        style={{ width: '100%', height: 'auto' }}
                        src={item?.imageSource}
                        alt="product-img"
                        width={1000}
                        height={1000}
                      />
                      {/* </Link> */}
                    </div>
                    <div className="product-category-inner">
                      <div className="product-category-content">
                        <Link
                          href="/contact"
                          className="product-category text-black"
                        >
                          {item?.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryAreaTwo;
