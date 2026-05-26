"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import projectBg from "@/public/images/bg/project-bg.png";
import gifRound from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import projectImg01 from "@/public/images/project/project-img02.webp";
import projectImg02 from "@/public/images/project/project-img.webp";
import projectImg03 from "@/public/images/project/project-img01.webp";
import projectImg04 from "@/public/images/project/project-img04.jpg";

// Icons
import icon01 from "@/public/images/icon/iot-p.svg";
import icon02 from "@/public/images/icon/Pnw.svg";
import icon03 from "@/public/images/icon/gdcc.svg";

export default function ProjectSection() {
  useEffect(() => {
    // Background
    const bgElement = document.querySelector<HTMLElement>(".project.bg_img");
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${projectBg.src})`;
    }

    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(".xb-project-pagination li");
    if (!items.length || !paginations.length) return;

    const updateActive = () => {
      let activeIndex = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIndex = index;
        }
      });

      paginations.forEach((dot) => dot.classList.remove("active"));
      paginations[activeIndex]?.classList.add("active");

      items.forEach((item, i) => {
        item.style.opacity = i === activeIndex ? "1" : i < activeIndex ? "0.3" : "1";
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const ArrowIcon = () => (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>

    {/* second duplicate for animation */}
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>
  </>
);

  const projects = [
    {
      img: projectImg01,
      title: "Iot West Africa",
      desc: "The Rise of The Techo: Redefining the Role of Telcos in Africa’s IoT Future",
      industry: "Data Processing",
      country: "Nigeria",
      techs: [icon01],
    },
    {
      img: projectImg02,
      title: "Pnw Nigeria",
      desc: "Unlocking Growth in Nigeria’s Electricity Industry: Addressing Legacy Debt, Liquidity Constraints, and Market Sustainability",
      industry: "AI , Electricity",
      country: "Nigeria",
      techs: [icon02],
    },
    {
      img: projectImg03,
      title: "Gdcc Expo Canada",
      desc: "Charting the Intelligent Future: Canada’s Vision for AI, Cloud, and Digital Resilience in a Connected World",
      industry: "Computer Vision",
      country: "Canada",
      techs: [icon03],
    },
   
  ];

  return (
    <section id="project" className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">Our Projects</span>

          <h2 className="title">
            <span className="round-img">
              <Image src={gifRound} alt="animation" />
            </span>{" "}
            See the results that reflect of our hard work
          </h2>

          <div className="xb-heading-btn d-inline">
            {/* <Link className="thm-btn agency-btn" href="/project">
              <span className="text">view more projects</span>
              <span className="arrow">
                <span className="arrow-icon">
                  <ArrowIcon />
                </span>
              </span>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">

          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              {projects.map((_, i) => (
                <li key={i} className={i === 1 ? "active" : ""}>
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>

          <div className="xb-project-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img.src})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    <p className="xb-item--content">{project.desc}</p>

                    <ul className="xb-item--list ul_li">
                      <li>Industry: <span>{project.industry}</span></li>
                      <li>Country: <span>{project.country}</span></li>
                    </ul>

                    <div className="xb-item--technologie ul_li">
                      {/* <span></span> */}
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((icon, i) => (
                          <li key={i}>
                            <Image src={icon} alt="tech icon" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" href="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            <ArrowIcon />
                          </span>
                        </span>
                      </Link>
                    </div> */}

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
