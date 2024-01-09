import React from 'react';
import HeaderDashboard from '../../components/HeaderDashboard';
import Banner from '../../components/Banner';
import CategoryCards from '../../components/CategoryCards';
import List from './List';

const page = () => {
    return (
      <>
        <HeaderDashboard />
        <Banner />
        <main className="max-container mx-auto">
          <section className="pt-5">
            <h1 className="text-3xl font-semibold pb-10 px-8 sm:p-10">Choose a category</h1>

            {/* Data from JSON file */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <List />
            </div>
          </section>
        </main>
      </>
    )
}

export default page;