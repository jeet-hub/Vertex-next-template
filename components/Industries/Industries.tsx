"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Images
import bgImg from "@/public/images/bg/industries-bg02.png";
import icon01 from "@/public/images/icon/iot.svg";
import icon02 from "@/public/images/icon/power.svg";
import icon03 from "@/public/images/icon/cyber.svg";
import icon04 from "@/public/images/icon/smart.svg";
import icon05 from "@/public/images/icon/data-center.svg";
import icon06 from "@/public/images/icon/bank.svg";
import icon07 from "@/public/images/icon/service-icon07.svg";

export default function IndustriesSection() {
  const industries = [
    { icon: icon01, title: "IoT, AI & Digital Transformation" },
    { icon: icon02, title: "Power, Energy & Renewables" },
    { icon: icon03, title: "Cybersecurity & Cloud Infra" },
    { icon: icon04, title: "Smart Grids & Utilities" },
    { icon: icon05, title: "Data Centres & Connectivity" },
    { icon: icon06, title: "Gov. , Fintech & Industry 4.0" },
  ];

  return (
    <section
      className="industries pb-165 bg_img bg-wrap"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-50">
          <span className="sub-title mb-15">Industries We Serve</span>
          <h2 className="title">The Full Spectrum of Digital Infrastructure</h2>
        </div>
      </div>

      <div className="xb-industries-wrapper d-inline-block">
        <Marquee
          direction="right"
          speed={90}
          gradient={false}
          pauseOnHover
          className="marquee-right"
        >
          <div className="xb-industries-inner ul_li">
            {industries.map((item, index) => (
              <div className="xb-industries-item xb-border" key={index}>
                <div className="xb-icon">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <h3 className="xb-title">{item.title}</h3>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
