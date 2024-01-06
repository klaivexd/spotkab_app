// app/pages/categories/[category].js
import { useRouter } from 'next/router';
import HeaderDashboard from '../../components/HeaderDashboard';
import Banner from '../../components/Banner';

const CategoryPage = ({ businesses }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <HeaderDashboard />
      <Banner />
      <main className="max-container mx-auto">
        <section className="pt-5">
          <h1 className="text-3xl font-semibold pb-10 px-8 sm:p-10">{category} Businesses</h1>

          {/* Display businesses for the selected category */}
          <div>
            {businesses.map(({ name, category, latitude, longitude }) => (
              <div key={name}>
                <p>{name}</p>
                <p>{category}</p>
                <p>{latitude}, {longitude}</p>
                {/* Display other business details */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ params }) {
  // Fetch businesses for the selected category
  const category = params.category;
  const businesses = await fetch(`https://www.jsonkeeper.com/b/MXTU`).then((res) => res.json());

  // Filter businesses based on the selected category
  const businessesForCategory = businesses.filter(business => business.category === category);

  return {
    props: {
      businesses: businessesForCategory,
    },
  };
}

export default CategoryPage;
