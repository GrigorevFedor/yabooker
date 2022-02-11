import {useState} from "react";

import MapGL, {Source, Layer, FullscreenControl, Popup, NavigationControl} from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Maps({title, img}) {

    const [viewport, setViewport] = useState({
        latitude: -4.327423868316377,
        longitude: 55.74185018908906,
        zoom: 9
    });

    const data = {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [
                [55.740964505719106, -4.330804177122945],
                [55.830208269275225, -4.358425013152578],
                [55.48228232903903, -4.681556550453137]
                // [-122.48356819152832, 37.82954808664175],
                // [-122.48507022857666, 37.82944639795659],
                // [-122.48610019683838, 37.82880236636284],
                // [-122.48695850372314, 37.82931081282506],
                // [-122.48700141906738, 37.83080223556934],
                // [-122.48751640319824, 37.83168351665737],
                // [-122.48803138732912, 37.832158048267786],
                // [-122.48888969421387, 37.83297152392784],
                // [-122.48987674713133, 37.83263257682617],
                // [-122.49043464660643, 37.832937629287755],
                // [-122.49125003814696, 37.832429207817725],
                // [-122.49163627624512, 37.832564787218985],
                // [-122.49223709106445, 37.83337825839438],
                // [-122.49378204345702, 37.83368330777276]
            ]
        }
    };

    return (
        <MapGL
            style={{width: '100%', height: '600px'}}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            antialias={true}
            attributionControl={true}
            accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
            // latitude={37.78}
            // longitude={-122.41}
            // zoom={11}
            onViewportChange={setViewport}
            {...viewport}
        >
            <FullscreenControl position='top-right'/>
            <NavigationControl showCompass showZoom position='top-right'/>
            <Source id='route' type='geojson' data={data}/>
            <Layer
                id='route'
                type='line'
                source='route'
                layout={{
                    'line-join': 'round',
                    'line-cap': 'round'
                }}
                paint={{
                    'line-color': 'green',
                    'line-width': 3
                }}
            />
            <Popup
                {...viewport}
                closeButton={false}
                closeOnClick={false}
                maxWidth='1500px'

            >
                <div>
                    <img src={'https://api.yabooker.com/' + img} alt={title} width={200} height={200}
                         className={'rounded-lg'}/>
                    <p className={"text-lg"}>{title}</p>
                </div>
            </Popup>
        </MapGL>
    )
}