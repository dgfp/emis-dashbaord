import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import BangladeshMap from "./districts.json";
import upazilaMap from "./upazila.json";
import "leaflet/dist/leaflet.css";
import "./map.css";

const ReactLeafletMap = () => {
    const [zillaMap, setZillamap] = useState(null);
    const fillColorHover = '#57d105';
    /*
    useEffect(() => {
        const fetchZillamap = async () => {
            const res = await axios.post("http://43.229.15.152:8080/rhis_fwc_monitoring/mapdata"
            ,{ zilla: 0, upazila: 0, union: 0, methodType: 0 },
            {
                headers: {
                  "Access-Control-Allow-Origin": "*"
                }
            }
            ).then(response => {
                console.log("goog to go",response);
              })
              .catch(error => {
                console.error("very bad",error);
              });
            setZillamap(res.data);
        };

        fetchZillamap();
    }, []);

    console.log("zillaMap", zillaMap);
    */
    const districtStyle = (feature) => ({
        fillColor: feature.properties.color,
        weight: 2,
        opacity: 1,
        color: 'white',  //Outline color
        fillOpacity: 0.8
    });

    const handleLayerDoubleClick = (event, layer) => {
        //console.log("event",event);
        //console.log("layer",layer);
        const zillaid = event.sourceTarget.feature.properties.zillaid;
        const upazilaid = event.sourceTarget.feature.properties.upazilaid;
        alert("This is double click event district name " + event.sourceTarget.feature.properties.name + zillaid + upazilaid);

        //upazilaMap
    };

    const handleLayerSingleClick = (event, layer) => {
        //console.log("event",event);
        //console.log("layer",layer);
        const zillaid = event.sourceTarget.feature.properties.zillaid;
        const upazilaid = event.sourceTarget.feature.properties.upazilaid;
        alert("This is single click event district name " + event.sourceTarget.feature.properties.name + zillaid + upazilaid);
        //cleanCards();
        //loadDataToWidget(feature,layer);
        //const bounds = event.target.getBounds();
        //console.log(bounds);
    }

    const highlightFeature = (event, layer) => {
        var layer = event.target;
        const { risques7, libelle } = event.target.feature.properties;
        //setOnselect({
        // risques:risques7,
        // libelle:libelle,
        //});
        layer.setStyle({
            fillColor: '#57d105',
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        const zillaid = event.sourceTarget.feature.properties.zillaid;
        const upazilaid = event.sourceTarget.feature.properties.upazilaid;
        alert("This is single click event district name " + event.sourceTarget.feature.properties.name + zillaid + upazilaid);
    }

    const resetHighlight = (e, layer) => {
        //setOnselect({});
        //e.target.setStyle(style(e.target.feature));
        layer.setStyle({
            fillColor: e.target.feature.properties.color,
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
    }

    const mouseHover = (e, layer) => {
        layer.setStyle({
            fillColor: '#57d105',
            weight: 5,
            color: '#666',
            dashArray: '',
            //fillOpacity: 0.7
        });
    }
    const onEachFeature = (feature, layer) => { //console.log("map_layer",feature);
        //const districtName = feature.properties.name;
        layer.options.fillColor = feature.properties.color;
        layer.on("dblclick", (e) => {
            handleLayerDoubleClick(e, layer);
        });
        /*
        layer.on("click", (e) => {
          this.highlightFeature(e,layer)
        });
        */
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
        <MapContainer center={[23.81028197376488, 90.41280008805198]}
            style={{ height: "80vh", width: "auto" }}
            zoom={7}
            doubleClickZoom={false}
            //ref={this.mapRef}
            bounceAtZoomLimits={true}
            maxBoundsViscosity={0.95}
            maxBounds={[
                [-380, 90],
                [390, 90]
            ]}
            className="map_map margin-zero map-padding">
            {/*<TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='Bangladesh' maxZoom='27' minZoom='1'/>*/}
            {/*<Legend />*/}
            <GeoJSON style={districtStyle} data={BangladeshMap.features} onEachFeature={onEachFeature} />
        </MapContainer>
    );
};

export default ReactLeafletMap;