import React from "react";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import edward from "assets/images/edward.png";
import Avatar from "@material-ui/core/Avatar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pharma from "assets/images/pharma.png";
import Usestyles from "components/general/settings/Usestyles";
import "./Carousel.scss";

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
    };

    return (
      <>
        <Grid className="SliderContainer" container>
          <Slider className="slider" {...settings}>
            {[1, 2, 3].map((el, index) => (
              <SliderContent key={el} />
            ))}
          </Slider>
        </Grid>
      </>
    );
  }
}

function SliderContent(props) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid className="contain" item>
        <Typography className="" variant="h4" gutterBottom>
          What our customer are saying
        </Typography>
        <hr className="hr" />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item alignItems="center" container lg={6} className="SlideAvatar">
          <Grid item>
            <SlideAvatar></SlideAvatar>
          </Grid>
          <Grid item style={{ paddingLeft: "16px" }}>
            <Typography variant="subtitle2">
              Edward Newgate Founder Circle
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Typography variant="subtitle1">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function SlideAvatar() {
  const classes = Usestyles();

  return <Avatar className={classes.large} alt="Edward" src={edward} />;
}
