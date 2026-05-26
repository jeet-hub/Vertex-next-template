// import Image from "next/image";
// import Link from "next/link";


// import serviceBg from "@/public/images/bg/service-gradient-bg.png";


// import img07 from "@/public/images/service/img07.jpg";
// import img08 from "@/public/images/service/img08.jpg";
// import img09 from "@/public/images/service/img09.jpg";
// import img11 from "@/public/images/service/img11.jpg";

// export default function ServiceSection() {
  
//   const ArrowIcon = () => (
//     <svg
//       width="31"
//       height="31"
//       viewBox="0 0 31 31"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect x="6.29" y="21.411" width="22.36" height="2.839" transform="rotate(-40.2798 6.29 21.411)" fill="white" />
//       <rect x="9.448" y="7.57" width="2.839" height="2.839" transform="rotate(-40.2798 9.448 7.57)" fill="white" />
//       <rect x="13.449" y="7.9" width="2.839" height="2.839" transform="rotate(-40.2798 13.449 7.9)" fill="white" />
//       <rect x="17.451" y="8.23" width="2.839" height="2.839" transform="rotate(-40.2798 17.451 8.23)" fill="white" />
//       <rect x="21.123" y="12.562" width="2.839" height="2.839" transform="rotate(-40.2798 21.123 12.562)" fill="white" />
//       <rect x="20.793" y="16.564" width="2.839" height="2.839" transform="rotate(-40.2798 20.793 16.564)" fill="white" />
//       <rect x="20.461" y="20.566" width="2.839" height="2.839" transform="rotate(-40.2798 20.461 20.566)" fill="white" />
//     </svg>
//   );

  
//   const services = [
//     {
//       title: "AI product",
//       content:
//         "We build scalable AI-powered SaaS solutions that automate tasks, deliver insights, and boost business performance.",
//       images: [img07, img07, img07, img07],
//       link: "/service-details",
//     },
//     {
//       title: "Data and intelligence..",
//       content:
//         "We turn complex data into clear, actionable insights using AI and advanced analytics—empowering smarter decisions.",
//       images: [img08, img08, img08, img08],
//       link: "/service-details",
//     },
//     {
//       title: "AI for E-commerce",
//       content:
//         "We enhance e-commerce with AI-powered, dynamic pricing, and personalized customer experiences.",
//       images: [img09, img09, img09, img09],
//       link: "/service-details",
//     },
//     {
//       title: "AI consulting",
//       content:
//         "We guide businesses in adopting AI strategies, optimizing processes, and integrating technologies for lasting success.",
//       images: [img11, img11, img11, img11],
//       link: "/service-details",
//     },
//     {
//       title: "AI chatbot virtual",
//       content:
//         "We create intelligent chatbots and virtual assistants that improve customer support and automate interactions 24/7.",
//       images: [img11, img11, img11, img11],
//       link: "/service-details",
//     },
//     {
//       title: "AI - marketing",
//       content:
//         "Use AI to target audiences, personalize campaigns, and analyze data for better engagement and results.",
//       images: [img07, img07, img07, img07],
//       link: "/service-details",
//     },
//   ];

//   return (
//     <section
//       className="service pos-rel bg_img"
//       style={{ backgroundImage: `url(${serviceBg.src})` }}
//     >
//       <div className="container">
//         <div className="row mt-none-30">
//           {services.map((service, index) => (
//             <div className="col-lg-6 mt-30" key={index}>
//               <div className="xb-ser-item xb-border img-hove-effect">
//                 <div className="xb-item--inner">
//                   <h3 className="xb-item--title border-effect">
//                     <Link href={service.link}>{service.title}</Link>
//                   </h3>

//                   <Link className="xb-item--icon" href={service.link}>
//                     <ArrowIcon />
//                   </Link>

//                   <p className="xb-item--content">{service.content}</p>

//                   <div className="xb-item--img xb-img">
//                     {service.images.map((img, i) => (
//                       <Link key={i} href={service.link}>
//                         <Image
//                           src={img}
//                           alt={`${service.title} service`}
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import aboutBg from "@/public/images/bg/service-bg.png";
import gif from "@/public/images/icon/b10c3e43e836d32554bf.gif";
import arrowIcon from "@/public/images/icon/rotate-arrow-black.svg";

// EVENT LOGOS
import img01 from "@/public/images/icon/iot-white.svg";
import img02 from "@/public/images/icon/Pnw.svg";
import img03 from "@/public/images/icon/gdcc-white.svg";
import img04 from "@/public/images/icon/slea.png";
import img05 from "@/public/images/icon/digi.png";
import img06 from "@/public/images/icon/ghcc.svg";

interface ServiceItem {
  id: number;
  title: string;
  location: string;
  img: StaticImageData;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "IoT West Africa",
    location: "28 – 29 April, 2027 | Lagos, Nigeria",
    img: img01,
    link: "https://iotwestafrica.com/",
  },
  {
    id: 2,
    title: "PnW Nigeria",
    location: "28 – 29 April, 2027 | Lagos, Nigeria",
    img: img02,
    link: "https://pnwnigeria.com/",
  },
  {
    id: 3,
    title: "Gdcc Expo",
    location: "20 – 21 October, 2026 | Toronto, Canada",
    img: img03,
    link: "https://gdcc-expo.com/",
  },
  {
    id: 4,
    title: "SLEA Expo",
    location: "28 – 29 April, 2027",
    img: img04,
    link: "https://smartliving-expo.com/",
  },
  {
    id: 5,
    title: "Digi Infra",
    location: "Coming Soon",
    img: img05,
    link: "https://digiinfraafrica.com/",
  },
  {
    id: 6,
    title: "Ghcc Expo",
    location: "June, 2027 | Toronto, Canada",
    img: img06,
    link: "https://ghcc-expo.com/",
  },
];

const ArrowIcon = () => (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect
        x="5.066"
        y="19.978"
        width="20.571"
        height="2.612"
        transform="rotate(-40.28 5.066 19.978)"
        fill="white"
      />
      <rect
        x="7.971"
        y="7.244"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 7.971 7.244)"
        fill="white"
      />
      <rect
        x="11.652"
        y="7.548"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 11.652 7.548)"
        fill="white"
      />
      <rect
        x="15.334"
        y="7.852"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 15.334 7.852)"
        fill="white"
      />
      <rect
        x="18.712"
        y="11.837"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 18.712 11.837)"
        fill="white"
      />
      <rect
        x="18.408"
        y="15.52"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 18.408 15.52)"
        fill="white"
      />
      <rect
        x="18.104"
        y="19.201"
        width="2.612"
        height="2.612"
        transform="rotate(-40.28 18.104 19.201)"
        fill="white"
      />
    </svg>
  </>
);

export default function ServiceSection() {
  return (
    <section className="service pt-135">
      <div className="container">
        {/* EVENT LIST */}
        <div
          className="event-list-wrap bg_img pt-3"
          style={{
            backgroundImage: `url(${aboutBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="event-list-card"
            >

              {/* LOGO */}
              <div className="event-logo">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={180}
                  height={90}
                />
              </div>

              {/* TITLE */}
              <div className="event-title">
                <h3>{service.title}</h3>
              </div>

              {/* LOCATION */}
              <div className="event-location">
                <p>{service.location}</p>
              </div>

              {/* BUTTON */}
              <div className="event-btn">
                <Image
                  src={arrowIcon}
                  alt="arrow"
                />
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}