import { Module } from "./types";

export const module5: Module = {
  id: "5",
  title: "Permits & Approvals",
  description: "Georgia permit process, inspections, code requirements",
  totalLessons: 5,
  lessons: [
    {
      id: "5-1",
      moduleId: "5",
      title: "Understanding Building Codes",
      subtitle: "The rules that govern construction in Georgia",
      order: 1,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "Building codes exist to protect public health, safety, and welfare. They establish minimum standards for construction—everything from structural integrity to fire safety to energy efficiency. Understanding these codes is essential before you break ground.",
        },
        {
          type: "heading",
          content: "Georgia's Code Framework",
        },
        {
          type: "text",
          content:
            "Georgia adopts the International Code Council (ICC) family of codes with state-specific amendments. The Georgia Department of Community Affairs (DCA) publishes the official state codes, which local jurisdictions then adopt—sometimes with additional local amendments.",
        },
        {
          type: "list",
          items: [
            "International Building Code (IBC) - Commercial and multi-family",
            "International Residential Code (IRC) - One and two-family dwellings",
            "International Energy Conservation Code (IECC) - Energy efficiency",
            "International Plumbing Code (IPC) - Plumbing systems",
            "International Mechanical Code (IMC) - HVAC systems",
            "National Electrical Code (NEC) - Electrical installations",
            "International Fire Code (IFC) - Fire safety requirements",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Code Cycle",
          content:
            "Georgia typically updates to new code editions every 3-4 years. As of 2024, Georgia uses the 2021 IRC with Georgia amendments. Always verify the current edition with your local building department.",
        },
        {
          type: "heading",
          content: "Key Code Requirements for Homes",
        },
        {
          type: "text",
          content:
            "The International Residential Code covers most aspects of home construction. Key areas include foundation requirements, structural framing, roofing, insulation, windows and doors, electrical systems, plumbing, mechanical systems, and fire protection.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Foundation",
              items: [
                "Minimum footing depth: 12\"",
                "Below frost line (4-6\" in GA)",
                "Reinforcement per soil conditions",
                "Proper drainage away from structure",
              ],
            },
            {
              title: "Framing",
              items: [
                "2x4 or 2x6 exterior walls",
                "Proper header sizing",
                "Adequate bracing",
                "Proper connectors at roof",
              ],
            },
            {
              title: "Energy",
              items: [
                "Climate Zone 2-4 requirements",
                "R-13 to R-20 wall insulation",
                "R-30 to R-49 ceiling insulation",
                "Air sealing requirements",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Georgia-Specific Amendments",
        },
        {
          type: "text",
          content:
            "Georgia modifies the base codes to address regional conditions. Key Georgia amendments relate to wind design requirements in coastal areas, energy efficiency based on climate zones, and allowances for certain construction practices common in the Southeast.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Coastal Counties",
          content:
            "If building in coastal Georgia (within 30 miles of the coast), additional wind design requirements apply. Hurricane straps, reinforced connections, and impact-resistant glazing may be required. Check with your local building official for specific requirements.",
        },
        {
          type: "heading",
          content: "Local Amendments",
        },
        {
          type: "text",
          content:
            "Cities and counties can adopt more restrictive requirements than the state code. For example, some jurisdictions require fire sprinklers in new homes, mandate specific architectural standards, or have additional setback requirements. Always research local amendments early in your planning.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Get Code Information Early",
          content:
            "Visit your local building department before finalizing plans. Many offer free consultations and can identify code issues before you invest in full construction documents.",
        },
      ],
      keyTakeaways: [
        "Georgia adopts ICC codes with state-specific amendments",
        "The International Residential Code governs one and two-family homes",
        "Coastal areas have additional wind and storm requirements",
        "Local jurisdictions may have additional requirements beyond state code",
        "Code editions are updated every few years—verify current requirements",
      ],
      georgiaNote:
        "Georgia's code amendments are published by the Department of Community Affairs. Visit dca.ga.gov for the current Georgia State Minimum Standard Codes. The Georgia Amendments document shows all state-specific modifications to the base ICC codes.",
      quiz: [
        {
          question:
            "Which code primarily governs single-family home construction?",
          options: [
            "International Building Code (IBC)",
            "International Residential Code (IRC)",
            "National Electrical Code (NEC)",
            "International Fire Code (IFC)",
          ],
          correctIndex: 1,
          explanation:
            "The International Residential Code (IRC) covers one and two-family dwellings. The IBC is used for commercial and multi-family construction.",
        },
        {
          question:
            "What is the typical minimum footing depth requirement in Georgia?",
          options: ["6 inches", "12 inches", "24 inches", "36 inches"],
          correctIndex: 1,
          explanation:
            "Georgia typically requires minimum 12-inch deep footings, though this can vary based on soil conditions and structural loads.",
        },
      ],
    },
    {
      id: "5-2",
      moduleId: "5",
      title: "The Permit Process in Georgia",
      subtitle: "Step-by-step guide to getting your building permit",
      order: 2,
      estimatedMinutes: 20,
      content: [
        {
          type: "text",
          content:
            "A building permit is legal authorization to construct your home. It ensures your plans have been reviewed for code compliance and establishes a schedule of inspections throughout construction. Building without a permit can result in fines, stop-work orders, and difficulty selling your home later.",
        },
        {
          type: "heading",
          content: "Who Issues Permits in Georgia",
        },
        {
          type: "text",
          content:
            "In Georgia, building permits are issued at the local level—either by the county or municipality where your property is located. If your property is inside city limits, you'll typically work with the city building department. If in unincorporated areas, you'll work with the county.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Unincorporated Areas",
          content:
            "Some rural Georgia counties have limited or no building codes. However, this is becoming rare, and state minimum codes apply everywhere. Even if local permits aren't required, you should still follow code for safety and resale value.",
        },
        {
          type: "heading",
          content: "Types of Permits Needed",
        },
        {
          type: "list",
          items: [
            "Building Permit - The primary permit covering structure construction",
            "Electrical Permit - Separate permit for electrical work",
            "Plumbing Permit - Separate permit for plumbing installation",
            "Mechanical Permit - For HVAC installation",
            "Grading/Land Disturbance Permit - If disturbing more than 1 acre",
            "Septic Permit - If not connecting to municipal sewer (from Health Dept)",
            "Driveway Permit - May be required for road access",
            "Tree Removal Permit - Required in some jurisdictions",
          ],
        },
        {
          type: "heading",
          content: "The Application Process",
        },
        {
          type: "text",
          content:
            "The permit process generally follows these steps, though specifics vary by jurisdiction. Plan for 2-6 weeks for permit review, longer in busy metro areas or for complex projects.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Step 1: Pre-Application",
              items: [
                "Research local requirements",
                "Verify zoning compliance",
                "Schedule pre-application meeting",
                "Identify required permits",
              ],
            },
            {
              title: "Step 2: Prepare Documents",
              items: [
                "Complete application forms",
                "Gather construction drawings",
                "Site plan with setbacks",
                "Energy compliance docs",
              ],
            },
            {
              title: "Step 3: Submit & Review",
              items: [
                "Submit application and fees",
                "Plan review (2-6 weeks)",
                "Address any corrections",
                "Receive permit",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Required Submittal Documents",
        },
        {
          type: "text",
          content:
            "Most jurisdictions require similar documentation for a residential building permit application:",
        },
        {
          type: "list",
          items: [
            "Completed permit application form",
            "Two sets of construction drawings (floor plans, elevations, sections)",
            "Site plan showing property lines, setbacks, and structure location",
            "Foundation and structural details",
            "Truss or engineered framing documentation",
            "Energy compliance documentation (REScheck or equivalent)",
            "Proof of contractor licensing",
            "Property deed or proof of ownership",
            "Septic permit (if applicable)",
            "HOA approval (if applicable)",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Owner-Builder in Georgia",
          content:
            "If you're acting as your own general contractor (owner-builder), you'll sign an affidavit stating you'll personally supervise construction and that you're building for your own use. Some jurisdictions limit how often you can use owner-builder status.",
        },
        {
          type: "heading",
          content: "Permit Fees",
        },
        {
          type: "text",
          content:
            "Permit fees are typically based on project value or square footage. Expect to pay $1,000-$5,000 or more in total permit fees for a new home, depending on size and location. This includes the building permit plus separate trade permits.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Impact Fees",
          content:
            "Many Georgia jurisdictions charge impact fees for new construction to fund schools, roads, parks, and other infrastructure. These can add $2,000-$10,000 or more to your costs. Ask about all fees during your pre-application meeting.",
        },
      ],
      keyTakeaways: [
        "Permits are issued locally—city or county depending on property location",
        "You'll need multiple permits: building, electrical, plumbing, mechanical",
        "Plan for 2-6 weeks for permit review, longer in busy areas",
        "Permit fees plus impact fees can total $3,000-$15,000 or more",
        "Owner-builders sign an affidavit to act as their own general contractor",
      ],
      georgiaNote:
        "Georgia law allows homeowners to act as their own general contractor (owner-builder) for a home they'll personally occupy. You must sign a disclosure acknowledging you're responsible for code compliance and that you understand the risks of not hiring a licensed contractor.",
      quiz: [
        {
          question:
            "How long should you typically plan for permit review in Georgia?",
          options: [
            "1-3 days",
            "1 week",
            "2-6 weeks",
            "3-6 months",
          ],
          correctIndex: 2,
          explanation:
            "Plan for 2-6 weeks for permit review, though busy metro areas or complex projects may take longer. Starting early in the process helps avoid delays.",
        },
        {
          question: "What determines which office issues your building permit?",
          options: [
            "The size of your home",
            "Your contractor's preference",
            "Whether property is in city limits or unincorporated area",
            "The type of construction",
          ],
          correctIndex: 2,
          explanation:
            "Properties inside city limits typically get permits from the city building department, while unincorporated areas work with the county.",
        },
      ],
    },
    {
      id: "5-3",
      moduleId: "5",
      title: "Understanding Inspections",
      subtitle: "What inspectors look for at each stage",
      order: 3,
      estimatedMinutes: 22,
      content: [
        {
          type: "text",
          content:
            "Building inspections verify that work meets code requirements at critical stages of construction. Inspections are required at specific points—you cannot proceed to the next phase until the previous inspection passes. Understanding what inspectors look for helps ensure smooth construction progress.",
        },
        {
          type: "heading",
          content: "The Inspection Sequence",
        },
        {
          type: "text",
          content:
            "Inspections follow the construction sequence. Each inspection must pass before you can proceed to cover up that work. For example, you can't pour concrete over footings until the footing inspection passes, and you can't hang drywall until electrical, plumbing, and framing inspections are approved.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Foundation Phase",
              items: [
                "Footing inspection",
                "Foundation/stem wall",
                "Slab pre-pour (if applicable)",
                "Waterproofing/drainage",
              ],
            },
            {
              title: "Rough-In Phase",
              items: [
                "Framing inspection",
                "Electrical rough-in",
                "Plumbing rough-in",
                "Mechanical rough-in",
                "Insulation inspection",
              ],
            },
            {
              title: "Final Phase",
              items: [
                "Electrical final",
                "Plumbing final",
                "Mechanical final",
                "Building final",
                "Certificate of Occupancy",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Footing & Foundation Inspections",
        },
        {
          type: "text",
          content:
            "The footing inspection verifies the excavation dimensions, soil bearing capacity, reinforcement placement, and that footings are at proper depth. The foundation inspection checks wall dimensions, reinforcement, anchor bolt placement, and waterproofing.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Pour Early",
          content:
            "Never pour concrete before the inspection passes. If you pour without inspection, the inspector may require you to remove the work or conduct destructive testing to verify compliance. This is costly and time-consuming.",
        },
        {
          type: "heading",
          content: "Framing Inspection",
        },
        {
          type: "text",
          content:
            "The framing inspection is comprehensive. Inspectors verify wall layout matches plans, proper header sizes, adequate bracing, correct nailing patterns, proper connector installation, and compliance with structural details.",
        },
        {
          type: "list",
          items: [
            "Wall layout matches approved plans",
            "Proper header sizing over openings",
            "Adequate wall bracing and sheathing",
            "Correct nailing schedules followed",
            "Hurricane straps and connectors properly installed",
            "Fire blocking in place",
            "Proper ventilation pathways",
            "Stairs and railings meet code",
          ],
        },
        {
          type: "heading",
          content: "Trade Inspections",
        },
        {
          type: "text",
          content:
            "Electrical, plumbing, and mechanical rough-in inspections happen after framing but before insulation and drywall. Each trade inspector verifies their system is installed correctly while still visible and accessible.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Scheduling Tips",
          content:
            "Schedule inspections at least 24-48 hours in advance. Many jurisdictions offer online scheduling. Have the job site accessible and work ready for inspection. Keep a set of approved plans on site for the inspector to reference.",
        },
        {
          type: "heading",
          content: "Common Inspection Failures",
        },
        {
          type: "text",
          content:
            "Understanding common failures helps you avoid them. Most failures result from deviation from approved plans, missing components, or sloppy workmanship.",
        },
        {
          type: "list",
          items: [
            "Work doesn't match approved plans",
            "Missing or improperly installed connectors",
            "Incorrect nailing or fastening",
            "Electrical boxes not properly secured",
            "Plumbing vents terminated incorrectly",
            "Missing fire blocking",
            "Inadequate ventilation",
            "Non-compliant stair dimensions",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Pre-Inspect Yourself",
          content:
            "Walk through a checklist before calling for inspection. Check approved plans against actual work. Verify all connectors are installed. Make sure the site is safe and accessible. Address obvious issues before the inspector arrives.",
        },
        {
          type: "heading",
          content: "When Inspections Fail",
        },
        {
          type: "text",
          content:
            "If an inspection fails, you'll receive a correction notice listing the items that need to be addressed. Fix the issues and schedule a re-inspection. Most jurisdictions allow one free re-inspection; additional inspections may incur fees.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Re-Inspection Fees",
          content:
            "Many Georgia jurisdictions charge re-inspection fees after the first failed inspection, typically $50-$100 per re-inspection. Some jurisdictions allow two re-inspections before charging fees. Check your local policy.",
        },
      ],
      keyTakeaways: [
        "Inspections happen at critical construction stages—don't cover work until it passes",
        "Foundation, framing, and rough-in inspections are key checkpoints",
        "Common failures include work not matching plans and missing connectors",
        "Pre-inspect your own work before calling for official inspection",
        "Failed inspections require corrections and re-inspection",
      ],
      georgiaNote:
        "Georgia building inspectors are certified through the Georgia Department of Community Affairs. They enforce both state codes and any local amendments. Inspectors can answer questions about code requirements but cannot provide design advice.",
      quiz: [
        {
          question: "When can you install drywall in your new home?",
          options: [
            "Any time after framing is complete",
            "After electrical rough-in but before plumbing",
            "After all rough-in inspections pass",
            "After the final inspection",
          ],
          correctIndex: 2,
          explanation:
            "Drywall cannot be installed until framing, electrical rough-in, plumbing rough-in, mechanical rough-in, and insulation inspections have all passed.",
        },
        {
          question: "What happens if your inspection fails?",
          options: [
            "You must start over from the beginning",
            "You receive a correction notice and must fix issues before re-inspection",
            "The permit is automatically revoked",
            "You can proceed if you sign a waiver",
          ],
          correctIndex: 1,
          explanation:
            "A failed inspection results in a correction notice. You fix the listed items and schedule a re-inspection. Most jurisdictions allow one free re-inspection.",
        },
      ],
    },
    {
      id: "5-4",
      moduleId: "5",
      title: "Zoning and Land Use",
      subtitle: "Understanding what you can build and where",
      order: 4,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "Zoning regulations control how land can be used and what can be built on it. Before purchasing land or designing your home, you must understand the zoning designation and its requirements. Zoning determines everything from whether you can build a home at all to how tall it can be.",
        },
        {
          type: "heading",
          content: "Common Zoning Categories",
        },
        {
          type: "text",
          content:
            "Zoning districts are typically designated by letter codes. While codes vary by jurisdiction, general categories are similar across Georgia.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Residential",
              items: [
                "R-1: Single-family, low density",
                "R-2: Single-family, medium density",
                "R-3: Multi-family allowed",
                "A-R: Agricultural-Residential",
              ],
            },
            {
              title: "Other Types",
              items: [
                "A: Agricultural",
                "C: Commercial",
                "I: Industrial",
                "MU: Mixed Use",
              ],
            },
            {
              title: "Special Designations",
              items: [
                "PUD: Planned Unit Development",
                "Historic Districts",
                "Overlay Districts",
                "Conservation Areas",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Key Zoning Requirements",
        },
        {
          type: "text",
          content:
            "Each zoning district specifies parameters that control development. Understanding these early prevents costly design changes later.",
        },
        {
          type: "list",
          items: [
            "Minimum lot size - The smallest allowed lot for new construction",
            "Setbacks - Required distances from property lines (front, side, rear)",
            "Lot coverage - Maximum percentage of lot that can be covered by structures",
            "Height limits - Maximum building height in feet or stories",
            "Density - Number of dwelling units allowed per acre",
            "Accessory structures - Rules for garages, sheds, ADUs",
            "Use restrictions - What activities are permitted",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Example Setbacks",
          content:
            "A typical R-1 zone might require: 35' front setback, 10' side setbacks, 25' rear setback. This means your home must be at least these distances from each property line, significantly limiting the buildable area on your lot.",
        },
        {
          type: "heading",
          content: "Checking Zoning Before Purchase",
        },
        {
          type: "text",
          content:
            "Before buying land, always verify the zoning designation and requirements. Visit the local planning department or check their online GIS mapping system. Request a zoning verification letter if you need official documentation for financing.",
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Assume",
          content:
            "Don't assume you can build what you want just because neighboring properties have homes. Zoning can change at property lines. Historic homes may predate current zoning. Get official verification of your specific parcel's zoning.",
        },
        {
          type: "heading",
          content: "Variances and Zoning Changes",
        },
        {
          type: "text",
          content:
            "If zoning doesn't allow what you want to build, you have options: request a variance (exception to specific requirements) or apply for a zoning change (rezoning to a different category). Both require public hearings and are not guaranteed.",
        },
        {
          type: "list",
          items: [
            "Variance - Request exception to specific requirement (setback, height, etc.)",
            "Must demonstrate hardship unique to your property",
            "Public hearing required, neighbors notified",
            "Takes 2-4 months typically",
            "Rezoning - Request change to different zoning category",
            "More difficult to obtain than variance",
            "Must align with comprehensive plan",
            "Takes 3-6 months or longer",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Zoning Procedures Act",
          content:
            "Georgia law establishes procedures for zoning decisions. Property owners must be notified of hearings that could affect their property. Zoning decisions can be appealed to Superior Court within 30 days.",
        },
        {
          type: "heading",
          content: "HOA and Covenants",
        },
        {
          type: "text",
          content:
            "Beyond government zoning, private restrictions may apply. Deed restrictions, HOA rules, and conservation easements can limit development beyond what zoning allows. These private restrictions run with the land and are enforceable.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Review Everything",
          content:
            "When buying land, review the deed for restrictions, check for HOA declarations, and search for recorded easements. Your title company can help identify these during due diligence.",
        },
      ],
      keyTakeaways: [
        "Zoning controls what you can build—check before purchasing land",
        "Key requirements include setbacks, lot coverage, height limits, and density",
        "Variances allow exceptions to specific requirements but require hearings",
        "Rezoning is possible but difficult and time-consuming",
        "Private restrictions (HOA, covenants) may add requirements beyond zoning",
      ],
      georgiaNote:
        "Georgia counties and cities maintain zoning maps, typically available online through GIS systems. The Georgia Department of Community Affairs provides resources on planning and zoning at dca.ga.gov. All zoning hearings are public, and notices must be published and mailed to affected property owners.",
      quiz: [
        {
          question: "What is a setback requirement?",
          options: [
            "The time required before starting construction",
            "The minimum distance a building must be from property lines",
            "The maximum building height allowed",
            "The minimum lot size required",
          ],
          correctIndex: 1,
          explanation:
            "Setbacks are the minimum distances that a building must be from property lines—front, side, and rear. They limit the buildable area on your lot.",
        },
        {
          question: "How do you get permission to build closer to a property line than zoning allows?",
          options: [
            "You cannot—zoning requirements are absolute",
            "Pay an additional fee",
            "Apply for a variance through a public hearing process",
            "Get your neighbor's written permission",
          ],
          correctIndex: 2,
          explanation:
            "A variance is an exception to specific zoning requirements. You must apply for a variance, demonstrate hardship, and obtain approval through a public hearing process.",
        },
      ],
    },
    {
      id: "5-5",
      moduleId: "5",
      title: "Special Requirements and Approvals",
      subtitle: "Environmental, utility, and other permits you may need",
      order: 5,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "Beyond the standard building permit, your project may require additional approvals. Environmental regulations, utility connections, and special conditions can all trigger additional permit requirements. Identifying these early prevents delays during construction.",
        },
        {
          type: "heading",
          content: "Environmental Permits",
        },
        {
          type: "text",
          content:
            "Environmental regulations protect water quality, sensitive habitats, and natural resources. Several types of environmental permits may apply to your project.",
        },
        {
          type: "list",
          items: [
            "Land Disturbance Permit - Required in Georgia when disturbing 1 acre or more",
            "Stream Buffer Variance - If building within 25' of state waters",
            "Wetlands Permit - Federal permit if filling or disturbing wetlands",
            "Floodplain Development Permit - If building in flood zones",
            "Erosion Control Plan - Part of land disturbance permit",
            "Stormwater Management Plan - May be required locally",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Erosion Control",
          content:
            "The Georgia Erosion and Sedimentation Act requires a Land Disturbance Permit (LDP) for any project disturbing 1 acre or more. Even smaller projects must implement erosion control. Fines for violations can reach $25,000 per day.",
        },
        {
          type: "heading",
          content: "Utility Connections",
        },
        {
          type: "text",
          content:
            "Connecting to utilities often requires separate applications and may involve significant fees. Start these processes early—some utilities have long lead times.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Water/Sewer",
              items: [
                "Tap fee: $2,000-$10,000+",
                "Meter fee: $200-$500",
                "Connection inspection required",
                "May require main extension",
              ],
            },
            {
              title: "Electric",
              items: [
                "Service fee: $500-$2,000",
                "Transformer may be required",
                "Temporary power for construction",
                "Underground vs overhead options",
              ],
            },
            {
              title: "Gas (if available)",
              items: [
                "Main extension fees vary",
                "Meter installation",
                "Pressure test required",
                "Gas piping inspection",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Septic Systems",
          content:
            "If not connecting to municipal sewer, you'll need a septic permit from the county health department. This requires a site evaluation, soil testing, and system design. Start this process early—it can take months and may affect where you can build on your lot.",
        },
        {
          type: "heading",
          content: "Driveway and Access Permits",
        },
        {
          type: "text",
          content:
            "Accessing your property from a public road typically requires a driveway permit. If your property fronts a state highway, you'll need a permit from the Georgia Department of Transportation (GDOT). County and city roads require permits from the local public works department.",
        },
        {
          type: "list",
          items: [
            "Driveway spacing and location requirements",
            "Sight distance requirements at intersections",
            "Culvert sizing for drainage",
            "Paving requirements vary by jurisdiction",
            "Commercial driveways have stricter requirements",
          ],
        },
        {
          type: "heading",
          content: "Historic Districts and Overlay Zones",
        },
        {
          type: "text",
          content:
            "Properties in historic districts or special overlay zones face additional design review. You may need approval from a Historic Preservation Commission, Architectural Review Board, or Design Review Committee before obtaining a building permit.",
        },
        {
          type: "callout",
          variant: "info",
          title: "Design Review Process",
          content:
            "Design review boards evaluate exterior appearance, materials, colors, and compatibility with neighborhood character. This review happens before building permit submission. Allow 1-3 months for design review in these areas.",
        },
        {
          type: "heading",
          content: "Permit Tracking",
        },
        {
          type: "text",
          content:
            "With multiple permits from different agencies, tracking becomes essential. Create a master list of all required permits, application dates, approval status, and expiration dates. Many permits expire after a year if work hasn't started.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Permit Checklist",
          content:
            "Ask your local building department for a comprehensive permit checklist. Many jurisdictions provide this, listing all potentially required approvals. Check off items that apply to your project and contact each agency early.",
        },
      ],
      keyTakeaways: [
        "Environmental permits are required for land disturbance, stream buffers, and wetlands",
        "Utility connections require separate applications and can be expensive",
        "Septic permits from the health department can take months—start early",
        "Driveway permits are needed for road access, especially on state highways",
        "Historic districts require design review before building permit submission",
      ],
      georgiaNote:
        "Georgia Environmental Protection Division (EPD) oversees environmental permits. The 25-foot stream buffer is a state requirement, but some local jurisdictions require larger buffers of 50-75 feet. Check both state and local requirements.",
      quiz: [
        {
          question:
            "When is a Land Disturbance Permit required in Georgia?",
          options: [
            "All construction projects",
            "Projects over $50,000 in value",
            "Projects disturbing 1 acre or more",
            "Only commercial projects",
          ],
          correctIndex: 2,
          explanation:
            "Georgia requires a Land Disturbance Permit for any project disturbing 1 acre or more of land. Even smaller projects must implement erosion control measures.",
        },
        {
          question:
            "Which agency issues permits for driveways accessing a state highway?",
          options: [
            "County Building Department",
            "Georgia Department of Transportation (GDOT)",
            "Georgia Environmental Protection Division",
            "City Public Works",
          ],
          correctIndex: 1,
          explanation:
            "GDOT issues permits for driveways accessing state highways. County or city public works handle permits for local roads.",
        },
      ],
    },
  ],
};
