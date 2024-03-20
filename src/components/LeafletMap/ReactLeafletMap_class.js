/*!
Abdul Mannan
*/
import React, { Component} from "react";
import { MapContainer, GeoJSON,TileLayer } from "react-leaflet";
//import Legend from "./Legend_copy";
//import mapData from "./countries.json";
import BangladeshMap from "./districts.json";
//import upazilaMap from "./upazila.json";
import "leaflet/dist/leaflet.css";
import "./map.css"

class ReactLeafletMap extends Component {

    //mapRef = React.createRef(); // Create a Map reference
    fillColorHover= '#57d105';

    componentDidMount() {
      console.log(BangladeshMap);
    }
   
    onEachFeature = (feature,layer) =>{ //console.log("map_layer",feature);
      //const districtName = feature.properties.name;
      layer.options.fillColor = feature.properties.color;
      
      layer.bindTooltip(
        feature.properties.name,
        {
          permanent:true,
          direction:'center',
          className: 'areaLabel'
        }
      );
      //console.log("mannan",districtName);
      
    };
    render() {
      
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
          >
             
          <GeoJSON data={BangladeshMap.features} onEachFeature={this.onEachFeature}/>
          </MapContainer>
        );
    }
}

export default ReactLeafletMap;
