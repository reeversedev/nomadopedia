import React, { Component } from "react";
import Slider from "react-slick";

export default class ImageSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings} className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center">
            <img src="https://instagram.ffjr1-3.fna.fbcdn.net/vp/353e5862bad82e83de7aad5e168e940d/5BE1D914/t51.2885-15/e35/33428195_1861155833936472_6626461795525591040_n.jpg?_nc_eui2=AeHi_qWaVvKJCivOFtNUZcC1q5JSqk2Ct1KGh-gUwNsXm1-M2XBqa8Z03T697puchtEGt1RN-8PmTRx-h1Hr4MsoWhi1RsgMgbI4yiKUU2YTqA" width="800" height="500" alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src="https://instagram.ffjr1-3.fna.fbcdn.net/vp/61c44775d8d2bfd58fba019108489655/5BE19E73/t51.2885-15/e35/33569536_2052543481687547_7399325269061795840_n.jpg?_nc_eui2=AeF-02aICFaqWc4WGyJFZBWXLmIqKfffh59AgClRB-efvdNm6STAfrabHBwe4VooBcnwysH4P3eq2bSv9Y7I4kbXr7LkGFNEGs7LYlMQlo42ew" width="800" height="500" alt="" />
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
