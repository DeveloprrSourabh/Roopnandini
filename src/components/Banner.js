import react from 'react';
import Slider from "react-slick";

export default function Banner() {

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      autoplay:true,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="home-slider">

    <div className="home_slider_img">

     <img width="2560" height="1707" src="https://roopnandini.com/wp-content/uploads/2023/06/184A4371-scaled.webp" className="attachment-full size-full not-transparent wp-post-image" alt="" decoding="async" loading="lazy" />
     <div className="banner-content">
        <div className="container">
        <h4>Roop Nandini Textiles</h4>
<h2>Adapting Latest</h2>
<p>Technology Innovations  </p>
<p><a href="https://roopnandini.com/shop/" className="banner-btn" tabindex="-1">Discover More</a></p>
</div>
     </div>

    </div>

 </div>
 <div className="home-slider">

    <div className="home_slider_img">

     <img width="2560" height="1707" src="https://roopnandini.com/wp-content/uploads/2023/06/184A4371-scaled.webp" className="attachment-full size-full not-transparent wp-post-image" alt="" decoding="async" loading="lazy" />
     <div className="banner-content">
        <div className="container">
        <h4>Roop Nandini Textiles</h4>
<h2>Adapting Latest</h2>
<p>Technology Innovations  </p>
<p><a href="https://roopnandini.com/shop/" className="banner-btn" tabindex="-1">Discover More</a></p>
</div>
     </div>

    </div>

 </div>
  <div className="home-slider">

    <div className="home_slider_img">

     <img width="2560" height="1707" src="https://roopnandini.com/wp-content/uploads/2023/06/184A4371-scaled.webp" className="attachment-full size-full not-transparent wp-post-image" alt="" decoding="async" loading="lazy" />
     <div className="banner-content">
        <div className="container">
        <h4>Roop Nandini Textiles</h4>
<h2>Adapting Latest</h2>
<p>Technology Innovations  </p>
<p><a href="https://roopnandini.com/shop/" className="banner-btn" tabindex="-1">Discover More</a></p>
</div>
     </div>

    </div>

 </div>
 <div className="home-slider">

    <div className="home_slider_img">

     <img width="2560" height="1707" src="https://roopnandini.com/wp-content/uploads/2023/06/184A4371-scaled.webp" className="attachment-full size-full not-transparent wp-post-image" alt="" decoding="async" loading="lazy" />
     <div className="banner-content">
        <div className="container">
        <h4>Roop Nandini Textiles</h4>
<h2>Adapting Latest</h2>
<p>Technology Innovations  </p>
<p><a href="https://roopnandini.com/shop/" className="banner-btn" tabindex="-1">Discover More</a></p>
</div>
     </div>

    </div>

 </div>
        </Slider>
      </div>
    );
}