import {MapView, FirstPersonView} from '@deck.gl/core';
import MapGL, {Filter, FullscreenControl, Layer, NavigationControl, Popup, Source} from "@urbica/react-map-gl";
import {useState} from "react";
import {TripsLayer} from "@deck.gl/geo-layers";
import {BsCheck} from "react-icons/bs";
import {yachtDetails} from "../../data/yachtDetails";

export default function MapsV1({title, img}) {
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

    const [viewport, setViewport] = useState({
        latitude: -4.327423868316377,
        longitude: 55.74185018908906,
        zoom: 9
    });

    const [pointRest, setPointRest] = useState({
        latitude: 55.740964505719106,
        longitude: -4.330804177122945,
    })

    const point = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {
                    foo: 1
                },
                geometry: {
                    type: 'Point',
                    coordinates: [pointRest.latitude, pointRest.longitude]
                }
            },
            {
                type: 'Feature',
                properties: {
                    foo: 2
                },
                geometry: {
                    type: 'Point',
                    coordinates: [55.830208269275225, -4.358425013152578]
                }
            },
            {
                type: 'Feature',
                properties: {
                    foo: 3
                },
                geometry: {
                    type: 'Point',
                    coordinates: [55.48228232903903, -4.681556550453137]
                }
            }
        ]
    };

    const [filterValue, setFilterValue] = useState(1);

    function clickFilters(number) {
        setFilterValue(number)
        // renderSwitch(number)
    }

    // function popup(value) {
    //     const i = value - 1
    //
    //     const data = point.features[i].geometry.coordinates
    //     const latitude = data[0]
    //     const longitude = data[1]
    //     return (<>
    //             <Popup
    //                 latitude={-4.327423868316377}
    //                 longitude={55.74185018908906}
    //                 closeButton={false}
    //                 closeOnClick={false}
    //                 maxWidth='1500px'
    //             >
    //                 <div>
    //                     <img src={'https://api.yabooker.com/' + img} alt={title} width={200} height={200}
    //                          className={'rounded-lg'}/>
    //                     <p className={"text-lg"}>{title}</p>
    //                 </div>
    //             </Popup>
    //         </>
    //     )
    // }
    //
    return (
        <>
            <button className="w-12 mt-4 btn-primary-1 text-center"
                    onClick={() => clickFilters(1)}>1
            </button>
            <button className="w-12 mt-4 btn-primary-1 text-center"
                    onClick={() => clickFilters(2)}>2
            </button>
            <button className="w-12 mt-4 btn-primary-1 text-center"
                    onClick={() => clickFilters(3)}>3
            </button>

            <MapGL style={{width: '100%', height: '600px'}}
                   accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                   mapStyle='mapbox://styles/mapbox/streets-v9'
                   onViewportChange={setViewport}
                   {...viewport}
            >
                <FullscreenControl position='top-right'/>
                <NavigationControl showCompass showZoom position='top-right'/>
                <Source id='line' type='geojson' data={data}/>
                <Layer
                    id='route'
                    type='line'
                    source='line'
                    layout={{
                        'line-join': 'round',
                        'line-cap': 'round'
                    }}
                    paint={{
                        'line-color': 'yellow',
                        'line-opacity': 0.75,
                        'line-width': 5
                    }}
                />
                <Source id='points' type='geojson' data={point}/>
                <Layer
                    id='points'
                    type='circle'
                    source='points'
                    paint={{
                        'circle-radius': 6,
                        'circle-color': '#1978c8'
                    }}
                />
                <Filter layerId='points' filter={['==', 'foo', filterValue]}/>
                {/*<Popup*/}
                {/*    latitude={-4.327423868316377}*/}
                {/*    longitude={55.74185018908906}*/}
                {/*    closeButton={false}*/}
                {/*    closeOnClick={false}*/}
                {/*    maxWidth='1500px'*/}
                {/*>*/}
                {/*    <div>*/}
                {/*        <img src={'https://api.yabooker.com/' + img} alt={title} width={200} height={200}*/}
                {/*             className={'rounded-lg'}/>*/}
                {/*        <p className={"text-lg"}>{title}</p>*/}
                {/*    </div>*/}
                {/*</Popup>*/}
            </MapGL>
        </>
    )
        ;
}