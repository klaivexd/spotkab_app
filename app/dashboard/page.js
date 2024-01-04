import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
import Banner from '../../components/Banner';
import CategoryCards from '../../components/CategoryCards';

export const getCategories = async () => {
  try {
    const data = await fetch('https://www.jsonkeeper.com/b/MXTU', {
      cache: 'force-cache',
    });
    const res = await data.json();
    return res || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

const page = async () => {
  try {
    const fetched = await getCategories();
    return (
      <>
        <HeaderDashboard />
        <Banner />
        <main className="max-container mx-auto">
          <section className="pt-5">
            <h1 className="text-3xl font-semibold pb-10 px-8 sm:p-10">Choose a category</h1>

            {/* Data from JSON file */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {Array.isArray(fetched) && fetched.length > 0 ? (
                fetched?.map(({img, category}) => (
                  <CategoryCards
                    key={img}
                    img={img}
                    category={category}
                  />
                ))
              ) : (
                <p>No categories found.</p>
              )}
            </div>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return <p>Error loading page.</p>;
  }
};

export default page;