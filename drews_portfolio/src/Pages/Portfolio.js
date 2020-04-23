import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "../components/Head";
import Title from "../components/Title";
import PortfolioProjects from "../components/PortfolioProjects";
import PyCdv from "../images/pycdv.PNG";
const Portfolio = () => {
  let ad =
    "PyCDV is a website that compiles statistics, facts, and information about our current COVID-19 pandemic";
  let lorem = "Just some random details...";
  const projectContainer = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // height: "50vh",
    marginTop: "30px",
  };
  const colStyling = {
    padding: "0px",
    margin: "0px",
  };
  return (
    <div>
      <Container>
        <Head />
        <Title name="Projects" />
        <Row style={projectContainer}>
          <Col style={colStyling}>
            <PortfolioProjects
              appUrl="https://pycdv.com"
              appName="Pycdv"
              appDetails={ad}
              appImage={PyCdv}
            />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects appName="To Be Continued" appDetails={lorem} />
          </Col>
          <Col style={colStyling}>
            <PortfolioProjects appName="To Be Continued" appDetails={lorem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
