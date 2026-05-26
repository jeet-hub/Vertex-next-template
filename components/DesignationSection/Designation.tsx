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

// designation
const designations = [
  {
    id: 1,
    category: "Executive Leadership",
    title: "Board & C-Suite",
    items: [
      "Chief Executive Officers (CEO)",
      "Chief Information Officers (CIO)",
      "Chief Technology Officers (CTO)",
      "Chief Digital Officers (CDO)",
      "Chief Financial Officers (CFO)",
      "Chief Operating Officers (COO)",
      "Chief Security Officers (CSO / CISO)",
      "Chief Energy Officers (CEO/CEng)"
    ]
  },

  {
    id: 2,
    category: "Senior Management",
    title: "Directors & VPs",
    items: [
      "IT Directors & Heads of IT",
      "Director of Infrastructure",
      "VP of Technology Partnerships",
      "Head of Digital Transformation",
      "Director of Procurement",
      "Head of Network Operations",
      "Director of Facilities & Engineering",
      "Head of Cybersecurity Operations"
    ]
  },

  {
    id: 3,
    category: "Technical Authority",
    title: "Engineering & Architecture",
    items: [
      "Enterprise Architects",
      "Solutions Architects",
      "Network & Security Engineers",
      "Data Centre Design Engineers",
      "Power Systems Engineers",
      "Cloud & DevOps Architects",
      "IoT & OT Systems Engineers",
      "Renewable Energy Engineers"
    ]
  },

  {
    id: 4,
    category: "Commercial & Procurement",
    title: "Procurement & Finance",
    items: [
      "Group Procurement Managers",
      "Category Managers — Technology",
      "Supply Chain Directors",
      "Vendor Management Officers",
      "Infrastructure Investment Analysts",
      "Project Finance Managers",
      "Asset Managers — Digital & Energy",
      "Contract & Commercial Managers"
    ]
  },

  {
    id: 5,
    category: "Public Sector",
    title: "Government & Regulation",
    items: [
      "Ministry of Communications Officials",
      "National Broadband Agency Officers",
      "Electricity Regulatory Commissioners",
      "Smart City Programme Directors",
      "National Grid Operations Leadership",
      "Digital Economy Policy Advisors",
      "Petroleum & Energy Sector Regulators",
      "State Government IT Commissioners"
    ]
  },

  {
    id: 6,
    category: "Investment & Finance",
    title: "Capital & Investors",
    items: [
      "Private Equity Investment Directors",
      "DFI Programme Officers (IFC, AfDB)",
      "Infrastructure Fund Managers",
      "Venture Capital Partners",
      "Project Finance Bankers",
      "M&A and Corporate Finance Leads",
      "Climate Finance Structurers",
      "Sovereign Wealth Fund Allocators"
    ]
  }
];

export default function TestimonialSection() {
  return (
    <section id="program"
      className="testimonial pb-150 bg_img"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
          <span className="sub-title mb-15">The Designations We Convene</span>
          <h2 className="title">
            Every Senior Title.{" "}
            <Image src={gifShape} alt="gif" className="inline-block" /> Every Decision-Making Layer.
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
          {designations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="designation-card">

                <span className="category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <ul>
                  {item.items.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
