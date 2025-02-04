import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Footer from "./Footer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Gallery() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 9;

  React.useEffect(() => {
    fetch("http://localhost:3000/gallery")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  let corporategallery = data.filter(function (gallery) {
    return gallery.type === "corporate";
  });

  let residentalgallery = data.filter(function (gallery) {
    return gallery.type === "residental";
  });

  let luxapartmentgallery = data.filter(function (gallery) {
    return gallery.type === "luxapartment";
  });

  let greenhousegallery = data.filter(function (gallery) {
    return gallery.type === "greenhouse";
  });

  let officespacegallery = data.filter(function (gallery) {
    return gallery.type === "officeplace";
  });

  return (
    <>
      <div>
        <div className="backgroundimagegallery">
          <div className="container ">
            <div className="text-white pt-[250px] text-center">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px] text-[#2596be]">
                Gallery
              </h1>
              <Link to="/">Home</Link> <span>/</span> <span>Gallery</span>
            </div>
          </div>
        </div>

        <div className="list">
          <div className="container">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  centered
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Corporate" {...a11yProps(1)} />
                  <Tab label="Residential" {...a11yProps(2)} />
                  <Tab label="Lux Apartment" {...a11yProps(3)} />
                  <Tab label="Green House" {...a11yProps(4)} />
                  <Tab label="Officespace" {...a11yProps(5)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {currentItems.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {corporategallery.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {residentalgallery.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {luxapartmentgallery.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {greenhousegallery.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                <div className="grid grid-cols-3 gap-5 mt-8 galleryimg">
                  {officespacegallery.map((item) => (
                    <div key={item.id} className="bg-[#e9f7f7] mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full h-72 relative bottom-[40px]"
                      />
                      <h1 className="p-2.5 -mt-[26px]">{item.title}</h1>
                    </div>
                  ))}
                </div>

                <div className="pagination">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    className="pagination"
                  />
                </div>
              </CustomTabPanel>
            </Box>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Gallery;
