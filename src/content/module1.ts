import { Module } from "./types";

export const module1: Module = {
  id: "1",
  title: "Foundation Knowledge",
  description: "Types of construction, key players, terminology, and realistic expectations",
  totalLessons: 8,
  lessons: [
    // Lesson 1: Introduction
    {
      id: "1-1",
      moduleId: "1",
      order: 1,
      title: "Welcome to Home Building",
      subtitle: "What you'll learn and what to expect",
      duration: "4 min read",
      content: [
        {
          type: "text",
          content:
            "Building a home is one of the most significant undertakings you'll ever pursue. Whether you're planning to be an owner-builder managing your own project, hiring a general contractor, or developing properties professionally, understanding the fundamentals is essential for success.",
        },
        {
          type: "heading",
          content: "Why This Knowledge Matters",
        },
        {
          type: "list",
          items: [
            "Make informed decisions that save money and prevent costly mistakes",
            "Communicate effectively with contractors, lenders, and inspectors",
            "Understand timelines and set realistic expectations",
            "Recognize quality work and identify potential problems early",
            "Navigate the permitting and inspection process confidently",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "The Reality Check",
          content:
            "Building a home typically takes 6-12 months and involves hundreds of decisions. The more you understand upfront, the smoother your project will go. This course gives you the foundation to tackle that complexity.",
        },
        {
          type: "heading",
          content: "What We'll Cover in Module 1",
        },
        {
          type: "text",
          content:
            "This module lays the groundwork for everything that follows. You'll learn about different construction methods, understand who does what on a building project, master essential terminology, and develop realistic expectations about costs and timelines.",
        },
        {
          type: "list",
          items: [
            "Types of home construction (stick-built, modular, etc.)",
            "Key players and their roles (architects, GCs, subcontractors)",
            "Essential building terminology you need to know",
            "How the construction process flows from start to finish",
            "Realistic cost ranges and timeline expectations",
            "Common mistakes first-time builders make",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Context",
          content:
            "Throughout this course, you'll see Georgia-specific information highlighted like this. Building requirements, costs, and processes vary by state, and we've tailored this content specifically for Georgia builders.",
        },
      ],
      keyTakeaways: [
        "Building a home requires understanding many interconnected systems",
        "Knowledge prevents costly mistakes and delays",
        "Georgia has specific requirements that differ from other states",
        "This module provides the vocabulary and concepts for the rest of the course",
      ],
    },

    // Lesson 2: Types of Construction
    {
      id: "1-2",
      moduleId: "1",
      order: 2,
      title: "Types of Home Construction",
      subtitle: "Stick-built, modular, manufactured, and more",
      duration: "8 min read",
      content: [
        {
          type: "text",
          content:
            "Not all homes are built the same way. Understanding the different construction methods helps you choose the right approach for your budget, timeline, and quality expectations.",
        },
        {
          type: "heading",
          content: "Stick-Built (Site-Built) Construction",
        },
        {
          type: "text",
          content:
            "This is what most people picture when they think of building a house. A stick-built home is constructed entirely on-site, piece by piece, from the foundation up. It's called 'stick-built' because the framing is assembled from individual lumber pieces (sticks) rather than pre-made sections.",
        },
        {
          type: "list",
          items: [
            "Most customizable option — any design is possible",
            "Typically highest quality when done well",
            "Longest construction timeline (6-12+ months)",
            "Most expensive due to labor-intensive process",
            "Easiest to finance with construction loans",
            "Best resale value and appraisal potential",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best For",
          content:
            "Custom designs, challenging lots (slopes, tight spaces), buyers who want maximum control over every detail, and areas with strict architectural guidelines.",
        },
        {
          type: "heading",
          content: "Modular Construction",
        },
        {
          type: "text",
          content:
            "Modular homes are built in sections (modules) in a climate-controlled factory, then transported to your site and assembled on a permanent foundation. Don't confuse these with mobile homes — modular homes are built to the same building codes as stick-built homes.",
        },
        {
          type: "list",
          items: [
            "Faster construction (3-4 months typical)",
            "Factory environment means no weather delays",
            "Often 10-20% cost savings vs. stick-built",
            "Quality control can be excellent",
            "Limited customization compared to stick-built",
            "Requires crane access for module placement",
            "Appraises and finances like stick-built",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Modular Market",
          content:
            "Georgia has several modular home manufacturers and a growing market. Companies like Clayton Homes and Champion have facilities in the Southeast. Modular is a great option for Georgia's mild climate where factory-built quality shines.",
        },
        {
          type: "heading",
          content: "Manufactured Homes (Mobile Homes)",
        },
        {
          type: "text",
          content:
            "Manufactured homes are built entirely in a factory and transported to the site on their own wheels. They're built to federal HUD code (not local building codes) and typically placed on a non-permanent foundation or piers.",
        },
        {
          type: "list",
          items: [
            "Lowest cost option (often 50%+ less than stick-built)",
            "Fastest delivery (can be ready in weeks)",
            "Limited financing options (chattel loans common)",
            "Generally lower appreciation and resale value",
            "HUD code may not match local building standards",
            "Some areas restrict or prohibit manufactured homes",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Important Distinction",
          content:
            "Manufactured homes built after June 15, 1976 must meet HUD standards. Homes built before this date are 'mobile homes' and have fewer protections. For financing and zoning purposes, the distinction between manufactured and modular is critical.",
        },
        {
          type: "heading",
          content: "Panelized Construction",
        },
        {
          type: "text",
          content:
            "Panelized homes use wall panels built in a factory and shipped flat to the site, where they're assembled by a local crew. It's a middle ground between stick-built and modular.",
        },
        {
          type: "list",
          items: [
            "Faster than stick-built (4-6 months)",
            "More customizable than modular",
            "Panels include framing, sheathing, sometimes windows",
            "Local trades finish electrical, plumbing, drywall",
            "Good option for remote lots (easier transport than modules)",
          ],
        },
        {
          type: "heading",
          content: "Comparison at a Glance",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Stick-Built",
              items: [
                "Timeline: 6-12 months",
                "Cost: $$$$ (highest)",
                "Customization: Unlimited",
                "Quality: Depends on builder",
                "Financing: Easy",
              ],
            },
            {
              title: "Modular",
              items: [
                "Timeline: 3-4 months",
                "Cost: $$$ (10-20% less)",
                "Customization: Good",
                "Quality: Consistent",
                "Financing: Easy",
              ],
            },
            {
              title: "Manufactured",
              items: [
                "Timeline: Weeks",
                "Cost: $$ (lowest)",
                "Customization: Limited",
                "Quality: Varies",
                "Financing: Limited",
              ],
            },
          ],
        },
      ],
      keyTakeaways: [
        "Stick-built offers maximum customization but takes longest",
        "Modular homes are NOT mobile homes — they meet the same codes as stick-built",
        "Your choice affects financing options, timeline, and resale value",
        "Consider your lot, budget, and timeline when choosing a method",
      ],
      georgiaNote:
        "Georgia building codes apply to stick-built and modular homes. Manufactured homes follow federal HUD code. Always check local zoning before committing to a construction type.",
      quiz: [
        {
          id: "1-2-q1",
          question: "Which construction type offers the most customization?",
          options: ["Manufactured", "Modular", "Stick-built", "Panelized"],
          correctIndex: 2,
          explanation:
            "Stick-built construction allows unlimited customization since every element is built on-site to your specifications.",
        },
        {
          id: "1-2-q2",
          question: "What building code do modular homes follow?",
          options: [
            "HUD federal code",
            "Local/state building codes (same as stick-built)",
            "No code requirements",
            "Mobile home standards",
          ],
          correctIndex: 1,
          explanation:
            "Modular homes are built to the same local and state building codes as stick-built homes. Only manufactured homes follow HUD code.",
        },
      ],
    },

    // Lesson 3: Key Players
    {
      id: "1-3",
      moduleId: "1",
      order: 3,
      title: "Who's Who in Home Building",
      subtitle: "Understanding the key players and their roles",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Building a home involves many different professionals, each with specific expertise. Understanding who does what helps you assemble the right team and communicate effectively throughout your project.",
        },
        {
          type: "heading",
          content: "The Owner (That's You)",
        },
        {
          type: "text",
          content:
            "As the owner, you're ultimately responsible for the project. You make the final decisions, sign the contracts, secure the financing, and live with the results. Your level of involvement varies based on your approach:",
        },
        {
          type: "list",
          items: [
            "Hands-off owner: Hire a GC and let them manage everything",
            "Active owner: Stay involved in decisions while GC manages day-to-day",
            "Owner-builder: Act as your own general contractor, hiring subs directly",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Owner-Builder Rules",
          content:
            "Georgia allows owner-builders to construct their own primary residence without a contractor's license. However, you must live in the home for at least one year before selling, or face contractor licensing requirements.",
        },
        {
          type: "heading",
          content: "Architect / Designer",
        },
        {
          type: "text",
          content:
            "Architects design the home and create construction documents (blueprints). They balance your wants with structural requirements, building codes, and budget constraints.",
        },
        {
          type: "list",
          items: [
            "Licensed architects have passed rigorous exams and can stamp drawings",
            "Home designers/drafters can create plans but may not be licensed",
            "Structural engineers may be needed for complex designs",
            "Cost: 5-15% of construction cost, or flat fee for simpler designs",
            "Some builders offer in-house design services",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "When You Need an Architect",
          content:
            "Georgia requires stamped architectural drawings for most new construction. Stock plans from online services often need local modification. For complex or custom designs, a licensed architect is essential.",
        },
        {
          type: "heading",
          content: "General Contractor (GC)",
        },
        {
          type: "text",
          content:
            "The general contractor is the quarterback of your build. They manage the entire construction process, hire and schedule subcontractors, order materials, ensure code compliance, and coordinate inspections.",
        },
        {
          type: "list",
          items: [
            "Holds the primary contract with you",
            "Responsible for budget, schedule, and quality",
            "Hires and pays all subcontractors",
            "Pulls permits and schedules inspections",
            "Carries liability insurance and workers' comp",
            "Cost: typically 15-25% markup on all costs (their fee)",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Contractor Licensing",
          content:
            "Georgia requires residential contractors to be licensed through the Georgia Licensing Board for Residential and General Contractors. Verify any contractor at verify.sos.ga.gov. Unlicensed contracting is illegal and voids warranties.",
        },
        {
          type: "heading",
          content: "Subcontractors (Subs)",
        },
        {
          type: "text",
          content:
            "Subcontractors are specialists who handle specific parts of the build. The GC coordinates their work, but each sub is an expert in their trade.",
        },
        {
          type: "list",
          items: [
            "Foundation/Concrete sub — footings, slabs, basement walls",
            "Framing crew — floor, wall, and roof structure",
            "Roofing sub — shingles, underlayment, flashing",
            "Electrician — wiring, panels, fixtures",
            "Plumber — pipes, fixtures, water heater",
            "HVAC sub — heating, cooling, ductwork",
            "Insulation contractor",
            "Drywall crew — hanging, taping, finishing",
            "Painter",
            "Flooring installer",
            "Trim carpenter — doors, molding, built-ins",
            "And more: landscapers, concrete flatwork, gutters, etc.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Licensed Trades",
          content:
            "In Georgia, electricians, plumbers, and HVAC technicians must be licensed. Always verify licenses for these critical trades. Other trades may not require state licensing but should carry insurance.",
        },
        {
          type: "heading",
          content: "Other Key Players",
        },
        {
          type: "list",
          items: [
            "Lender — provides construction financing and monitors draws",
            "Building inspector — verifies code compliance at each phase",
            "Surveyor — establishes property boundaries and grades",
            "Geotechnical engineer — analyzes soil conditions",
            "Real estate attorney — handles closings and title issues",
            "Insurance agent — provides builder's risk and liability coverage",
          ],
        },
        {
          type: "heading",
          content: "How They Work Together",
        },
        {
          type: "text",
          content:
            "A typical flow: You hire an architect to design the home. With plans in hand, you select a GC (or become owner-builder). The GC pulls permits, hires subs in sequence, coordinates with inspectors, and manages payments through your lender. The project moves through phases — site prep, foundation, framing, MEP rough-in, insulation, drywall, finishes — until you get your certificate of occupancy.",
        },
      ],
      keyTakeaways: [
        "The general contractor coordinates everything — their quality determines your experience",
        "Georgia requires licenses for GCs, electricians, plumbers, and HVAC techs",
        "Owner-builders can build their own home but face restrictions on selling",
        "Verify all licenses before signing contracts",
        "Good communication between all parties prevents delays and mistakes",
      ],
      georgiaNote:
        "Always verify contractor licenses at verify.sos.ga.gov. Georgia's residential contractor license requires testing, insurance, and bonding. Subcontractors may be covered under a GC's license.",
      quiz: [
        {
          id: "1-3-q1",
          question: "What is the general contractor's primary role?",
          options: [
            "Designing the home",
            "Installing electrical wiring",
            "Managing the entire construction process and coordinating subs",
            "Providing construction financing",
          ],
          correctIndex: 2,
          explanation:
            "The GC manages the whole project — hiring subs, scheduling work, ensuring quality, and coordinating inspections.",
        },
        {
          id: "1-3-q2",
          question:
            "Which trades require state licensing in Georgia?",
          options: [
            "Only general contractors",
            "Electricians, plumbers, and HVAC technicians",
            "All construction workers",
            "None — Georgia doesn't license trades",
          ],
          correctIndex: 1,
          explanation:
            "Georgia requires licensing for electricians, plumbers, HVAC technicians, and general contractors. Other trades may not require state licensing.",
        },
      ],
    },

    // Lesson 4: Essential Terminology
    {
      id: "1-4",
      moduleId: "1",
      order: 4,
      title: "Building Terminology 101",
      subtitle: "The language of construction you need to know",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "Construction has its own language. Knowing these terms helps you understand plans, communicate with contractors, and follow along during your build. Here are the essential terms organized by category.",
        },
        {
          type: "heading",
          content: "Site & Foundation Terms",
        },
        {
          type: "list",
          items: [
            "Setback — Required distance from property lines where you can't build",
            "Easement — Area on your property others have rights to (utilities, access)",
            "Grade — The ground level; 'finish grade' is the final landscaped level",
            "Footing — Concrete base that supports foundation walls",
            "Slab-on-grade — Concrete floor poured directly on ground (no basement/crawl)",
            "Crawl space — Shallow space under the house for access to utilities",
            "Pier — Concrete column supporting the structure (common in crawl spaces)",
            "Backfill — Soil pushed back against foundation walls after they're built",
          ],
        },
        {
          type: "heading",
          content: "Framing Terms",
        },
        {
          type: "list",
          items: [
            "Stud — Vertical framing member in walls (typically 2x4 or 2x6)",
            "Plate — Horizontal framing at top and bottom of walls",
            "Joist — Horizontal framing supporting floors and ceilings",
            "Rafter — Sloped framing member supporting the roof",
            "Truss — Engineered roof structure (replaces traditional rafters)",
            "Header — Beam above windows/doors carrying the load around openings",
            "Sheathing — Plywood or OSB covering the frame (walls and roof)",
            "On center (O.C.) — Spacing of studs/joists (e.g., '16\" O.C.' = 16\" apart)",
            "Load-bearing wall — Wall that supports weight from above (can't be easily removed)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Why This Matters",
          content:
            "When your contractor says 'we need an LVL header for that 12-foot opening,' you'll know they're talking about an engineered beam to carry the load across a wide span. Understanding the language prevents miscommunication.",
        },
        {
          type: "heading",
          content: "MEP Terms (Mechanical, Electrical, Plumbing)",
        },
        {
          type: "list",
          items: [
            "Rough-in — Installing pipes/wires inside walls before drywall",
            "Finish/Trim — Installing visible fixtures after walls are complete",
            "Service panel — Main electrical breaker box",
            "Circuit — Single electrical path from panel to outlets/fixtures",
            "PEX — Flexible plastic water supply pipe (replacing copper in many builds)",
            "Vent stack — Pipe from plumbing to roof for drainage ventilation",
            "HVAC — Heating, Ventilation, Air Conditioning system",
            "Tonnage — AC capacity measurement (roughly 400 sq ft per ton in GA)",
            "SEER — AC efficiency rating (higher = more efficient)",
            "Return air — Where air is pulled back into the HVAC system",
          ],
        },
        {
          type: "heading",
          content: "Finish Terms",
        },
        {
          type: "list",
          items: [
            "Drywall — Gypsum board (sheetrock) covering interior walls",
            "Mud/Tape — Drywall joint compound and paper tape for seamless walls",
            "Trim/Millwork — Decorative wood around doors, windows, baseboards",
            "Casing — Trim around door and window openings",
            "Baseboard — Trim at the bottom of walls meeting the floor",
            "Crown molding — Decorative trim where walls meet ceiling",
            "Backsplash — Wall covering behind counters (tile, stone, etc.)",
            "Underlayment — Base layer under flooring (subfloor is structural)",
          ],
        },
        {
          type: "heading",
          content: "Document & Process Terms",
        },
        {
          type: "list",
          items: [
            "Plans/Blueprints — Construction drawings showing how to build",
            "Specifications (specs) — Written descriptions of materials and methods",
            "Permit — Government approval to build (must be obtained before starting)",
            "Inspection — Official verification that work meets code",
            "Change order — Modification to the original contract (usually adds cost)",
            "Draw — Payment release from lender at project milestones",
            "Punch list — Final list of items to fix before project is complete",
            "Certificate of Occupancy (CO) — Permission to legally live in the home",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia-Specific Terms",
          content:
            "Land Disturbance Permit (LDP) — Required when disturbing more than 1 acre. NPDES Permit — Stormwater permit for larger sites. Certificate of Occupancy is issued by your county building department after final inspection passes.",
        },
        {
          type: "heading",
          content: "Cost Terms",
        },
        {
          type: "list",
          items: [
            "Per square foot cost — Total cost divided by heated square footage",
            "Hard costs — Direct construction costs (materials, labor)",
            "Soft costs — Indirect costs (permits, design, insurance, loans)",
            "Allowance — Budgeted amount for items chosen later (e.g., light fixtures)",
            "Contingency — Extra budget for unexpected costs (typically 5-10%)",
            "Cost-plus — Contract where you pay actual costs plus a fee",
            "Fixed-price — Contract with set total price regardless of actual costs",
          ],
        },
      ],
      keyTakeaways: [
        "Learning construction vocabulary prevents miscommunication",
        "Rough-in happens before drywall; finish happens after",
        "A change order is how contracts get modified (watch for scope creep)",
        "Allowances and contingency are where budgets often expand",
        "The Certificate of Occupancy is your finish line",
      ],
      quiz: [
        {
          id: "1-4-q1",
          question: "What does 'rough-in' refer to?",
          options: [
            "Finishing drywall to a rough texture",
            "Installing pipes and wires inside walls before drywall",
            "The first coat of paint",
            "Grading the construction site",
          ],
          correctIndex: 1,
          explanation:
            "Rough-in is when MEP (mechanical, electrical, plumbing) components are installed inside the walls before drywall covers them.",
        },
        {
          id: "1-4-q2",
          question: "What is a 'change order'?",
          options: [
            "Changing the job site location",
            "A modification to the original construction contract",
            "Ordering materials from a different supplier",
            "The sequence of construction phases",
          ],
          correctIndex: 1,
          explanation:
            "A change order is a formal modification to the original contract, usually to add or change work. It typically increases cost and time.",
        },
      ],
    },

    // Lesson 5: The Build Process Overview
    {
      id: "1-5",
      moduleId: "1",
      order: 5,
      title: "The Build Process Overview",
      subtitle: "How a house comes together from start to finish",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Building a house follows a logical sequence. Each phase depends on the previous one being complete and inspected. Understanding this flow helps you anticipate what's coming and recognize when things are on track.",
        },
        {
          type: "heading",
          content: "Pre-Construction Phase",
        },
        {
          type: "text",
          content:
            "Before a shovel hits the ground, there's significant work to do:",
        },
        {
          type: "list",
          items: [
            "Land acquisition and due diligence (survey, soil test, title)",
            "Design and planning (architect, engineers)",
            "Permitting (submit plans, wait for approval)",
            "Financing (construction loan approval and closing)",
            "Contractor selection and contract signing",
            "Utility coordination (water, sewer, power applications)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Common Mistake",
          content:
            "Don't underestimate pre-construction time. Getting permits alone can take 4-8 weeks in metro Georgia counties. Plan for 2-4 months of pre-construction work before actual building begins.",
        },
        {
          type: "heading",
          content: "Phase 1: Site Work",
        },
        {
          type: "list",
          items: [
            "Clear trees and vegetation from building area",
            "Grade site for proper drainage (away from house)",
            "Install erosion control (silt fence, required in Georgia)",
            "Dig for foundation and utility trenches",
            "Run underground utilities to the house location",
            "Timeline: 1-3 weeks",
          ],
        },
        {
          type: "heading",
          content: "Phase 2: Foundation",
        },
        {
          type: "list",
          items: [
            "Form and pour concrete footings",
            "Build foundation walls (block, poured concrete, or slab)",
            "Waterproof foundation walls (if basement or crawl)",
            "Install drain tile and gravel for drainage",
            "Backfill around foundation",
            "Pour basement/garage slab (if applicable)",
            "Inspection: Footing inspection, foundation inspection",
            "Timeline: 2-4 weeks",
          ],
        },
        {
          type: "heading",
          content: "Phase 3: Framing",
        },
        {
          type: "list",
          items: [
            "Install floor system (joists, subfloor)",
            "Frame exterior and interior walls",
            "Install roof trusses or rafters",
            "Sheath walls and roof with plywood/OSB",
            "Install windows and exterior doors (house is now 'dried in')",
            "Inspection: Framing inspection",
            "Timeline: 3-6 weeks depending on size",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "'Dried In' or 'Under Roof'",
          content:
            "Once the roof is sheathed and felt paper (or house wrap) is installed, the house is protected from rain. This is a major milestone — interior work can proceed regardless of weather.",
        },
        {
          type: "heading",
          content: "Phase 4: Roofing",
        },
        {
          type: "list",
          items: [
            "Install roofing underlayment (felt or synthetic)",
            "Install drip edge and flashing",
            "Install shingles, metal, or other roofing",
            "Install roof vents and penetrations",
            "Timeline: 1-2 weeks",
          ],
        },
        {
          type: "heading",
          content: "Phase 5: MEP Rough-In",
        },
        {
          type: "list",
          items: [
            "Electrical: Run wires, install boxes, set panel",
            "Plumbing: Run supply and drain pipes, set tubs/showers",
            "HVAC: Install ductwork and set equipment pads",
            "Low voltage: Network wiring, speaker wire, alarm",
            "Inspections: Electrical rough, plumbing rough, mechanical rough",
            "Timeline: 3-5 weeks (trades often work simultaneously)",
          ],
        },
        {
          type: "heading",
          content: "Phase 6: Insulation & Drywall",
        },
        {
          type: "list",
          items: [
            "Install wall, floor, and attic insulation",
            "Inspection: Insulation inspection (Georgia energy code)",
            "Hang drywall on all walls and ceilings",
            "Tape, mud, and sand drywall seams (3 coats typical)",
            "Prime drywall",
            "Timeline: 3-5 weeks",
          ],
        },
        {
          type: "heading",
          content: "Phase 7: Interior Finishes",
        },
        {
          type: "text",
          content:
            "This is when your house starts looking like a home:",
        },
        {
          type: "list",
          items: [
            "Paint walls and ceilings",
            "Install interior doors and trim (casing, baseboards, crown)",
            "Install cabinets and countertops",
            "Install flooring (hardwood, tile, carpet)",
            "Install plumbing fixtures (sinks, toilets, faucets)",
            "Install electrical fixtures (outlets, switches, lights)",
            "Install HVAC registers and thermostats",
            "Install appliances",
            "Timeline: 4-8 weeks (most decisions happen here)",
          ],
        },
        {
          type: "heading",
          content: "Phase 8: Exterior Finishes",
        },
        {
          type: "list",
          items: [
            "Install siding, brick, or stone",
            "Install exterior trim and soffits",
            "Complete driveway and walkways",
            "Final grading and landscaping",
            "Install gutters",
            "Timeline: 2-4 weeks (can overlap with interior)",
          ],
        },
        {
          type: "heading",
          content: "Phase 9: Final Steps",
        },
        {
          type: "list",
          items: [
            "Final inspections (building, electrical, plumbing, mechanical)",
            "Punch list walkthrough (create list of items to fix)",
            "Punch list completion",
            "Final cleaning",
            "Certificate of Occupancy issued",
            "Final walk-through with builder",
            "Closing and key handover",
            "Timeline: 1-3 weeks",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Inspection Sequence",
          content:
            "Georgia requires inspections at: footings, foundation, framing, rough electrical, rough plumbing, rough mechanical, insulation, and final. Each must pass before the next phase can proceed. Budget time for inspector scheduling.",
        },
      ],
      keyTakeaways: [
        "Construction follows a logical sequence — each phase depends on the last",
        "Pre-construction (permits, financing) takes 2-4 months alone",
        "'Dried in' is a major milestone — interior work can proceed rain or shine",
        "The finish phase has the most decisions and is where timelines often slip",
        "Final inspections and punch list can take longer than expected",
      ],
    },

    // Lesson 6: Realistic Costs
    {
      id: "1-6",
      moduleId: "1",
      order: 6,
      title: "Understanding Build Costs",
      subtitle: "What does it really cost to build a house?",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "One of the first questions everyone asks is 'how much will it cost?' The honest answer: it depends. But understanding the components of cost helps you plan a realistic budget.",
        },
        {
          type: "heading",
          content: "Cost Per Square Foot: The Basics",
        },
        {
          type: "text",
          content:
            "Construction cost is typically discussed in 'cost per square foot' of heated/cooled living space. This is useful for rough estimates but hides a lot of complexity.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "2024 Georgia Cost Ranges",
          content:
            "Budget/Basic: $120-160/sq ft | Mid-Range: $180-250/sq ft | High-End Custom: $300-450+/sq ft. These are construction costs only, not including land, soft costs, or site work. Metro Atlanta runs 10-20% higher than rural Georgia.",
        },
        {
          type: "heading",
          content: "What Affects Cost Per Square Foot?",
        },
        {
          type: "list",
          items: [
            "Finish level: Laminate vs. granite vs. quartzite counters",
            "Complexity: Simple rectangle vs. many corners and rooflines",
            "Size: Smaller homes cost MORE per sq ft (fixed costs spread over less space)",
            "Height: 2-story is cheaper per sq ft than 1-story (same foundation/roof)",
            "Location: Labor and materials vary by region",
            "Site conditions: Flat lot vs. slope, easy access vs. difficult",
            "Market conditions: Material costs and labor availability fluctuate",
          ],
        },
        {
          type: "heading",
          content: "Breaking Down Total Project Cost",
        },
        {
          type: "text",
          content:
            "Your total project cost includes much more than just construction:",
        },
        {
          type: "list",
          items: [
            "Land cost — Varies wildly (Georgia: $5K-$150K+ per acre)",
            "Site work — $10,000-50,000+ (clearing, grading, utilities)",
            "Construction (hard costs) — The house itself",
            "Soft costs — 15-25% of construction (permits, design, fees)",
            "Contingency — 10% minimum for unexpected costs",
            "Financing costs — Interest during construction (can be significant)",
          ],
        },
        {
          type: "heading",
          content: "Sample Budget: 2,000 Sq Ft Home",
        },
        {
          type: "text",
          content:
            "Here's what a mid-range 2,000 sq ft home might cost in suburban Georgia (2024 estimates):",
        },
        {
          type: "list",
          items: [
            "Land (0.5 acre suburban lot): $40,000",
            "Site work: $20,000",
            "Construction at $200/sq ft: $400,000",
            "Soft costs (permits, design, fees) at 20%: $80,000",
            "Contingency at 10%: $40,000",
            "Construction loan interest: $20,000",
            "TOTAL: ~$600,000",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Hidden Costs",
          content:
            "Most first-time builders underestimate soft costs and contingency. A $400K construction budget often becomes $600K+ all-in. Plan for this from the start.",
        },
        {
          type: "heading",
          content: "Ways to Control Costs",
        },
        {
          type: "list",
          items: [
            "Simple design: Fewer corners, simpler rooflines = lower cost",
            "Standard dimensions: 2-foot increments reduce material waste",
            "Stock plans: Cheaper than custom architectural design",
            "Prioritize: Splurge on what matters, save on what doesn't",
            "Avoid changes: Change orders add cost and time",
            "Good planning: The more decisions made upfront, the smoother the build",
            "Competitive bidding: Get 3+ bids for major contracts",
          ],
        },
        {
          type: "heading",
          content: "Where the Money Goes",
        },
        {
          type: "text",
          content:
            "A typical cost breakdown for construction only:",
        },
        {
          type: "list",
          items: [
            "Foundation: 10-15%",
            "Framing & Roofing: 15-20%",
            "Exterior finishes (siding, windows): 10-15%",
            "MEP systems (electrical, plumbing, HVAC): 15-20%",
            "Interior finishes (drywall, paint, flooring): 25-35%",
            "Cabinets & Countertops: 5-10%",
            "Final touches (fixtures, appliances): 5-10%",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 'Finishes' Reality",
          content:
            "Interior finishes are where budgets explode. That 'allowance' for lighting fixtures or that tile 'upgrade' adds up fast. Make finish selections early and stick to them.",
        },
      ],
      keyTakeaways: [
        "Cost per square foot is a rough estimate — many factors affect actual cost",
        "Total project cost includes land, soft costs, and contingency beyond construction",
        "Simple designs with fewer corners cost less than complex ones",
        "Plan for 10% contingency minimum — surprises happen",
        "Interior finishes are where most budget overruns occur",
      ],
      georgiaNote:
        "Georgia costs are generally lower than national averages but have risen significantly since 2020. Metro Atlanta is 10-20% higher than rural areas. Get current quotes — these numbers are starting points only.",
    },

    // Lesson 7: Realistic Timelines
    {
      id: "1-7",
      moduleId: "1",
      order: 7,
      title: "Realistic Timeline Expectations",
      subtitle: "How long does it really take to build a house?",
      duration: "8 min read",
      content: [
        {
          type: "text",
          content:
            "If cost is the first question, timeline is the second. And like cost, the answer is 'it depends' — but we can give you realistic ranges.",
        },
        {
          type: "heading",
          content: "The Short Answer",
        },
        {
          type: "list",
          items: [
            "Production builder (tract home): 4-6 months",
            "Semi-custom with established builder: 6-9 months",
            "Custom home: 9-14 months",
            "Complex custom home: 12-18+ months",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "These Are Construction Times Only",
          content:
            "Add 2-4 months for pre-construction (design, permits, financing). If you're starting from scratch, expect 8-18 months from 'I want to build' to 'moving in.'",
        },
        {
          type: "heading",
          content: "What Affects Timeline?",
        },
        {
          type: "list",
          items: [
            "Home size and complexity: Bigger/complex = longer",
            "Weather: Rain delays site work and some exterior work",
            "Permit processing: 2-8 weeks depending on county",
            "Material availability: Supply chain issues can cause delays",
            "Labor availability: Good subs are often booked out",
            "Decision-making speed: Your delays = project delays",
            "Change orders: Every change adds time",
            "Inspection scheduling: Inspectors have limited availability",
          ],
        },
        {
          type: "heading",
          content: "Georgia-Specific Timeline Factors",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Considerations",
          content:
            "Georgia's mild climate is an advantage — you can build year-round. However, summer thunderstorms can delay site work, and high demand in metro Atlanta means permit delays and contractor availability issues. Rural counties often have faster permits but fewer contractor options.",
        },
        {
          type: "heading",
          content: "Sample Timeline: 2,000 Sq Ft Custom Home",
        },
        {
          type: "list",
          items: [
            "Pre-construction (design, permits, loan): 2-4 months",
            "Site work: 1-2 weeks",
            "Foundation: 2-3 weeks",
            "Framing: 3-4 weeks",
            "Roofing: 1-2 weeks",
            "MEP rough-in: 3-4 weeks",
            "Insulation: 1 week",
            "Drywall: 2-3 weeks",
            "Interior finishes: 6-8 weeks",
            "Exterior finishes: 2-3 weeks (overlaps interior)",
            "Final punch and CO: 1-2 weeks",
            "TOTAL: 10-14 months from start to move-in",
          ],
        },
        {
          type: "heading",
          content: "Tips for Staying On Schedule",
        },
        {
          type: "list",
          items: [
            "Make decisions early: Select all finishes before drywall",
            "Be responsive: Return calls and emails quickly",
            "Avoid changes: Every change order adds 1-4 weeks",
            "Trust the process: Don't micromanage every day",
            "Build in buffer: Don't schedule movers for the day of CO",
            "Communicate: Regular check-ins catch problems early",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The 'Hurry Up and Wait' Reality",
          content:
            "Building has bursts of visible progress (framing goes up fast!) followed by periods that feel slow (waiting for inspections, MEP work inside walls). This is normal. Don't panic when it seems like nothing is happening.",
        },
        {
          type: "heading",
          content: "What Causes Delays",
        },
        {
          type: "list",
          items: [
            "Weather (especially for foundation and exterior)",
            "Permit or inspection delays",
            "Material back-orders (windows, specialty items)",
            "Subcontractor no-shows or scheduling conflicts",
            "Owner changes and slow decision-making",
            "Surprise conditions (bad soil, code issues)",
            "Errors requiring rework",
          ],
        },
      ],
      keyTakeaways: [
        "Expect 8-18 months total from decision to move-in",
        "Pre-construction (design, permits) takes 2-4 months before building starts",
        "Georgia's climate allows year-round building, but demand causes delays",
        "Your responsiveness directly affects the timeline",
        "Build in a buffer — don't plan your move for day one of CO eligibility",
      ],
    },

    // Lesson 8: Common Mistakes
    {
      id: "1-8",
      moduleId: "1",
      order: 8,
      title: "Common First-Time Builder Mistakes",
      subtitle: "Learn from others' expensive lessons",
      duration: "8 min read",
      content: [
        {
          type: "text",
          content:
            "Building a home for the first time is a learning experience. But some lessons are expensive. Here are the most common mistakes first-time builders make — and how to avoid them.",
        },
        {
          type: "heading",
          content: "Mistake #1: Underestimating the Budget",
        },
        {
          type: "text",
          content:
            "Almost everyone underestimates how much their project will cost. The construction quote is just the start.",
        },
        {
          type: "list",
          items: [
            "Forgetting soft costs (permits, design, fees, insurance)",
            "Inadequate contingency (10% is minimum)",
            "Underestimating site work costs",
            "Ignoring construction loan interest (it adds up)",
            "Falling in love with upgrades during the process",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Get a complete project budget — not just construction cost — before you commit. Add 15-20% to your 'worst case' number. If you're maxed out at your dream budget, scale back before you start.",
        },
        {
          type: "heading",
          content: "Mistake #2: Choosing the Wrong Builder",
        },
        {
          type: "text",
          content:
            "Your builder relationship will last 6-18 months through hundreds of decisions and potential conflicts. Choosing based on lowest price alone is risky.",
        },
        {
          type: "list",
          items: [
            "Not checking references thoroughly",
            "Not verifying license and insurance",
            "Choosing the cheapest bid without understanding why it's cheaper",
            "Not visiting the builder's current job sites",
            "Ignoring communication red flags during the bidding process",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Interview at least 3 builders. Check references (call them!). Visit active job sites. Verify licenses at verify.sos.ga.gov. Trust your gut on communication style — you'll be talking to this person a lot.",
        },
        {
          type: "heading",
          content: "Mistake #3: Inadequate Planning",
        },
        {
          type: "text",
          content:
            "Rushing into construction without thorough planning causes expensive changes later.",
        },
        {
          type: "list",
          items: [
            "Starting without complete plans (hoping to 'figure it out')",
            "Not finalizing finish selections before contracts",
            "Unclear allowances that lead to budget surprises",
            "Not thinking through how you'll actually use the space",
            "Ignoring future needs (aging in place, resale, kids)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Complete your design before signing construction contracts. Select all major finishes (or at least categories/budgets) before starting. Walk through your day mentally in the floor plan. Changes on paper are cheap; changes in framing are expensive.",
        },
        {
          type: "heading",
          content: "Mistake #4: Poor Communication",
        },
        {
          type: "text",
          content:
            "Miscommunication causes more problems than actual construction defects.",
        },
        {
          type: "list",
          items: [
            "Assuming the builder knows what you want without saying it",
            "Not documenting decisions in writing",
            "Slow responses to builder questions",
            "Going directly to subcontractors instead of through the GC",
            "Bottling up concerns until they become conflicts",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Over-communicate. Document everything in writing (email is fine). Respond to builder questions within 24 hours. Raise concerns early when they're easy to fix. Respect the chain of command — talk to your GC, not their subs.",
        },
        {
          type: "heading",
          content: "Mistake #5: Scope Creep",
        },
        {
          type: "text",
          content:
            "It starts small: 'While you're at it, can we...' Before you know it, you've added $50,000 and 3 months to your project.",
        },
        {
          type: "list",
          items: [
            "Adding 'small' upgrades throughout the process",
            "Changing your mind on finishes after ordering",
            "Adding features you see on job sites or Pinterest",
            "Not understanding the true cost of 'while we're at it'",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Create a 'wish list' and 'must-have' list before starting. Stick to the must-haves. For any change, get a written change order with cost AND time impact before approving. Sleep on non-urgent changes.",
        },
        {
          type: "heading",
          content: "Mistake #6: Ignoring the Contract",
        },
        {
          type: "text",
          content:
            "Many owners sign contracts without understanding them, then are surprised when disputes arise.",
        },
        {
          type: "list",
          items: [
            "Not reading the entire contract before signing",
            "Unclear payment terms and draw schedule",
            "No clear process for handling changes",
            "Vague specifications or 'builder grade' allowances",
            "Not understanding warranty terms",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Read every page. Ask questions about anything unclear. Consider having a real estate attorney review the contract (a few hundred dollars can save thousands). Make sure specifications are detailed — 'good quality' is not a specification.",
        },
        {
          type: "heading",
          content: "Mistake #7: Focusing Only on Today",
        },
        {
          type: "text",
          content:
            "Building for right now without considering the future leads to regret.",
        },
        {
          type: "list",
          items: [
            "Not planning for technology (low voltage, networking)",
            "Ignoring energy efficiency (you'll pay for it every month)",
            "Not considering resale value of unusual choices",
            "Skipping infrastructure for future additions (rough-in plumbing, etc.)",
            "Building at lot's maximum with no expansion room",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Fix",
          content:
            "Think 10 years ahead. Pre-wire for the technology you might want. Invest in energy efficiency (it pays back). Consider resale even if you plan to stay forever. Infrastructure is cheap during construction, expensive to add later.",
        },
      ],
      keyTakeaways: [
        "Budget 15-20% more than you think you need",
        "Choose your builder on communication and references, not just price",
        "Complete planning before construction starts — changes are expensive",
        "Document everything and communicate proactively",
        "Control scope creep with written change orders",
        "Read and understand your contract before signing",
        "Build for the future, not just today",
      ],
      georgiaNote:
        "Georgia's booming housing market means contractors are busy. Quality builders can be selective about clients. Being a well-prepared, communicative owner makes you attractive to the best builders.",
      quiz: [
        {
          id: "1-8-q1",
          question: "What is the minimum recommended contingency for a construction budget?",
          options: ["3%", "5%", "10%", "20%"],
          correctIndex: 2,
          explanation:
            "10% contingency is the minimum recommended. Unexpected costs are almost guaranteed in construction. Many experts recommend 15% for first-time builders.",
        },
        {
          id: "1-8-q2",
          question:
            "When should major finish selections (cabinets, flooring, counters) be made?",
          options: [
            "After framing is complete",
            "During drywall installation",
            "Before signing the construction contract",
            "After the house is dried in",
          ],
          correctIndex: 2,
          explanation:
            "Major finishes should be selected before signing contracts so costs are known and included in the budget. Changes after construction starts cause delays and cost overruns.",
        },
      ],
    },
  ],
};
