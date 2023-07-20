import react from 'react';
import Slider from "react-slick";
import client1 from '../images/client1.png';
import client2 from '../images/client2.png';
import client3 from '../images/client3.png';
import client4 from '../images/client4.png';


export default function Client() {

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="slick-carousel_testi">
        <Slider {...settings}>
            <div className="testi_slide">
               <div className="testimonial-card-box">
                  <div className="inner">
                     <div className="client-info">
                        <div className="thumbnail">
                           <img src={client1}/>
                           <h6 className="title">Nancy Phipps</h6>
                        </div>
                        <div className="content">
                           <span className="designation">I recently discovered Roopnandini, and I must say they are a hidden gem in the world of clothing manufacturers. Their Indo-Western Outfits are simply stunning.</span> 
                        </div>
                     </div>
                    
                     <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                  </div>
               </div>
            </div>
            <div className="testi_slide">
               <div className="testimonial-card-box">
                  <div className="inner">
                     <div className="client-info">
                        <div className="thumbnail">
                           <img src={client2}/>
                            <h6 className="title">Nancy Phipps</h6>
                        </div>
                        <div className="content">
                           <span className="designation">I recently discovered Roopnandini, and I must say they are a hidden gem in the world of clothing manufacturers. Their Indo-Western Outfits are simply stunning.</span> 
                        </div>
                     </div>
                    
                     <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                  </div>
               </div>
            </div>
            <div className="testi_slide">
               <div className="testimonial-card-box">
                  <div className="inner">
                     <div className="client-info">
                        <div className="thumbnail">
                           <img src={client3}/>
                           <h6 className="title">Nancy Phipps</h6>
                        </div>
                        <div className="content">
                           <span className="designation">I recently discovered Roopnandini, and I must say they are a hidden gem in the world of clothing manufacturers. Their Indo-Western Outfits are simply stunning.</span> 
                        </div>
                     </div>
                    
                     <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                  </div>
               </div>
            </div>
            <div className="testi_slide">
               <div className="testimonial-card-box">
                  <div className="inner">
                     <div className="client-info">
                        <div className="thumbnail">
                           <img src={client4}/>
                            <h6 className="title">Nancy Phipps</h6>
                        </div>
                        <div className="content">
                           <span className="designation">I recently discovered Roopnandini, and I must say they are a hidden gem in the world of clothing manufacturers. Their Indo-Western Outfits are simply stunning.</span> 
                        </div>
                     </div>
                    
                     <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                  </div>
               </div>
            </div>

        </Slider>
      </div>
    );
}