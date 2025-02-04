import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { MdArrowRightAlt } from "react-icons/md";
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

function Blog() {
  const [data, setData] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 6;

  React.useEffect(() => {
    fetch("http://localhost:3000/blogs")
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

  let projectsblogs = data.filter(function (blogs) {
    return blogs.type === "projects";
  });

  let achievementblogs = data.filter(function (blogs) {
    return blogs.type === "achievement";
  });

  let newsupdates = data.filter(function (blogs) {
    return blogs.type === "newsupdates";
  });
  return (
    <>
      <div>
        <div className="backgroundimageblog opacity-10">
          <div className="container ">
            <div className="text-white pt-[250px] text-center">
              <h1 className="[font:normal_normal_normal_52px/65px_Montserrat] tracking-[0.44px] text-[#2596be]">
                Explore OurBlogs
              </h1>
              <Link to="/">Home</Link> <span>/</span> <span>Blogs</span>
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
                >
                  <Tab label="All" {...a11yProps(0)} />
                  <Tab label="Projects" {...a11yProps(1)} />
                  <Tab label="Achievement" {...a11yProps(2)} />
                  <Tab label="News & Updates" {...a11yProps(3)} />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                <div className="grid grid-cols-3 gap-5 mt-8 blogcontent">
                  {currentItems.map((item) => (
                    <div key={item.id} className="mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full -mb-[15px] h-72 relative bottom-[40px]"
                      />
                      <span className="">{item.title}</span>
                      <p className="font-semibold">{item.description}</p>
                      <Link to="#" className="flex mt-3">
                        Read More
                        <MdArrowRightAlt className="mt-1.5 ml-2 text-[#407cad]" />
                      </Link>
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
                <div className="grid grid-cols-3 gap-5 mt-8 blogcontent">
                  {projectsblogs.map((item) => (
                    <div key={item.id} className="mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full -mb-[15px] h-72 relative bottom-[40px]"
                      />
                      <span className="">{item.title}</span>
                      <p className="font-semibold">{item.description}</p>
                      <Link to="#" className="flex mt-3">
                        Read More
                        <MdArrowRightAlt className="mt-1.5 ml-2 text-[#407cad]" />
                      </Link>
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
                <div className="grid grid-cols-3 gap-5 mt-8 blogcontent">
                  {achievementblogs.map((item) => (
                    <div key={item.id} className="mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full -mb-[15px] h-72 relative bottom-[40px]"
                      />
                      <span className="">{item.title}</span>
                      <p className="font-semibold">{item.description}</p>
                      <Link to="#" className="flex mt-3">
                        Read More
                        <MdArrowRightAlt className="mt-1.5 ml-2 text-[#407cad]" />
                      </Link>
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
                <div className="grid grid-cols-3 gap-5 mt-8 blogcontent">
                  {newsupdates.map((item) => (
                    <div key={item.id} className="mt-12">
                      <img
                        src={item.image}
                        alt="Gallery Item"
                        className="w-full -mb-[15px] h-72 relative bottom-[40px]"
                      />
                      <span className="">{item.title}</span>
                      <p className="font-semibold">{item.description}</p>
                      <Link to="#" className="flex mt-3">
                        Read More
                        <MdArrowRightAlt className="mt-1.5 ml-2 text-[#407cad]" />
                      </Link>
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

export default Blog;
