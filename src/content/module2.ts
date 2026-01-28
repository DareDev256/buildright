import { Module } from "./types";

export const module2: Module = {
  id: "2",
  title: "Land Acquisition",
  description: "Finding land, zoning, due diligence, and Georgia land laws",
  totalLessons: 6,
  lessons: [
    // Lesson 1: Finding the Right Land
    {
      id: "2-1",
      moduleId: "2",
      order: 1,
      title: "Finding the Right Land",
      subtitle: "Where to look and what to look for",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Finding the right piece of land is the foundation of your entire project. The wrong lot can add tens of thousands to your build cost, limit your design options, or create ongoing headaches. This lesson helps you know where to look and what to evaluate.",
        },
        {
          type: "heading",
          content: "Where to Find Land",
        },
        {
          type: "list",
          items: [
            "MLS listings (Zillow, Realtor.com, Redfin) — Most available lots",
            "Land-specific sites (LandWatch, Land.com, Lands of America)",
            "County tax records — Find owners of undeveloped parcels",
            "Driving neighborhoods — 'For Sale by Owner' signs, vacant lots",
            "Estate sales and auctions — Often below-market opportunities",
            "Builders and developers — May sell lots from larger tracts",
            "Word of mouth — Tell everyone you're looking",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Land Resources",
          content:
            "Georgia MLS (FMLS and GAMLS) lists most available properties. LandWatch has strong Georgia coverage. For rural land, check with local farm bureaus and timber companies who sometimes sell parcels.",
        },
        {
          type: "heading",
          content: "Types of Lots",
        },
        {
          type: "list",
          items: [
            "Subdivision lot — Part of a planned development, usually has utilities, may have HOA and architectural restrictions",
            "Infill lot — Empty lot in established neighborhood, utilities usually available",
            "Acreage — Larger rural parcels, may need well/septic, more privacy",
            "Estate lot — Large lot in upscale subdivision, premium pricing",
            "Flag lot — Narrow access strip to buildable area in back, privacy but access challenges",
          ],
        },
        {
          type: "heading",
          content: "Key Factors to Evaluate",
        },
        {
          type: "text",
          content:
            "Before falling in love with a piece of land, evaluate these critical factors:",
        },
        {
          type: "list",
          items: [
            "Location — School district, commute, neighborhood quality, future development plans",
            "Size — Enough for your house, setbacks, septic (if needed), and outdoor space",
            "Topography — Flat is cheapest to build; slopes add cost but can offer views",
            "Access — Legal access from public road? Driveway feasible?",
            "Utilities — Water, sewer, electricity, gas, internet availability",
            "Zoning — What can you legally build? Any restrictions?",
            "Soil conditions — Will it support a foundation? Drainage issues?",
            "Flood zone — Is it in a FEMA flood zone? Insurance implications?",
            "Environmental — Wetlands, protected species, contamination?",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The 'Cheap Land' Trap",
          content:
            "Land that seems like a bargain often has hidden issues — no road access, wetlands, terrible soil, or no utilities nearby. A $20K lot that needs $50K in site work isn't a deal. Always understand WHY land is priced low.",
        },
        {
          type: "heading",
          content: "Questions to Ask About Any Lot",
        },
        {
          type: "list",
          items: [
            "Why is the owner selling?",
            "How long has it been on the market?",
            "What are the exact boundaries? (Get a survey)",
            "Are there any easements or encroachments?",
            "What are the HOA rules and fees (if applicable)?",
            "Has it ever been permitted or developed before?",
            "Are there any liens or back taxes owed?",
            "What did the seller pay and when? (Public record in Georgia)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Visit Multiple Times",
          content:
            "Visit the property at different times of day and in different weather. A beautiful lot on a sunny Sunday might have traffic noise on Monday morning or drainage problems after rain.",
        },
        {
          type: "heading",
          content: "Working with Agents",
        },
        {
          type: "text",
          content:
            "A good buyer's agent familiar with land transactions can be invaluable. Land deals are different from house purchases — they require understanding of zoning, utilities, and buildability. Look for an agent who has sold land before, not just houses.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Disclosure Rules",
          content:
            "Georgia is a 'caveat emptor' (buyer beware) state with limited seller disclosure requirements for land. This makes your own due diligence even more critical. Don't rely on the seller to disclose problems — investigate everything yourself.",
        },
      ],
      keyTakeaways: [
        "Search multiple sources — MLS, land sites, driving around, county records",
        "Cheap land often has expensive hidden problems",
        "Visit properties multiple times in different conditions",
        "Georgia's caveat emptor rules mean due diligence is on YOU",
        "Work with an agent experienced in land transactions",
      ],
    },

    // Lesson 2: Understanding Zoning
    {
      id: "2-2",
      moduleId: "2",
      order: 2,
      title: "Understanding Zoning",
      subtitle: "What you can and can't build on your land",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "Zoning determines what you can build on a piece of land. It's controlled by local government and affects everything from house size to whether you can have a home office. Understanding zoning BEFORE you buy prevents expensive surprises.",
        },
        {
          type: "heading",
          content: "What Zoning Controls",
        },
        {
          type: "list",
          items: [
            "Land use — Residential, commercial, agricultural, mixed-use",
            "Density — How many units per acre (single-family vs. multi-family)",
            "Setbacks — Minimum distance from property lines to structures",
            "Height limits — Maximum building height",
            "Lot coverage — Maximum percentage of lot that can be built on",
            "Accessory structures — Rules for detached garages, ADUs, sheds",
            "Home businesses — Whether and what type allowed",
            "Parking — Required number of spaces",
          ],
        },
        {
          type: "heading",
          content: "Common Residential Zoning Categories",
        },
        {
          type: "list",
          items: [
            "R-1 (Single-Family Residential) — One house per lot, usually lowest density",
            "R-2/R-3 (Medium Density) — May allow duplexes or smaller lots",
            "R-4/R-5 (High Density) — Multi-family, apartments, townhomes",
            "A-1 (Agricultural) — Farming, often allows one residence per large acreage",
            "PUD (Planned Unit Development) — Master-planned with its own rules",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Zoning Varies by Jurisdiction",
          content:
            "Every county and city has its own zoning codes and naming conventions. 'R-1' in one county may mean something different in another. Always check the specific requirements for YOUR jurisdiction.",
        },
        {
          type: "heading",
          content: "Understanding Setbacks",
        },
        {
          type: "text",
          content:
            "Setbacks define how close to property lines you can build. They're usually expressed as front, rear, and side setbacks.",
        },
        {
          type: "list",
          items: [
            "Front setback — Distance from street/road (often 25-50 feet)",
            "Rear setback — Distance from back property line (often 20-40 feet)",
            "Side setbacks — Distance from side property lines (often 10-20 feet)",
            "Corner lot setbacks — May have two 'front' setbacks",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Buildable Area",
          content:
            "After setbacks, your 'buildable envelope' may be smaller than you think. A 100x100 lot (10,000 sq ft) with 30' front, 25' rear, and 10' side setbacks leaves only a 60x45 area (2,700 sq ft) for your house footprint.",
        },
        {
          type: "heading",
          content: "How to Research Zoning",
        },
        {
          type: "list",
          items: [
            "County/city planning department website — Most have online zoning maps",
            "GIS (Geographic Information System) — Interactive maps showing zoning by parcel",
            "Call the planning department — They'll tell you the zoning and basic rules",
            "Request a zoning verification letter — Official written confirmation",
            "Review the zoning ordinance — Full text of rules for your zone",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Zoning Resources",
          content:
            "Most Georgia counties have online GIS systems. Search '[County Name] GA GIS' to find parcel maps with zoning. Metro Atlanta counties (Fulton, DeKalb, Cobb, Gwinnett) have comprehensive online resources. Rural counties may require a phone call to the planning office.",
        },
        {
          type: "heading",
          content: "Variances and Rezoning",
        },
        {
          type: "text",
          content:
            "What if the zoning doesn't allow what you want to build? You have two options:",
        },
        {
          type: "list",
          items: [
            "Variance — Request exception to specific rules (setback, height, etc.) without changing the zoning. Granted for hardship situations.",
            "Rezoning — Request change to the property's zoning classification. Longer process, requires public hearings, no guarantee of approval.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Buy Hoping for Approval",
          content:
            "Never purchase land assuming you'll get a variance or rezoning. Both are discretionary — the government can say no. Only buy land that works under CURRENT zoning, or make any purchase contingent on obtaining approvals.",
        },
        {
          type: "heading",
          content: "HOA and Deed Restrictions",
        },
        {
          type: "text",
          content:
            "Beyond government zoning, private restrictions may apply:",
        },
        {
          type: "list",
          items: [
            "HOA covenants — Homeowner association rules on design, materials, colors",
            "Architectural review — Many HOAs require plan approval before building",
            "Deed restrictions — Recorded limitations that 'run with the land'",
            "These can be MORE restrictive than zoning (never less)",
            "Violations can result in fines, liens, or forced changes",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Get Everything in Writing",
          content:
            "Before buying, obtain: (1) Zoning verification letter from the jurisdiction, (2) Complete HOA covenants and architectural guidelines, (3) Title report showing any deed restrictions. Read all of these carefully.",
        },
      ],
      keyTakeaways: [
        "Zoning controls what, where, and how big you can build",
        "Setbacks reduce your buildable area — do the math before buying",
        "Research zoning through county GIS maps and planning department",
        "Never buy assuming you'll get a variance or rezoning",
        "HOA rules can add restrictions beyond government zoning",
      ],
      georgiaNote:
        "Georgia counties vary widely in zoning complexity. Unincorporated areas may have minimal zoning while cities have detailed codes. Always verify whether your property is in a city or unincorporated county — the rules are different.",
      quiz: [
        {
          id: "2-2-q1",
          question: "What do setbacks determine?",
          options: [
            "The price of the land",
            "The minimum distance from property lines where you can build",
            "How many stories your house can have",
            "Whether you need a permit",
          ],
          correctIndex: 1,
          explanation:
            "Setbacks define the minimum distance from property lines (front, rear, sides) where construction is allowed. They reduce your buildable envelope.",
        },
        {
          id: "2-2-q2",
          question: "Should you buy land assuming you'll get a variance approved?",
          options: [
            "Yes, variances are usually approved",
            "Yes, if your real estate agent says it will work",
            "No, variances are discretionary and can be denied",
            "It depends on the county",
          ],
          correctIndex: 2,
          explanation:
            "Variances are discretionary — the government can deny them. Only buy land that works under current zoning, or make any purchase contingent on variance approval.",
        },
      ],
    },

    // Lesson 3: Due Diligence Checklist
    {
      id: "2-3",
      moduleId: "2",
      order: 3,
      title: "Due Diligence Checklist",
      subtitle: "Everything to investigate before buying land",
      duration: "15 min read",
      content: [
        {
          type: "text",
          content:
            "Due diligence is your investigation period to uncover any issues with the land before you're committed. In Georgia's 'buyer beware' market, this work falls entirely on you. Use this comprehensive checklist to avoid costly surprises.",
        },
        {
          type: "heading",
          content: "Legal Due Diligence",
        },
        {
          type: "list",
          items: [
            "□ Title search — Verify clear ownership and no liens",
            "□ Survey — Confirm boundaries match what you think you're buying",
            "□ Easements — Identify any utility, access, or drainage easements",
            "□ Deed restrictions — Review any recorded covenants or limitations",
            "□ Back taxes — Verify all property taxes are current",
            "□ Legal access — Confirm legal right to access from public road",
            "□ Encroachments — Check if neighbors have built onto the property",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "No Legal Access = No Value",
          content:
            "Some landlocked parcels have NO legal access — previous access may have been informal or revoked. Without a recorded easement or direct road frontage, you may not be able to build or even reach your property legally. This is more common than you'd think.",
        },
        {
          type: "heading",
          content: "Zoning and Regulatory",
        },
        {
          type: "list",
          items: [
            "□ Zoning classification — What does current zoning allow?",
            "□ Setbacks — What are required distances from property lines?",
            "□ Height/coverage limits — Any restrictions on building size?",
            "□ HOA rules — Get complete covenants and architectural guidelines",
            "□ Historic district — Any historic preservation restrictions?",
            "□ Future development — Check county plans for nearby roads, development",
            "□ School district — Verify which schools serve the property",
          ],
        },
        {
          type: "heading",
          content: "Physical Site Assessment",
        },
        {
          type: "list",
          items: [
            "□ Topography — Is it buildable? Slopes, low spots, drainage patterns",
            "□ Soil test/Perc test — Required for septic, reveals foundation issues",
            "□ Flood zone — Check FEMA flood maps (fema.gov/flood-maps)",
            "□ Wetlands — Any jurisdictional wetlands? (Cannot be disturbed)",
            "□ Trees — Protected trees? Clearing costs?",
            "□ Environmental — Any contamination, buried tanks, or hazards?",
            "□ Drainage — Where does water go? Any standing water issues?",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Soil Considerations",
          content:
            "Georgia has varied soil types. The red clay common in North Georgia can create drainage and foundation challenges. Coastal areas have sandy soil and high water tables. A soil test ($300-800) reveals bearing capacity, drainage, and septic suitability. Don't skip this.",
        },
        {
          type: "heading",
          content: "Utilities Assessment",
        },
        {
          type: "list",
          items: [
            "□ Water — Public water available? Distance to tap? Cost to connect?",
            "□ Sewer — Public sewer available? If not, is land suitable for septic?",
            "□ Electricity — Distance to power? Cost for service run?",
            "□ Natural gas — Available at the street? Cost to connect?",
            "□ Internet — What providers serve the area? Fiber available?",
            "□ Impact fees — What utility connection fees apply?",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Utility Connection Costs",
          content:
            "Bringing utilities to a remote lot can cost $10,000-$50,000+. Power companies charge per foot for new service runs. Well and septic installation adds $15,000-30,000. Factor these into your land budget.",
        },
        {
          type: "heading",
          content: "Site Development Costs",
        },
        {
          type: "list",
          items: [
            "□ Clearing — How much vegetation/trees need removal?",
            "□ Grading — Does the site need significant earthwork?",
            "□ Driveway — Length and terrain of driveway needed?",
            "□ Retaining walls — Will slopes require walls?",
            "□ Stormwater — Any detention/retention requirements?",
            "□ Erosion control — Georgia requires this for land disturbance",
          ],
        },
        {
          type: "heading",
          content: "Neighborhood Assessment",
        },
        {
          type: "list",
          items: [
            "□ Neighboring properties — Are they well-maintained? Compatible uses?",
            "□ Traffic — Drive the route during rush hour",
            "□ Noise — Any airports, highways, industrial uses nearby?",
            "□ Smells — Any agricultural or industrial odors?",
            "□ Future development — What's planned for adjacent parcels?",
            "□ Crime statistics — Check local crime maps",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Talk to Neighbors",
          content:
            "Knock on doors and ask neighbors about the area. They'll tell you things no disclosure will — flooding history, problem neighbors, planned developments, why the last buyer backed out.",
        },
        {
          type: "heading",
          content: "Financial Due Diligence",
        },
        {
          type: "list",
          items: [
            "□ Property taxes — What are current taxes? What will they be after building?",
            "□ Special assessments — Any pending assessments for roads, utilities?",
            "□ HOA fees — What are current and potential future fees?",
            "□ Insurance — Get quotes for builder's risk and homeowner's",
            "□ Comparable sales — Is the asking price reasonable?",
          ],
        },
        {
          type: "heading",
          content: "The Due Diligence Period",
        },
        {
          type: "text",
          content:
            "Your purchase contract should include a due diligence period — typically 14-30 days where you can investigate and back out for any reason. Use every day of this period wisely:",
        },
        {
          type: "list",
          items: [
            "Week 1: Order survey, title search, soil test",
            "Week 2: Research zoning, visit planning department, check utilities",
            "Week 3: Get contractor to evaluate site, estimate site work costs",
            "Week 4: Review all findings, make go/no-go decision",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Due Diligence Period",
          content:
            "Georgia contracts often use a 'Due Diligence Period' during which earnest money may be non-refundable but you can terminate for any reason. After this period, backing out typically means losing earnest money. Negotiate enough time — 21-30 days minimum for land.",
        },
      ],
      keyTakeaways: [
        "Due diligence is YOUR responsibility — Georgia is buyer beware",
        "Verify legal access before anything else",
        "Get a survey, soil test, and title search on any land",
        "Factor utility connection and site work costs into your budget",
        "Use the full due diligence period — don't rush this decision",
      ],
      georgiaNote:
        "Georgia's caveat emptor doctrine means sellers have minimal disclosure requirements. The burden is on you to discover problems. Never waive due diligence period for land purchases.",
    },

    // Lesson 4: Utilities and Access
    {
      id: "2-4",
      moduleId: "2",
      order: 4,
      title: "Utilities and Access",
      subtitle: "Getting water, power, sewer, and road access to your lot",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "A beautiful lot is worthless if you can't get utilities to it or access it legally. Utility availability and connection costs can make or break a land deal. This lesson covers what you need and how to evaluate it.",
        },
        {
          type: "heading",
          content: "Water Supply Options",
        },
        {
          type: "list",
          items: [
            "Public/municipal water — Best option. Reliable, tested, usually available in developed areas",
            "Community well — Shared system in some subdivisions. Check capacity and fees",
            "Private well — Required in rural areas. Costs $5,000-15,000+ in Georgia depending on depth",
            "Water availability letter — Get written confirmation from provider before buying",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Well Requirements",
          content:
            "Georgia requires wells to be drilled by licensed contractors and tested for safety. Well depth varies dramatically — 50 feet in some areas, 500+ feet in others. North Georgia granite can require expensive drilling. Get well depth estimates from local well drillers before buying.",
        },
        {
          type: "heading",
          content: "Wastewater Options",
        },
        {
          type: "list",
          items: [
            "Public sewer — Easiest option. Connection fees typically $2,000-5,000",
            "Septic system — Required where no sewer. Costs $10,000-25,000+ in Georgia",
            "Perc test — Soil percolation test determines if land can support septic",
            "Failed perc test = Cannot build (unless alternative system approved)",
            "Health department approval — Required before septic installation",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Perc Test is Critical",
          content:
            "If there's no public sewer, the perc test determines if you can build. Period. Don't buy land without either (1) public sewer availability or (2) a passing perc test. A failing test means the land may be unbuildable.",
        },
        {
          type: "heading",
          content: "Electrical Service",
        },
        {
          type: "list",
          items: [
            "Check which utility serves the area (Georgia Power, EMC, etc.)",
            "Distance from existing power lines matters — long runs are expensive",
            "Standard residential service: 200-amp, single phase",
            "Utility may require easement for new lines",
            "Connection fees vary: $0 to $10,000+ depending on distance",
            "Get written cost estimate from utility before buying",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Electric Providers",
          content:
            "Georgia Power serves metro Atlanta and many urban areas. Rural areas are served by Electric Membership Corporations (EMCs) like Jackson EMC, Cobb EMC, Walton EMC. EMCs often have lower connection fees but may have longer service restoration times.",
        },
        {
          type: "heading",
          content: "Natural Gas",
        },
        {
          type: "list",
          items: [
            "Not available in all areas — mostly urban/suburban",
            "Check with Atlanta Gas Light (AGL) for availability",
            "Alternative: Propane tank (leased or owned) for rural properties",
            "All-electric homes are increasingly common and efficient",
          ],
        },
        {
          type: "heading",
          content: "Internet and Communications",
        },
        {
          type: "list",
          items: [
            "Fiber: Best option, check with AT&T, Google Fiber, local providers",
            "Cable: Comcast/Xfinity, Charter/Spectrum serve many Georgia areas",
            "DSL: Slower, but available in more rural areas",
            "Fixed wireless: Growing option for rural areas",
            "Starlink: Satellite option for remote properties ($120+/month)",
            "Don't assume — verify service at the specific address",
          ],
        },
        {
          type: "heading",
          content: "Road Access",
        },
        {
          type: "text",
          content:
            "Legal access to your property is non-negotiable. There are several types:",
        },
        {
          type: "list",
          items: [
            "Direct frontage — Property borders a public road. Best option.",
            "Recorded easement — Legal right to cross another property. Verify it's recorded.",
            "Prescriptive easement — Access through long-term use. Legally uncertain.",
            "Private road — Shared access road. Understand maintenance obligations.",
            "Landlocked — No legal access. Major red flag — avoid.",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Verify Access in Writing",
          content:
            "A dirt road across a neighbor's property is NOT legal access unless there's a recorded easement. 'We've always used this road' doesn't hold up legally. Check the deed and title for recorded access rights.",
        },
        {
          type: "heading",
          content: "Driveway Considerations",
        },
        {
          type: "list",
          items: [
            "Driveway permit — Usually required from county or state DOT",
            "Culvert — May be required for drainage at road connection",
            "Length — Long driveways are expensive to build and maintain",
            "Grade — Steep driveways require special design and materials",
            "Sight distance — Must meet safety requirements at road intersection",
            "Cost estimate: $3,000-30,000+ depending on length and terrain",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia DOT Requirements",
          content:
            "Driveways connecting to state highways require GDOT encroachment permits. County roads require county permits. Minimum sight distance and drainage requirements apply. Apply early — permits can take 4-8 weeks.",
        },
        {
          type: "heading",
          content: "Utility Cost Summary",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Developed Lot",
              items: [
                "Water tap: $2,000-5,000",
                "Sewer tap: $2,000-5,000",
                "Electric: $0-500",
                "Gas: $0-500",
                "Total: $4,000-11,000",
              ],
            },
            {
              title: "Rural Lot",
              items: [
                "Well: $8,000-15,000",
                "Septic: $10,000-25,000",
                "Electric run: $5,000-15,000",
                "Propane tank: $500-2,000",
                "Total: $23,500-57,000",
              ],
            },
          ],
        },
      ],
      keyTakeaways: [
        "Get written confirmation of utility availability before buying",
        "No passing perc test + no sewer = likely unbuildable land",
        "Verify LEGAL access — not just a dirt road someone uses",
        "Rural utility connections can add $25,000-50,000+ to land cost",
        "Factor all utility and access costs into your total land budget",
      ],
      georgiaNote:
        "Georgia's varied geography means utility costs vary dramatically. A lot 2 miles outside a city might need well, septic, and a long power run — adding $40,000+ to a 'cheap' lot.",
      quiz: [
        {
          id: "2-4-q1",
          question: "What happens if land fails a perc test and has no public sewer?",
          options: [
            "You can install a standard septic system anyway",
            "The land may be unbuildable without an expensive alternative system",
            "You just need a variance from the county",
            "Perc tests aren't required in Georgia",
          ],
          correctIndex: 1,
          explanation:
            "A failing perc test means the soil won't support a standard septic system. Without public sewer, the land may be unbuildable unless an expensive engineered alternative system is approved.",
        },
      ],
    },

    // Lesson 5: The Purchasing Process
    {
      id: "2-5",
      moduleId: "2",
      order: 5,
      title: "The Purchasing Process",
      subtitle: "From offer to closing on your land",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Buying land follows a similar process to buying a house, but with some important differences. This lesson walks you through the steps from finding your lot to holding the deed.",
        },
        {
          type: "heading",
          content: "Step 1: Make an Offer",
        },
        {
          type: "text",
          content:
            "Once you've found land you're interested in, you'll submit a purchase offer. Key elements include:",
        },
        {
          type: "list",
          items: [
            "Purchase price — Your offered amount",
            "Earnest money — Deposit showing serious intent (typically 1-5% for land)",
            "Due diligence period — Time to investigate (request 21-30 days minimum)",
            "Contingencies — Conditions that must be met (financing, perc test, survey)",
            "Closing date — When the transaction will complete",
            "What's included — Timber rights, mineral rights, existing structures",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Land Negotiation Tip",
          content:
            "Land often has more negotiating room than houses. If a lot has been listed for months, sellers may accept significantly below asking. Research comparable sales and how long the property has been listed.",
        },
        {
          type: "heading",
          content: "Step 2: Contract Acceptance",
        },
        {
          type: "text",
          content:
            "The seller may accept your offer, reject it, or counter. Once both parties sign, you have a binding contract. The due diligence period begins.",
        },
        {
          type: "heading",
          content: "Step 3: Due Diligence Period",
        },
        {
          type: "text",
          content:
            "Use this time to thoroughly investigate the property (see Due Diligence Checklist lesson). Order all inspections and investigations immediately:",
        },
        {
          type: "list",
          items: [
            "Survey (takes 1-2 weeks to schedule and complete)",
            "Title search (takes 1-2 weeks)",
            "Soil test / perc test (schedule early — may take weeks)",
            "Utility verification letters",
            "Zoning verification",
            "Environmental review if needed",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Time is Your Enemy",
          content:
            "Due diligence periods pass quickly. Order everything within the first 3 days. If you discover problems late, you may not have time to negotiate or walk away cleanly.",
        },
        {
          type: "heading",
          content: "Step 4: Resolve Issues or Terminate",
        },
        {
          type: "text",
          content:
            "If due diligence reveals problems, you have options:",
        },
        {
          type: "list",
          items: [
            "Negotiate — Ask seller to fix problems or reduce price",
            "Accept — Proceed knowing the issues and their costs",
            "Terminate — Exit the contract (during DD period, usually penalty-free)",
          ],
        },
        {
          type: "heading",
          content: "Step 5: Secure Financing (if needed)",
        },
        {
          type: "text",
          content:
            "Land financing is different from home mortgages:",
        },
        {
          type: "list",
          items: [
            "Land loans — Higher interest rates (1-2% above mortgages) and larger down payments (20-50%)",
            "Construction-to-perm loans — Cover land + construction, convert to mortgage at completion",
            "Cash purchase — Many land buyers pay cash to avoid financing challenges",
            "Seller financing — Some sellers will finance directly (often higher rate)",
            "USDA loans — May help with rural land purchases for eligible borrowers",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Land Lenders",
          content:
            "Local and regional banks often have better land loan programs than national banks. Credit unions and farm credit associations (AgGeorgia, AgSouth) offer competitive land loans, especially for rural properties. Shop multiple lenders.",
        },
        {
          type: "heading",
          content: "Step 6: Title Work and Insurance",
        },
        {
          type: "list",
          items: [
            "Title search — Examines public records for ownership history, liens, encumbrances",
            "Title insurance — Protects against undiscovered title defects",
            "Owner's policy — Protects you (one-time premium at closing)",
            "Lender's policy — Protects lender (required if financing)",
            "Survey review — Title company reviews survey for encroachments",
          ],
        },
        {
          type: "heading",
          content: "Step 7: Closing",
        },
        {
          type: "text",
          content:
            "At closing, you'll sign documents and transfer funds. For land purchases:",
        },
        {
          type: "list",
          items: [
            "Review Settlement Statement (closing costs breakdown)",
            "Sign deed — Transfers ownership to you",
            "Sign loan documents (if financing)",
            "Pay closing costs (typically 2-5% of purchase price)",
            "Receive keys / access (and start dreaming about your future home)",
          ],
        },
        {
          type: "heading",
          content: "Typical Closing Costs for Land",
        },
        {
          type: "list",
          items: [
            "Title insurance: 0.5-1% of purchase price",
            "Survey: $400-1,500",
            "Recording fees: $50-200",
            "Attorney fees: $500-1,500 (Georgia uses attorneys for closings)",
            "Loan fees (if financing): 1-3% of loan amount",
            "Transfer tax: Georgia charges $1 per $1,000 of value (state) plus county may add",
            "Prorated property taxes",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Closing Process",
          content:
            "Georgia is an 'attorney state' — a licensed attorney must supervise real estate closings. This adds cost ($500-1,500) but provides legal protection. The attorney also handles title examination and document preparation.",
        },
      ],
      keyTakeaways: [
        "Get adequate due diligence time in your contract (21-30 days minimum)",
        "Order all inspections within the first 3 days of due diligence",
        "Land loans require larger down payments and have higher rates than mortgages",
        "Title insurance protects you from undiscovered problems — don't skip it",
        "Georgia requires an attorney to close real estate transactions",
      ],
    },

    // Lesson 6: Georgia Land Laws and Considerations
    {
      id: "2-6",
      moduleId: "2",
      order: 6,
      title: "Georgia Land Laws",
      subtitle: "State-specific rules every Georgia land buyer should know",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Every state has unique laws affecting land purchases and ownership. Understanding Georgia's specific rules helps you navigate the process and avoid legal pitfalls.",
        },
        {
          type: "heading",
          content: "Caveat Emptor: Buyer Beware",
        },
        {
          type: "text",
          content:
            "Georgia follows the doctrine of 'caveat emptor' (let the buyer beware). This means:",
        },
        {
          type: "list",
          items: [
            "Sellers have LIMITED disclosure obligations for land (unlike houses)",
            "The burden is on YOU to discover problems",
            "Don't expect sellers to volunteer information about defects",
            "Thorough due diligence is not optional — it's essential",
            "Get everything important in writing before closing",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "What Sellers Must Disclose",
          content:
            "In Georgia, sellers must disclose known material defects that affect value AND that the buyer couldn't reasonably discover. But 'couldn't reasonably discover' is interpreted narrowly. If you COULD have discovered it with an inspection, the seller may not be liable. Do your homework.",
        },
        {
          type: "heading",
          content: "Property Taxes",
        },
        {
          type: "list",
          items: [
            "Georgia taxes property at 40% of fair market value (assessment ratio)",
            "Millage rates vary significantly by county (20-40 mills typical)",
            "Homestead exemption available for primary residence (reduces taxable value)",
            "Agricultural exemption may apply to farmland (CUVA program)",
            "Taxes increase when property changes hands or is developed",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Tax Increase Warning",
          content:
            "Undeveloped land is often assessed lower than its potential value. When you buy and especially when you build, expect property taxes to increase significantly. A $5K annual tax bill could become $8-12K after construction.",
        },
        {
          type: "heading",
          content: "Timber and Mineral Rights",
        },
        {
          type: "text",
          content:
            "In Georgia, property rights can be severed:",
        },
        {
          type: "list",
          items: [
            "Timber rights — Right to harvest trees may be sold separately",
            "Mineral rights — Rights to underground resources can be severed",
            "Water rights — Georgia follows 'reasonable use' doctrine",
            "Always verify what rights convey with the land purchase",
            "Previous owners may have sold timber or mineral rights",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Check the Deed Carefully",
          content:
            "Review the deed for any 'reservations' or 'exceptions.' Language like 'reserving all mineral rights' means you won't own those rights. In timber-rich areas of Georgia, verify timber rights are included.",
        },
        {
          type: "heading",
          content: "Wetlands and Environmental Regulations",
        },
        {
          type: "list",
          items: [
            "Jurisdictional wetlands cannot be filled or disturbed without permits",
            "Army Corps of Engineers and EPA regulate wetlands federally",
            "Georgia EPD handles state-level environmental permitting",
            "Buffer requirements protect streams and water bodies",
            "Environmental contamination may require cleanup before development",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Wetland Delineation",
          content:
            "Wetlands aren't always obvious — they're defined by soil type, hydrology, and vegetation. A certified wetland delineation ($1,000-3,000) identifies exact boundaries. Buying land with undisclosed wetlands can make portions unbuildable.",
        },
        {
          type: "heading",
          content: "Land Disturbance and Erosion Control",
        },
        {
          type: "list",
          items: [
            "Georgia requires erosion control for land disturbance over 1 acre",
            "Some counties require permits for smaller disturbances",
            "NPDES permit needed for larger projects (stormwater management)",
            "Silt fences, sediment basins, and other controls required during construction",
            "Fines for violations can be significant",
          ],
        },
        {
          type: "heading",
          content: "Boundary and Survey Law",
        },
        {
          type: "list",
          items: [
            "Georgia follows the 'agreed boundary doctrine'",
            "Long-standing fences may establish legal boundaries even if survey differs",
            "Adverse possession: 20 years continuous use may establish ownership",
            "Always get a current survey — don't rely on old surveys or fences",
            "Licensed Georgia surveyor required for legal boundary surveys",
          ],
        },
        {
          type: "heading",
          content: "Homestead Exemption",
        },
        {
          type: "text",
          content:
            "Once you build and occupy your home, you can apply for homestead exemption:",
        },
        {
          type: "list",
          items: [
            "Reduces assessed value for primary residence",
            "Must be owner-occupied as primary residence",
            "Apply with county tax assessor after moving in",
            "Amount varies by county (typically $2,000-15,000 reduction in assessed value)",
            "Also provides some creditor protection",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Additional Georgia Exemptions",
          content:
            "Georgia offers additional exemptions for seniors (65+), disabled veterans, and surviving spouses. These can significantly reduce property taxes. Check with your county tax assessor for all available exemptions.",
        },
        {
          type: "heading",
          content: "Owner-Builder Rules",
        },
        {
          type: "text",
          content:
            "Georgia allows owner-builders to construct their own home without a contractor's license, but with restrictions:",
        },
        {
          type: "list",
          items: [
            "Must be your primary residence",
            "Must live in the home for at least 1 year before selling",
            "If you sell within 1 year, contractor licensing requirements apply",
            "You're still responsible for code compliance and permits",
            "Subcontractors must be licensed for their trades (electrical, plumbing, HVAC)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Owner-Builder Financing Challenge",
          content:
            "Many lenders won't provide construction loans to owner-builders due to risk concerns. You may need to find specialized lenders, use personal funds, or hire a licensed GC for the loan and manage subs under their supervision.",
        },
      ],
      keyTakeaways: [
        "Georgia's caveat emptor doctrine puts the investigation burden on buyers",
        "Property taxes will increase significantly when you build",
        "Verify timber and mineral rights are included in your purchase",
        "Wetlands can make portions of land unbuildable — get a delineation if in doubt",
        "Owner-builders must live in the home 1 year before selling",
      ],
      georgiaNote:
        "Georgia law favors informed buyers who do their homework. The state provides fewer protections than some others, making professional guidance (attorney, surveyor, inspector) particularly valuable for land purchases.",
      quiz: [
        {
          id: "2-6-q1",
          question: "What does 'caveat emptor' mean for Georgia land buyers?",
          options: [
            "The seller must disclose all known problems",
            "The buyer is responsible for discovering problems through due diligence",
            "The government guarantees the land is buildable",
            "Your real estate agent is liable for undisclosed issues",
          ],
          correctIndex: 1,
          explanation:
            "Caveat emptor ('buyer beware') means the burden is on you to discover problems. Georgia sellers have limited disclosure obligations, making your due diligence critical.",
        },
        {
          id: "2-6-q2",
          question:
            "How long must an owner-builder live in their Georgia home before selling?",
          options: [
            "No requirement",
            "6 months",
            "1 year",
            "2 years",
          ],
          correctIndex: 2,
          explanation:
            "Georgia requires owner-builders to occupy their home as a primary residence for at least 1 year before selling. Selling sooner triggers contractor licensing requirements.",
        },
      ],
    },
  ],
};
