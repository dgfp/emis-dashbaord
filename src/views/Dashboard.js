import React, {useState} from "react";
//import ChartistGraph from "react-chartist";
// react-bootstrap components
import {Container,Row} from "react-bootstrap";
import ReactLeafletMap from "components/LeafletMap/ReactLeafletMap";

const Dashboard = () => {
//function Dashboard() {
  const [serviceData, setServiceData] = useState([]);

  const serviceDataBlankArray = [{
    anc_1: 0,
    anc_2: 0,
    anc_3: 0,
    anc_4: 0,
    estimated_elco: "0",
    estimated_household: "0",
    estimated_population: "0",
    estimated_pregnant_mother: "0",
    fwaunits: 0,
    infant_death: 0,
    institutional_delivery_c_section: 0,
    institutional_delivery_normal: 0,
    institutional_delivery_total: 0,
    live_birth: 0,
    maternal_death: 0,
    neonatal_death: 0,
    non_institutional_delivery_non_trained_person: 0,
    non_institutional_delivery_trained_person: 0,
    other_death: 0,
    percentage_of_registered_elco: "0.00",
    percentage_of_registered_household: "0.00",
    percentage_of_registered_population: "0.00",
    percentage_of_registered_pregnant_mother: "0.67",
    pnc_1: 0,
    pnc_2: 0,
    pnc_3: 0,
    pnc_4: 0,
    registered_elco: "0",
    registered_household: "0",
    registered_population: "0",
    registered_pregnant_mother: "0",
    still_birth: 0,
    total_condom_acceptors: 0,
    total_death: 0,
    total_implant_acceptors: 0,
    total_injectable_acceptors: 0,
    total_iud_acceptors: 0,
    total_oral_pill_acceptors: 0,
    under_5_child_death: 0,
    unions: 0
  }];
  
  if(serviceData.length > 0 ){
    var finalServiceData = serviceData;
  }else{
    var finalServiceData = serviceDataBlankArray;
  }
  //console.log("mn",serviceData);
  return (
    <>
      <Container fluid>
        {/* Main row */}
        <Row>
          {/* left col (We are only adding the ID to make the widgets sortable)*/}
          <section className="col-lg-4 connectedSortable">
            {/* Map card */}
            <div className="card ">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fas fa-map-marker-alt mr-1 text-primary" />
                  eMIS Coverage
                </h3>
              </div>
              <div className="card-body">
                {/*
                <div className="horizontal-panel">
                  <div className="col-sm-3">District: 44</div>
                  <div className="col-sm-3">Sub District: 44</div>
                  <div className="col-sm-3">Unions: 44</div>
                  <div className="col-sm-3">Paperless: 14</div>
                </div>
                
                  <img src={require("assets/img/bd_map.png")} style={{ width: "100%" }} />
                */}
                  <ReactLeafletMap style={{ flex: 1, width: '100%' }} setServiceData={setServiceData}/>
                  
              </div>
              {/* /.card-body*/}
            </div>
            {/* /.card */}
            {/* Gallery */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">eMIS Photo Gallery</div>
              </div>
              <div className=" card-body"></div>
            </div>
            {/* /Gallery */}
            {/* Downloads */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Downloads</div>
              </div>
              <div className=" card-body">
                <ul>
                  <li>eMIS Community Application (FWA)</li>
                  <li>eMIS Facility Application (FWV)</li>
                  <li>eMIS Monitoring tool</li>
                  <li>eMIS Community User Guide</li>
                  <li>eMIS Facility User Guide</li>
                </ul>
              </div>
            </div>
            {/* /Downloads */}
          </section>
          {/* left col */}
          {/* right col */}
          { finalServiceData.map( (sdata,index) => ( // iterate service data
          <section className="col-lg-8 connectedSortable" key={index}>
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        <i className="fas fa-home mr-1 text-primary " />
                        Household Registration
                      </h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Estimated</td>
                          <td style={{ textAlign: "right" }}>
                            <strong id="HouseholdRegistrationEstimated">{sdata.estimated_household}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Registered</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.registered_household}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ textAlign: "right", fontWeight: "bold" }}>
                      <h3 className="font-weight-light badge badge-success badge-lg">
                      {sdata.percentage_of_registered_household} %
                      </h3>
                    </div>
                    <div className="progress-group">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar success"
                          style={{ width: "79%" }}
                        />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        <i className="fas fa-users mr-1 text-primary " />
                        Population
                      </h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Estimated</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.estimated_population}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Registered</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.registered_population}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ textAlign: "right", fontWeight: "bold" }}>
                      <h3 className="font-weight-light badge badge-primary badge-lg">
                      {sdata.percentage_of_registered_population} %
                      </h3>
                    </div>
                    <div className="progress-group">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar primary"
                          style={{ width: "79%" }}
                        />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
              {/* ELCO*/}
              <div className="col-lg-3 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        <img src="images/demo/couple.svg" style={{ height: 16 }} />
                        Eligible Couple
                      </h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Estimated</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.estimated_elco}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Registered</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.registered_elco}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ textAlign: "right", fontWeight: "bold" }}>
                      <h3 className="font-weight-light badge badge-warning badge-lg">
                      {sdata.percentage_of_registered_elco} %
                      </h3>
                    </div>
                    <div className="progress-group">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar warning"
                          style={{ width: "79%" }}
                        />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
              {/* Pregnent Women*/}
              <div className="col-lg-3 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">
                        <img src="images/demo/pregwomen.svg" style={{ height: 16 }} />
                        Pregnant Mother (Current Status)
                      </h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <table style={{ width: "100%" }}>
                      <tbody>
                        <tr>
                          <td>Estimated</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.estimated_pregnant_mother}</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Registered</td>
                          <td style={{ textAlign: "right" }}>
                            <strong>{sdata.registered_pregnant_mother}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ textAlign: "right", fontWeight: "bold" }}>
                      <h3 className="font-weight-light badge badge-info badge-lg">
                      {sdata.percentage_of_registered_pregnant_mother} %
                      </h3>
                    </div>
                    <div className="progress-group">
                      <div className="progress progress-sm">
                        <div className="progress-bar info" style={{ width: "79%" }} />
                      </div>
                    </div>
                    {/* /.progress-group */}
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
            </div>
            {/* /Small boxes */}
            {/* Row 2*/}
            <div className="row">
              <div className="col-lg-4 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3
                        className="card-title"
                        title="Contraceptive Acceptance Rate"
                      >
                        Contraceptive Acceptance Rate
                      </h3>
                    </div>
                  </div>
                  <div className="card-body" id="car-body">
                    {/* chart*/}
                    <img src={require("assets/img/car_pie_chart.png")} width="100%" />
                    {/* / Chart*/}
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
              {/* ELCO*/}
              <div className="col-lg-8 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title ">
                        <ion-icon name="people-circle-outline" />
                        MNH (Maternal &amp; Newborn Health)
                      </h3>
                    </div>
                  </div>
                  <div className="card-body" id="mnh-body">
                    <img src={require("assets/img/mnh.png")} height="100%" width="100%" />
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
            </div>
            {/* /Row 2*/}
            {/* row3*/}
            <div className="row">
              <div className="col-lg-4 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">General Patient</h3>
                    </div>
                  </div>
                  <div className="card-body" id="car-body">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Male</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Female</td>
                          <td />
                        </tr>
                        <tr>
                          <td>Child</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* ./card body */}
                </div>
                {/* ./card */}
              </div>
              {/* ./col */}
              <div className="col-lg-8 col-6">
                {/* Card box */}
                <div className="card ">
                  <div className="card-header">
                    <div>
                      <h3 className="card-title">Users of eMIS data</h3>
                    </div>
                  </div>
                  <div className="card-body" id="car-body"></div>
                </div>
                {/* ./card body */}
              </div>
              {/* ./card */}
            </div>
            {/* ./col */}
          </section>
           )) }
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
