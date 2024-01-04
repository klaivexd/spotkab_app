import React, { useState } from 'react'
import Map from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: -100,
        latitude: 40,
        zoom: 15,
    });

    return <Map
        mapboxAccessToken={process.env.mapbox_key}
        mapLib={import('mapbox-gl')}
        {...viewport}
    />;
}

export default Map