import { Module } from "./types";

export const module6: Module = {
  id: "6",
  title: "The Build Process",
  description: "Phase-by-phase: site prep to finishes, managing subs",
  totalLessons: 12,
  lessons: [
    {
      id: "6-1",
      moduleId: "6",
      title: "Pre-Construction Preparation",
      subtitle: "Getting ready before breaking ground",
      order: 1,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "The weeks before construction begins are critical. Proper preparation prevents costly delays once work starts. This phase involves finalizing your team, organizing documents, setting up the job site, and establishing communication systems.",
        },
        {
          type: "heading",
          content: "Finalizing Your Construction Team",
        },
        {
          type: "text",
          content:
            "Whether you're hiring a general contractor or self-managing as an owner-builder, you need to have your key team members identified and scheduled. Subcontractors book out weeks to months in advance, especially for foundations, framing, and HVAC.",
        },
        {
          type: "list",
          items: [
            "Site work/excavation contractor",
            "Foundation contractor or concrete crew",
            "Framing crew",
            "Plumber (rough and finish)",
            "Electrician (rough and finish)",
            "HVAC contractor",
            "Insulation contractor",
            "Drywall crew",
            "Painter",
            "Flooring installer",
            "Roofer",
            "Siding/exterior finish contractor",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Get Multiple Bids Early",
          content:
            "Collect at least 3 bids for major trades (foundation, framing, HVAC, electrical, plumbing). Review bids carefully—the lowest price isn't always the best value. Check references and verify insurance for each contractor.",
        },
        {
          type: "heading",
          content: "Document Organization",
        },
        {
          type: "text",
          content:
            "Create a construction binder or digital folder system. You'll reference these documents constantly and need them available on-site.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Plans & Permits",
              items: [
                "Approved construction drawings",
                "Building permit",
                "Trade permits",
                "Site plan with setbacks",
                "Survey/plat",
              ],
            },
            {
              title: "Contracts",
              items: [
                "Subcontractor agreements",
                "Material supplier contracts",
                "Lender draw schedule",
                "Insurance certificates",
                "Lien waivers",
              ],
            },
            {
              title: "Specifications",
              items: [
                "Material specifications",
                "Fixture selections",
                "Color schedules",
                "Appliance details",
                "Allowance amounts",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Job Site Setup",
        },
        {
          type: "text",
          content:
            "Before construction begins, the site needs basic infrastructure. Arrange for these items to be in place when work starts.",
        },
        {
          type: "list",
          items: [
            "Temporary power pole or generator",
            "Portable toilet for workers",
            "Dumpster for construction debris",
            "Material storage area (level, accessible)",
            "Site security if needed (fencing, cameras)",
            "Job site sign with permit displayed",
            "Weather-protected plan storage",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Utility Connection",
          content:
            "Georgia Power typically requires 2-4 weeks to install temporary construction power. Apply early. You'll need the electrical permit in hand before they'll install. Consider a generator for the first week if timing is tight.",
        },
        {
          type: "heading",
          content: "Communication Systems",
        },
        {
          type: "text",
          content:
            "Establish clear communication protocols with your team. Miscommunication causes expensive mistakes and delays. Everyone should know who to contact for what, and how decisions will be documented.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Daily Log",
          content:
            "Keep a daily log of construction activity: who was on site, what work was performed, weather conditions, any issues encountered, and material deliveries. This documentation is invaluable for resolving disputes and tracking progress.",
        },
      ],
      keyTakeaways: [
        "Book subcontractors early—key trades schedule weeks to months out",
        "Organize all documents before construction begins",
        "Set up temporary power, toilet, dumpster before breaking ground",
        "Establish clear communication protocols with all team members",
        "Keep a daily construction log throughout the project",
      ],
      georgiaNote:
        "Georgia requires the building permit to be posted on site in a visible location before construction begins. Keep a copy of approved plans on site at all times for inspector reference. Failing to have plans available can result in inspection delays.",
      quiz: [
        {
          question: "When should you start booking subcontractors?",
          options: [
            "The day construction begins",
            "One week before construction",
            "Weeks to months before construction begins",
            "After the foundation is poured",
          ],
          correctIndex: 2,
          explanation:
            "Key subcontractors (foundation, framing, HVAC) often book weeks to months in advance. Start securing your team as soon as you have permits and a construction timeline.",
        },
        {
          question:
            "What should be in place on the job site before construction begins?",
          options: [
            "Only the building permit",
            "Temporary power, portable toilet, and dumpster",
            "Completed foundation",
            "All interior finishes selected",
          ],
          correctIndex: 1,
          explanation:
            "Basic job site infrastructure—temporary power, portable toilet, and dumpster—should be arranged before workers arrive. This keeps the project moving smoothly from day one.",
        },
      ],
    },
    {
      id: "6-2",
      moduleId: "6",
      title: "Site Work and Excavation",
      subtitle: "Preparing the land for construction",
      order: 2,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "Site work transforms raw land into a buildable pad. This phase includes clearing, grading, establishing drainage, and excavating for the foundation. Proper site work is essential—problems here affect everything that follows.",
        },
        {
          type: "heading",
          content: "Clearing the Site",
        },
        {
          type: "text",
          content:
            "Clearing removes trees, brush, and debris from the building area. In Georgia, you may need a tree removal permit in certain jurisdictions, and clearing near streams requires erosion control measures.",
        },
        {
          type: "list",
          items: [
            "Mark trees to save with flagging tape or paint",
            "Identify property corners and building location",
            "Clear vegetation from building footprint plus work area",
            "Remove stumps and roots from building area",
            "Salvage any valuable timber",
            "Dispose of or chip brush debris",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Tree Protection",
          content:
            "Trees you want to save can be damaged by construction activity. Install tree protection fencing at the drip line before any equipment arrives. Once tree roots are cut or compacted, damage is often irreversible.",
        },
        {
          type: "heading",
          content: "Grading and Drainage",
        },
        {
          type: "text",
          content:
            "Grading shapes the land for proper drainage away from your home. The finished grade should slope away from the foundation in all directions—typically 6 inches of fall in the first 10 feet.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Rough Grading",
              items: [
                "Establish building pad elevation",
                "Create positive drainage slopes",
                "Install drainage swales",
                "Stockpile topsoil for later",
              ],
            },
            {
              title: "Erosion Control",
              items: [
                "Install silt fence at perimeter",
                "Protect storm drains",
                "Stabilize disturbed areas",
                "Maintain controls throughout",
              ],
            },
            {
              title: "Underground Utilities",
              items: [
                "Locate existing utilities (call 811)",
                "Trench for water/sewer lines",
                "Install conduit for electric",
                "Gas line installation",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia 811",
          content:
            "Call Georgia 811 (dial 811) at least 2 business days before any excavation. It's free and required by law. Utility companies will mark buried lines. Hitting an unmarked line is the utility's responsibility; hitting a marked line is yours.",
        },
        {
          type: "heading",
          content: "Foundation Excavation",
        },
        {
          type: "text",
          content:
            "Excavation for your foundation depends on the foundation type. Slab-on-grade requires less digging than a basement. Your foundation design should match soil conditions verified by your geotechnical report or local knowledge.",
        },
        {
          type: "list",
          items: [
            "Excavate to design depth plus 4-6\" for gravel base",
            "Verify bearing soil matches engineer's assumptions",
            "Keep excavation sides stable (slope or shore)",
            "Protect excavation from water accumulation",
            "Notify inspector when ready for footing inspection",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Soil Surprises",
          content:
            "Unexpected soil conditions are common. Rock may require blasting or hoe-ram. Soft soils may need over-excavation and gravel fill. Wet soils may need dewatering. Build contingency into your budget for soil surprises.",
        },
        {
          type: "heading",
          content: "Typical Site Work Costs",
        },
        {
          type: "text",
          content:
            "Site work costs vary dramatically based on site conditions. A flat, clear lot in good soil might cost $5,000-$15,000 for site work. A sloped, wooded lot with poor soils could exceed $50,000.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Cost Factors",
          content:
            "Key factors affecting site work cost: amount of clearing needed, slope and required grading, soil conditions, rock presence, drainage requirements, distance to utilities, and access for equipment.",
        },
      ],
      keyTakeaways: [
        "Clearing and grading happen before foundation work",
        "Proper drainage slopes water away from the building—6\" in 10'",
        "Call Georgia 811 before any excavation to locate utilities",
        "Install erosion control before disturbing soil",
        "Budget for soil surprises—conditions underground are unpredictable",
      ],
      georgiaNote:
        "Georgia's red clay soils can be challenging. They expand when wet and shrink when dry, causing foundation movement. Many Georgia builders use deeper footings, more reinforcement, or post-tension slabs to address clay soil conditions.",
      quiz: [
        {
          question:
            "What should the finished grade slope away from the foundation?",
          options: [
            "1 inch in 10 feet",
            "6 inches in 10 feet",
            "2 feet in 10 feet",
            "Grade should be flat",
          ],
          correctIndex: 1,
          explanation:
            "The finished grade should slope 6 inches in the first 10 feet away from the foundation. This ensures surface water drains away from the house, preventing moisture problems.",
        },
        {
          question: "When must you call Georgia 811?",
          options: [
            "After excavation is complete",
            "Only for commercial projects",
            "At least 2 business days before any excavation",
            "Only if you hit a utility line",
          ],
          correctIndex: 2,
          explanation:
            "Georgia law requires calling 811 at least 2 business days before any excavation. Utility companies will mark buried lines at no cost.",
        },
      ],
    },
    {
      id: "6-3",
      moduleId: "6",
      title: "Foundation Construction",
      subtitle: "Building your home's base",
      order: 3,
      estimatedMinutes: 20,
      content: [
        {
          type: "text",
          content:
            "The foundation transfers the weight of your home to the ground. It must be properly designed for soil conditions, structurally sound, and correctly installed. Foundation problems are expensive to fix, so getting it right the first time is essential.",
        },
        {
          type: "heading",
          content: "Foundation Types in Georgia",
        },
        {
          type: "text",
          content:
            "Georgia homes use several foundation types depending on site conditions, budget, and design preferences. Each has advantages and considerations.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Slab-on-Grade",
              items: [
                "Most common in Georgia",
                "Concrete poured on ground",
                "Lowest cost typically",
                "No crawl space access",
                "Good for flat sites",
              ],
            },
            {
              title: "Crawl Space",
              items: [
                "Elevated on stem walls",
                "Access for utilities/repairs",
                "Good for sloped sites",
                "Requires ventilation",
                "Moisture control critical",
              ],
            },
            {
              title: "Basement",
              items: [
                "Full below-grade level",
                "Maximum living/storage space",
                "Highest cost",
                "Less common in Georgia",
                "Requires waterproofing",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Slab Foundation Construction",
        },
        {
          type: "text",
          content:
            "Slab-on-grade is the most common foundation type in Georgia due to cost efficiency and climate suitability. Construction follows a specific sequence.",
        },
        {
          type: "list",
          items: [
            "Excavate and compact subgrade to design elevation",
            "Install termite treatment to soil (required in Georgia)",
            "Lay vapor barrier over prepared subgrade",
            "Place reinforcement (rebar grid or wire mesh)",
            "Set forms for slab edges and any stem walls",
            "Install plumbing rough-in under slab",
            "Call for pre-pour inspection",
            "Pour and finish concrete",
            "Cure concrete before loading",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Termite Treatment",
          content:
            "Georgia building code requires termite treatment for all new construction. Pre-treatment of the soil under slabs is standard. You'll receive a termite letter from a licensed pest control company, required for your Certificate of Occupancy.",
        },
        {
          type: "heading",
          content: "Crawl Space Foundations",
        },
        {
          type: "text",
          content:
            "Crawl space foundations elevate the home on a perimeter wall with piers. The space between ground and floor provides access for utilities and can be conditioned or vented.",
        },
        {
          type: "list",
          items: [
            "Pour concrete footings for perimeter and interior piers",
            "Build stem walls (block, poured concrete, or brick)",
            "Install anchor bolts for sill plate attachment",
            "Waterproof exterior of stem walls",
            "Install drainage system around perimeter",
            "Choose vented or encapsulated crawl space approach",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Encapsulated Crawl Space",
          content:
            "Encapsulated (conditioned) crawl spaces seal the crawl space from outside air and treat it as part of the building envelope. This controls moisture better than vented crawl spaces in Georgia's humid climate and can improve energy efficiency.",
        },
        {
          type: "heading",
          content: "Concrete Quality",
        },
        {
          type: "text",
          content:
            "Concrete strength is measured in PSI (pounds per square inch). Residential foundations typically use 3,000-4,000 PSI concrete. Proper curing is essential—concrete gains strength over time and shouldn't be loaded too early.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Weather and Concrete",
          content:
            "Concrete doesn't cure well in extreme temperatures. Below 40°F, curing slows dramatically and protection is needed. Above 90°F, rapid water loss can cause cracking. Plan pours for moderate weather when possible.",
        },
      ],
      keyTakeaways: [
        "Slab-on-grade is most common in Georgia—lowest cost for flat sites",
        "Crawl spaces provide utility access and suit sloped sites",
        "Termite pre-treatment is required for all new construction in Georgia",
        "Concrete strength matters—don't rush curing time",
        "Encapsulated crawl spaces control moisture better in humid climates",
      ],
      georgiaNote:
        "Georgia's clay soils can cause foundation movement. Many builders use post-tension slab foundations in problematic soil areas. Post-tension cables embedded in the slab are tensioned after curing, creating a more rigid foundation that resists cracking from soil movement.",
      quiz: [
        {
          question:
            "What is required under all new home foundations in Georgia?",
          options: [
            "Gravel base",
            "Termite pre-treatment",
            "Basement waterproofing",
            "Frost protection",
          ],
          correctIndex: 1,
          explanation:
            "Georgia building code requires termite pre-treatment for all new construction. A licensed pest control company treats the soil and provides a termite letter required for the Certificate of Occupancy.",
        },
        {
          question:
            "Which crawl space approach is better for moisture control in Georgia?",
          options: [
            "Vented crawl space with foundation vents",
            "Encapsulated (conditioned) crawl space",
            "Dirt floor crawl space",
            "All approaches are equal",
          ],
          correctIndex: 1,
          explanation:
            "Encapsulated crawl spaces seal the space from outside air and treat it as conditioned space. This controls moisture better than traditional vented crawl spaces in Georgia's humid climate.",
        },
      ],
    },
    {
      id: "6-4",
      moduleId: "6",
      title: "Framing the Structure",
      subtitle: "Building the skeleton of your home",
      order: 4,
      estimatedMinutes: 22,
      content: [
        {
          type: "text",
          content:
            "Framing gives your home its shape and structure. This phase transforms a foundation into a recognizable building. Framing is fast-paced and exciting—you'll see significant progress daily. Quality framing is essential for everything that follows.",
        },
        {
          type: "heading",
          content: "Framing Systems",
        },
        {
          type: "text",
          content:
            "Most Georgia homes use wood platform framing—the most common residential framing method in the U.S. Other systems exist but are less common for single-family homes.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Platform Framing",
              items: [
                "Wood studs and joists",
                "Most common method",
                "Skilled labor available",
                "Cost-effective",
                "Flexible for design changes",
              ],
            },
            {
              title: "Steel Framing",
              items: [
                "Light-gauge steel studs",
                "Termite and rot proof",
                "Consistent dimensions",
                "Less common residentially",
                "Thermal bridging concerns",
              ],
            },
            {
              title: "ICF/SIP",
              items: [
                "Insulated concrete forms",
                "Structural insulated panels",
                "High energy efficiency",
                "Fewer skilled installers",
                "Higher upfront cost",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Framing Sequence",
        },
        {
          type: "text",
          content:
            "Framing follows a logical sequence, building from the bottom up. Each stage must be correct before proceeding to the next.",
        },
        {
          type: "list",
          items: [
            "Sill plates and floor system (if not slab)",
            "Subfloor installation",
            "Exterior wall framing and raising",
            "Interior wall framing",
            "Second floor framing (if applicable)",
            "Ceiling joists or trusses",
            "Roof framing or truss installation",
            "Roof sheathing",
            "Window and door openings",
            "Structural sheathing and bracing",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Trusses vs. Stick Framing",
          content:
            "Most new Georgia homes use factory-built roof trusses rather than site-built 'stick framing.' Trusses are engineered, faster to install, and more cost-effective. They arrive on a truck and can be set by crane in a day.",
        },
        {
          type: "heading",
          content: "Critical Framing Details",
        },
        {
          type: "text",
          content:
            "Framing quality shows in the details. Inspectors focus on these areas, and problems here cause issues with finishes later.",
        },
        {
          type: "list",
          items: [
            "Proper header sizing over openings",
            "Correct nailing patterns and schedules",
            "Hurricane straps and hold-down connections",
            "Fire blocking at required locations",
            "Plumb and square walls",
            "Flat floor and ceiling planes",
            "Proper backing for fixtures and cabinets",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Wind Requirements",
          content:
            "Georgia requires hurricane straps connecting roof framing to walls, and straps connecting walls to the foundation. These connectors prevent the roof from lifting off in high winds. Metro Atlanta is in a 90-105 mph wind speed zone.",
        },
        {
          type: "heading",
          content: "Weather Protection",
        },
        {
          type: "text",
          content:
            "Once framing is up, protect it from weather. Install the roof immediately to keep the interior dry. Apply house wrap to shed water while allowing moisture vapor to escape.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Wet Framing",
          content:
            "Lumber that gets wet and stays wet can develop mold and rot. Get the roof on quickly. If lumber gets soaked, allow it to dry before closing in walls. Check moisture levels if there's any question.",
        },
        {
          type: "heading",
          content: "Framing Inspection",
        },
        {
          type: "text",
          content:
            "The framing inspection is comprehensive—inspectors verify compliance with approved plans and code requirements. Common framing inspection failures include incorrect header sizes, missing hurricane straps, inadequate bracing, and work not matching plans.",
        },
      ],
      keyTakeaways: [
        "Platform framing with wood is standard for Georgia homes",
        "Factory-built trusses are faster and more economical than stick framing",
        "Hurricane straps are required throughout Georgia for wind resistance",
        "Get the roof on quickly to protect framing from weather",
        "The framing inspection is comprehensive—verify work matches plans",
      ],
      georgiaNote:
        "Georgia amendments to the IRC specify wind design requirements based on location. The state is divided into wind speed zones. Your framing must be designed and installed for the applicable wind speed. Coastal areas have higher requirements.",
      quiz: [
        {
          question: "What connects the roof framing to the walls in Georgia?",
          options: [
            "Toe nails only",
            "Hurricane straps",
            "Glue",
            "Nothing—gravity holds it",
          ],
          correctIndex: 1,
          explanation:
            "Georgia requires hurricane straps (also called hurricane ties or clips) connecting roof trusses or rafters to the wall plates. These metal connectors prevent the roof from lifting off in high winds.",
        },
        {
          question: "Why do most Georgia builders use factory-built trusses?",
          options: [
            "They're required by code",
            "They're stronger than any site-built option",
            "They're engineered, faster to install, and cost-effective",
            "They're the only option available",
          ],
          correctIndex: 2,
          explanation:
            "Factory-built trusses are engineered for specific loads, can be installed quickly by crane, and are generally more cost-effective than site-built 'stick framing' for most residential applications.",
        },
      ],
    },
    {
      id: "6-5",
      moduleId: "6",
      title: "Roofing and Exterior",
      subtitle: "Weatherproofing your home",
      order: 5,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "Once framing is complete, the priority is getting the building 'dried in'—protected from weather. This means installing roofing, exterior sheathing, house wrap, and temporary coverage for openings. A dried-in building protects framing and allows interior work to proceed regardless of weather.",
        },
        {
          type: "heading",
          content: "Roofing Options",
        },
        {
          type: "text",
          content:
            "The roof is your primary defense against weather. Choose roofing materials based on durability, aesthetics, cost, and climate suitability.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Asphalt Shingles",
              items: [
                "Most common choice",
                "Cost: $3-7/sq ft installed",
                "Lifespan: 20-30 years",
                "Many colors available",
                "Easy to repair",
              ],
            },
            {
              title: "Metal Roofing",
              items: [
                "Standing seam or panels",
                "Cost: $7-15/sq ft installed",
                "Lifespan: 40-70 years",
                "Energy efficient",
                "Higher wind resistance",
              ],
            },
            {
              title: "Other Options",
              items: [
                "Tile (clay or concrete)",
                "Slate (natural stone)",
                "Synthetic materials",
                "Higher cost options",
                "Specific structural needs",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Roofing Installation Sequence",
        },
        {
          type: "list",
          items: [
            "Inspect and repair any damaged sheathing",
            "Install drip edge at eaves",
            "Install ice and water shield (valleys, eaves, penetrations)",
            "Apply underlayment (felt or synthetic)",
            "Install drip edge at rakes",
            "Install starter strip at eaves",
            "Install shingles from bottom up",
            "Install ridge vent or other ventilation",
            "Flash all penetrations (plumbing, exhaust, chimney)",
            "Install ridge cap shingles",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Roof Ventilation",
          content:
            "Proper roof ventilation extends shingle life and prevents moisture problems. Georgia's humid climate makes ventilation especially important. Ridge vents with soffit intake provide the best airflow.",
        },
        {
          type: "heading",
          content: "Exterior Wall Systems",
        },
        {
          type: "text",
          content:
            "The wall system layers work together to keep water out while allowing moisture vapor to escape. The sequence and overlap of materials matters.",
        },
        {
          type: "list",
          items: [
            "Structural sheathing (OSB or plywood)",
            "Weather-resistant barrier (house wrap)",
            "Flashing at windows, doors, and penetrations",
            "Siding or exterior cladding",
            "Caulking and sealants at joints",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Flashing is Critical",
          content:
            "Most water intrusion problems stem from flashing failures, not siding failures. Window and door flashing must integrate properly with house wrap. Penetrations need properly sized and installed boots or flanges.",
        },
        {
          type: "heading",
          content: "Siding Options",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Vinyl Siding",
              items: [
                "Low cost",
                "Low maintenance",
                "Many colors/styles",
                "Can look cheap",
                "Susceptible to impact",
              ],
            },
            {
              title: "Fiber Cement",
              items: [
                "Durable",
                "Fire resistant",
                "Takes paint well",
                "Higher cost",
                "Heavy to install",
              ],
            },
            {
              title: "Brick/Stone",
              items: [
                "Traditional look",
                "Very durable",
                "Low maintenance",
                "Highest cost",
                "Needs proper drainage",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Brick",
          content:
            "Brick is popular in Georgia due to tradition and termite resistance. Brick veneer is not structural—it's attached to the wood-framed wall with ties. A drainage cavity and weep holes at the bottom allow water that penetrates the brick to escape.",
        },
      ],
      keyTakeaways: [
        "Dried-in status protects framing and allows interior work to proceed",
        "Asphalt shingles are most common; metal offers longer life",
        "Proper roof ventilation extends shingle life in Georgia's climate",
        "Flashing failures cause most water intrusion problems",
        "Brick veneer is traditional in Georgia and provides termite resistance",
      ],
      georgiaNote:
        "Georgia's high humidity and frequent rain make weatherproofing details critical. The combination of heat and moisture accelerates material degradation. Quality house wrap, proper flashing, and attention to drainage details prevent costly repairs later.",
      quiz: [
        {
          question: "What's the primary purpose of ridge vents?",
          options: [
            "To keep animals out of the attic",
            "To provide roof ventilation and extend shingle life",
            "To add decorative detail to the roof line",
            "To strengthen the roof structure",
          ],
          correctIndex: 1,
          explanation:
            "Ridge vents allow hot, moist air to escape from the attic. Combined with soffit intake vents, they create airflow that extends shingle life and prevents moisture problems—especially important in Georgia's humid climate.",
        },
        {
          question: "What causes most water intrusion in wall systems?",
          options: [
            "Siding failures",
            "House wrap tears",
            "Flashing failures",
            "Foundation cracks",
          ],
          correctIndex: 2,
          explanation:
            "Most water intrusion problems stem from flashing failures at windows, doors, and penetrations—not from siding failures. Proper flashing integration with house wrap is critical.",
        },
      ],
    },
    {
      id: "6-6",
      moduleId: "6",
      title: "Mechanical Rough-In",
      subtitle: "HVAC, plumbing, and electrical systems",
      order: 6,
      estimatedMinutes: 22,
      content: [
        {
          type: "text",
          content:
            "Once the house is dried in, the mechanical trades install their systems inside the walls, floors, and ceilings. This 'rough-in' phase happens before insulation and drywall, while everything is accessible. Coordination between trades is critical—they often work simultaneously or in close sequence.",
        },
        {
          type: "heading",
          content: "HVAC Rough-In",
        },
        {
          type: "text",
          content:
            "The HVAC (heating, ventilation, air conditioning) rough-in includes installing ductwork, setting equipment, and running refrigerant lines and condensate drains.",
        },
        {
          type: "list",
          items: [
            "Install supply and return ductwork through floors/ceilings",
            "Seal all duct connections with mastic or tape",
            "Set air handler/furnace location (often attic or closet in Georgia)",
            "Run refrigerant lines to outdoor condenser location",
            "Install condensate drain with proper slope",
            "Verify duct design matches equipment capacity",
            "Include provisions for exhaust fans (bath, kitchen)",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia HVAC Sizing",
          content:
            "Georgia's hot, humid summers demand properly sized air conditioning. Oversized systems short-cycle and don't remove humidity well. A Manual J load calculation determines the right size. In Metro Atlanta, expect roughly 1 ton of cooling per 400-500 sq ft.",
        },
        {
          type: "heading",
          content: "Plumbing Rough-In",
        },
        {
          type: "text",
          content:
            "Plumbing rough-in installs all supply and drain piping inside walls and floors. It's easier (and cheaper) to move a fixture now than after drywall is up.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Supply Piping",
              items: [
                "PEX (most common new)",
                "Copper (traditional)",
                "CPVC (permitted)",
                "Hot and cold lines",
                "Main shutoff accessible",
              ],
            },
            {
              title: "Drain/Waste/Vent",
              items: [
                "PVC drain pipe",
                "Proper slopes (1/4\" per ft)",
                "Vents through roof",
                "P-traps at fixtures",
                "Clean-outs accessible",
              ],
            },
            {
              title: "Special Systems",
              items: [
                "Water heater location",
                "Gas piping (if applicable)",
                "Hose bibs exterior",
                "Washer box with shutoffs",
                "Water softener loop",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "PEX Benefits",
          content:
            "PEX (cross-linked polyethylene) has largely replaced copper in new Georgia homes. It's less expensive, faster to install, more resistant to freezing, and doesn't corrode. The tubing runs continuously from a manifold to each fixture, reducing fittings.",
        },
        {
          type: "heading",
          content: "Electrical Rough-In",
        },
        {
          type: "text",
          content:
            "Electrical rough-in runs wiring through the framing and installs boxes for outlets, switches, and fixtures. This is when to think about every electrical need—adding circuits later means opening walls.",
        },
        {
          type: "list",
          items: [
            "Install main electrical panel in accessible location",
            "Run circuits per electrical plan",
            "Install outlet boxes at proper heights",
            "Install switch boxes at door locations",
            "Run dedicated circuits for appliances",
            "Include circuits for future needs (EV charger, workshop)",
            "Install low-voltage wiring (network, TV, security)",
            "Smoke/CO detector locations",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Plan Ahead",
          content:
            "It's much cheaper to run extra circuits now than to add them later. Consider future needs: EV charging, hot tub, workshop equipment, outdoor kitchen. Run conduit to locations even if you're not wiring them yet.",
        },
        {
          type: "heading",
          content: "Inspection Requirements",
        },
        {
          type: "text",
          content:
            "Each trade requires a separate rough-in inspection before insulation and drywall can be installed. All three must pass before closing in the walls.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Inspection Timing",
          content:
            "Schedule mechanical rough-in inspections together if possible. Having one trade fail delays insulation for all trades. Pre-inspect your own work against code requirements before calling for official inspection.",
        },
      ],
      keyTakeaways: [
        "Mechanical rough-in happens after dry-in, before insulation and drywall",
        "HVAC systems must be properly sized—Manual J calculation is essential",
        "PEX has replaced copper as the standard for water supply piping",
        "Plan electrical for future needs—adding circuits later opens walls",
        "All three trade inspections must pass before closing in walls",
      ],
      georgiaNote:
        "Georgia requires dedicated electrical circuits for certain appliances: range, dryer, dishwasher, garbage disposal, HVAC equipment, and each bathroom. GFCI protection is required in kitchens, bathrooms, garages, outdoors, and near water sources. AFCI protection is required in bedrooms and living areas.",
      quiz: [
        {
          question: "What determines the correct size for your HVAC system?",
          options: [
            "Square footage alone",
            "Number of bedrooms",
            "Manual J load calculation",
            "Contractor's preference",
          ],
          correctIndex: 2,
          explanation:
            "A Manual J load calculation determines proper HVAC sizing based on home size, insulation, windows, orientation, and climate. Using square footage alone often results in oversized systems.",
        },
        {
          question: "Why has PEX largely replaced copper in new homes?",
          options: [
            "PEX is stronger than copper",
            "Copper is no longer available",
            "PEX is less expensive, faster to install, and more freeze-resistant",
            "Code requires PEX",
          ],
          correctIndex: 2,
          explanation:
            "PEX costs less, installs faster with fewer fittings, resists freezing better, and doesn't corrode like copper. It's become the standard for residential water supply piping.",
        },
      ],
    },
    {
      id: "6-7",
      moduleId: "6",
      title: "Insulation and Air Sealing",
      subtitle: "Making your home comfortable and efficient",
      order: 7,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "After mechanical rough-in passes inspection, insulation and air sealing create your home's thermal envelope. This barrier between conditioned and unconditioned space affects comfort, energy bills, and durability. Georgia's energy code has specific requirements for insulation levels.",
        },
        {
          type: "heading",
          content: "Georgia Energy Code Requirements",
        },
        {
          type: "text",
          content:
            "Georgia spans Climate Zones 2, 3, and 4. Most of the state is in Zone 3, with the coast in Zone 2 and the mountains in Zone 4. Each zone has different insulation requirements.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Climate Zone 2",
              items: [
                "Coastal Georgia",
                "Ceiling: R-38",
                "Walls: R-13 or R-20",
                "Floor: R-13",
                "Basement: R-0 or R-10",
              ],
            },
            {
              title: "Climate Zone 3",
              items: [
                "Most of Georgia",
                "Ceiling: R-38",
                "Walls: R-20 or R-13+5ci",
                "Floor: R-19",
                "Basement: R-5ci or R-13",
              ],
            },
            {
              title: "Climate Zone 4",
              items: [
                "North Georgia mountains",
                "Ceiling: R-49",
                "Walls: R-20 or R-13+5ci",
                "Floor: R-19",
                "Basement: R-10ci or R-13",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Insulation Types",
        },
        {
          type: "text",
          content:
            "Several insulation types are common in Georgia homes. Each has different R-values per inch, installation methods, and costs.",
        },
        {
          type: "list",
          items: [
            "Fiberglass batts: R-3.2/inch, lowest cost, common in walls/floors",
            "Blown fiberglass: R-2.5/inch, good for attics, settles over time",
            "Cellulose: R-3.5/inch, blown in, good fill properties",
            "Spray foam (open cell): R-3.7/inch, air seals as it insulates",
            "Spray foam (closed cell): R-6.5/inch, vapor barrier, highest cost",
            "Rigid foam board: R-3.8-6.5/inch, continuous insulation",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Spray Foam Benefits",
          content:
            "Spray foam provides both insulation and air sealing in one application. In Georgia's humid climate, closed-cell spray foam also acts as a vapor retarder. It's more expensive but can improve comfort and reduce energy costs significantly.",
        },
        {
          type: "heading",
          content: "Air Sealing",
        },
        {
          type: "text",
          content:
            "Air leakage accounts for significant energy loss and comfort problems. Sealing air leaks is as important as adding insulation—sometimes more so.",
        },
        {
          type: "list",
          items: [
            "Seal top plates where walls meet attic",
            "Seal bottom plates at foundation",
            "Seal around electrical boxes and penetrations",
            "Seal plumbing and wire penetrations",
            "Seal duct boots to drywall",
            "Seal window and door rough openings",
            "Seal recessed lights with air-tight housings",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Blower Door Test",
          content:
            "Georgia energy code requires homes to meet air leakage limits verified by a blower door test. The limit is 5 ACH50 (air changes per hour at 50 pascals pressure) in most areas. Plan for air sealing throughout construction to pass this test.",
        },
        {
          type: "heading",
          content: "Common Problem Areas",
        },
        {
          type: "text",
          content:
            "Certain areas are prone to insulation gaps or air leaks. Paying attention to these spots improves performance significantly.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Attic Considerations",
          content:
            "In Georgia, the attic is often the biggest opportunity for improvement. Hot attics (140°F+) strain HVAC systems. Consider sealing and insulating at the roof line (creating a conditioned attic) if ductwork and equipment are in the attic.",
        },
      ],
      keyTakeaways: [
        "Georgia spans three climate zones with different insulation requirements",
        "Air sealing is as important as insulation for energy efficiency",
        "Spray foam provides both insulation and air sealing benefits",
        "Georgia requires blower door testing to verify air tightness",
        "Attics with HVAC equipment benefit from conditioned attic approach",
      ],
      georgiaNote:
        "Georgia's energy code allows compliance through either prescriptive requirements (meeting specific R-values) or performance paths (demonstrating equivalent performance through energy modeling). Performance paths offer flexibility but require calculation by a certified rater.",
      quiz: [
        {
          question: "What does a blower door test measure?",
          options: [
            "Insulation R-value",
            "Air leakage in the building envelope",
            "HVAC system efficiency",
            "Indoor air quality",
          ],
          correctIndex: 1,
          explanation:
            "A blower door test measures air leakage by pressurizing or depressurizing the house and measuring airflow. Georgia code requires homes to meet air leakage limits verified by this test.",
        },
        {
          question:
            "What climate zone is most of Georgia in for energy code purposes?",
          options: [
            "Climate Zone 1",
            "Climate Zone 2",
            "Climate Zone 3",
            "Climate Zone 5",
          ],
          correctIndex: 2,
          explanation:
            "Most of Georgia is in Climate Zone 3. The coast is in Zone 2 (milder requirements), and the northern mountains are in Zone 4 (stricter requirements).",
        },
      ],
    },
    {
      id: "6-8",
      moduleId: "6",
      title: "Drywall and Interior Finishes",
      subtitle: "Closing in and finishing walls",
      order: 8,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "After insulation inspection passes, drywall closes in the interior. This marks a major milestone—your home starts looking like a home. Drywall work includes hanging, taping, mudding, and finishing to a smooth surface ready for paint or texture.",
        },
        {
          type: "heading",
          content: "Drywall Basics",
        },
        {
          type: "text",
          content:
            "Drywall (also called sheetrock or gypsum board) comes in various thicknesses and types. Standard residential construction uses 1/2\" drywall on walls and 5/8\" on ceilings to prevent sag.",
        },
        {
          type: "list",
          items: [
            "1/2\" regular: Standard for walls",
            "5/8\" regular: Ceilings to prevent sag",
            "5/8\" Type X: Fire-rated for garages, shared walls",
            "Moisture-resistant (green board): Near water, not showers",
            "Cement board: Shower walls, behind tile",
            "Mold-resistant: Bathrooms, basements",
          ],
        },
        {
          type: "heading",
          content: "Drywall Installation Process",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Hanging",
              items: [
                "Ceilings first, then walls",
                "Stagger joints between rows",
                "Screws every 12\" in field",
                "Edges supported on framing",
                "Cut around boxes cleanly",
              ],
            },
            {
              title: "Taping/Mudding",
              items: [
                "Apply joint tape to seams",
                "Multiple coats of compound",
                "Feather edges wider each coat",
                "Fill screw dimples",
                "Sand smooth between coats",
              ],
            },
            {
              title: "Finishing",
              items: [
                "Final sanding for smooth surface",
                "Prime to seal drywall",
                "Apply texture if desired",
                "Ready for paint",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Finish Levels",
          content:
            "Drywall finish is specified by level (0-5). Level 4 is standard for painted walls. Level 5 (skim coat) is needed for glossy paint or critical lighting. Textured walls can use Level 3. Specify the level you need upfront.",
        },
        {
          type: "heading",
          content: "Interior Trim and Millwork",
        },
        {
          type: "text",
          content:
            "After drywall, interior trim (millwork) is installed. This includes door casings, window trim, baseboards, crown molding, and other decorative elements.",
        },
        {
          type: "list",
          items: [
            "Door and window casing",
            "Baseboards throughout",
            "Crown molding (optional)",
            "Chair rail, wainscoting (optional)",
            "Closet shelving and rods",
            "Stair railings and balusters",
            "Built-in cabinetry",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Trim Sequence",
          content:
            "Interior trim is typically installed after priming/first coat of paint on walls but before finish paint and floor installation. This allows trim to be caulked and painted in place, and protects finished floors from trim installation.",
        },
        {
          type: "heading",
          content: "Paint",
        },
        {
          type: "text",
          content:
            "Paint transforms bare drywall and trim into finished rooms. Quality paint and proper prep make a significant difference in appearance and durability.",
        },
        {
          type: "list",
          items: [
            "Prime bare drywall to seal surface",
            "Caulk gaps at trim and corners",
            "Two coats of finish paint typical",
            "Flat or matte for ceilings",
            "Eggshell or satin for walls",
            "Semi-gloss for trim, doors, high-moisture areas",
            "Consider low-VOC paints for indoor air quality",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Rush Paint",
          content:
            "Paint looks better and lasts longer with proper prep. Caulk all trim gaps. Patch any dings from construction. Use quality paint—cheap paint requires more coats and wears faster. Good painters are worth the premium.",
        },
      ],
      keyTakeaways: [
        "Drywall types vary by location—use moisture-resistant in wet areas",
        "Multiple coats of mud and sanding create a smooth surface",
        "Finish level should be specified based on final appearance needs",
        "Trim installation follows drywall but precedes flooring",
        "Quality paint and proper prep make a significant difference",
      ],
      georgiaNote:
        "Georgia building code requires 5/8\" Type X (fire-rated) drywall on garage walls and ceilings that share surfaces with living space. This provides fire separation between the garage and house. The door between garage and house must also be fire-rated.",
      quiz: [
        {
          question: "What type of drywall is required in garages attached to living space?",
          options: [
            "1/2\" regular drywall",
            "5/8\" Type X fire-rated drywall",
            "Moisture-resistant green board",
            "Cement board",
          ],
          correctIndex: 1,
          explanation:
            "Georgia code requires 5/8\" Type X (fire-rated) drywall on garage walls and ceilings that share surfaces with living space. This provides required fire separation.",
        },
        {
          question: "What finish level is typically needed for standard painted walls?",
          options: [
            "Level 1",
            "Level 2",
            "Level 4",
            "Level 5",
          ],
          correctIndex: 2,
          explanation:
            "Level 4 is the standard finish for painted walls. Level 5 (skim coat) is needed for glossy paint or critical lighting conditions. Textured walls can use Level 3.",
        },
      ],
    },
    {
      id: "6-9",
      moduleId: "6",
      title: "Flooring Installation",
      subtitle: "Finishing your floors",
      order: 9,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "Flooring is one of the most visible finishes in your home and experiences significant wear. Choosing the right flooring for each room and installing it properly ensures both beauty and durability. Most flooring goes in late in construction to protect it from damage.",
        },
        {
          type: "heading",
          content: "Flooring Options",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Hardwood",
              items: [
                "Solid or engineered",
                "$6-15/sq ft installed",
                "Classic appearance",
                "Can be refinished",
                "Avoid in wet areas",
              ],
            },
            {
              title: "LVP/LVT",
              items: [
                "Luxury vinyl plank/tile",
                "$4-10/sq ft installed",
                "Water resistant",
                "Easy maintenance",
                "Many style options",
              ],
            },
            {
              title: "Tile",
              items: [
                "Ceramic or porcelain",
                "$8-20/sq ft installed",
                "Waterproof",
                "Durable",
                "Best for baths/kitchen",
              ],
            },
          ],
        },
        {
          type: "text",
          content:
            "Other options include laminate (budget-friendly, not waterproof), carpet (bedrooms, comfortable underfoot), and concrete (modern, can be stained or polished).",
        },
        {
          type: "heading",
          content: "Room-by-Room Recommendations",
        },
        {
          type: "list",
          items: [
            "Living areas: Hardwood, LVP, or tile for durability",
            "Kitchen: Tile, LVP, or sealed hardwood (water resistant)",
            "Bathrooms: Tile or LVP only (waterproof required)",
            "Bedrooms: Carpet or hardwood (comfort focused)",
            "Laundry: Tile or LVP (water resistant)",
            "Garage: Sealed concrete or epoxy coating",
            "Basement: LVP or tile (moisture tolerant)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Consistency Creates Flow",
          content:
            "Using the same flooring throughout connected spaces creates visual flow and makes spaces feel larger. If you vary flooring, transition at logical points like doorways. Too many flooring changes can make a home feel disjointed.",
        },
        {
          type: "heading",
          content: "Installation Timing",
        },
        {
          type: "text",
          content:
            "Hard flooring (hardwood, tile, LVP) is typically installed after painting but before final trim installation. This allows baseboards to cover expansion gaps. Carpet is usually the last item installed to protect it from construction damage.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Acclimation Required",
          content:
            "Hardwood and some other flooring must acclimate to the home's humidity before installation. Bring materials into the home 3-7 days before installation. Installing without acclimation leads to gaps or buckling later.",
        },
        {
          type: "heading",
          content: "Subfloor Preparation",
        },
        {
          type: "text",
          content:
            "The subfloor must be flat, clean, and dry before flooring installation. Issues with the subfloor telegraph through to the finished floor. Address squeaks, high spots, and low spots before the flooring crew arrives.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Humidity Considerations",
          content:
            "Georgia's humid climate requires attention to moisture. Slab floors need moisture testing before hardwood installation. Crawl space floors need proper moisture barriers below. LVP and tile are more forgiving of humidity variations than solid hardwood.",
        },
      ],
      keyTakeaways: [
        "Choose flooring appropriate for each room's moisture exposure",
        "Consistency in flooring creates visual flow between spaces",
        "Hard flooring installs before trim; carpet is last",
        "Hardwood must acclimate 3-7 days before installation",
        "Subfloor condition directly affects finished floor quality",
      ],
      georgiaNote:
        "Georgia's humidity variations affect flooring. Solid hardwood expands and contracts seasonally, requiring proper expansion gaps. Engineered hardwood and LVP are more dimensionally stable in Georgia's climate. Whatever you choose, maintain consistent indoor humidity (35-55%) to minimize movement.",
      quiz: [
        {
          question: "Why must hardwood flooring acclimate before installation?",
          options: [
            "To let the finish cure",
            "To adjust to the home's humidity and prevent gaps or buckling",
            "To soften the wood for easier cutting",
            "Acclimation is only a suggestion",
          ],
          correctIndex: 1,
          explanation:
            "Hardwood absorbs or releases moisture to match its environment. Installing before acclimation can lead to gaps (if it shrinks) or buckling (if it expands). Allow 3-7 days for acclimation.",
        },
        {
          question: "Which flooring type is recommended for bathroom floors?",
          options: [
            "Solid hardwood",
            "Carpet",
            "Tile or LVP",
            "Laminate",
          ],
          correctIndex: 2,
          explanation:
            "Bathrooms need waterproof flooring. Tile and LVP (luxury vinyl plank/tile) handle water well. Hardwood and laminate can be damaged by standing water.",
        },
      ],
    },
    {
      id: "6-10",
      moduleId: "6",
      title: "Cabinets and Countertops",
      subtitle: "Kitchen and bathroom finishes",
      order: 10,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "Cabinets and countertops define your kitchen and bathrooms more than almost any other element. They're also significant budget items—kitchen cabinets and countertops alone can represent 10-15% of your total construction cost. Understanding options helps you balance quality, aesthetics, and budget.",
        },
        {
          type: "heading",
          content: "Cabinet Quality Levels",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Stock Cabinets",
              items: [
                "Pre-made standard sizes",
                "Limited options",
                "Quick delivery",
                "$75-200/linear foot",
                "Home centers, IKEA",
              ],
            },
            {
              title: "Semi-Custom",
              items: [
                "Modified stock cabinets",
                "More size options",
                "More finish choices",
                "$150-400/linear foot",
                "4-8 week lead time",
              ],
            },
            {
              title: "Custom",
              items: [
                "Built to exact specs",
                "Any size, configuration",
                "Unlimited options",
                "$400-1000+/linear foot",
                "8-16+ week lead time",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Cabinet Construction",
        },
        {
          type: "text",
          content:
            "Quality differences often hide inside the cabinet. Look beyond door style to assess construction quality.",
        },
        {
          type: "list",
          items: [
            "Box construction: Plywood vs. particleboard (plywood is more durable)",
            "Shelves: Adjustable vs. fixed, thickness matters for sag resistance",
            "Drawers: Dovetail joints last longer than stapled",
            "Slides: Soft-close, full-extension are worth the upgrade",
            "Hinges: Concealed, soft-close hinges standard on quality cabinets",
            "Finish: Factory finish more durable than site-applied",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Budget Strategy",
          content:
            "If budget is tight, invest in quality cabinets where you'll see and use them most—base cabinets with drawers, the island. Upper cabinets and pantry cabinets face less wear. Quality soft-close hinges and slides matter more than fancy door styles.",
        },
        {
          type: "heading",
          content: "Countertop Options",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Quartz",
              items: [
                "Engineered stone",
                "$50-150/sq ft installed",
                "Non-porous, no sealing",
                "Many colors/patterns",
                "Most popular choice",
              ],
            },
            {
              title: "Granite",
              items: [
                "Natural stone",
                "$40-200/sq ft installed",
                "Unique natural patterns",
                "Requires periodic sealing",
                "Heat resistant",
              ],
            },
            {
              title: "Solid Surface",
              items: [
                "Corian, similar",
                "$40-100/sq ft installed",
                "Seamless appearance",
                "Repairable scratches",
                "Less heat resistant",
              ],
            },
          ],
        },
        {
          type: "text",
          content:
            "Other options include butcher block (warm, requires maintenance), laminate (budget-friendly), and concrete (custom, requires sealing).",
        },
        {
          type: "heading",
          content: "Installation Sequence",
        },
        {
          type: "list",
          items: [
            "Base cabinets installed first, shimmed level",
            "Wall cabinets mounted, aligned with base",
            "Countertop templated after cabinets are set",
            "Countertop fabricated and installed (1-2 weeks after template)",
            "Plumbing fixtures installed after countertop",
            "Backsplash installed last",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Lead Times Matter",
          content:
            "Cabinet and countertop lead times can be significant—4-16 weeks depending on type and supplier. Order early to avoid delays. Finalizing selections during design saves time during construction.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Local Stone Sources",
          content:
            "Georgia has granite quarries, making natural stone competitively priced locally. Several fabricators in the Atlanta area offer quality work. Get multiple quotes—prices vary significantly between fabricators for the same stone.",
        },
      ],
      keyTakeaways: [
        "Cabinet quality varies widely—look at box construction, not just doors",
        "Soft-close hinges and full-extension drawer slides are worth the upgrade",
        "Quartz is the most popular countertop—non-porous and low maintenance",
        "Order cabinets and countertops early—lead times are significant",
        "Countertops are templated after cabinets are installed",
      ],
      georgiaNote:
        "Georgia's granite quarries make natural stone competitive with engineered options. Visit local stone yards to see full slabs—photos don't capture natural stone variation. For quartz, color is consistent from sample to slab.",
      quiz: [
        {
          question: "What indicates higher quality cabinet construction?",
          options: [
            "Decorative door style",
            "Plywood box construction with dovetail drawer joints",
            "Particleboard with more finishes",
            "Larger cabinet sizes",
          ],
          correctIndex: 1,
          explanation:
            "Quality cabinets use plywood (not particleboard) for box construction and dovetail joints (not staples) for drawers. These construction details affect durability more than door style.",
        },
        {
          question: "When are countertops templated?",
          options: [
            "Before cabinets are ordered",
            "After cabinets are installed",
            "After countertops are installed",
            "During framing",
          ],
          correctIndex: 1,
          explanation:
            "Countertops are templated (measured) after cabinets are installed and leveled. This ensures the fabricated countertop fits precisely. Templating happens 1-2 weeks before countertop installation.",
        },
      ],
    },
    {
      id: "6-11",
      moduleId: "6",
      title: "Mechanical Trim-Out and Finals",
      subtitle: "Completing electrical, plumbing, and HVAC",
      order: 11,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "After drywall and paint, the mechanical trades return to complete their work. This 'trim-out' or 'finish' phase installs all the visible fixtures, devices, and equipment. It's the phase where your home becomes functional—lights turn on, water flows, and HVAC controls temperature.",
        },
        {
          type: "heading",
          content: "Electrical Trim-Out",
        },
        {
          type: "text",
          content:
            "Electrical trim-out installs all devices and fixtures after walls and ceilings are finished.",
        },
        {
          type: "list",
          items: [
            "Outlets and switches installed with cover plates",
            "Light fixtures hung and connected",
            "Ceiling fans installed",
            "Appliance connections made",
            "Panel labeled and cover installed",
            "Smoke and CO detectors installed and tested",
            "Doorbell and low-voltage systems completed",
            "Final inspection scheduled",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Dimmer Switches",
          content:
            "Consider dimmer switches for living areas, bedrooms, and dining rooms. They allow light level adjustment and can extend bulb life. LED-compatible dimmers are essential for LED fixtures. Specify these during electrical rough-in.",
        },
        {
          type: "heading",
          content: "Plumbing Trim-Out",
        },
        {
          type: "text",
          content:
            "Plumbing trim-out installs all fixtures and makes final connections after cabinets and countertops are in place.",
        },
        {
          type: "list",
          items: [
            "Sinks mounted and connected",
            "Faucets installed",
            "Toilets set and connected",
            "Showers and tubs trimmed with fixtures",
            "Garbage disposal installed",
            "Dishwasher connected",
            "Water heater final connections",
            "Exterior hose bibs completed",
            "Final pressure test and inspection",
          ],
        },
        {
          type: "heading",
          content: "HVAC Trim-Out",
        },
        {
          type: "text",
          content:
            "HVAC trim-out completes the system and prepares for operation.",
        },
        {
          type: "list",
          items: [
            "Registers and grilles installed in finished openings",
            "Thermostat installed and programmed",
            "Condensate drain trapped and tested",
            "Outdoor unit connected and charged (if not done at rough-in)",
            "System startup and balancing",
            "Filter installed and access verified",
            "Final inspection scheduled",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Mechanical Requirements",
          content:
            "Georgia requires hardwired, interconnected smoke detectors in each bedroom, outside sleeping areas, and on every level. CO detectors are required near bedrooms if the home has fuel-burning appliances or an attached garage. Test all devices before final inspection.",
        },
        {
          type: "heading",
          content: "Final Inspections",
        },
        {
          type: "text",
          content:
            "Each trade requires a final inspection verifying the completed installation meets code. All final inspections must pass before the building final inspection and Certificate of Occupancy.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Electrical Final",
              items: [
                "All devices installed",
                "GFCI/AFCI tested",
                "Smoke/CO operational",
                "Panel properly labeled",
              ],
            },
            {
              title: "Plumbing Final",
              items: [
                "All fixtures operational",
                "No leaks anywhere",
                "Water heater operational",
                "Proper drainage flow",
              ],
            },
            {
              title: "Mechanical Final",
              items: [
                "System operational",
                "Proper airflow",
                "Thermostat functional",
                "Combustion safety",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Inspection Sequence",
          content:
            "Schedule final inspections in the correct order. Trade finals must pass before the building final. The building final must pass before the Certificate of Occupancy is issued. Don't schedule your move-in until you have CO in hand.",
        },
      ],
      keyTakeaways: [
        "Mechanical trim-out installs all visible fixtures and devices",
        "All fixtures should be selected and on-site before trim-out begins",
        "Interconnected, hardwired smoke detectors are required in Georgia",
        "Trade final inspections must pass before building final",
        "Test all systems before calling for final inspections",
      ],
      georgiaNote:
        "Georgia requires GFCI protection in kitchens, bathrooms, garages, outdoors, and within 6 feet of sinks. AFCI protection is required for outlets in bedrooms and living areas. Your electrical final inspection will verify these protections are in place and functional.",
      quiz: [
        {
          question: "What must pass before the building final inspection?",
          options: [
            "Nothing—building final is first",
            "Only the electrical final",
            "All trade final inspections (electrical, plumbing, mechanical)",
            "Landscaping inspection",
          ],
          correctIndex: 2,
          explanation:
            "All trade final inspections (electrical, plumbing, mechanical) must pass before the building final inspection. The building final must then pass before the Certificate of Occupancy is issued.",
        },
        {
          question: "Where does Georgia require smoke detectors?",
          options: [
            "Only in the kitchen",
            "In each bedroom, outside sleeping areas, and on every level",
            "Only on the main floor",
            "Smoke detectors are optional",
          ],
          correctIndex: 1,
          explanation:
            "Georgia requires hardwired, interconnected smoke detectors in each bedroom, outside sleeping areas (like hallways), and on every level of the home.",
        },
      ],
    },
    {
      id: "6-12",
      moduleId: "6",
      title: "Managing Subcontractors",
      subtitle: "Coordinating your construction team",
      order: 12,
      estimatedMinutes: 20,
      content: [
        {
          type: "text",
          content:
            "Whether you're an owner-builder or working with a general contractor, understanding subcontractor management helps you maintain quality and schedule. Most home construction involves 15-20+ different subcontractors, each with their own expertise, schedule, and business practices.",
        },
        {
          type: "heading",
          content: "Finding Quality Subcontractors",
        },
        {
          type: "list",
          items: [
            "Ask other builders and homeowners for referrals",
            "Check Georgia contractor license status online",
            "Verify current liability insurance and workers comp",
            "Visit active job sites to see work quality",
            "Check references—call and visit completed jobs",
            "Review contract terms and payment expectations",
            "Assess communication style and responsiveness",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Licensing",
          content:
            "Georgia requires licensing for certain trades. Check the Georgia Secretary of State Professional License Search to verify: electricians, plumbers, HVAC contractors, and general contractors over $2,500 must be licensed. Verify license status before hiring.",
        },
        {
          type: "heading",
          content: "Subcontractor Agreements",
        },
        {
          type: "text",
          content:
            "Written agreements protect both parties. Even with contractors you trust, document the scope, schedule, and payment terms.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Scope Definition",
              items: [
                "Exactly what work is included",
                "What's explicitly excluded",
                "Material specifications",
                "Quality standards",
                "Clean-up responsibilities",
              ],
            },
            {
              title: "Schedule/Payment",
              items: [
                "Start and completion dates",
                "Payment schedule/milestones",
                "Change order process",
                "Delay penalties (if any)",
                "Lien waiver requirements",
              ],
            },
            {
              title: "Protections",
              items: [
                "Insurance requirements",
                "License verification",
                "Warranty terms",
                "Dispute resolution",
                "Termination provisions",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Scheduling and Coordination",
        },
        {
          type: "text",
          content:
            "Construction is a chain of dependent activities. Each trade needs the previous work complete before they can start. Managing this sequence is critical to keeping the project moving.",
        },
        {
          type: "list",
          items: [
            "Maintain a master schedule with all trades",
            "Confirm with each sub 2-3 days before expected start",
            "Communicate any delays immediately to affected trades",
            "Ensure previous work passes inspection before next trade starts",
            "Have backup contacts for critical trades",
            "Build buffer time for weather and unexpected delays",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Weekly Meetings",
          content:
            "Hold brief weekly coordination meetings (even by phone) with active subcontractors. Review the next week's schedule, address any issues, and verify material deliveries are on track. Prevents surprises and keeps everyone aligned.",
        },
        {
          type: "heading",
          content: "Quality Control",
        },
        {
          type: "text",
          content:
            "Don't rely solely on inspectors to catch problems. Conduct your own quality checks throughout construction.",
        },
        {
          type: "list",
          items: [
            "Walk the job daily or every other day minimum",
            "Compare work to plans and specifications",
            "Photo-document before work is covered up",
            "Address issues immediately—don't let them slide",
            "Check work before calling for inspection",
            "Maintain a punch list of items to address",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Lien Waivers",
          content:
            "In Georgia, subcontractors and suppliers can file a lien against your property if they're not paid—even if you paid the general contractor. Collect lien waivers from all subs and suppliers with each payment to protect yourself.",
        },
        {
          type: "heading",
          content: "Handling Problems",
        },
        {
          type: "text",
          content:
            "Problems will arise. How you handle them determines the outcome. Stay professional, document everything, and focus on solutions.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Dispute Resolution",
          content:
            "Most disputes can be resolved through direct communication. If not, mediation is often faster and cheaper than litigation. Include dispute resolution terms in your contracts. The Georgia Contractors Licensing Board handles complaints against licensed contractors.",
        },
      ],
      keyTakeaways: [
        "Verify licenses and insurance before hiring any subcontractor",
        "Written agreements protect both parties—document everything",
        "Scheduling coordination prevents costly delays",
        "Conduct your own quality checks—don't rely only on inspectors",
        "Collect lien waivers to protect your property from unpaid sub claims",
      ],
      georgiaNote:
        "Georgia's lien law allows subcontractors and suppliers to file liens even if you've paid the general contractor. Protect yourself by collecting lien waivers with each payment and verifying the GC is paying subs. Consider joint check arrangements for large payments.",
      quiz: [
        {
          question: "What should you verify before hiring a subcontractor?",
          options: [
            "Only their price",
            "License status, insurance, and references",
            "Just their availability",
            "Whether they've worked in Georgia before",
          ],
          correctIndex: 1,
          explanation:
            "Before hiring, verify the contractor's license status (for licensed trades), current insurance coverage, and references from past clients. Price matters, but quality and reliability matter more.",
        },
        {
          question: "Why should you collect lien waivers with payments?",
          options: [
            "It's a tax requirement",
            "To track job costs",
            "To protect your property from liens if the GC doesn't pay subs",
            "Lien waivers aren't necessary",
          ],
          correctIndex: 2,
          explanation:
            "In Georgia, subcontractors and suppliers can lien your property if unpaid—even if you paid the GC. Lien waivers confirm payment to subs and protect your property from these claims.",
        },
      ],
    },
  ],
};
