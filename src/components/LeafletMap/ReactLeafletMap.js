import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMap, Map, MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
//import BangladeshMap from "./districts.json";
//import upazilaMap from "./upazila.json";
import "leaflet/dist/leaflet.css";
import "./map.css";

const ReactLeafletMap = ({ setServiceData }) => {
    const geoJsonRef = useRef();
    //const mapRef = useRef();
    const [map, setMap] = useState(null);
    const [mapCenter, setMapCenter] = useState([23.81028197376488, 90.41280008805198]); //23.81028197376488, 90.41280008805198
    const [mapzoom, setMapzoom] = useState(7);
    const [geoJsonData, setGeoJsonData] = useState(null); //24.39243791991841, 89.99300751738465
    
    //const [getCentraltLatLng,setCentraltLatLng] = useState(null);
    const fillColorHover = '#57d105';
    //http://43.229.15.152:8080/rhis_fwc_monitoring/mapdata
    //divid: 0,zilla: 0, upazila: 0, union: 0, methodType: 0
    //http://114.130.118.116/emis_dashboard_api/api/mapData
    //division: '',zilla: ''
    useEffect(() => {

        const fetchDivisionamap = async () => {

            //for map data
            const res = await axios.post("http://114.130.118.116/emis_dashboard_api/api/mapData",
                { division: '', zilla: '', upazilla: '' },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            ).then(response => {
                //console.log("good to go",response.data.features[7].properties.marker_pos);
                setGeoJsonData(response.data);
                //setCentraltLatLng(response.data.features[7].properties.marker_pos);
            })
                .catch(error => {
                    //console.error("very bad",error);
                });

            //for service data
            try {
                const response2 = await axios.post("http://114.130.118.116/emis_dashboard_api/api/serviceData", {
                    date_from: '2023-12-01',
                    date_to: '2023-12-31',
                    division: '',
                    zilla: '',
                    upazila: ''
                });
                //console.log("response2.data", response2.data);
                setServiceData(response2.data);
                
            } catch (error) {
                console.error("Error:", error);
            }

        };
        fetchDivisionamap();
        
    }, []);
    
    const handleLayerDoubleClick = (event, layer) => {

        const { divid, zillaid,upazilaid,unionid,latitude,longitude,name } = event.target.feature.properties;
       /*
        console.log("divid", divid);
        console.log("zillaid", zillaid);
        console.log("upazilaid", upazilaid);
        console.log("unionid", unionid);
        console.log("latitude", latitude);
        console.log("longitude", longitude);
        */
        const fetchGeoJson = async () => {
            const res = await axios.post("http://114.130.118.116/emis_dashboard_api/api/mapData"
                , { division: parseInt(divid), zilla: zillaid, upazilla: upazilaid },
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            ).then(response => {
                //console.log("good to go",response.data.features[0].properties.); //response.data.features[7].properties.marker_pos
                setGeoJsonData(response.data);
                console.log("geoJsonDataMannan",response.data);
                //console.log("map.getSouthWest()",map.getSouthWest());
                //map.setMaxBounds(map.getBounds());
                //map.flyToBounds(map.getBounds(), { duration: 2 }); // Duration is in seconds
                if (divid !== 0 && zillaid === 0) {
                    var zoom = 8;
                } else if (divid !== 0 && zillaid !== 0 && upazilaid === 0) {
                    var zoom = 9;
                } else if (divid !== 0 && zillaid !== 0 && upazilaid !== 0 && unionid === 0) {
                    var zoom = 12;
                } console.log("zoom", zoom);
                //setMapzoom(zoom); 
                //generateCenter(divid,);
                //map.fitBounds(map.getBounds());
                map.flyTo([latitude,longitude], zoom);
                //const wellBounds = new L.latLngBounds([latlng_Array[0],latlng_Array[1]]);
                //console.log("wellBounds",wellBounds);
                //map.setView([24.38361013452961, 91.4054181647038], 9); .properties.marker_pos
                //setMapCenter([response.data.features[0].geometry.coordinates[0][0][0][0],response.data.features[0].geometry.coordinates[0][0][0][1]]);
                //setMapzoom(28);
                //console.log(response.data.features[0].geometry.coordinates[0][0][0][0],response.data.features[0].geometry.coordinates[0][0][0][1]);
            }).catch(error => {
                    console.error("very bad", error);
            });

            //service data
            try{
                const serviceDataResponse = await axios.post("http://114.130.118.116/emis_dashboard_api/api/serviceData",
                    {date_from: '2023-12-01',date_to: '2023-12-31',division:divid,zilla: zillaid,upazila: upazilaid}
                );
                setServiceData(serviceDataResponse.data);
                //console.log("singleClick",serviceData);
            }catch (error){
                console.log("Error : ",error);
            }
        };
        fetchGeoJson();
    };
    // set the data to new data whenever it changes

    useEffect(() => {
        //console.log("map_qqq",container);
        if (geoJsonRef.current) {
            geoJsonRef.current.clearLayers()   // remove old data
            geoJsonRef.current.addData(geoJsonData) // might need to be geojson.features
            
        }

    }, [geoJsonRef, geoJsonData])


    const handleLayerSingleClick = (event, layer) => {
        //setServiceData([]);
        const { divid, zillaid,upazilaid,unionid,latitude,longitude,name } = event.target.feature.properties;
        const fetchServiceData = async () => {
            try{
                const serviceDataResponse = await axios.post("http://114.130.118.116/emis_dashboard_api/api/serviceData",
                    {date_from: '2023-12-01',date_to: '2023-12-31',division:divid,zilla: zillaid,upazila: upazilaid}
                );
                setServiceData(serviceDataResponse.data);
                //console.log("singleClick",serviceData);
            }catch (error){
                console.log("Error : ",error);
            }
        };
        fetchServiceData();
        
        //alert("This is single click event district name " + event.sourceTarget.feature.properties.name + zillaid + upazilaid);
    }
    //before change
    const highlightFeature = (event, layer) => {
        
        layer.setStyle({
            fillColor: '#57d105',
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    }
    const districtStyle = (feature) => ({
        fillColor: feature.properties.color,
        weight: 2,
        opacity: 1,
        color: 'white',  //Outline color
        fillOpacity: 0.8
    });
    const resetHighlight = (e, layer) => {
        //setOnselect({});
        //e.target.setStyle(style(e.target.feature));
        layer.setStyle({
            fillColor: e.target.feature.properties.color,
            weight: 0,
            color: '#ffffff',
            dashArray: '',
            fillOpacity: 0.7
        });
    }

    const mouseHover = (e, layer) => {
        layer.setStyle({
            fillColor: '#57d105',
            weight: 1,
            color: '#666',
            dashArray: '',
            //fillOpacity: 0.7
        });
    }
    const onEachFeature = (feature, layer) => { //console.log("map_layer",layer);
        //const districtName = feature.properties.name;
        layer.options.fillColor = feature.properties.color;
        layer.on("dblclick", (e) => {
            handleLayerDoubleClick(e, layer);
        });
        
   
        layer.on("click", (e) => {

            setTimeout(() => {
                if (e.originalEvent.detail > 1) {
                    return;
                }
                handleLayerSingleClick(e,layer)
            }, 250);
        });
        
        layer.on("mouseout", (e) => {
            resetHighlight(e, layer)
        });

        layer.on("mouseover", (e) => {
            mouseHover(e, layer)
        });

        layer.on("mouseout", (e) => {
            layer.setStyle({
                fillColor: feature.properties.color
            })
        });

        layer.bindTooltip(
            feature.properties.name,
            {
                permanent: true,
                direction: 'center',
                className: 'areaLabel'
            }
        );
        //console.log("mannan",districtName);

    };

    return (
        <MapContainer center={mapCenter}
            style={{ height: "80vh", width: "auto" }}
            zoom={mapzoom}
            doubleClickZoom={false}
            ref={setMap}

            //ref={geoJsonRef}
            //whenCreated={setMap}
            //whenCreated={mapInstance => {
            //  geoJsonRef.current = mapInstance;
            //}}
            id="mapid"
            className="map map_map margin-zero map-padding">

            {/*<TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='Bangladesh' maxZoom='27' minZoom='1'/>*/}
            {/*<Legend />*/}
            {geoJsonData && <GeoJSON ref={geoJsonRef} style={districtStyle} data={geoJsonData} onEachFeature={onEachFeature} />}
            {/*<GeoJSON style={districtStyle} data={geoJsonData} onEachFeature={onEachFeature} />*/}
        </MapContainer>
    );
};

export default ReactLeafletMap;