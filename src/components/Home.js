import react from 'react';
import Header from './Header.js';
import Banner from './Banner.js';
import measuring from '../images/measuring-tape.png';
import store from '../images/store.png';
import suit from '../images/suit.png';
import group from '../images/group.webp';
import machine from '../images/machine.webp';
import prod1 from '../images/prod-1.png';
import prod2 from '../images/prod-2.png';
import prod3 from '../images/prod-3.png';
import prod4 from '../images/prod-4.png';
import choose from '../images/choose.webp';
import work1 from '../images/work1.webp';
import work2 from '../images/work2.webp';
import work3 from '../images/work3.webp';
import work4 from '../images/work4.webp';
import work5 from '../images/work5.webp';


export default function Home() {
return(
<>
    <Header />
 <Banner/>
  {/***************  Three Boxes ***************/}
<section className="home-section-1" id="section-a1">
   <div className="row container our-quality">
      <div className="col-sm-4 quality-box ">
        <div className="quality-conatiner">
          <div className="quality-logo">
              <img src={measuring} />
          </div>
          <div className="quality-detail">
              <h2 className="quality-heading">
                  Excellent Material
              </h2>
              <p className="quality-desc">Experience the luxury of premium fabrics that enhance comfort and durability.
              </p>
          </div> 
        </div>
      </div>
      <div className="col-sm-4 quality-box ">
        <div className="quality-conatiner">
          <div className="quality-logo">
              <img src={store} />
          </div>
          <div className="quality-detail">
              <h2 className="quality-heading">
                 Quality Product
              </h2>
              <p className="quality-desc">Our commitment to exceptional craftsmanship ensures every product meets the highest standards of quality.

              </p>
          </div> 
        </div>
      </div>
      <div className="col-sm-4 quality-box ">
        <div className="quality-conatiner">
          <div className="quality-logo">
              <img src={suit} />
          </div>
          <div className="quality-detail">
              <h2 className="quality-heading">
               Trusted by Clients
              </h2>
              <p className="quality-desc">Count on us to deliver reliable, top-notch clothing solutions that have earned the trust of our valued clients.
              </p>
          </div> 
        </div>
      </div>
   </div>
</section>
<section className="home-section-2" id="section-a2">
    <div className="container about-box">
        <div className="row about-container">
            <div className="col-sm-6 about-col-1">
                <div className="group-image">
                <img src={group} />
                </div>
                <div className="machine-image">
                    <img src={machine} /> 
                </div>
            </div>
            <div className="col-sm-6 about-col-2">
                <div className="about-heading">
                    <h2>ABOUT US</h2>
                </div>
                <div className="about-desc">
                    Roop Nandini Industries is one of the leading apparel exporter from Jaipur, Rajasthan. With Total in house facilities starting from dying to final packing of the garment. We at Roop Nandini believe in quality and precision so hence usage of highly skilled and qualified labour, masters, designers helps us acheive our goals. We are major in rich Indian taste and exports delivering all over the globe to different continents.
                </div>
                 <div className="about-desc">
                   Some of our major clients in Indian Domestic market compiles of Rastriya Group Ltd., As For You Group Ltd. Our clients across the globe includes Babylon, True True Canada, Charlie Paige, Hotel Shop.
                </div>
                <div className="about-inner_row row">
                    <div className="col-sm-6">
                        <div className="inner-col_content">
                            <div className="inner-col_heading">
                                <h2>Our Vision</h2>
                            </div>
                            <div className="inner-col_desc">
                                With the right drive, passion, and vision, the impossible can become possible. Our vision is to achieve excellence day in and day out, for our client’s satisfaction.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 inner-sec">
                        <div className="inner-col_content">
                            <div className="inner-col_heading">
                                <h2>Our Mission</h2>
                            </div>
                            <div className="inner-col_desc">
                                To strive to become the best in business and to stay humble while doing that
                            </div>
                        </div>
                    </div>
                </div>
                <div className="read-btn">
                    <a href="#">Read  More</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="home-section-3" id="section-a3">
    <div className="latest-products">
        <div className="product-heading">
        <h2 className="prod-heading">
            Latest Products
        </h2>
        <div className="product-sub-heading">
            Explore the most loved and shopped ensembles
        </div>
    </div>
    <div className="product_list">
        <div className="product_row row">
            <div className="product_col col-sm-3">
                <div className="main-prod">
                <a className="product_img" href="#">
                    <img src={prod1}/>
                </a>
                <div className="prod-name">
                    <a className="prod_link" href="#">
                        <h2>Little Princes Dress</h2>
                    </a>
                   <div className="prod-btn">
                      <a className="view_btn" href="#">view details</a> 
                   </div> 
                </div>
                <div className="product_icon">
                    <a href="#">
                        <i className="fa-thin fa-eye"></i>
                    </a>
                    <a href="#">
                        <i className="fa-light fa-heart"></i>
                    </a>
                </div>
             </div>
            </div>
             <div className="product_col col-sm-3">
                <div className="main-prod">
                <a className="product_img" href="#">
                    <img src={prod2}/>
                </a>
                <div className="prod-name">
                    <a className="prod_link" href="#">
                        <h2>Little Princes Dress</h2>
                    </a>
                    <div className="prod-btn">
                      <a className="view_btn" href="#">view details</a> 
                   </div>
                </div>
                <div className="product_icon">
                    <a href="#">
                        <i className="fa-thin fa-eye"></i>
                    </a>
                    <a href="#">
                       <i className="fa-light fa-heart"></i>
                    </a>
                </div>
             </div>
            </div>
              <div className="product_col col-sm-3">
                <div className="main-prod">
                <a className="product_img" href="#">
                    <img src={prod3}/>
                </a>
                <div className="prod-name">
                    <a className="prod_link" href="#">
                        <h2>Little Princes Dress</h2>
                    </a>
                    <div className="prod-btn">
                      <a className="view_btn" href="#">view details</a> 
                   </div>
                </div>
                <div className="product_icon">
                    <a href="#">
                        <i className="fa-thin fa-eye"></i>
                    </a>
                    <a href="#">
                        <i className="fa-light fa-heart"></i>
                    </a>
                </div>
             </div>
            </div>
              <div className="product_col col-sm-3">
                <div className="main-prod">
                <a className="product_img" href="#">
                    <img src={prod4}/>
                </a>
                <div className="prod-name">
                    <a className="prod_link" href="#">
                        <h2>Little Princes Dress</h2>
                    </a>
                    <div className="prod-btn">
                      <a className="view_btn" href="#">view details</a> 
                   </div>
                </div>
                <div className="product_icon">
                    <a href="#">
                        <i className="fa-thin fa-eye"></i>
                    </a>
                    <a href="#">
                       <i className="fa-light fa-heart"></i>
                    </a>
                </div>
             </div>
            </div>
        </div>
    </div>
    </div>
</section>
<section  className="home-section-4" id="section-a4">
    <div className="couters-contaiiner">
        <div className="counter_row">
            <div className="couter_col">
                <div className="counter_couts">
                   <h1>100%</h1>
                   <h2>Quality</h2>
                </div>
                <div className="couter_img">
                     <img src={suit}/>
                </div>
            </div>
            <div className="couter_col">
                <div className="counter_couts">
                   <h1>100%</h1>
                   <h2>Quality</h2>
                </div>
                <div className="couter_img">
                     <img src={suit}/>
                </div>
            </div>
            <div className="couter_col">
                <div className="counter_couts">
                   <h1>100%</h1>
                   <h2>Quality</h2>
                </div>
                <div className="couter_img">
                     <img src={suit}/>
                </div>
            </div>
            <div className="couter_col">
                <div className="counter_couts">
                   <h1>100%</h1>
                   <h2>Quality</h2>
                </div>
                <div className="couter_img">
                     <img src={suit}/>
                </div>
            </div>
            <div className="couter_col">
                <div className="counter_couts">
                   <h1>100%</h1>
                   <h2>Quality</h2>
                </div>
                <div className="couter_img">
                     <img src={suit}/>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="home-section-5" id="section-a5">
    <div className="why_choose">
        <div className="choose_row row">
            <div className="choose_col col-sm-6">
                <div className=" choose_col_first">
                    <div className="choose_heading">
                        WHY CHOOSE US
                    </div>
                    <div className="choose_sub_heading">
                        Our Core Features
                    </div>
                    <div className="choose_inner_row">
                        <div className="row">
                            <div className="choose_inner_col col-sm-6">
                                <div className="inner_choose">
                                    <img src={suit} />
                                    <div className="choose_inner_detail">
                                        <div className="choose_inner_heading">
                                            <h2>History</h2>
                                            <h1>
                                                With a rich heritage in the clothing manufacturing industry, Roopnandini has been delivering exceptional garments for 10 years.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choose_inner_col col-sm-6">
                                <div className="inner_choose">
                                    <img src={suit} />
                                    <div className="choose_inner_detail">
                                        <div className="choose_inner_heading">
                                            <h2>Our Values</h2>
                                            <h1>
                                                Quality: We prioritize delivering products of the highest quality, ensuring customer satisfaction and long-lasting relationships.

                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choose_inner_col col-sm-6">
                                <div className="inner_choose">
                                    <img src={suit} />
                                    <div className="choose_inner_detail">
                                        <div className="choose_inner_heading">
                                            <h2>Work</h2>
                                            <h1>
                                                At Roopnandini, we are dedicated to providing a seamless experience for our clients. From concept development and design to manufacturing and delivery, our skilled team works diligently to bring their visions to life.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choose_inner_col col-sm-6">
                                <div className="inner_choose">
                                    <img src={suit} />
                                    <div className="choose_inner_detail">
                                        <div className="choose_inner_heading">
                                            <h2>Quality</h2>
                                            <h1>
                                                Quality is at the heart of everything we do. We meticulously source the finest fabrics and materials, and our experienced craftsmen pay close attention to every detail during the manufacturing process.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose_col col-sm-6">
                <div className="eduvibe-animated-image-type-one circle-two">
                    <img decoding="async" src={choose} />
                    <div className="circle-image">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="eduvibe-video-popup-content">
                        <a className="eduvibe-video-popup-icon video-img" href="http://roopnandini.com/wp-content/uploads/2023/07/sir.mp4">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section  className="home-section-6" id="section-a6">
    <div className="our_work">
        <div className="work_heading">
            <div className="choose_heading">
                HOW IT WORKS
            </div>
            <div className="choose_sub_heading">
                Our Work Process
            </div>
        </div>
        <div class="work_row">
            <div class="work_col" id="work_1">
                <div class="work_img">
                    <img src={work1}/>
                </div>
                <div class="work_detail">
                    <div class="work_heading">
                        SAMPLING
                    </div>
                    <div class="work_desc">
                        Total in house sampling from dying to complete designing is done in house highly experienced designers take care of new devlopnent.
                    </div>
                </div>
            </div>
            <div class="work_col" id="work_2">
                <div class="work_img">
                    <img src={work2}/>
                </div>
                <div class="work_detail">
                    <div class="work_heading">
                        SAMPLING
                    </div>
                    <div class="work_desc">
                        Total in house sampling from dying to complete designing is done in house highly experienced designers take care of new devlopnent.
                    </div>
                </div>
            </div>
            <div class="work_col" id="work_3">
                <div class="work_img">
                    <img src={work3}/>
                </div>
                <div class="work_detail">
                    <div class="work_heading">
                        SAMPLING
                    </div>
                    <div class="work_desc">
                        Total in house sampling from dying to complete designing is done in house highly experienced designers take care of new devlopnent.
                    </div>
                </div>
            </div>
            <div class="work_col" id="work_4">
                <div class="work_img">
                    <img src={work4}/>
                </div>
                <div class="work_detail">
                    <div class="work_heading">
                        SAMPLING
                    </div>
                    <div class="work_desc">
                        Total in house sampling from dying to complete designing is done in house highly experienced designers take care of new devlopnent.
                    </div>
                </div>
            </div>
            <div class="work_col" id="work_5">
                <div class="work_img">
                    <img src={work5}/>
                </div>
                <div class="work_detail">
                    <div class="work_heading">
                        SAMPLING
                    </div>
                    <div class="work_desc">
                        Total in house sampling from dying to complete designing is done in house highly experienced designers take care of new devlopnent.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
	);
}