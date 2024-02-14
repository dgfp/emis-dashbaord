/*!

=========================================================
* eMIS Dashboard React - v1.0.0
=========================================================

* Abdul Manann
*/
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

//import AdminNavbar from "components/Navbars/AdminNavbar";
import Dashboard from "views/Dashboard.js";
import TopNavbar from "components/Navbars/TopNavbar";
import Partners from "components/Footer/Partners";
import Footer from "components/Footer/Footer";
//import Sidebar from "components/Sidebar/Sidebar";

//import routes from "routes.js";

//import sidebarImage from "assets/img/sidebar-3.jpg";

function Admin() {
  //const [image, setImage] = React.useState(sidebarImage);
  //const [color, setColor] = React.useState("black");
  //const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    /*
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
    */
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <TopNavbar /> {/* top nav with logo */}
        <div className="content-wrapper" style={{marginLeft: "0px"}}>
          <section className="content" style={{paddingLeft: "10px" ,paddingTop: "10px"}}>
                <Dashboard />
          </section>
          <Partners />
          <Footer />
        </div>
        
      </div>
    </>
  );
}

export default Admin;