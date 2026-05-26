"use client";

import Image from "next/image";

import logo01 from "@/public/images/brand/logo01.png";
import logo02 from "@/public/images/brand/logo02.png";
import logo03 from "@/public/images/brand/logo03.png";
import logo04 from "@/public/images/brand/logo04.png";
import logo05 from "@/public/images/brand/logo05.png";
import logo06 from "@/public/images/brand/logo06.png";

export default function BrandSection() {
  const logos = [logo01, logo02, logo03, logo04, logo05, logo06];

  const statsData = [
    {
      number: "10K+",
      title: "Annual Trade Visitors",
    },
    {
      number: "460+",
      title: "Exhibiting Brands",
    },
    {
      number: "150+",
      title: "Conference Speakers",
    },
    {
      number: "35K+",
      title: "Verified Meetings Hosted",
    },
    {
      number: "38+",
      title: "Nations Represented",
    },
    {
      number: "3",
      title: "Flagship Portfolios",
    },
  ];

  return (
    <section className="brand-section">
      <div className="container">
        <div className="brand-wrapper">

          {/* TOP BADGE */}
          <div className="brand-badge">
            <span className="dot"></span>

            <p>
              Trusted By <span>Leading Exhibitors & Industry Partners</span>
            </p>

            <span className="dot"></span>
          </div>

          {/* STATIC LOGOS */}
          {/* <div className="brand-logos">

            {logos.map((logo, index) => (
              <div className="brand-item" key={index}>
                <Image
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  width={150}
                  height={70}
                />
              </div>
            ))}

          </div> */}

          {/* STATS */}
          <div className="stats-grid">

            {statsData.map((item, index) => (
              <div className="stats-card" key={index}>
                <h3>{item.number}</h3>
                <p>{item.title}</p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}