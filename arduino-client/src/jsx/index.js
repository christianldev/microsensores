import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";

/// Css
//import "swiper/css";
import "./index.css";
import "./chart.css";
import "./step.css";

/// Layout
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from './layouts/ScrollToTop';
/// Dashboard
import Home from './components/Dashboard/Home';
import EventList from './components/Dashboard/EventList';
import EventPage from './components/Dashboard/EventPage';
import Analytics from './components/Dashboard/Analytics';
import Reviews from './components/Dashboard/Reviews';
import DashboardCustomers from './components/Dashboard/Customers';
import Task from './components/Dashboard/Task';

//Demo
import DashboardLight from './components/Dashboard/demo/DashboardLight';
import Theme1 from './components/Dashboard/demo/Theme1';
import Theme2 from './components/Dashboard/demo/Theme2';
//import Theme3 from './components/Dashboard/demo/Theme3';
import Theme4 from './components/Dashboard/demo/Theme4';
import Theme5 from './components/Dashboard/demo/Theme5';
import Theme6 from './components/Dashboard/demo/Theme6';


//Content
import Content from './components/Cms/Content';
import Menu from './components/Cms/Menu';
import EmailTemplate from './components/Cms/EmailTemplate';
import Blog from './components/Cms/Blog';


//Ticket
import CreateTicket from './components/Ticket/CreateTicket';
import AllTicket from './components/Ticket/AllTicket';

//Customers
import Chat from './components/Customers/Chat';
import CustomersList from './components/Customers/CustomersList';

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";
import EditProfile from "./components/AppsMenu/AppProfile/EditProfile";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Calendar from "./components/AppsMenu/Calendar/Calendar";

/// Product List
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";
import Customers from "./components/AppsMenu/Shop/Customers/Customers";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ChartJs from "./components/charts/Chartjs";
//import Chartist from "./components/charts/chartist";
import RechartJs from "./components/charts/rechart";
import ApexChart from "./components/charts/apexcharts";

/// Bootstrap
import UiAlert from "./components/bootstrap/Alert";
import UiAccordion from "./components/bootstrap/Accordion";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiModal from "./components/bootstrap/Modal";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiPagination from "./components/bootstrap/Pagination";
import UiGrid from "./components/bootstrap/Grid";
import UiTypography from "./components/bootstrap/Typography";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
//import Nestable from "./components/PluginsMenu/Nestable/Nestable";
//import MainNouiSlider from "./components/PluginsMenu/NouiSlider/MainNouiSlider";
import MainSweetAlert from "./components/PluginsMenu/SweetAlert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/JqvMap/JqvMap";
import Lightgallery from "./components/PluginsMenu/Lightgallery/Lightgallery";

//Redux
import Todo from "./pages/Todo";
//import ReduxForm from "./components/Forms/ReduxForm/ReduxForm";
//import WizardForm from "./components/Forms/ReduxWizard/Index";

/// Widget
import Widget from "./pages/Widget";

/// Table
import SortingTable from "./components/table/SortingTable/SortingTable";
import FilteringTable from "./components/table/FilteringTable/FilteringTable";
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";

/// Form
import Element from "./components/Forms/Element/Element";
import Wizard from "./components/Forms/Wizard/Wizard";
import CkEditor from "./components/Forms/CkEditor/CkEditor";
import Pickers from "./components/Forms/Pickers/Pickers";
import FormValidation from "./components/Forms/FormValidation/FormValidation";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

import { ThemeContext } from "../context/ThemeContext";


const Markup = () => {
  //const { menuToggle } = useContext(ThemeContext);
  const allroutes = [
    /// Dashboard
    { url: "/", component: <EventPage /> },
    { url: 'temperatura-humedad', component: <EventPage /> },
    { url: 'sensor-gas', component: <Analytics /> },

    //Customers
    { url: 'chat', component: <Chat /> },
    { url: 'customers-list', component: <CustomersList /> },



    /// Chart
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },
    //{ url: "chart-chartist", component: Chartist },
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },


    ///Redux
    { url: "todo", component: <Todo /> },
    //{ url: "redux-form", component: ReduxForm },
    //{ url: "redux-wizard", component: WizardForm },

    /// Widget
    { url: "widget-basic", component: <Widget /> },


    /// Form
    { url: "form-element", component: <Element /> },
    { url: "form-wizard", component: <Wizard /> },
    { url: "form-ckeditor", component: <CkEditor /> },
    { url: "form-pickers", component: <Pickers /> },
    { url: "form-validation", component: <FormValidation /> },

    /// table
    { url: 'table-filtering', component: <FilteringTable /> },
    { url: 'table-sorting', component: <SortingTable /> },
    { url: "table-datatable-basic", component: <DataTable /> },
    { url: "table-bootstrap-basic", component: <BootstrapTable /> },


  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <>
      {/* <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div> */}
      <Routes>
        <Route path='page-lock-screen' element={<LockScreen />} />
        <Route path='page-error-400' element={<Error400 />} />
        <Route path='page-error-403' element={<Error403 />} />
        <Route path='page-error-404' element={<Error404 />} />
        <Route path='page-error-500' element={<Error500 />} />
        <Route path='page-error-503' element={<Error503 />} />
        <Route element={<MainLayout />} >
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
      </Routes>

      <ScrollToTop />
    </>
  );
};

function MainLayout() {
  const { menuToggle, sidebariconHover } = useContext(ThemeContext);
  return (
    <div id="main-wrapper" className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${menuToggle ? "menu-toggle" : ""}`}>
      <Nav />
      <div className="content-body" style={{ minHeight: window.screen.height - 45 }}>
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )

};

export default Markup;