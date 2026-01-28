import { Module } from "./types";

export const module4: Module = {
  id: "4",
  title: "Planning & Design",
  description: "Working with architects, understanding plans, site planning, and cost estimation",
  totalLessons: 6,
  lessons: [
    // Lesson 1: Design Options and Approaches
    {
      id: "4-1",
      moduleId: "4",
      order: 1,
      title: "Design Options and Approaches",
      subtitle: "Custom, semi-custom, and stock plans — choosing your path",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Before you hire an architect or pick up a pencil, you need to decide HOW you'll approach the design of your home. Your choice affects cost, timeline, and how unique your home will be.",
        },
        {
          type: "heading",
          content: "The Three Paths to a Home Design",
        },
        {
          type: "list",
          items: [
            "Custom design — Work with an architect to create a unique home from scratch",
            "Semi-custom — Modify an existing plan to fit your needs",
            "Stock plans — Purchase ready-made plans and build as-is (or with minor changes)",
          ],
        },
        {
          type: "heading",
          content: "Custom Design",
        },
        {
          type: "text",
          content:
            "A fully custom home is designed specifically for you, your family, your lot, and your lifestyle. Every room, every detail is intentional.",
        },
        {
          type: "list",
          items: [
            "Pros: Exactly what you want, optimized for your lot, unique",
            "Cons: Most expensive, longest timeline, requires clear vision",
            "Cost: 8-15% of construction cost for architectural services",
            "Timeline: 3-6 months for design, plus revisions",
            "Best for: Unique lots, specific needs, design-focused clients",
          ],
        },
        {
          type: "heading",
          content: "Semi-Custom Design",
        },
        {
          type: "text",
          content:
            "Start with an existing plan and modify it — move walls, add rooms, change features. Gets you 80% of custom at 50% of the design cost.",
        },
        {
          type: "list",
          items: [
            "Pros: Lower cost than custom, faster, proven layouts",
            "Cons: Limited by original design, may have awkward compromises",
            "Cost: $2,000-10,000 for modifications to stock plan",
            "Timeline: 4-8 weeks for modifications",
            "Best for: People who like an existing plan but need changes",
          ],
        },
        {
          type: "heading",
          content: "Stock Plans",
        },
        {
          type: "text",
          content:
            "Purchase a pre-designed plan from a plan service or builder. Thousands of designs available online.",
        },
        {
          type: "list",
          items: [
            "Pros: Cheapest option, fastest, can see exactly what you're getting",
            "Cons: Not unique, may not fit your lot perfectly, limited customization",
            "Cost: $500-3,000 for plan purchase",
            "Timeline: Immediate (download or ship within days)",
            "Best for: Budget-conscious, standard lots, flexible on design",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Smart Middle Ground",
          content:
            "Many successful builds start with a stock or semi-custom plan. You get a proven layout designed by professionals, then make targeted modifications. This saves money while still getting a home that fits your needs.",
        },
        {
          type: "heading",
          content: "Popular Stock Plan Sources",
        },
        {
          type: "list",
          items: [
            "Houseplans.com — Largest selection, thousands of plans",
            "Architectural Designs (architecturaldesigns.com) — Quality plans, good search",
            "The Plan Collection — Wide variety of styles",
            "Dream Home Source — Many Southern/traditional designs",
            "Builder's local portfolio — Many Georgia builders have their own plans",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Stock Plan Cautions",
          content:
            "Stock plans aren't always Georgia-ready. They may need modifications for local codes, energy requirements, or soil conditions. Budget $1,000-3,000 for a local architect or engineer to review and adapt the plans.",
        },
        {
          type: "heading",
          content: "Working with a Builder's Plans",
        },
        {
          type: "text",
          content:
            "Many builders have their own portfolio of plans they've built before. Advantages:",
        },
        {
          type: "list",
          items: [
            "Builder knows the design — They've built it, they know what works",
            "Accurate pricing — Builder can price accurately from experience",
            "Faster construction — Crews are familiar with the layout",
            "Potential savings — May be included in builder's package price",
            "Limitation — Less unique, may see your home design elsewhere",
          ],
        },
        {
          type: "heading",
          content: "Questions to Ask Yourself",
        },
        {
          type: "list",
          items: [
            "How unique does my home need to be?",
            "What's my design budget (separate from construction)?",
            "Do I have specific needs that require custom design?",
            "Does my lot have challenges that require custom solutions?",
            "Am I willing to spend 3-6 months on design?",
            "Can I clearly articulate what I want?",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Design Considerations",
          content:
            "Georgia's climate (hot summers, mild winters) affects design choices: covered porches for outdoor living, HVAC sizing for humidity, proper attic ventilation. Plans from northern states may need modifications for Southern living.",
        },
      ],
      keyTakeaways: [
        "Custom design costs 8-15% of construction but gives you exactly what you want",
        "Semi-custom modifies existing plans — good balance of cost and customization",
        "Stock plans are cheapest but may need local adaptation",
        "Builder's proven plans offer familiarity and accurate pricing",
        "Your lot and specific needs should drive the design approach",
      ],
    },

    // Lesson 2: Working with Design Professionals
    {
      id: "4-2",
      moduleId: "4",
      order: 2,
      title: "Working with Design Professionals",
      subtitle: "Architects, designers, and engineers — who does what",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "Several types of professionals can help design your home. Understanding their roles, qualifications, and costs helps you assemble the right team for your project.",
        },
        {
          type: "heading",
          content: "Licensed Architects",
        },
        {
          type: "text",
          content:
            "Architects are licensed professionals who have completed accredited education, internship, and rigorous exams. They can design buildings and 'stamp' drawings.",
        },
        {
          type: "list",
          items: [
            "Education: Professional degree in architecture (5-7 years)",
            "Licensing: Must pass ARE exams, state-licensed",
            "Scope: Complete building design, code compliance, construction documents",
            "Can 'stamp': Their seal means they're liable for the design",
            "Cost: 8-15% of construction cost, or hourly ($150-300/hr)",
            "Best for: Custom homes, complex designs, challenging sites",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Architect Requirements",
          content:
            "Georgia requires a licensed architect for most commercial buildings but has exemptions for single-family residential. However, many Georgia jurisdictions require stamped drawings even for homes. Check with your building department before assuming you don't need an architect.",
        },
        {
          type: "heading",
          content: "Residential Designers / Draftsmen",
        },
        {
          type: "text",
          content:
            "Residential designers create home plans but aren't licensed architects. They're often more affordable for straightforward residential projects.",
        },
        {
          type: "list",
          items: [
            "No formal licensing required in Georgia",
            "May have design education, certifications, or builder experience",
            "Can create plans for permitting (if stamps not required)",
            "Cost: $2,000-15,000 for full plan set, or hourly ($50-150/hr)",
            "Limitations: Can't stamp drawings, may need engineer for structural",
            "Best for: Standard residential, modifications to stock plans",
          ],
        },
        {
          type: "heading",
          content: "Structural Engineers",
        },
        {
          type: "text",
          content:
            "Structural engineers ensure the building can support its loads — they design foundations, beams, and load-bearing elements.",
        },
        {
          type: "list",
          items: [
            "Licensed by the state (PE — Professional Engineer)",
            "Focus: Foundation design, beam sizing, structural connections",
            "When needed: Complex roofs, long spans, challenging soil, multi-story",
            "Often required: Most Georgia jurisdictions require engineered trusses",
            "Cost: $1,500-5,000 for residential structural",
            "Stamp: Can stamp structural drawings",
          ],
        },
        {
          type: "heading",
          content: "Civil Engineers",
        },
        {
          type: "list",
          items: [
            "Focus: Site work — grading, drainage, driveways, septic design",
            "May be required: For land disturbance permits, stormwater plans",
            "Septic design: Most Georgia counties require PE-designed septic systems",
            "Cost: $1,500-5,000+ depending on site complexity",
          ],
        },
        {
          type: "heading",
          content: "Interior Designers",
        },
        {
          type: "list",
          items: [
            "Focus: Interior finishes, colors, furniture layout, fixtures",
            "Can help during design phase to avoid costly changes later",
            "Georgia has optional registration for interior designers",
            "Cost: Hourly ($75-200) or percentage of furnishings budget",
            "Best for: Coordinated interior aesthetic, avoiding decision paralysis",
          ],
        },
        {
          type: "heading",
          content: "Who Do You Actually Need?",
        },
        {
          type: "text",
          content:
            "It depends on your project complexity and local requirements:",
        },
        {
          type: "list",
          items: [
            "Simple stock plan, standard site: Residential designer + structural engineer (for trusses)",
            "Modified stock plan: Residential designer or architect + structural engineer",
            "Custom home: Architect + structural engineer (+ civil if complex site)",
            "Challenging lot (slope, wetlands): Architect + structural + civil engineer",
            "Always check: Your jurisdiction's specific requirements",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Builder Connection",
          content:
            "Many builders have relationships with designers and engineers. They can often recommend professionals who know local codes, work quickly, and price fairly. Ask your builder before hiring independently.",
        },
        {
          type: "heading",
          content: "How to Choose a Design Professional",
        },
        {
          type: "list",
          items: [
            "Review portfolio: Do they design homes you like?",
            "Check references: Talk to past clients",
            "Verify credentials: License lookup at sos.ga.gov",
            "Discuss process: How do they work? What's included?",
            "Understand fees: Get written fee agreement before starting",
            "Assess communication: Are they responsive and clear?",
            "Local knowledge: Do they know Georgia codes and conditions?",
          ],
        },
        {
          type: "heading",
          content: "Working Relationship Tips",
        },
        {
          type: "list",
          items: [
            "Be clear about your budget upfront — it shapes every design decision",
            "Provide inspiration images — Pinterest boards, magazine clippings",
            "Make decisions promptly — delays cost money",
            "Communicate changes early — late changes are expensive",
            "Trust their expertise — but ask questions when confused",
            "Review drawings carefully — it's easier to fix on paper than in framing",
          ],
        },
      ],
      keyTakeaways: [
        "Licensed architects can stamp drawings and are liable for the design",
        "Residential designers are often more affordable for straightforward homes",
        "Structural engineers are needed for complex designs and usually for trusses",
        "Check your jurisdiction's requirements before assuming what you need",
        "Your builder may have relationships with design professionals",
      ],
      georgiaNote:
        "Georgia requires licensed architects or engineers to stamp drawings for most commercial projects. Residential exemptions exist but vary by jurisdiction. Many Georgia counties require engineering for truss designs regardless of who draws the plans.",
      quiz: [
        {
          id: "4-2-q1",
          question: "What does it mean when an architect 'stamps' drawings?",
          options: [
            "The drawings are copyrighted",
            "The architect is legally liable for the design's compliance and safety",
            "The plans can be resold to others",
            "The project is ready for construction",
          ],
          correctIndex: 1,
          explanation:
            "An architect's stamp (seal) means they're taking professional responsibility for the design. They're liable for code compliance and structural soundness.",
        },
      ],
    },

    // Lesson 3: Understanding Construction Drawings
    {
      id: "4-3",
      moduleId: "4",
      order: 3,
      title: "Understanding Construction Drawings",
      subtitle: "How to read and review your house plans",
      duration: "15 min read",
      content: [
        {
          type: "text",
          content:
            "Construction drawings (blueprints) are the instruction manual for building your home. Understanding how to read them helps you catch problems early and communicate effectively with your builder.",
        },
        {
          type: "heading",
          content: "Types of Drawings in a Plan Set",
        },
        {
          type: "text",
          content:
            "A complete set of construction documents includes several types of drawings:",
        },
        {
          type: "list",
          items: [
            "Site plan — Shows the house position on the lot",
            "Floor plans — Room layouts, walls, doors, windows for each level",
            "Exterior elevations — Views of each side of the house",
            "Building sections — 'Cut-through' views showing construction layers",
            "Foundation plan — Footings, walls, and structural support",
            "Roof plan — Roof shape, slopes, and drainage",
            "Electrical plan — Outlet, switch, and fixture locations",
            "Framing plans — Structural framing layout (may be separate)",
            "Details — Enlarged drawings of specific construction elements",
          ],
        },
        {
          type: "heading",
          content: "The Site Plan",
        },
        {
          type: "text",
          content:
            "The site plan shows how your home sits on the lot:",
        },
        {
          type: "list",
          items: [
            "Property boundaries with dimensions",
            "Setback lines (where you can't build)",
            "House footprint location and orientation",
            "Driveway and parking areas",
            "Utility locations (water, sewer, electric)",
            "Grading and drainage direction",
            "Easements and restrictions",
            "North arrow for orientation",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Site Plan Review",
          content:
            "Verify the site plan matches your survey. Check that setbacks are correct and the house is positioned where you want it. Consider sun orientation, views, and privacy from neighbors.",
        },
        {
          type: "heading",
          content: "Floor Plans",
        },
        {
          type: "text",
          content:
            "Floor plans are the 'map' of each level, viewed from above:",
        },
        {
          type: "list",
          items: [
            "Walls shown as parallel lines (thick = exterior, thin = interior)",
            "Doors shown with swing direction indicated",
            "Windows shown as breaks in walls with glass lines",
            "Room labels and dimensions",
            "Plumbing fixture locations (toilets, sinks, tubs)",
            "Stairs with up/down direction",
            "Built-in features (fireplaces, cabinets)",
          ],
        },
        {
          type: "heading",
          content: "Common Floor Plan Symbols",
        },
        {
          type: "list",
          items: [
            "Door: Rectangle with arc showing swing",
            "Sliding door: Rectangle with arrow",
            "Window: Parallel lines breaking wall",
            "Toilet: Oval shape",
            "Sink: Rectangle or oval",
            "Tub/Shower: Rectangle with X or pattern",
            "Stairs: Parallel lines with arrow (up/down)",
            "Fireplace: Rectangle with hearth",
          ],
        },
        {
          type: "heading",
          content: "Exterior Elevations",
        },
        {
          type: "text",
          content:
            "Elevations show what the house looks like from outside:",
        },
        {
          type: "list",
          items: [
            "Four elevations: Front, rear, left side, right side",
            "Roof lines and pitch",
            "Window and door placement",
            "Exterior materials and finishes",
            "Height dimensions (floor to floor, overall)",
            "Grade lines showing ground level",
          ],
        },
        {
          type: "heading",
          content: "Building Sections",
        },
        {
          type: "text",
          content:
            "Sections show a 'cut-through' view of the house:",
        },
        {
          type: "list",
          items: [
            "Foundation construction",
            "Floor and ceiling heights",
            "Roof construction and insulation",
            "Wall assembly details",
            "Stair construction",
            "Multi-level relationships",
          ],
        },
        {
          type: "heading",
          content: "Reading Dimensions",
        },
        {
          type: "list",
          items: [
            "Dimensions shown in feet and inches (e.g., 12'-6\" = 12 feet 6 inches)",
            "Overall dimensions on outside of plan",
            "String dimensions add up to overall",
            "Room sizes typically wall-to-wall (not including trim)",
            "Ceiling heights noted in room or on sections",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Dimension Check",
          content:
            "Verify that dimensions make sense. Walk through mentally — is that closet really 3 feet deep? Is the hallway 3 feet wide? Measure your current furniture to see if it will fit in the new spaces.",
        },
        {
          type: "heading",
          content: "What to Review Carefully",
        },
        {
          type: "list",
          items: [
            "Room sizes: Will your furniture fit? Is the kitchen workable?",
            "Door swings: Do doors crash into each other or block furniture?",
            "Window placement: Privacy, views, furniture placement",
            "Outlet locations: Enough for how you'll use each room?",
            "Closet sizes: Adequate storage?",
            "Traffic flow: Can you move through the house easily?",
            "Ceiling heights: Any areas lower than expected?",
            "Exterior appearance: Do you like how it looks from all sides?",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Tape Measure Test",
          content:
            "Take a tape measure and mark out rooms on your current floor or in a parking lot. Walk through the spaces. 12'x14' on paper is hard to visualize; walking it is revealing.",
        },
        {
          type: "heading",
          content: "Common Plan Problems to Catch",
        },
        {
          type: "list",
          items: [
            "No coat closet near entry",
            "Master bathroom visible from living areas",
            "Kitchen work triangle too long",
            "No landing at top of stairs",
            "Bathroom doors visible from common areas",
            "No linen closet near bathrooms",
            "Garage opens into kitchen (noise, fumes)",
            "Windows looking at neighbor's wall",
          ],
        },
      ],
      keyTakeaways: [
        "A complete plan set includes site, floor, elevation, section, and detail drawings",
        "Floor plans show layouts from above — learn the common symbols",
        "Verify dimensions make sense by walking through mentally or taping out rooms",
        "Review door swings, window placement, and traffic flow carefully",
        "Catch problems on paper — it's much cheaper than fixing during construction",
      ],
    },

    // Lesson 4: Site Planning
    {
      id: "4-4",
      moduleId: "4",
      order: 4,
      title: "Site Planning",
      subtitle: "Positioning your home on the lot for best results",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "Where and how you position your home on the lot affects everything — from energy costs to daily enjoyment. Good site planning considers sun, views, privacy, drainage, and future needs.",
        },
        {
          type: "heading",
          content: "Understanding Your Lot",
        },
        {
          type: "text",
          content:
            "Before positioning the house, fully understand your lot's characteristics:",
        },
        {
          type: "list",
          items: [
            "Boundaries: Survey shows exact property lines",
            "Setbacks: Required distances from all property lines",
            "Buildable area: What remains after setbacks (your 'envelope')",
            "Topography: Flat, slope direction, high/low points",
            "Drainage: Where water flows during rain",
            "Utilities: Location of water, sewer, power connections",
            "Easements: Areas with restricted use",
            "Trees: Which to save, which can be removed",
          ],
        },
        {
          type: "heading",
          content: "Sun Orientation",
        },
        {
          type: "text",
          content:
            "The sun's path affects comfort, energy costs, and natural light:",
        },
        {
          type: "list",
          items: [
            "South-facing windows: Maximum winter sun, can overheat in summer",
            "North-facing windows: Consistent light, no direct sun",
            "East-facing: Morning sun (good for bedrooms, breakfast areas)",
            "West-facing: Afternoon sun (can overheat in summer)",
            "In Georgia: South exposure with overhangs balances winter heating and summer cooling",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Sun Strategy",
          content:
            "Georgia's hot summers mean west-facing glass is problematic without shading. South-facing windows with proper overhangs provide winter warmth while blocking harsh summer sun. Consider covered porches on south and west for outdoor living.",
        },
        {
          type: "heading",
          content: "Views and Privacy",
        },
        {
          type: "list",
          items: [
            "Identify views worth capturing: Woods, water, mountains, open space",
            "Identify views to block: Neighbors, roads, utility areas",
            "Consider future development: What might be built nearby?",
            "Window placement: Balance views with privacy",
            "Outdoor spaces: Position decks/patios for privacy from neighbors",
            "Landscaping: Plan for privacy screening",
          ],
        },
        {
          type: "heading",
          content: "Drainage and Grading",
        },
        {
          type: "text",
          content:
            "Water is the enemy of houses. Good site planning directs water away:",
        },
        {
          type: "list",
          items: [
            "Grade away from house: 6 inches drop in first 10 feet minimum",
            "Identify where water goes: Low points, streams, neighbors",
            "Don't redirect water onto neighbors: Legal liability",
            "Downspout discharge: Plan where roof water goes",
            "Driveway drainage: Water shouldn't flow toward garage",
            "Basement/crawl considerations: May need waterproofing, sump pump",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Georgia Erosion Requirements",
          content:
            "Georgia requires erosion and sediment control during construction. If disturbing more than 1 acre, you need a Land Disturbance Permit. Even smaller sites need silt fencing and stabilization. Plan for this before breaking ground.",
        },
        {
          type: "heading",
          content: "Driveway and Access",
        },
        {
          type: "list",
          items: [
            "Sight distance: Can you see traffic when exiting?",
            "Grade: Avoid steep driveways (ice, wear on vehicles)",
            "Length: Longer driveways cost more and need maintenance",
            "Turning: Can vehicles turn around or must they back out?",
            "Parking: Space for family, guests, service vehicles",
            "Garage position: Easy access vs. curb appeal vs. noise",
          ],
        },
        {
          type: "heading",
          content: "Outdoor Living Spaces",
        },
        {
          type: "list",
          items: [
            "Porches/patios: Position for shade, views, privacy",
            "Outdoor cooking: Convenient to kitchen, away from seating",
            "Play areas: Visible from kitchen/family room",
            "Garden space: Sun exposure, water access",
            "Future pool: Leave room and access for equipment",
            "Fire pit: Away from house, consider neighbor smoke",
          ],
        },
        {
          type: "heading",
          content: "Utility Considerations",
        },
        {
          type: "list",
          items: [
            "HVAC equipment: Hidden from view, accessible for service",
            "Electric meter: Required location per utility",
            "Propane tank: Setback requirements, delivery access",
            "Well (if applicable): Distance from septic, accessible for service",
            "Septic (if applicable): Engineered location, reserve area required",
            "Trash collection: Easy access for bins and truck",
          ],
        },
        {
          type: "heading",
          content: "Future Considerations",
        },
        {
          type: "list",
          items: [
            "Additions: Leave room for potential future expansion",
            "Garage expansion: Could you add a bay later?",
            "Accessory structures: Workshop, pool house, ADU",
            "Aging in place: Main-floor living potential",
            "Resale: Will this layout appeal to future buyers?",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Walk the Site",
          content:
            "Stake out the house corners on your lot and walk through the 'rooms.' Face each direction from key windows. Visit at different times of day. This reveals what drawings can't show.",
        },
      ],
      keyTakeaways: [
        "Position the house to maximize southern exposure while managing summer heat",
        "Grade away from the house to prevent water problems",
        "Consider privacy from neighbors for both indoor and outdoor spaces",
        "Plan driveway for safe sight lines and reasonable grades",
        "Leave room for future additions or accessory structures",
      ],
      georgiaNote:
        "Georgia's hot, humid summers make shading and orientation critical. West-facing glass without protection can overwhelm your AC. Covered porches are a Georgia tradition for good reason — they extend living space while providing shade.",
    },

    // Lesson 5: Cost Estimation and Value Engineering
    {
      id: "4-5",
      moduleId: "4",
      order: 5,
      title: "Cost Estimation and Value Engineering",
      subtitle: "Designing to your budget and getting the most for your money",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "The best time to control costs is during design. Once construction starts, changes are expensive. This lesson covers how to estimate costs accurately and make smart design decisions that maximize value.",
        },
        {
          type: "heading",
          content: "The Cost-Design Connection",
        },
        {
          type: "text",
          content:
            "Design decisions directly impact construction cost. Understanding these relationships helps you make informed tradeoffs:",
        },
        {
          type: "list",
          items: [
            "Size: Every square foot costs money — smaller is cheaper",
            "Complexity: Simple shapes cost less than complex ones",
            "Height: Taller ceilings = more materials and HVAC",
            "Roof: Complex roofs with many valleys cost more",
            "Foundation: Slab is cheapest, basement is most expensive",
            "Finishes: Where most budget overruns happen",
          ],
        },
        {
          type: "heading",
          content: "What Drives Cost Up",
        },
        {
          type: "list",
          items: [
            "Irregular shapes: Corners cost money (more framing, more roofing)",
            "Multiple roof lines: Each valley and hip adds cost",
            "Tall ceilings: More materials, taller scaffolding, bigger HVAC",
            "Large windows: More expensive than walls",
            "Cantilevered sections: Require extra engineering and framing",
            "Curved walls or stairs: Custom work, premium pricing",
            "Specialty materials: Stone, copper, exotic woods",
            "Remote locations: Material delivery and labor travel costs",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Simple Rectangle",
          content:
            "A 2,000 sq ft rectangle costs significantly less than a 2,000 sq ft home with multiple bump-outs, angles, and wings. If budget is tight, simplify the shape and spend savings on finishes you'll see every day.",
        },
        {
          type: "heading",
          content: "What is Value Engineering?",
        },
        {
          type: "text",
          content:
            "Value engineering means finding ways to achieve the same result for less money — or a better result for the same money. It's not about being cheap; it's about being smart.",
        },
        {
          type: "list",
          items: [
            "Question every element: Is this necessary? Is there a cheaper way?",
            "Prioritize visible areas: Spend where you see and use daily",
            "Consider maintenance: Cheaper upfront may cost more long-term",
            "Standard vs. custom: Standard sizes cost less",
            "Alternative materials: Often achieve same look for less",
          ],
        },
        {
          type: "heading",
          content: "High-Impact Value Engineering Ideas",
        },
        {
          type: "list",
          items: [
            "Reduce corners: Redesign to eliminate bump-outs",
            "Simplify roof: Fewer valleys and hips",
            "Standard ceiling height: 9' vs. 10' saves throughout",
            "Standard window sizes: Custom sizes cost premium",
            "Slab-on-grade: Avoid crawl space or basement if possible",
            "Two-story vs. ranch: Same space, smaller foundation and roof",
            "Cluster plumbing: Keep bathrooms and kitchen close to reduce pipe runs",
            "Standard interior doors: 6'-8\" hollow core vs. custom solid",
          ],
        },
        {
          type: "heading",
          content: "Where to Spend vs. Where to Save",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Worth Spending On",
              items: [
                "Kitchen layout and cabinets",
                "Master bathroom",
                "Windows (quality, not size)",
                "HVAC efficiency",
                "Insulation",
                "Roofing quality",
                "Hardwood in main areas",
              ],
            },
            {
              title: "Easy to Save On",
              items: [
                "Rarely-used bedrooms",
                "Closet interiors",
                "Light fixtures (can upgrade later)",
                "Landscaping (DIY later)",
                "Interior paint (easy to redo)",
                "Hardware (can upgrade later)",
                "Basement finish (do later)",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Getting Accurate Estimates",
        },
        {
          type: "text",
          content:
            "Multiple estimates help you understand true costs:",
        },
        {
          type: "list",
          items: [
            "Get 3+ bids from builders on same plans and specs",
            "Ensure specs are identical: 'Builder grade' means different things",
            "Line-item budgets: Understand what each element costs",
            "Allowances: Be realistic — builders often low-ball allowances",
            "Include everything: Site work, permits, fees, contingency",
            "Ask about exclusions: What's NOT included in the bid?",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Allowance Trap",
          content:
            "Builders use 'allowances' for items you'll select later (lighting, flooring, etc.). A $2,000 lighting allowance sounds fine until you start shopping. Get realistic allowances or select specific products before signing.",
        },
        {
          type: "heading",
          content: "Design-Phase Cost Control",
        },
        {
          type: "list",
          items: [
            "Set budget before designing: Know your limit",
            "Design to 85% of budget: Leave room for changes and overruns",
            "Get preliminary pricing during design: Course-correct early",
            "Make finish selections early: Avoid late changes",
            "Identify 'cuts' in advance: Know what to sacrifice if over budget",
            "Consider phased approach: Design now, build some features later",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Cost Reality",
          content:
            "As of 2024, Georgia construction costs range from $120/sq ft (basic) to $450+/sq ft (high-end custom). Metro Atlanta runs 10-20% higher than rural areas. Get current bids — costs have risen significantly and continue to fluctuate.",
        },
      ],
      keyTakeaways: [
        "Design decisions drive construction costs — simplicity saves money",
        "Value engineering finds cheaper ways to achieve the same result",
        "Reduce corners and simplify rooflines for biggest design savings",
        "Spend on what you see daily; save on closets and rarely-used spaces",
        "Get detailed bids on identical specs to compare accurately",
      ],
      quiz: [
        {
          id: "4-5-q1",
          question: "Which design choice typically INCREASES construction cost?",
          options: [
            "Simple rectangular floor plan",
            "Standard 9-foot ceilings",
            "Multiple roof lines with valleys and hips",
            "Clustering plumbing in adjacent rooms",
          ],
          correctIndex: 2,
          explanation:
            "Complex roof designs with multiple valleys and hips require more materials, more labor, and increase the chance of leaks. Simple roof designs are cheaper and more reliable.",
        },
      ],
    },

    // Lesson 6: Preparing for Permitting
    {
      id: "4-6",
      moduleId: "4",
      order: 6,
      title: "Preparing for Permitting",
      subtitle: "Getting your plans ready for approval",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Before construction can begin, your plans must be approved by the local building department. Understanding what's required helps you submit a complete package and avoid costly delays.",
        },
        {
          type: "heading",
          content: "What Permits Do You Need?",
        },
        {
          type: "text",
          content:
            "New home construction typically requires multiple permits:",
        },
        {
          type: "list",
          items: [
            "Building permit: The main permit covering the structure",
            "Electrical permit: For all electrical work",
            "Plumbing permit: For all plumbing work",
            "Mechanical permit: For HVAC systems",
            "Land disturbance permit: If disturbing more than threshold (often 1 acre)",
            "Driveway/encroachment permit: For driveway connection to road",
            "Septic permit: If not on public sewer (from Health Department)",
            "Well permit: If drilling a well",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Permit Variations",
          content:
            "Permit requirements vary by county and city. Unincorporated areas may have fewer requirements than cities. Some rural counties have minimal permitting while metro Atlanta counties have extensive processes. Always check with YOUR specific jurisdiction.",
        },
        {
          type: "heading",
          content: "What's Included in a Permit Submission",
        },
        {
          type: "text",
          content:
            "A typical building permit application requires:",
        },
        {
          type: "list",
          items: [
            "Completed application form",
            "Site plan showing house position, setbacks, driveway",
            "Floor plans (all levels)",
            "Exterior elevations (all sides)",
            "Foundation plan",
            "Building sections",
            "Roof plan",
            "Engineered truss drawings (usually from truss manufacturer)",
            "Energy compliance documentation (REScheck or similar)",
            "Septic design (if applicable)",
            "Application fee",
          ],
        },
        {
          type: "heading",
          content: "Plan Review Process",
        },
        {
          type: "list",
          items: [
            "1. Submit application with plans and fees",
            "2. Permit office checks for completeness",
            "3. Plans routed to reviewers (building, fire, zoning, etc.)",
            "4. Reviewers check code compliance",
            "5. Review comments returned (corrections needed)",
            "6. Revise and resubmit if necessary",
            "7. Final approval and permit issued",
          ],
        },
        {
          type: "heading",
          content: "Timeline Expectations",
        },
        {
          type: "list",
          items: [
            "Simple jurisdictions: 1-2 weeks",
            "Suburban counties: 3-6 weeks",
            "Metro Atlanta: 4-8+ weeks",
            "Add time for revisions: 1-2 weeks per revision cycle",
            "HOA review (if applicable): Additional 2-4 weeks",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Underestimate Permit Time",
          content:
            "Permit delays are the #1 cause of project schedule problems in Georgia's metro areas. Start the permit process as soon as plans are complete. Don't assume a quick approval.",
        },
        {
          type: "heading",
          content: "Common Reasons for Plan Rejection",
        },
        {
          type: "list",
          items: [
            "Missing information: Incomplete drawings or calculations",
            "Setback violations: House too close to property lines",
            "Height violations: Exceeds zoning limits",
            "Energy code: Missing insulation values or calculations",
            "Structural: Missing engineering or inadequate design",
            "Fire safety: Improper smoke detector placement, garage separation",
            "Accessibility: Some requirements even for single-family",
            "Stormwater: Inadequate drainage plan",
          ],
        },
        {
          type: "heading",
          content: "Georgia Energy Code Requirements",
        },
        {
          type: "text",
          content:
            "Georgia has adopted energy codes that affect your plans:",
        },
        {
          type: "list",
          items: [
            "Insulation minimums: Walls (R-13 to R-20), attic (R-38 to R-49), depends on climate zone",
            "Window efficiency: U-factor and SHGC requirements",
            "Air sealing: Tested with blower door or visual inspection",
            "Duct sealing: Tested or properly installed",
            "REScheck: Software compliance path showing energy equivalence",
            "HERS rating: Alternative compliance through energy rating",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Climate Zones",
          content:
            "Most of Georgia is Climate Zone 3 (milder requirements) but North Georgia mountains are Zone 4 (stricter). Your jurisdiction will specify which zone applies. Metro Atlanta is Zone 3.",
        },
        {
          type: "heading",
          content: "Tips for Smooth Permitting",
        },
        {
          type: "list",
          items: [
            "Use local professionals: They know what reviewers want",
            "Complete submissions: Missing items delay review start",
            "Follow the checklist: Every jurisdiction has one — use it",
            "Address comments promptly: Don't let corrections sit",
            "Be responsive: Answer questions quickly",
            "Build relationships: Respectful interaction helps",
            "Budget for fees: Can be $2,000-15,000+ depending on jurisdiction",
          ],
        },
        {
          type: "heading",
          content: "After Permit Approval",
        },
        {
          type: "list",
          items: [
            "Permit posted on site: Display permit card visibly",
            "Approved plans on site: Keep a set for inspectors",
            "Call for inspections: Schedule before covering work",
            "Follow approved plans: Changes require revision and re-approval",
            "Permit expiration: Most valid 6-12 months, can often extend",
          ],
        },
      ],
      keyTakeaways: [
        "Multiple permits required: Building, electrical, plumbing, mechanical, and possibly more",
        "Permit timeline varies: 1-8+ weeks depending on jurisdiction",
        "Submit complete applications: Missing items delay the process",
        "Energy code compliance required: REScheck or HERS rating",
        "Keep approved plans on site for inspections",
      ],
      georgiaNote:
        "Georgia adopted the 2015 International Energy Conservation Code with state amendments. Most jurisdictions use the 2018 or 2021 codes. Check your specific county's adopted codes — they vary.",
      quiz: [
        {
          id: "4-6-q1",
          question: "What is REScheck?",
          options: [
            "A background check for residential builders",
            "Software showing energy code compliance",
            "A home inspection service",
            "A permit tracking system",
          ],
          correctIndex: 1,
          explanation:
            "REScheck is free DOE software that shows whether your home design meets energy code requirements. It's one compliance path accepted by most Georgia jurisdictions.",
        },
      ],
    },
  ],
};
