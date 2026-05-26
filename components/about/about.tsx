// import Image from "next/image";
// import Link from "next/link";

// import aboutBg from "@/public/images/bg/about-bg.png";

// import gif1 from "@/public/images/icon/original-66948a0d81d.gif";
// import gif2 from "@/public/images/icon/0deec720000b2066289b.gif";
// import gif3 from "@/public/images/icon/b10c3e43e836d32554bf.gif";

// import img01 from "@/public/images/about/img01.jpg";
// import img02 from "@/public/images/about/img02.jpg";
// import img03 from "@/public/images/about/img03.jpg";



// const ABOUT_IMAGES = [img01, img02, img03];

// const MARQUEE_IMAGES = [
//   ...ABOUT_IMAGES,
//   ...ABOUT_IMAGES,
//   ...ABOUT_IMAGES,
// ];

// const REPEAT = Array.from({ length: 4 });

// const BG_STYLE = {
//   backgroundImage: `url(${aboutBg.src})`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };



// export default function AboutSection() {
//   return (
//     <section className="about pt-140">
//       <div className="container">
//         <div className="sec-title about-sec-title mb-75">
//           <span className="sub-title">Who We are</span>

//           <h2 className="title">
//             We helping
//             <span>
//               <Image src={gif1} alt="animation" />
//             </span>
//             grow businesses and
//             <span>
//               <Image src={gif2} alt="animation" />
//             </span>
//             scale with smart, data-driven AI agency
//             <span>
//               <Image src={gif3} alt="animation" />
//             </span>
//           </h2>
//         </div>
//       </div>

//       <div
//         className="xb-about-img-wrap bg_img marquee-container"
//         style={BG_STYLE}
//       >
//         <div className="marquee-track">
//           {MARQUEE_IMAGES.map((img, index) => (
//             <div
//               key={index}
//               className="xb-about-img-item img-hove-effect"
//             >
//               <div className="xb-img">
//                 {REPEAT.map((_, i) => (
//                   <Link href="/service-details" key={i}>
//                     <Image src={img} alt="About Image" />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ==== Import Images ====
import img05 from "@/public/images/about/img05.jpg";
import img06 from "@/public/images/about/img06.jpg";
import img07 from "@/public/images/about/img07.jpg";
import img08 from "@/public/images/about/img08.jpg";

import videoPoster from "@/public/images/about/video-img.png";

import gif1 from "@/public/images/icon/original-66948a0d81d.gif";
import gif2 from "@/public/images/icon/0deec720000b2066289b.gif";
import gif3 from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import featureIcon1 from "@/public/images/icon/feature-icon01.svg";
import featureIcon2 from "@/public/images/icon/feature-icon02.svg";
import featureIcon3 from "@/public/images/icon/feature-icon03.svg";

import aboutBg from "@/public/images/bg/about-bg02.png";

/* ================================
   Static Constants
================================= */

type SequenceItem = "img05" | "img06" | "img07" | "img08" | "video";

const IMAGE_SEQUENCE: SequenceItem[] = [
  "img05",
  "img06",
  "video",
  "img07",
  "img08",
];

const IMAGE_MAP: Record<
  Exclude<SequenceItem, "video">,
  StaticImageData
> = {
  img05,
  img06,
  img07,
  img08,
};

const REPEAT_IMAGES = [0, 1, 2, 3];

/* ================================ */

export default function AboutSection() {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
       
        {/* <div className="about-top-image ul_li_between align-items-start">
          {IMAGE_SEQUENCE.map((item, index) =>
            item === "video" ? (
              <div key="video" className="xb-video">
                <video
                  loop
                  muted
                  playsInline
                  autoPlay
                  poster={videoPoster.src}
                >
                  <source src="https://www.pexels.com/download/video/18069701/" />
                </video>
              </div>
            ) : (
              <div key={index} className="img-hove-effect">
                <div className="xb-img">
                  {REPEAT_IMAGES.map((i) => (
                    <Link key={i} href="/about">
                      <Image src={IMAGE_MAP[item]} alt="about" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div> */}

        
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
          <span className="sub-title mb-10">Who We are</span>

          <h2 className="title">
            The Business of
            <span>
              <Image src={gif1} alt="gif" />
            </span>
            Bringing the Right
            <span>
              <Image src={gif2} alt="gif" />
            </span>
            Rooms Together
            <span>
              <Image src={gif3} alt="gif" />
            </span>
           
          </h2>

          <p className="content">
            The most sophisticated trade transactions in high-growth markets do not originate in boardrooms. They originate on exhibition floors — where trust is built in person, capability is demonstrated live, and procurement mandates are transformed into lasting global partnerships.
          </p>
        </div>

       
        <div className="row mt-40">
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Market Intelligence Architecture</h2>
                  <p className="xb-item--content">
                    We create data-driven events that connect the right buyers and sellers at the right time, driving meaningful business opportunities across every market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon2} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Curated Hosted Buyer Programmes</h2>
                  <p className="xb-item--content">
                    Our Hosted Buyer Methodology connects exhibitors with pre-qualified senior decision-makers, ensuring meaningful meetings with real business potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon3} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">End-to-End Event Engineering</h2>
                  <p className="xb-item--content">
                    We deliver end-to-end event intelligence that drives impactful business <br/>connections and measurable outcomes across global markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="about-bg">
        <Image src={aboutBg} alt="background" />
      </div>
    </section>
  );
}
