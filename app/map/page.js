import React from 'react'
import HeaderDashboard from '../../components/HeaderDashboard'
import Banner from '../../components/Banner'

async function getData() {
  const res = await fetch("http://localhost:3000/item")
  .then(
    (res) => res.json()
  );
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
}

const page = ({res}) => {
  const kabData = fetch (getData())
  return (
    <>
        <HeaderDashboard />
        <Banner />
        <main className="max-container mx-auto">
          <section className="pt-5">
            <h1 className="text-3xl font-semibold pb-10 px-8 sm:p-10">Nearby Places</h1>

            {/* Data from JSON file */}
            {kabData.map((item) => (
              <h1>{item.category}</h1>
            ))}
          </section>
        </main>
    </>
  )
}

export default page