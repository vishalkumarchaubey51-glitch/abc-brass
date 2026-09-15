export interface CompanyStats {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface Certification {
  code: string;
  title: string;
  issuer: string;
  scope: string;
  verified: boolean;
}

export interface IndustryApplication {
  id: string;
  name: string;
  description: string;
  components: string[];
  specs: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: "ABC BRASS",
  tagline: "PRECISION IN BRASS. ENGINEERED FOR INDUSTRY.",
  shortDescription:
    "Since 1990, ABC BRASS has been manufacturing precision brass fittings, components and OEM solutions for demanding industrial applications worldwide.",
  establishedYear: 1990,
  experienceYears: "35+",
  facilitySize: "50,000+ SQ. FT.",
  facilityAreaNumber: 50000,
  workforce: "125+ Skilled Professionals",
  workforceNumber: 125,
  exportShare: "60–70%",
  annualCapacity: "10M+ Brass Components",
  annualCapacityNumber: 10,
  origin: "Jamnagar, Gujarat, India",
  address: {
    street: "Road No. W, Plot No. 3909, Dared G.I.D.C., Phase - 3",
    city: "Jamnagar",
    postalCode: "361004",
    state: "Gujarat",
    country: "India",
  },
  departments: [
    { name: "General Sales & Inquiries", email: "sales@abcbrass.com" },
    { name: "Export & International OEM", email: "export@abcbrass.com" },
    { name: "Factory & Engineering", email: "factory@abcbrass.com" },
    { name: "Technical RFQ & Drawings", email: "inquiry@abcbrass.com" },
    { name: "Corporate Info", email: "info@abcbrass.com" },
  ],
  phone: "+91 (0288) 273-0000",
  whatsapp: "+91 98250 00000",
  website: "https://www.abcbrass.com",
};

export const COMPANY_STATS: CompanyStats[] = [
  {
    value: 35,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
    sublabel: "Continuous engineering innovation since 1990",
  },
  {
    value: 50000,
    suffix: "+",
    label: "SQ. FT. MANUFACTURING FACILITY",
    sublabel: "State-of-the-art Dared GIDC plant in Jamnagar",
  },
  {
    value: 125,
    suffix: "+",
    label: "SKILLED PROFESSIONALS",
    sublabel: "Machinists, QA metrologists & tooling engineers",
  },
  {
    value: 70,
    suffix: "%",
    label: "EXPORT ORIENTED SHIPMENTS",
    sublabel: "Serving OEM partners in Europe, Americas & Asia",
  },
  {
    value: 10,
    suffix: "M+",
    label: "ANNUAL COMPONENT CAPACITY",
    sublabel: "High-speed multi-spindle automatic & CNC turning",
  },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "1990",
    title: "ABC BRASS Established",
    description:
      "Founded with 1,000 sq. ft. workshop and 10 dedicated craftsmen in Jamnagar, Gujarat, delivering brass fittings to Indian engineering buyers.",
    tag: "Foundation",
  },
  {
    year: "1998",
    title: "Company Expansion",
    description:
      "Scaled up manufacturing footprint to meet surging regional demand for brass fluid system connectors and pipe adapters.",
    tag: "Growth",
  },
  {
    year: "1999",
    title: "High-Precision Machinery Introduced",
    description:
      "Installed high-accuracy automated turning machinery and dedicated threading tooling for tighter dimensional tolerances.",
    tag: "Technology",
  },
  {
    year: "2000",
    title: "Production Expansion",
    description:
      "Doubled machining capacity to fulfill high-volume OEM contracts across hydraulic and refrigeration sectors.",
    tag: "Capacity",
  },
  {
    year: "2003",
    title: "ISO Quality Milestone",
    description:
      "Achieved first ISO 9001 standardization, embedding structured quality controls, incoming material analysis, and optical gauge inspections.",
    tag: "Quality",
  },
  {
    year: "2005",
    title: "Precision Fittings Machinery Expansion",
    description:
      "Added multi-axis CNC machines and custom knurling tooling for specialty brass tube connectors and flared fittings.",
    tag: "Machining",
  },
  {
    year: "2006",
    title: "Domestic OEM Expansion",
    description:
      "Became trusted direct tier-supplier for prominent domestic automotive, compressor, and electrical equipment manufacturers.",
    tag: "OEM Scale",
  },
  {
    year: "2007",
    title: "Export Business Expansion",
    description:
      "Initiated international maritime dispatches, mastering international thread conversions including BSPP, NPT, JIS, and DIN standards.",
    tag: "Global Export",
  },
  {
    year: "2011+",
    title: "Foreign OEM/ODM Strategic Milestones",
    description:
      "Secured proprietary overseas OEM/ODM partnerships across Europe and North America, scaling to 50,000 sq. ft. with 10M+ annual component volume.",
    tag: "International OEM",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "TUV / International Accreditation",
    scope: "Precision machining and manufacturing of brass fluid connectors and custom CNC components.",
    verified: true,
  },
  {
    code: "IATF 16949",
    title: "Automotive Quality Management",
    issuer: "International Automotive Task Force",
    scope: "Stringent defect prevention, trace-code control, and zero-defect automotive supply standards.",
    verified: true,
  },
  {
    code: "ISO 14001:2015",
    title: "Environmental Management System",
    issuer: "Global Quality Accreditation",
    scope: "Eco-compliant brass scrap reclamation, coolant recovery, and sustainable manufacturing.",
    verified: true,
  },
  {
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    issuer: "OH&S Management Standards",
    scope: "Safe foundry operations, ergonomic assembly, and rigorous operator safety protocols.",
    verified: true,
  },
  {
    code: "RoHS Compliant",
    title: "Restriction of Hazardous Substances",
    issuer: "EU Directive Standards",
    scope: "Standard and Lead-Free brass alloys verified for global export to EU, US, and Japanese markets.",
    verified: true,
  },
];

export const OEM_WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Design & Engineering",
    description:
      "CAD/CAM feasibility analysis, tolerance optimization (±0.01 mm), thread specification alignment, and 3D prototyping review.",
  },
  {
    step: "02",
    title: "Material Selection",
    description:
      "Spectrometer-verified raw brass rods (CW614N, CZ121, IS 319, DZR, or Lead-Free alloys) selected per fluid, thermal, and mechanical criteria.",
  },
  {
    step: "03",
    title: "Precision Machining",
    description:
      "High-speed CNC turning, multi-spindle automatic lathes, knurling, single-point threading, and robotic chamfering operations.",
  },
  {
    step: "04",
    title: "Quality Inspection",
    description:
      "Mitutoyo optical profile projectors, thread pitch micrometer verification, pneumatic leak detection, and CMM dimensional audits.",
  },
  {
    step: "05",
    title: "Surface Finishing",
    description:
      "Ultrasonic degreasing, natural brass passivation, electro-nickel plating, chrome finish, or tin coating as per client print.",
  },
  {
    step: "06",
    title: "Assembly & Sub-assemblies",
    description:
      "Precision integration of O-rings, ferrules, internal springs, or pre-crimped fittings under clean-room conditions.",
  },
  {
    step: "07",
    title: "Packaging & Labeling",
    description:
      "Anti-corrosion VCI packaging, barcode labeling, custom OEM master cartons, and palletized stretch wrapping for sea/air freight.",
  },
  {
    step: "08",
    title: "Global Dispatch",
    description:
      "Seamless door-to-port logistics from Jamnagar to major container hubs (Mundra, Nhava Sheva) with full customs documentation.",
  },
];

export const INDUSTRIES_SERVED: IndustryApplication[] = [
  {
    id: "automotive",
    name: "Automotive & EV",
    description: "Air brake fittings, sensor housings, coolant connectors, battery thermal fluid couplings.",
    components: ["Air Brake Compression Fittings", "Sensor Bosses", "Coolant Manifold Barbs"],
    specs: "IATF 16949 verified, vibration resistant",
    iconName: "Car",
  },
  {
    id: "hydraulics",
    name: "Hydraulics & High Pressure",
    description: "Thread conversions, adapter blocks, high-pressure nipples, and banjo fittings.",
    components: ["BSPP/NPT Conversion Adapters", "JIC 37° Flared Couplers", "Hex Bushings"],
    specs: "Working pressures up to 350 bar (5000 PSI)",
    iconName: "Droplets",
  },
  {
    id: "pneumatics",
    name: "Pneumatics & Automation",
    description: "Push-in tube connectors, quick-release couplers, silencers, and solenoid valve housings.",
    components: ["Brass Tube Fittings", "Pneumatic Barb Connectors", "Mini Ball Valve Stems"],
    specs: "Zero-leakage pneumatic seal tolerance",
    iconName: "Wind",
  },
  {
    id: "hvac-refrigeration",
    name: "HVAC & Refrigeration",
    description: "45° flared fittings, service access valves, manifold tees, and compressor connections.",
    components: ["45° Flared Brass Fittings", "Compressor Couplers", "Flare Nuts & Unions"],
    specs: "Compatible with R410A, R134a, R32 refrigerants",
    iconName: "ThermometerSnowflake",
  },
  {
    id: "plumbing",
    name: "Plumbing & Sanitary",
    description: "PEX screw fittings, water meter connectors, brass check valves, and tap spindles.",
    components: ["PEX Screw Fittings", "Compression Elbows", "Brass Hex Nipples"],
    specs: "Dezincification-resistant (DZR) brass available",
    iconName: "Pipette",
  },
  {
    id: "electrical-electronics",
    name: "Electrical & Electronics",
    description: "Terminal blocks, neutral links, cable glands, grounding lugs, and meter components.",
    components: ["Inverter Fittings", "Grounding Terminals", "Brass Knurled Inserts"],
    specs: "High electrical conductivity, nickel plating options",
    iconName: "Zap",
  },
  {
    id: "plastic-rubber-molding",
    name: "Plastic & Rubber Moulding",
    description: "Ultrasonic heat-staking inserts, threaded blind inserts, knurled bushings.",
    components: ["Plastic Moulding Inserts", "Hex Threaded Inserts", "Diamond Knurled Bushings"],
    specs: "High pull-out and rotational torque resistance",
    iconName: "Layers",
  },
  {
    id: "compressors",
    name: "Air Compressors & Pumps",
    description: "Unloader valve fittings, tank drain valves, safety relief valve bodies.",
    components: ["Compressor Fittings", "Tee Connectors", "Non-Return Valve Bodies"],
    specs: "High thermal cycle endurance",
    iconName: "Gauge",
  },
  {
    id: "garden-agriculture",
    name: "Garden & Irrigation",
    description: "Hose nozzles, quick click couplings, sprinkler manifolds, and dual-tap adaptors.",
    components: ["Garden Fittings", "Hose Menders", "3/4\" GHT Thread Adapters"],
    specs: "Corrosion-resistant exterior brass alloy",
    iconName: "Flower2",
  },
  {
    id: "motor-brakes",
    name: "Motor & Brake Systems",
    description: "Precision brake line unions, hydraulic actuator components, caliper bleed screws.",
    components: ["Brake Line Nuts", "Inverted Flare Fittings", "Custom Turned Bosses"],
    specs: "Precision thread lead, leak-free under pressure spikes",
    iconName: "ShieldCheck",
  },
  {
    id: "control-systems",
    name: "Process & Control Systems",
    description: "Instrumentation fittings, sample point adapters, flowmeter brass housings.",
    components: ["Double Ferrule Tube Fittings", "Instrument Tees", "Hex Reducers"],
    specs: "Class 150/300/600 pressure ratings",
    iconName: "Cpu",
  },
  {
    id: "oem-custom",
    name: "Custom OEM Turned Parts",
    description: "Proprietary bespoke turned components fabricated strictly to client drawings and NDAs.",
    components: ["CNC Turned Components", "Custom Threaded Bushings", "Special Flanges"],
    specs: "Tight tolerances down to ±0.005 mm on request",
    iconName: "Cog",
  },
];

export const WHY_ABC_BRASS = [
  {
    icon: "Clock",
    title: "35+ Years Proven Experience",
    desc: "Established in 1990 in Jamnagar, developing unmatched metallurgical craftsmanship and deep application engineering expertise.",
  },
  {
    icon: "Target",
    title: "Sub-Micron Precision Machining",
    desc: "Continuous investment in multi-axis CNCs, high-precision Swiss-type lathes, and Mitutoyo metrology ensures repeatable ±0.01 mm tolerances.",
  },
  {
    icon: "Boxes",
    title: "Full OEM / ODM Capability",
    desc: "From blueprint conversion to rapid prototyping and series manufacturing, we turn custom concepts into volume production seamlessly.",
  },
  {
    icon: "Layers",
    title: "Extensive Component Range",
    desc: "Over 10 core product categories spanning pipe, tube, compression, flared, PEX, plastic inserts, and specialized hydraulic connectors.",
  },
  {
    icon: "Factory",
    title: "High Production Capacity",
    desc: "Sprawling 50,000+ sq. ft. modern facility engineered for 10,000,000+ precision brass components annually.",
  },
  {
    icon: "Globe",
    title: "Global Export Competency",
    desc: "60–70% export volume with exhaustive international thread conversions (BSPP, BSPT, NPT, JIS, DIN, Metric, JIC, ORFS) and sea/air logistics.",
  },
];
