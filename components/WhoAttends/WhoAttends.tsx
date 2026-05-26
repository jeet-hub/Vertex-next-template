"use client";

import { useState } from "react";
// import "./whoattends.css";

const attendees = [
  {
    id: 1,
    type: "Demand",
    category: "Senior Executive",
    title: "Chief Information Officers",
    tag: "Board Level",
    content:
      "Enterprise CIOs with active digital transformation mandates, CAPEX budgets for technology procurement, and board-level authority across telecoms, banking, FMCG and public sector."
  },

  {
    id: 2,
    type: "Demand",
    category: "Technical Authority",
    title: "IT Directors & Head of Infrastructure",
    tag: "Procurement Ready",
    content:
      "Mid-to-senior technical decision-makers with direct procurement authority for servers, storage, networking, cybersecurity within a 6–18 month deployment horizon."
  },

  {
    id: 3,
    type: "Demand",
    category: "Energy Procurement",
    title: "Chief Energy Officers & Facility Managers",
    tag: "Energy",
    content:
      "Operators managing distributed power requirements, on-site generation, PPA negotiation and energy cost reduction."
  },

  {
    id: 4,
    type: "Supply",
    category: "Technology OEMs",
    title: "Global Technology Manufacturers",
    tag: "Tier 1 Vendors",
    content:
      "Tier 1 hardware and software vendors seeking curated access to enterprise and government decision-makers."
  },

  {
    id: 5,
    type: "Supply",
    category: "Systems Integrators",
    title: "Regional & Global SIs",
    tag: "Certified SI",
    content:
      "Managed service providers and VAR partners showcasing end-to-end solution capabilities."
  },

  {
    id: 6,
    type: "Supply",
    category: "Professional Services",
    title: "Consultancies & Advisory Firms",
    tag: "Advisory",
    content:
      "Management consultancies and technical advisory firms offering sector expertise."
  }
];

export default function WhoAttends() {

const [activeTab,setActiveTab]=useState("All");

const filteredData =
activeTab==="All"
? attendees
: attendees.filter(item=>item.type===activeTab);

return(

<section className="who-attend-section">

<div className="container">

<div className="who-heading">
<span>Vertex Next Platform</span>
<h2>Who attends Vertex Next?</h2>
</div>

<div className="who-tabs">

<button
className={activeTab==="All" ? "active" : ""}
onClick={()=>setActiveTab("All")}
>
All
</button>

<button
className={activeTab==="Demand" ? "active" : ""}
onClick={()=>setActiveTab("Demand")}
>
Demand Side
</button>

<button
className={activeTab==="Supply" ? "active" : ""}
onClick={()=>setActiveTab("Supply")}
>
Supply Side
</button>

</div>


<div className="who-grid">

{filteredData.map(item=>(
<div className="who-card" key={item.id}>

<span className="who-category">
{item.category}
</span>

<h3>{item.title}</h3>

<p>{item.content}</p>

<div className="who-tag">
{item.tag}
</div>

</div>
))}

</div>

</div>

</section>

)

}