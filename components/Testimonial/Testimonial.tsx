"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

// Images
import bgImage from "@/public/images/bg/testimonial-bg.png";
import gifShape from "@/public/images/icon/animated-gif03.gif";

import avatar1 from "@/public/images/avatar/img01.jpg";
import avatar2 from "@/public/images/avatar/img02.jpg";
import avatar3 from "@/public/images/avatar/img03.jpg";
import avatar4 from "@/public/images/avatar/img04.jpg";
import avatar5 from "@/public/images/avatar/img05.jpg";

// Testimonial data
const testimonials = [
  {
    id: 1,
    source: "IOT West Africa",
    rating: "5.0",
    content:
      "“Data center infrastructure has become vital, with Nigeria hosting 11 colocation data centers and Africa having 91 overall. IOT West Africa 2023 focused on growth opportunities, future-proofing, workforce development, and green technologies while engaging policymakers and industry leaders.”",
    name: "Regional Executive",
    designation: "West Africa",
    avatar: avatar1,
  },

  {
    id: 2,
    source: "NITDA",
    rating: "5.0",
    content:
      "“Collaborative efforts are building a resilient IoT ecosystem in Nigeria. IOT West Africa 2023 showcased how digital technology transforms learning, work, and social interactions while creating opportunities and reshaping business competitiveness.”",
    name: "Director General / CEO",
    designation: "NITDA",
    avatar: avatar2,
  },

  {
    id: 3,
    source: "Power & Water Nigeria",
    rating: "4.9",
    content:
      "“Participating in Power & Water Nigeria was rewarding, offering engagement with industry leaders and stakeholders. The event showcased innovative grid technologies and emerging energy trends while fostering valuable collaborations.”",
    name: "Regional Director Grid Technologies",
    designation: "Siemens Energy",
    avatar: avatar3,
  },

  {
    id: 4,
    source: "Nigeria LNG",
    rating: "5.0",
    content:
      "“Power & Water Nigeria provided a strong platform to connect with leaders and explore innovations. Discussions around IoT’s impact on efficiency, safety, and data management highlighted sustainability and technological advancement.”",
    name: "GM Technical Division",
    designation: "Nigeria LNG Limited",
    avatar: avatar4,
  },

  {
    id: 5,
    source: "IOT West Africa",
    rating: "5.0",
    content:
      "“IOT West Africa 2023 highlighted the importance of advancing critical infrastructure, data centers, and green technologies. The event successfully brought together policymakers and industry leaders to discuss future opportunities.”",
    name: "Regional Executive",
    designation: "West Africa",
    avatar: avatar5,
  },

  {
    id: 6,
    source: "NITDA",
    rating: "5.0",
    content:
      "“The platform bridged gaps, created opportunities, and demonstrated how digital technology is transforming industries and social interactions. It truly reflects an era where science fiction is becoming reality.”",
    name: "Director General / CEO",
    designation: "NITDA",
    avatar: avatar5,
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="testimonial pb-20 bg_img"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-20">
          <span className="sub-title mb-15">Our Testimonial</span>
          <h2 className="title">
            Hear from our{" "}
            <Image src={gifShape} alt="gif" className="inline-block" /> Delegate Reviews

          </h2>
        </div>
      </div>

      <div className="xb-testimonial-slider">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={700}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1600: { slidesPerView: 5 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="xb-testimonial-item">
                <div className="xb-item--inner xb-border">
                  <ul className="xb-item--rating list-unstyled ul_li">
                    <li>
                      <i className="fa-solid fa-star-sharp"></i>
                    </li>
                    <li>{item.source}</li>
                    <li>{item.rating}</li>
                  </ul>

                  <p className="xb-item--content">{item.content}</p>

                  <div className="xb-item--author ul_li">
                    <div className="xb-item--avatar">
                      <Image src={item.avatar} alt={item.name} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">{item.name}</h3>
                      <span className="xb-item--desig">
                        {item.designation}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
