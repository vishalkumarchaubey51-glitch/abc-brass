export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  material: string;
  threadType: string;
  sizes: string[];
  dimensions: string;
  workingPressure: string;
  temperatureRange: string;
  application: string;
  keyFeatures: string[];
  cadAvailable: boolean;
  image: string;
  hotspots?: { label: string; x: number; y: number; detail: string }[];
}

export interface ProductCategory {
  slug: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  heroImage: string;
  itemCount: number;
  highlightSpecs: string[];
  commonApplications: string[];
  featuredSkus: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "pipe-fittings",
    name: "Pipe Fittings",
    code: "CAT-PF",
    tagline: "Heavy-duty threaded fluid couplings for industrial piping systems",
    description:
      "Comprehensive series of brass hex nipples, reducers, street elbows, tees, and plugs precision-machined with high-fidelity threads conforming to NPT, BSPT, BSPP, and Metric engineering standards.",
    heroImage: "/images/brass_pipe_fitting.jpg",
    itemCount: 16,
    highlightSpecs: ["Solid CW614N Brass", "NPT / BSPT / BSPP Threads", "Up to 3,000 PSI", "Sizes 1/8\" to 2\""],
    commonApplications: ["Hydraulic pipelines", "Industrial gas manifolds", "Water processing", "Process automation"],
    featuredSkus: ["PF-HN-01", "PF-ELB-02", "PF-RD-03", "PF-TEE-04"],
  },
  {
    slug: "plastic-moulding-parts",
    name: "Plastic Moulding Parts",
    code: "CAT-PMP",
    tagline: "High-torque brass threaded inserts for ultrasonic and thermal staking",
    description:
      "Engineered inserts with diamond, helical, and straight knurling designed for optimum pull-out resistance and rotational torque endurance in injection-moulded thermo-plastics and elastomers.",
    heroImage: "/images/brass_fittings_inspection.jpg",
    itemCount: 12,
    highlightSpecs: ["CZ121 / IS 319 Grade 1", "Diamond / Helical Knurls", "Tolerances ±0.01mm", "M2 to M16 threads"],
    commonApplications: ["Automotive interior consoles", "Consumer electronics housings", "Industrial enclosures"],
    featuredSkus: ["PMP-HI-01", "PMP-BI-02", "PMP-SI-03"],
  },
  {
    slug: "compressor-fittings",
    name: "Compressor Fittings",
    code: "CAT-CF",
    tagline: "High-temperature vibration-resistant fittings for air compressors",
    description:
      "Precision brass unloader valves, tank check valves, safety relief valve bodies, and multi-port discharge manifolds engineered for severe vibration and continuous thermal cycling.",
    heroImage: "/images/brass_industrial_assembly.jpg",
    itemCount: 10,
    highlightSpecs: ["Heavy Forged / Extruded Brass", "Resistant to 250°C", "Anti-vibration seats", "1/4\" to 1\" NPT"],
    commonApplications: ["Rotary screw compressors", "Piston air pumps", "Pneumatic reservoir tanks"],
    featuredSkus: ["CF-CV-01", "CF-UV-02", "CF-MF-03"],
  },
  {
    slug: "hose-barb-adapters",
    name: "Hose Barb Adapters",
    code: "CAT-HBA",
    tagline: "Leak-proof concentric serrations for rubber and polyurethane hoses",
    description:
      "Sharp, precision-machined barb steps provide maximum mechanical grip and leak-free fluid transfer when coupled with worm-gear or crimp collars in low to medium pressure fluid circuits.",
    heroImage: "/images/brass_fittings_inspection.jpg",
    itemCount: 14,
    highlightSpecs: ["Multi-step tapered barbs", "NPT / BSPP Male & Female", "Push-on lock profile", "1/8\" to 1\" ID"],
    commonApplications: ["Fuel lines", "Coolant delivery hoses", "Compressed air lines", "Chemical dispensing"],
    featuredSkus: ["HBA-MN-01", "HBA-FN-02", "HBA-SP-03", "HBA-TE-04"],
  },
  {
    slug: "brass-tube-fittings",
    name: "Brass Tube Fittings",
    code: "CAT-BTF",
    tagline: "Double-ferrule and compression connectors for metallic tubing",
    description:
      "High-integrity tube unions, male/female connectors, and bulkhead fittings providing gas-tight metal-to-metal seals on copper, brass, and semi-rigid aluminum instrumentation tubing.",
    heroImage: "/images/cnc_machining_brass.jpg",
    itemCount: 15,
    highlightSpecs: ["Gas-tight metallic seal", "Copper/Brass tube compatible", "Pressures up to 400 bar", "4mm to 28mm OD"],
    commonApplications: ["Instrumentation manifolds", "Gas chromatographs", "Lube oil circulation systems"],
    featuredSkus: ["BTF-UN-01", "BTF-MC-02", "BTF-BH-03"],
  },
  {
    slug: "air-brake-fittings",
    name: "Air Brake Brass Compression Fittings",
    code: "CAT-ABF",
    tagline: "DOT and SAE compliant safety connectors for heavy commercial vehicles",
    description:
      "Engineered brass fittings, sleeves, and brass nut assemblies designed specifically for heavy-duty truck and trailer pneumatic air brake lines, satisfying SAE J246 and DOT FMVSS 571.106.",
    heroImage: "/images/brass_industrial_assembly.jpg",
    itemCount: 12,
    highlightSpecs: ["DOT FMVSS & SAE J246 Certified", "Internal brass tube support", "Vibration proof", "1/4\" to 3/4\" Tube OD"],
    commonApplications: ["Commercial truck air brakes", "Bus chassis suspension lines", "Trailer pneumatic circuits"],
    featuredSkus: ["ABF-MN-01", "ABF-ELB-02", "ABF-TEE-03"],
  },
  {
    slug: "inverter-fittings",
    name: "Inverter Fittings",
    code: "CAT-IF",
    tagline: "High-conductivity precision turned electrical brass hardware",
    description:
      "Terminal blocks, cable glands, heat-sink mounting pins, and copper-brass alloy grounding connectors tailored for solar power inverters, battery management systems, and high-voltage power converters.",
    heroImage: "/images/brass_fittings_inspection.jpg",
    itemCount: 11,
    highlightSpecs: ["High electrical conductivity", "Electroless Nickel Plating", "Zero internal voids", "Custom CAD turning"],
    commonApplications: ["Solar PV inverters", "EV battery power distribution units", "Industrial drive enclosures"],
    featuredSkus: ["IF-TB-01", "IF-CG-02", "IF-GT-03"],
  },
  {
    slug: "garden-fittings",
    name: "Garden Fittings",
    code: "CAT-GF",
    tagline: "Robust outdoor weather-proof brass couplers and valve adaptors",
    description:
      "Durable brass quick-connect couplings, dual shut-off valve manifolds, and 3/4\" GHT thread adapters built to resist ultraviolet exposure, seasonal frost, and continuous water pressure without cracking.",
    heroImage: "/images/brass_pipe_fitting.jpg",
    itemCount: 8,
    highlightSpecs: ["Dezincification resistant", "3/4\" GHT & BSP Standards", "Precision knurled collars", "100% leak tested"],
    commonApplications: ["Commercial landscaping", "Agricultural drip irrigation", "Washdown stations"],
    featuredSkus: ["GF-QC-01", "GF-VM-02", "GF-HN-03"],
  },
  {
    slug: "flared-fittings",
    name: "45° Flared Fittings",
    code: "CAT-FF",
    tagline: "Refrigerant-rated metal-to-metal flare seats for thermal systems",
    description:
      "Heavy-duty forged and machined 45-degree flare nuts, male flare connectors, and elbow adapters providing exceptional mechanical grip and tight sealing for hazardous refrigerants and LP gas lines.",
    heroImage: "/images/brass_fittings_inspection.jpg",
    itemCount: 14,
    highlightSpecs: ["SAE J513 / J512", "R410A / R32 Refrigerant Safe", "Burst pressure > 10,000 PSI", "1/8\" to 7/8\" Tube OD"],
    commonApplications: ["Commercial air conditioning", "Cold chain refrigeration", "Propane and LPG gas lines"],
    featuredSkus: ["FF-FN-01", "FF-ME-02", "FF-UN-03"],
  },
  {
    slug: "pex-screw-fittings",
    name: "PEX Screw Fittings",
    code: "CAT-PSF",
    tagline: "Corrosion-resistant mechanical screw-lock fittings for PEX plumbing",
    description:
      "Reliable screw-type clamping brass fittings engineered for cross-linked polyethylene (PEX) potable water tubing, eliminating the requirement for specialized crimping tools while ensuring a 50-year service life.",
    heroImage: "/images/brass_factory_floor.jpg",
    itemCount: 10,
    highlightSpecs: ["DZR Lead-Free Brass", "EN 1254-3 / ISO 21003", "Quick mechanical tightening", "16mm to 32mm PEX"],
    commonApplications: ["Domestic potable water distribution", "Radiant floor heating", "Hydronic cooling circuits"],
    featuredSkus: ["PSF-CP-01", "PSF-EL-02", "PSF-TE-03"],
  },
];

export const ALL_PRODUCTS: ProductItem[] = [
  // Pipe Fittings
  {
    id: "pf-hn-01",
    sku: "PF-HN-01",
    name: "Hexagonal Pipe Nipple (NPT / BSPP)",
    categorySlug: "pipe-fittings",
    categoryName: "Pipe Fittings",
    shortDescription: "Precision-machined brass hex nipple with tapered male threads and central wrench flats for high-pressure fluid lines.",
    material: "CW614N (CuZn39Pb3) / IS 319 Grade 1",
    threadType: "NPT, BSPT, BSPP (Custom JIS/Metric on request)",
    sizes: ["1/8\"", "1/4\"", "3/8\"", "1/2\"", "3/4\"", "1\""],
    dimensions: "Hex 14mm - 36mm | Length 25mm - 65mm",
    workingPressure: "Up to 3,000 PSI (206 bar)",
    temperatureRange: "-54°C to +121°C (-65°F to +250°F)",
    application: "Hydraulic oil lines, compressor discharge, pneumatic manifold interconnection.",
    keyFeatures: [
      "Machined from solid extruded brass hexagonal bars",
      "Clean burr-free chamfered thread leads for instant thread engagement",
      "Pressure-tested with dry nitrogen gas at 1.5x working limit",
      "Available with natural brass or electro-nickel plating",
    ],
    cadAvailable: true,
    image: "/images/brass_pipe_fitting.jpg",
  },
  {
    id: "pf-elb-02",
    sku: "PF-ELB-02",
    name: "90° Brass Street Elbow",
    categorySlug: "pipe-fittings",
    categoryName: "Pipe Fittings",
    shortDescription: "Compact 90-degree forged brass elbow with male-to-female threading and diamond-knurled grip for tight clearances.",
    material: "High-Tensile Brass Forging Alloy (CuZn40Pb2)",
    threadType: "Male NPT to Female NPT / Male BSP to Female BSP",
    sizes: ["1/4\"", "3/8\"", "1/2\"", "3/4\""],
    dimensions: "Center-to-face 22mm - 38mm",
    workingPressure: "Up to 2,500 PSI (172 bar)",
    temperatureRange: "-40°C to +120°C",
    application: "Right-angle directional redirection in compact engine compartments and pump heads.",
    keyFeatures: [
      "Heavy wall forged body prevents stress cracking under thermal expansion",
      "Deeply cut NPT threads guarantee leak-tight dryseal interference fit",
      "Smooth internal bore reduces turbulent flow and pressure loss",
    ],
    cadAvailable: true,
    image: "/images/brass_pipe_fitting.jpg",
  },
  {
    id: "pf-rd-03",
    sku: "PF-RD-03",
    name: "Hex Reducing Bushing",
    categorySlug: "pipe-fittings",
    categoryName: "Pipe Fittings",
    shortDescription: "Heavy-pattern threaded brass reducer converting large female ports to smaller pipe sizes without altering fluid flow.",
    material: "CW614N Brass",
    threadType: "Male NPT/BSPP x Female NPT/BSPP",
    sizes: ["1/2\" x 1/4\"", "3/4\" x 1/2\"", "1\" x 3/4\""],
    dimensions: "Length 20mm - 35mm | Hex 22mm - 41mm",
    workingPressure: "Up to 3,500 PSI",
    temperatureRange: "-54°C to +150°C",
    application: "Port size adaptation on pneumatic filter-regulator-lubricator (FRL) units.",
    keyFeatures: ["Flanged hex face provides positive sealing seat", "Uniform wall thickness eliminates micro-porosity"],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },
  {
    id: "pf-tee-04",
    sku: "PF-TEE-04",
    name: "Brass Female Equal Tee",
    categorySlug: "pipe-fittings",
    categoryName: "Pipe Fittings",
    shortDescription: "Three-way internal threaded brass tee for branch line diversion in industrial fluid manifolds.",
    material: "Forged Brass CZ122",
    threadType: "Female BSPP / NPT (3 Ports)",
    sizes: ["1/4\"", "3/8\"", "1/2\"", "3/4\"", "1\""],
    dimensions: "Center-to-face 25mm - 45mm",
    workingPressure: "Up to 2,000 PSI",
    temperatureRange: "-40°C to +130°C",
    application: "Manifold distribution branches, pressure gauge installations.",
    keyFeatures: ["Reinforced corner ribs", "Precision thread concentricity within 0.02mm"],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },

  // Plastic Moulding Parts
  {
    id: "pmp-hi-01",
    sku: "PMP-HI-01",
    name: "Ultrasonic Heat-Stake Threaded Insert",
    categorySlug: "plastic-moulding-parts",
    categoryName: "Plastic Moulding Parts",
    shortDescription: "Opposing diamond-knurled brass insert designed for thermal or ultrasonic embedding into ABS, Polycarbonate, and Nylon.",
    material: "Lead-Free Brass / CW614N",
    threadType: "Metric ISO (M2, M2.5, M3, M4, M5, M6, M8) & UNC",
    sizes: ["M2 x 4mm", "M3 x 5.7mm", "M4 x 8.1mm", "M5 x 9.5mm"],
    dimensions: "OD 3.2mm - 10.0mm",
    workingPressure: "Pull-out strength > 850 N (in PA66)",
    temperatureRange: "Ambient to +180°C",
    application: "Plastic housings, automotive electronic sensor boxes, drone frames.",
    keyFeatures: [
      "Dual opposing knurl bands resist high rotational loosening torque",
      "V-shaped displacement grooves channel molten resin for mechanical interlock",
      "Strict thread cleanliness free from machining burrs or oil residue",
    ],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },
  {
    id: "pmp-bi-02",
    sku: "PMP-BI-02",
    name: "Blind-Hole Knurled Brass Bushing",
    categorySlug: "plastic-moulding-parts",
    categoryName: "Plastic Moulding Parts",
    shortDescription: "Closed-bottom brass threaded insert preventing liquid plastic or adhesive from contaminating the inner internal threads.",
    material: "Free Cutting Brass IS 319 Grade 1",
    threadType: "Metric M3 to M10",
    sizes: ["M3", "M4", "M5", "M6", "M8"],
    dimensions: "OD 5.0mm - 12.5mm | Depth 6mm - 16mm",
    workingPressure: "Torque resistance > 12 Nm",
    temperatureRange: "-50°C to +200°C",
    application: "Hermetic enclosures, consumer appliances, underwater electronics housings.",
    keyFeatures: ["100% blind solid bottom", "Uniform spiral knurling"],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },

  // Compressor Fittings
  {
    id: "cf-cv-01",
    sku: "CF-CV-01",
    name: "Brass In-Tank Air Compressor Check Valve",
    categorySlug: "compressor-fittings",
    categoryName: "Compressor Fittings",
    shortDescription: "Heavy-duty non-return valve featuring stainless steel internal spring and fluorocarbon poppet to prevent backpressure into the pump.",
    material: "Forged Brass CW617N",
    threadType: "Male NPT Tank Thread x Female NPT Tube Inflow",
    sizes: ["1/2\" x 3/8\"", "3/4\" x 1/2\"", "1\" x 3/4\""],
    dimensions: "Hex 28mm - 38mm | Length 55mm - 85mm",
    workingPressure: "450 PSI (31 bar) Working | 1,800 PSI Burst",
    temperatureRange: "-20°C to +200°C",
    application: "Piston compressor receiver tanks, industrial dry air delivery systems.",
    keyFeatures: [
      "Integrated 1/8\" unloader port for pressure relief switch connection",
      "Viton fluorocarbon poppet disc impervious to hot compressor oils",
      "Disassemblable body for routine spring inspection and maintenance",
    ],
    cadAvailable: true,
    image: "/images/brass_industrial_assembly.jpg",
  },

  // Hose Barb Adapters
  {
    id: "hba-mn-01",
    sku: "HBA-MN-01",
    name: "Male NPT to Hose Barb Adapter",
    categorySlug: "hose-barb-adapters",
    categoryName: "Hose Barb Adapters",
    shortDescription: "Solid brass adapter bridging rigid pipe threads to flexible fluid hoses with multiple concentric razor-sharp barbs.",
    material: "CW614N Brass",
    threadType: "Male NPT, BSPT, BSPP",
    sizes: ["1/4\" NPT x 1/4\" ID", "3/8\" NPT x 3/8\" ID", "1/2\" NPT x 1/2\" ID", "3/4\" NPT x 3/4\" ID"],
    dimensions: "Barb Length 22mm - 35mm | Overall Length 38mm - 60mm",
    workingPressure: "Up to 250 PSI (dependent on hose & clamp specification)",
    temperatureRange: "-40°C to +100°C",
    application: "Industrial air lines, automotive coolant hoses, wash-down spray nozzles.",
    keyFeatures: [
      "Tapered barb geometry allows smooth hose installation while resisting slip-off",
      "Machined wrench hex for easy spanner tightening",
      "Smooth internal bore ensures maximum CFM air volume throughput",
    ],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },

  // Brass Tube Fittings
  {
    id: "btf-un-01",
    sku: "BTF-UN-01",
    name: "Double-Ferrule Brass Tube Union",
    categorySlug: "brass-tube-fittings",
    categoryName: "Brass Tube Fittings",
    shortDescription: "Two-ferrule compression union creating an ultra-reliable mechanical bite on copper or semi-rigid aluminum tubes without soldering.",
    material: "Extruded Brass CZ121",
    threadType: "Precision UNEF / Metric Union Threads",
    sizes: ["1/4\" OD", "3/8\" OD", "1/2\" OD", "6mm OD", "10mm OD", "12mm OD"],
    dimensions: "Length 36mm - 52mm | Hex 14mm - 24mm",
    workingPressure: "Up to 4,000 PSI (275 bar)",
    temperatureRange: "-70°C to +204°C",
    application: "Chemical sampling lines, hydraulic pilot control loops, chromatography systems.",
    keyFeatures: [
      "Sequential ferrule swaging guarantees vibration-immune sealing",
      "Zero torque transmission to tubing during tightening",
      "Re-makeable connection capable of multiple disassemblies",
    ],
    cadAvailable: true,
    image: "/images/cnc_machining_brass.jpg",
  },

  // Air Brake Compression Fittings
  {
    id: "abf-mn-01",
    sku: "ABF-MN-01",
    name: "DOT Brass Air Brake Male Connector",
    categorySlug: "air-brake-fittings",
    categoryName: "Air Brake Brass Compression Fittings",
    shortDescription: "Certified automotive air brake connector with brass tube support insert and compression nut matching DOT FMVSS standards.",
    material: "CA360 / CW614N Brass",
    threadType: "Male NPT to Compression Tube",
    sizes: ["1/4\" Tube x 1/8\" NPT", "3/8\" Tube x 1/4\" NPT", "1/2\" Tube x 3/8\" NPT"],
    dimensions: "Hex 16mm - 26mm | Overall 34mm - 48mm",
    workingPressure: "Up to 300 PSI (20.6 bar)",
    temperatureRange: "-40°C to +93°C (-40°F to +200°F)",
    application: "Truck and commercial trailer chassis air brake pneumatic lines.",
    keyFeatures: [
      "Meets DOT FMVSS 571.106 and SAE J246 heavy-duty commercial vehicle standards",
      "Includes internal brass stiffener insert for nylon brake tubing",
      "Pre-applied thread sealant options for rapid assembly line installation",
    ],
    cadAvailable: true,
    image: "/images/brass_industrial_assembly.jpg",
  },

  // Inverter Fittings
  {
    id: "if-tb-01",
    sku: "IF-TB-01",
    name: "Solar Inverter Brass Terminal Block",
    categorySlug: "inverter-fittings",
    categoryName: "Inverter Fittings",
    shortDescription: "High-amperage precision turned and milled brass bus terminal block with anti-corrosion tin/nickel plating for renewable energy inverters.",
    material: "High-Conductivity Brass (CuZn37 / CuZn40)",
    threadType: "M4 / M5 / M6 Clamping Screws",
    sizes: ["4-way", "6-way", "8-way", "12-way"],
    dimensions: "Pitch 8.5mm - 12mm | Bar 15mm x 15mm",
    workingPressure: "Rated for 1,000V DC / up to 125A continuous",
    temperatureRange: "-40°C to +130°C",
    application: "Solar string inverters, industrial UPS, battery energy storage systems (BESS).",
    keyFeatures: [
      "Low electrical contact resistance (< 1.5 milliohms)",
      "Vibration-proof captive clamping screws prevent loosening under thermal cycles",
      "Passivated surface prevents galvanic corrosion when joined with copper lugs",
    ],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },

  // Garden Fittings
  {
    id: "gf-qc-01",
    sku: "GF-QC-01",
    name: "Heavy-Duty Brass Quick-Connect Garden Coupler",
    categorySlug: "garden-fittings",
    categoryName: "Garden Fittings",
    shortDescription: "Machined solid brass spring-loaded snap connector with stainless steel ball bearings for effortless one-click hose attachment.",
    material: "CW617N / DZR Brass",
    threadType: "Standard 3/4\" GHT (Garden Hose Thread) & BSP",
    sizes: ["3/4\" Female GHT x Quick-Plug", "3/4\" Male GHT x Quick-Socket"],
    dimensions: "OD 32mm | Length 42mm",
    workingPressure: "Up to 150 PSI",
    temperatureRange: "0°C to +70°C",
    application: "Commercial greenhouse watering systems, estate irrigation, washdown hose setups.",
    keyFeatures: [
      "Solid brass construction will not crack or warp from sun or drops",
      "Dual internal NBR O-rings ensure 100% drip-free shut-off seal",
      "Ergonomic knurled collar allows wet-hand operation without slipping",
    ],
    cadAvailable: true,
    image: "/images/brass_pipe_fitting.jpg",
  },

  // 45° Flared Fittings
  {
    id: "ff-fn-01",
    sku: "FF-FN-01",
    name: "45° Refrigeration Brass Flare Nut",
    categorySlug: "flared-fittings",
    categoryName: "45° Flared Fittings",
    shortDescription: "Cold-headed and CNC finished brass flare nut engineered to withstand extreme cryogenic to high-heat refrigeration thermal swings.",
    material: "High-Ductility Forged Brass CW614N",
    threadType: "UNF Fine Threads (SAE J513)",
    sizes: ["1/4\"", "3/8\"", "1/2\"", "5/8\"", "3/4\""],
    dimensions: "Hex 17mm - 32mm | Height 16mm - 28mm",
    workingPressure: "Up to 5,000 PSI (suitable for high-pressure R410A refrigerants)",
    temperatureRange: "-54°C to +149°C",
    application: "Mini-split air conditioning, supermarket rack refrigeration, LP gas plumbing.",
    keyFeatures: [
      "Precision 45-degree angle face ensures seamless contact seal against copper flare",
      "Stress-relieved brass alloy eliminates season cracking from residual stresses",
      "Full internal thread engagement prevents stripping under high torque wrenching",
    ],
    cadAvailable: true,
    image: "/images/brass_fittings_inspection.jpg",
  },

  // PEX Screw Fittings
  {
    id: "psf-cp-01",
    sku: "PSF-CP-01",
    name: "PEX Screw Compression Straight Coupler",
    categorySlug: "pex-screw-fittings",
    categoryName: "PEX Screw Fittings",
    shortDescription: "Tool-free installation mechanical screw coupler for PEX-AL-PEX and PEX-a/b composite pipes in potable water heating lines.",
    material: "Dezincification-Resistant (DZR) Lead-Free Brass",
    threadType: "Metric Compression Lock Thread",
    sizes: ["16mm x 1/2\"", "20mm x 1/2\"", "25mm x 3/4\"", "32mm x 1\""],
    dimensions: "Length 48mm - 68mm | Hex 24mm - 42mm",
    workingPressure: "16 bar (232 PSI) at 95°C",
    temperatureRange: "-10°C to +95°C (110°C peak)",
    application: "Underfloor hydronic radiant heating systems, commercial potable water risers.",
    keyFeatures: [
      "EPDM dual O-ring seal with split brass compression olive ring",
      "Approved for drinking water installations (RoHS & NSF/ANSI lead-free compliant)",
      "Installs with conventional open-ended wrenches without expensive pressing tools",
    ],
    cadAvailable: true,
    image: "/images/brass_factory_floor.jpg",
  },
];
