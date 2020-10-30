import React from "react";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.scss";

export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true
    };
    return (
      <>
        <Grid className="SliderContainer" container justify="center">
          <div>
            <Slider className="container" {...settings}>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
                <img src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </div>
        </Grid>
      </>
    );
  }
}
