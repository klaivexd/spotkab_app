import React from 'react'

import { useQuery, gql } from '@apollo/client';

const GET_BUSINESSES = gql`
  query GetBusinesses($category: String!) {
    businesses(category: $category) {
      id
      name
      category
      latitude
      longitude
      // other fields...
    }
  }
`;

const page = () => {
  const { loading, error, data } = useQuery(GET_BUSINESSES, {
    variables: { category: 'Restaurants' }, // initial category
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const businesses = data.businesses;

  return (
    <div>
      {/* Display your Mapbox map and businesses list */}
      {/* Use businesses data to render markers on the map */}
    </div>
  );
};

export default page