import * as React from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {useEffect, useRef, useState} from "react";

// импортируем стили mapbox-gl чтобы карта отображалась коррекно
mapboxgl.accessToken = 'pk.eyJ1IjoibGlraWJsYWNrIiwiYSI6ImNrdjJmbHk4dTExMHEzMWxwNGs3aGs3MXMifQ.IQqsjVY8AhITAhJB2TGrXQ';

export default function MapboxMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-77.210763);
    const [lat, setLat] = useState(38.803367);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });


    const data = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [55.740964505719106, -4.330804177122945],
                [55.830208269275225, -4.358425013152578],
                [55.48228232903903, -4.681556550453137]
            ]
        }
    };

    useEffect(() => {
        if (!map.current) return;
        map.current.on('load', async () => {
            // const response = await fetch(
            //     'https://docs.mapbox.com/mapbox-gl-js/assets/hike.geojson'
            // );
            // const data = await response.json();
            const coordinates = data.geometry.coordinates;
            data.geometry.coordinates = [coordinates[0]];
            map.current.addSource('trace', {type: 'geojson', data: data});
            map.current.addLayer({
                'id': 'trace',
                'type': 'line',
                'source': 'trace',
                'paint': {
                    'line-color': 'yellow',
                    'line-opacity': 0.75,
                    'line-width': 5
                }
            });
            map.current.jumpTo({'center': coordinates[0], 'zoom': 9});
            map.current.setPitch(30);
            let i = 0;
            const timer = setInterval(() => {
                if (i < coordinates.length) {
                    data.geometry.coordinates.push(coordinates[i]);
                    map.current.getSource('trace').setData(data);
                    map.current.panTo(coordinates[i]);
                    i++;
                } else {
                    window.clearInterval(timer);
                }
            }, 30);
        });
    });

    return (
        <>
            <div ref={mapContainer} style={{width: "100%", height: '600px', borderRadius: '20px'}}/>
        </>
    )
}