import React, { Component } from "react";
import Header from "components/common/layout/Header";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledButton from "components/common/composables/Button";
import Usestyles from "components/general/settings/Usestyles";
import hero from "assets/images/hero-illus.png";
import element from "assets/images/element.png";
import searchDoc from "assets/images/search-doc.png";
import provider from "assets/images/providers.png";
import "./Landing.scss";
import Carousel from "../Carousel/Carousel";
import { Card, CardContent } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isOnHome: true, isLoggedIn: false };
  }
  render() {
    return (
      <div>
        <Header {...this.state} />
        <Hero></Hero>
        <OurServices />
        <Provider />
        <Carousel></Carousel>
        <Footer />
      </div>
    );
  }
}

function Hero() {
  const classes = Usestyles();
  return (
    <>
      <Grid
        className="HeroContainer"
        container
        justify="space-evenly"
        alignItems="flex-start"
      >
        {/* <img src={element} className="Element" alt="" srcSet="" /> */}
        <Grid item>
          <Typography className="HeroText" variant="h2" gutterBottom>
            Virtual healthcare for you
          </Typography>
          <Typography className="HeroText" variant="body1" gutterBottom>
            Hcares provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone
          </Typography>
          <StyledButton className={classes.btnCta}>Consult today</StyledButton>
        </Grid>
        <Grid item>
          <img src={hero} className="Image" alt="" srcSet="" />
        </Grid>
      </Grid>
    </>
  );
}

function OurServices() {
  const classes = Usestyles();
  const services = [
    {
      id: 1,
      name: "Search Doctor",
      details:
        "Buy your medicines with our mobile application with a simple delivery system",
      icon: searchDoc,
    },
    {
      id: 2,
      name: "Search Doctor",
      details:
        "You Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam rerum voluptates aperiam dolorum hic.",
      icon: searchDoc,
    },
    {
      id: 3,
      name: "Search Doctor",
      details:
        "You Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam rerum voluptates aperiam dolorum hic.",
      icon: searchDoc,
    },
    {
      id: 4,
      name: "Search Doctor",
      details:
        "You Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam rerum voluptates aperiam dolorum hic.",
      icon: searchDoc,
    },
    {
      id: 5,
      name: "Search Doctor",
      details:
        "You Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam rerum voluptates aperiam dolorum hic.",
      icon: searchDoc,
    },
    {
      id: 6,
      name: "Search Doctor",
      details:
        "You Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam rerum voluptates aperiam dolorum hic.",
      icon: searchDoc,
    },
  ];
  return (
    <>
      <Grid
        className="HeroContainer"
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid item>
          <Typography className="ServicesText" variant="body1" gutterBottom>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Typography>
        </Grid>
        <Grid
          className="CardGrid"
          container
          item
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {services.map((service) => (
            <Grid key={service.id} item>
              <Card className="Card">
                <CardContent>
                  <img
                    src={service.icon}
                    className="CardIcon"
                    alt=""
                    srcSet=""
                  />
                  <Typography variant="h6">{service.name}</Typography>
                  <Typography variant="body2" className="CardText">
                    {service.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <StyledButton className={classes.btnSecondary}>Learn More</StyledButton>
      </Grid>
    </>
  );
}

function Provider() {
  const classes = Usestyles();
  return (
    <>
      <Grid
        className="HeroContainer"
        container
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item>
          <img src={provider} className="Image" alt="" srcSet="" />
        </Grid>
        <Grid item>
          <Typography className="HeroText" variant="h2" gutterBottom>
            Leading healthcare providers
          </Typography>
          <Typography className="HeroText" variant="body1" gutterBottom>
            Hcares provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone. To us, it’s not just work. We
            take pride in the solutions we deliver
          </Typography>
          <StyledButton className={classes.btnSecondary}>
            Learn More
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}

function Footer() {
  const classes = Usestyles();
  const coItems = ["About Us", "Testimonials", "Find a doctor", "Apps"];
  return (
    <>
      <footer className="Footer">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <div className="FooterLogo mr2">
              <Avatar className={classes.logo}>H</Avatar>
              <Typography className={classes.title} variant="h5" noWrap>
                cares
              </Typography>
            </div>
            <Typography className="FooterText" variant="body1" gutterBottom>
              Hcares provides progressive, and affordable healthcare, accessible
              on mobile and online for everyone
            </Typography>
            <Typography className={classes.mt8} variant="body2">
              ©Hcares PLC LTD 2020. All rights reserved
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" noWrap>
              Company
            </Typography>
            {coItems.map((item) => (
              <List key={item} dense>
                <ListItem className={classes.list}>
                  <ListItemText primary={item} />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" noWrap>
              Region
            </Typography>
            {coItems.map((item) => (
              <List key={item} dense>
                <ListItem className={classes.list}>
                  <ListItemText primary={item} />
                </ListItem>
              </List>
            ))}
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" noWrap>
              Help
            </Typography>
            {coItems.map((item) => (
              <List key={item} dense>
                <ListItem className={classes.list}>
                  <ListItemText primary={item} />
                </ListItem>
              </List>
            ))}
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default Landing;
