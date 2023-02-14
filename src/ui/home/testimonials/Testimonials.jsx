import React, { useState } from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import avatar01 from "../../../assets/avatar01.png";
import avatar02 from "../../../assets/avatar02.png";

const Testimonials = () => {
  const [showCard, setShowCard] = useState(true);
  return (
    <>
      <div className="gym__testimonials">
        <h2>Testimonials</h2>
        <div className="sliders">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="my-swiper"
          >
            <SwiperSlide>
              <div className="slide-item">
                <div className="slide-img-01">
                  <img src={avatar01} alt="avatar" />
                </div>
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores eligendi natus vero accusantium fugiat corrupti
                  quod modi tenetur! Perspiciatis dolorum adipisci modi cumque
                  hic, fugiat voluptatibus repellendus qui voluptas omnis!
                </p>

                {!showCard && (
                  <>
                    <p className="slide-in-top">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Assumenda magnam, a possimus ullam sint cum!
                    </p>
                  </>
                )}
                {showCard ? (
                  <>
                    <h3 onClick={() => setShowCard(false)}>Show More</h3>
                  </>
                ) : (
                  <>
                    <h3 onClick={() => setShowCard(true)}>Show less</h3>
                  </>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="slide-img-02">
                  <img src={avatar02} alt="avatar" />
                </div>
                <h4>Sara Williams</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores eligendi natus vero accusantium fugiat corrupti
                  quod modi tenetur! Perspiciatis dolorum adipisci modi cumque
                  hic, fugiat voluptatibus repellendus qui voluptas omnis!
                </p>
                {!showCard && (
                  <>
                    <p className="slide-in-top">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Assumenda magnam, a possimus ullam sint cum!
                    </p>
                  </>
                )}
                {showCard ? (
                  <>
                    <h3 onClick={() => setShowCard(false)}>Show More</h3>
                  </>
                ) : (
                  <>
                    <h3 onClick={() => setShowCard(true)}>Show less</h3>
                  </>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item">
                <div className="slide-img-03">
                  <img src={avatar01} alt="avatar" />
                </div>
                <h4>Jesica Fernandes</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores eligendi natus vero accusantium fugiat corrupti
                  quod modi tenetur! Perspiciatis dolorum adipisci modi cumque
                  hic, fugiat voluptatibus repellendus qui voluptas omnis!
                </p>
                {!showCard && (
                  <>
                    <p className="slide-in-top">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Assumenda magnam, a possimus ullam sint cum!
                    </p>
                  </>
                )}
                {showCard ? (
                  <>
                    <h3 onClick={() => setShowCard(false)}>Show More</h3>
                  </>
                ) : (
                  <>
                    <h3 onClick={() => setShowCard(true)}>Show less</h3>
                  </>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
