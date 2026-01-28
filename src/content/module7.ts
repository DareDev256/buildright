import { Module } from "./types";

export const module7: Module = {
  id: "7",
  title: "Completion & Beyond",
  description: "Final inspections, CO, punch lists, warranties",
  totalLessons: 5,
  lessons: [
    {
      id: "7-1",
      moduleId: "7",
      title: "Final Inspection and Certificate of Occupancy",
      subtitle: "The finish line of construction",
      order: 1,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "The final building inspection and Certificate of Occupancy (CO) mark the official completion of your construction project. The CO verifies your home was built according to approved plans and meets all code requirements. You legally cannot occupy the home until the CO is issued.",
        },
        {
          type: "heading",
          content: "Prerequisites for Final Inspection",
        },
        {
          type: "text",
          content:
            "Before scheduling the final building inspection, several items must be complete:",
        },
        {
          type: "list",
          items: [
            "All trade final inspections passed (electrical, plumbing, mechanical)",
            "All work substantially complete per approved plans",
            "Life safety items installed (smoke detectors, handrails, exits)",
            "Address numbers visible from street",
            "Final grading complete with proper drainage",
            "Driveway and walkways installed",
            "Utilities connected and operational",
            "Termite letter on file (required in Georgia)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Schedule Prematurely",
          content:
            "Scheduling a final inspection before you're ready wastes the inspector's time and yours. Failed final inspections may incur re-inspection fees. Make sure everything is genuinely complete before calling.",
        },
        {
          type: "heading",
          content: "What Inspectors Check",
        },
        {
          type: "text",
          content:
            "The final inspection is comprehensive. Inspectors verify the finished home matches approved plans and all code requirements are met.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Life Safety",
              items: [
                "Smoke/CO detectors work",
                "Egress windows accessible",
                "Stairs and railings secure",
                "GFCIs functional",
                "Address visible",
              ],
            },
            {
              title: "Building Systems",
              items: [
                "HVAC operational",
                "Plumbing no leaks",
                "Electrical complete",
                "Appliances connected",
                "Water heater proper",
              ],
            },
            {
              title: "Structure/Finishes",
              items: [
                "Matches approved plans",
                "Proper clearances",
                "Weatherproofing complete",
                "Garage fire separation",
                "Grading/drainage OK",
              ],
            },
          ],
        },
        {
          type: "heading",
          content: "Certificate of Occupancy",
        },
        {
          type: "text",
          content:
            "Once the final inspection passes, the building department issues the Certificate of Occupancy. This document certifies the building is safe for habitation and constructed per code. You'll need the CO for several purposes.",
        },
        {
          type: "list",
          items: [
            "Required before you can legally occupy the home",
            "Needed to convert construction loan to permanent mortgage",
            "Required for homeowner's insurance",
            "May be needed for utility permanent service",
            "Protects resale value—future buyers will verify CO exists",
            "Keep original in a safe place with important documents",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia CO Process",
          content:
            "In Georgia, the CO is typically issued by the local building department the same day as a passed final inspection, or within 1-2 business days. Some jurisdictions issue a 'Temporary CO' for minor incomplete items, with conditions that must be satisfied within a specified time.",
        },
        {
          type: "heading",
          content: "Common Final Inspection Issues",
        },
        {
          type: "text",
          content:
            "Certain items commonly cause final inspection failures. Check these before scheduling:",
        },
        {
          type: "list",
          items: [
            "Missing or non-functional smoke/CO detectors",
            "GFCI outlets not working or improperly located",
            "Missing handrails on stairs or exterior steps",
            "Address numbers not visible from street",
            "Grading draining toward foundation",
            "Missing weather-stripping on doors",
            "Garage fire separation incomplete",
            "Anti-tip bracket not installed on range",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Pre-Final Walkthrough",
          content:
            "Do your own inspection using a code checklist before calling for the final. Address obvious issues first. This minimizes the chance of failure and re-inspection fees.",
        },
      ],
      keyTakeaways: [
        "All trade finals must pass before the building final inspection",
        "The CO is required before you can legally occupy the home",
        "Life safety items (smoke detectors, railings, GFCIs) are critical checkpoints",
        "Keep your CO with important documents—needed for loans and resale",
        "Pre-inspect your own work to avoid failed inspections",
      ],
      georgiaNote:
        "Georgia jurisdictions may issue Temporary Certificates of Occupancy for minor incomplete items (landscaping, driveway striping, etc.). TCOs have expiration dates and conditions. Failure to complete items before TCO expires can result in fines or occupancy issues.",
      quiz: [
        {
          question: "What is required before you can legally occupy your new home?",
          options: [
            "Passing the framing inspection",
            "Completing landscaping",
            "Certificate of Occupancy from the building department",
            "Final payment to the contractor",
          ],
          correctIndex: 2,
          explanation:
            "The Certificate of Occupancy (CO) certifies the building is safe for habitation. You legally cannot occupy the home until the CO is issued after the final inspection passes.",
        },
        {
          question: "What must pass before the final building inspection?",
          options: [
            "Only the framing inspection",
            "All trade final inspections (electrical, plumbing, mechanical)",
            "Just the electrical final",
            "No prerequisites required",
          ],
          correctIndex: 1,
          explanation:
            "All trade final inspections must pass before the building final inspection. The building final is the last inspection before the CO is issued.",
        },
      ],
    },
    {
      id: "7-2",
      moduleId: "7",
      title: "Creating and Managing Punch Lists",
      subtitle: "Catching and fixing the final details",
      order: 2,
      estimatedMinutes: 14,
      content: [
        {
          type: "text",
          content:
            "A punch list documents items that need correction, completion, or touch-up before the project is truly finished. Even well-built homes have punch list items—small imperfections, missing caulk, touch-up paint, adjustments needed. A systematic approach ensures nothing is missed.",
        },
        {
          type: "heading",
          content: "When to Create the Punch List",
        },
        {
          type: "text",
          content:
            "Create your main punch list after substantial completion but before final payment. Walk through methodically when the house is essentially complete—all finishes installed, fixtures working, clean enough to see clearly.",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Walk-Through Timing",
          content:
            "The best time for a punch list walk-through is late afternoon when natural light angles highlight imperfections in drywall, paint, and finishes. Bring a flashlight to check dark areas. Take your time—rushed walk-throughs miss items.",
        },
        {
          type: "heading",
          content: "Room-by-Room Inspection",
        },
        {
          type: "text",
          content:
            "Inspect each room systematically. Check the same elements in the same order to avoid missing anything.",
        },
        {
          type: "list",
          items: [
            "Walls and ceilings: Paint coverage, drywall imperfections, nail pops",
            "Trim: Caulking gaps, paint touch-up, proper attachment",
            "Doors: Open/close smoothly, latch properly, no rub marks",
            "Windows: Open/close smoothly, locks work, screens in place",
            "Floors: Damage, scratches, proper transitions, squeaks",
            "Fixtures: Operate correctly, properly mounted, no damage",
            "Outlets/switches: Cover plates straight, all functional",
            "Cabinets: Doors aligned, drawers operate, hardware tight",
          ],
        },
        {
          type: "heading",
          content: "Documenting Items",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "What to Record",
              items: [
                "Exact location",
                "Specific deficiency",
                "Photo if helpful",
                "Priority level",
              ],
            },
            {
              title: "Good vs. Bad Notes",
              items: [
                "Good: 'Master bath, wall behind toilet, 2\" nail pop'",
                "Bad: 'Bathroom wall issue'",
                "Good: 'Kitchen cabinet left of sink, door won't close'",
                "Bad: 'Cabinet problem'",
              ],
            },
            {
              title: "Organization",
              items: [
                "Group by room/area",
                "Note responsible trade",
                "Track completion",
                "Date resolved",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Blue Tape Method",
          content:
            "Many builders use blue painter's tape to mark punch list items in place. Put a small piece of tape next to each deficiency (wall dings, cabinet adjustments, etc.). This makes items easy to find when correcting. Remove tape only after the item is fixed.",
        },
        {
          type: "heading",
          content: "Managing Corrections",
        },
        {
          type: "text",
          content:
            "After creating the punch list, coordinate corrections efficiently. Group items by responsible trade to minimize return trips.",
        },
        {
          type: "list",
          items: [
            "Share the list with your contractor/subs immediately",
            "Set a reasonable deadline for completion",
            "Group items by trade for efficient correction",
            "Verify each item after correction—check off the list",
            "Address new issues that arise during corrections",
            "Hold final payment until punch list is complete",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Be Reasonable",
          content:
            "Focus on legitimate deficiencies, not perfectionism. Normal construction tolerance exists. Minor variations in paint sheen or barely visible drywall imperfections aren't punch list items. Save your pushback for things that actually matter.",
        },
        {
          type: "heading",
          content: "Final Walk-Through",
        },
        {
          type: "text",
          content:
            "After punch list items are corrected, do a final walk-through to verify everything is complete. Only then should final payment be released. This is your last opportunity to catch issues while the contractor is still engaged.",
        },
      ],
      keyTakeaways: [
        "Create punch lists after substantial completion, before final payment",
        "Inspect room-by-room with a systematic checklist",
        "Document items with specific location and deficiency description",
        "Group corrections by trade for efficient completion",
        "Verify all items before releasing final payment",
      ],
      georgiaNote:
        "In Georgia, it's common practice to hold 5-10% of the contract as retainage until punch list completion. Your contract should specify punch list procedures and retainage terms. If using a construction loan, the lender may require their own inspection before final draw.",
      quiz: [
        {
          question: "When is the best time to create your main punch list?",
          options: [
            "During framing",
            "Before drywall installation",
            "After substantial completion but before final payment",
            "Six months after moving in",
          ],
          correctIndex: 2,
          explanation:
            "Create the punch list after substantial completion—all finishes installed and the house essentially done—but before final payment. This gives leverage to ensure corrections are made.",
        },
        {
          question: "What makes a good punch list item description?",
          options: [
            "'Bathroom needs work'",
            "'Fix the walls'",
            "'Master bath, wall behind toilet, 2-inch nail pop needs repair'",
            "'Paint'",
          ],
          correctIndex: 2,
          explanation:
            "Good punch list items include exact location, specific deficiency, and enough detail for someone to find and fix the issue. Vague descriptions like 'bathroom needs work' aren't actionable.",
        },
      ],
    },
    {
      id: "7-3",
      moduleId: "7",
      title: "Understanding Warranties",
      subtitle: "What's covered and for how long",
      order: 3,
      estimatedMinutes: 16,
      content: [
        {
          type: "text",
          content:
            "Warranties protect you against defects and failures after construction is complete. Multiple warranties apply to your new home—builder warranties, manufacturer warranties, and potentially third-party warranty programs. Understanding what's covered helps you address issues properly.",
        },
        {
          type: "heading",
          content: "Builder Warranty",
        },
        {
          type: "text",
          content:
            "Most builders provide a warranty covering their workmanship. While terms vary, a common structure includes graduated coverage periods for different types of defects.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "1-Year Coverage",
              items: [
                "Workmanship defects",
                "Material defects",
                "HVAC, electrical, plumbing",
                "Most visible items",
                "General construction issues",
              ],
            },
            {
              title: "2-Year Coverage",
              items: [
                "Mechanical systems (HVAC)",
                "Electrical systems",
                "Plumbing systems",
                "Sometimes windows/doors",
              ],
            },
            {
              title: "10-Year Coverage",
              items: [
                "Structural defects",
                "Foundation problems",
                "Load-bearing elements",
                "Major structural issues",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Get It in Writing",
          content:
            "Builder warranties should be documented in your contract or a separate warranty document. Understand exactly what's covered, for how long, and the claims process. Verbal promises aren't enforceable—get warranty terms in writing.",
        },
        {
          type: "heading",
          content: "Third-Party Home Warranties",
        },
        {
          type: "text",
          content:
            "Some builders participate in third-party warranty programs (like 2-10 Home Buyers Warranty) that provide insurance-backed coverage. These programs offer protection even if the builder goes out of business.",
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Right to Repair Act",
          content:
            "Georgia's Right to Repair Act (O.C.G.A. § 8-2-35) requires homeowners to give builders written notice and opportunity to inspect and repair defects before filing a lawsuit. Follow the statute's requirements if you have a warranty dispute.",
        },
        {
          type: "heading",
          content: "Manufacturer Warranties",
        },
        {
          type: "text",
          content:
            "Individual products in your home carry manufacturer warranties separate from the builder warranty. These often extend beyond builder coverage.",
        },
        {
          type: "list",
          items: [
            "Roofing: 25-50 years (shingles), varies by type",
            "Windows: 10-20+ years, some with transferable lifetime",
            "Appliances: 1-5 years typically, extended warranties available",
            "HVAC equipment: 5-10 years on parts, compressor often longer",
            "Water heater: 6-12 years depending on model",
            "Siding: 20-50 years depending on material",
            "Flooring: Varies widely by product",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Register Products",
          content:
            "Many manufacturer warranties require product registration. Collect model/serial numbers from appliances and major systems. Register products with manufacturers—often done online. Keep registration confirmations in your warranty file.",
        },
        {
          type: "heading",
          content: "What Warranties Don't Cover",
        },
        {
          type: "text",
          content:
            "Warranties have exclusions. Understanding what's not covered prevents frustration when claims are denied.",
        },
        {
          type: "list",
          items: [
            "Normal wear and tear",
            "Homeowner neglect or improper maintenance",
            "Damage from accidents, natural disasters, or third parties",
            "Cosmetic imperfections noted at closing",
            "Changes or additions by others",
            "Consequences of owner modifications",
            "Items outside original scope of work",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Maintenance Matters",
          content:
            "Many warranty claims are denied due to lack of maintenance. HVAC filters not changed, gutters not cleaned, caulking not maintained—these maintenance failures can void warranty coverage. Document your maintenance activities.",
        },
      ],
      keyTakeaways: [
        "Builder warranties typically cover 1 year workmanship, 2 years systems, 10 years structural",
        "Get warranty terms in writing—verbal promises aren't enforceable",
        "Manufacturer warranties are separate and often extend beyond builder warranty",
        "Register products with manufacturers to activate warranties",
        "Proper maintenance is required to maintain warranty coverage",
      ],
      georgiaNote:
        "Georgia's Right to Repair Act requires homeowners to notify builders in writing of defects and give opportunity to inspect and repair before suing. The builder has 25 days to respond and 75 days to repair. Following this process is mandatory before litigation.",
      quiz: [
        {
          question: "What type of defects typically have the longest warranty coverage?",
          options: [
            "Cosmetic defects",
            "Appliance failures",
            "Structural defects",
            "Paint issues",
          ],
          correctIndex: 2,
          explanation:
            "Structural defects (foundation, load-bearing elements) typically have 10-year warranty coverage—the longest standard period. Workmanship and systems usually have shorter coverage periods.",
        },
        {
          question: "What might void your warranty coverage?",
          options: [
            "Registering products with manufacturers",
            "Documenting defects promptly",
            "Failure to perform routine maintenance",
            "Keeping warranty documents on file",
          ],
          correctIndex: 2,
          explanation:
            "Failure to perform routine maintenance can void warranty coverage. Warranties require homeowners to properly maintain the home. Neglecting maintenance (HVAC filters, gutter cleaning, etc.) can result in denied claims.",
        },
      ],
    },
    {
      id: "7-4",
      moduleId: "7",
      title: "Move-In and Home Maintenance",
      subtitle: "Transitioning from building to living",
      order: 4,
      estimatedMinutes: 18,
      content: [
        {
          type: "text",
          content:
            "After months of planning and construction, move-in day arrives. But the work isn't entirely done—now you transition from building a home to maintaining it. Establishing good maintenance habits from the start protects your investment and prevents costly repairs.",
        },
        {
          type: "heading",
          content: "Pre-Move-In Checklist",
        },
        {
          type: "list",
          items: [
            "Certificate of Occupancy obtained and filed",
            "Final payment made and lien waivers collected",
            "Utilities transferred to your name",
            "Homeowner's insurance active (required for CO)",
            "Construction loan converted to permanent mortgage (if applicable)",
            "Warranty documents organized and filed",
            "Appliance manuals collected",
            "Extra paint stored for touch-ups",
            "Keys, garage remotes, codes obtained",
            "Alarm/security system activated",
          ],
        },
        {
          type: "heading",
          content: "Essential Maintenance Schedule",
        },
        {
          type: "text",
          content:
            "New homes require regular maintenance just like existing homes. Some tasks are needed more frequently in a new home as materials settle.",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Monthly",
              items: [
                "HVAC filter check/change",
                "Test smoke/CO detectors",
                "Inspect for water leaks",
                "Run unused fixtures",
                "Check exterior drainage",
              ],
            },
            {
              title: "Quarterly/Seasonal",
              items: [
                "HVAC professional service",
                "Gutter cleaning",
                "Caulk inspection",
                "Water heater flush",
                "Pest inspection",
              ],
            },
            {
              title: "Annual",
              items: [
                "Roof inspection",
                "Foundation check",
                "Exterior paint touch-up",
                "Weather-stripping check",
                "Termite inspection (GA)",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Termite Bond",
          content:
            "Your termite pre-treatment includes a warranty/bond that requires annual inspections to remain valid. Schedule these inspections—missing them can void your termite coverage. Many companies offer annual renewal contracts.",
        },
        {
          type: "heading",
          content: "New Home Settling",
        },
        {
          type: "text",
          content:
            "New homes experience normal settling during the first year. Materials dry and shrink, joints move slightly, and minor cracks appear. This is normal and expected.",
        },
        {
          type: "list",
          items: [
            "Nail pops in drywall (nails push out as wood dries)",
            "Hairline cracks at corners and ceiling/wall joints",
            "Minor door adjustments needed",
            "Caulk gaps at trim",
            "Small grout cracks in tile",
            "Floor squeaks as lumber dries",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "11-Month Inspection",
          content:
            "Schedule a thorough inspection at 11 months—just before your 1-year warranty expires. Document any settling issues, defects, or problems that have appeared. Submit warranty claims for legitimate items before coverage ends.",
        },
        {
          type: "heading",
          content: "Creating a Home Maintenance Binder",
        },
        {
          type: "text",
          content:
            "Organize all home information in one accessible location. This makes maintenance easier and adds value at resale.",
        },
        {
          type: "list",
          items: [
            "Certificate of Occupancy and final inspection",
            "Warranty documents (builder and manufacturer)",
            "Appliance manuals and registration receipts",
            "As-built plans showing any changes from original",
            "Paint colors and where to get more",
            "Flooring product info for future matching",
            "Contractor and vendor contacts",
            "Maintenance log documenting service history",
            "Receipts for major repairs/improvements",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Digital Backup",
          content:
            "Photograph all documents and store digitally (cloud backup). Take photos of model numbers, paint codes, and material labels. This information is invaluable when you need to match finishes or order replacement parts years later.",
        },
      ],
      keyTakeaways: [
        "Complete all administrative items before move-in (CO, insurance, utilities)",
        "Establish a regular maintenance schedule from day one",
        "New homes settle—minor cracks and nail pops are normal the first year",
        "Do an 11-month inspection before builder warranty expires",
        "Create and maintain a home maintenance binder with all documentation",
      ],
      georgiaNote:
        "Georgia's humidity makes HVAC maintenance especially important. Change filters monthly during peak season. Have the system serviced twice yearly (spring for A/C, fall for heat). Proper maintenance extends equipment life and maintains efficiency in our demanding climate.",
      quiz: [
        {
          question: "Why should you schedule an inspection at 11 months?",
          options: [
            "It's required by Georgia law",
            "To catch settling issues before the 1-year warranty expires",
            "To prepare for the 10-year inspection",
            "Inspections aren't needed after the CO is issued",
          ],
          correctIndex: 1,
          explanation:
            "The 11-month inspection catches settling issues and defects that appear during the first year. Submitting warranty claims before the 1-year mark ensures coverage for legitimate problems.",
        },
        {
          question: "What maintains your Georgia termite bond coverage?",
          options: [
            "Nothing—it's permanent",
            "Paying property taxes",
            "Annual termite inspections",
            "Quarterly HVAC service",
          ],
          correctIndex: 2,
          explanation:
            "Your termite pre-treatment warranty/bond requires annual inspections to remain valid. Missing inspections can void coverage. Most companies offer annual renewal contracts.",
        },
      ],
    },
    {
      id: "7-5",
      moduleId: "7",
      title: "Lessons Learned and Next Steps",
      subtitle: "Reflecting on your build and looking ahead",
      order: 5,
      estimatedMinutes: 14,
      content: [
        {
          type: "text",
          content:
            "Congratulations—you've built a home! Whether it was your first or your fiftieth, every build teaches lessons. Taking time to reflect on what worked, what didn't, and what you'd do differently makes you better prepared for future projects and helps others learn from your experience.",
        },
        {
          type: "heading",
          content: "Post-Build Reflection",
        },
        {
          type: "text",
          content:
            "After move-in, while memories are fresh, document your experience. What would you tell yourself at the start of this process?",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "What Went Well",
              items: [
                "Decisions you're glad you made",
                "Contractors who exceeded expectations",
                "Upgrades worth the cost",
                "Planning that paid off",
                "Problems you avoided",
              ],
            },
            {
              title: "What You'd Change",
              items: [
                "Decisions you regret",
                "Things you'd do differently",
                "Where you overspent",
                "Where you underspent",
                "Timeline assumptions",
              ],
            },
            {
              title: "Lessons Learned",
              items: [
                "Knowledge gained",
                "Skills developed",
                "Resources discovered",
                "Relationships built",
                "Advice for others",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Share Your Experience",
          content:
            "Consider sharing your experience with others starting their build journey. Online forums, local builder groups, and community organizations connect first-time builders with experienced ones. Your lessons can save others from the same mistakes.",
        },
        {
          type: "heading",
          content: "Financial Review",
        },
        {
          type: "text",
          content:
            "How did your actual costs compare to your budget? Understanding where you went over or under helps with future projects and home valuations.",
        },
        {
          type: "list",
          items: [
            "Calculate final total cost vs. original budget",
            "Identify categories where you exceeded budget",
            "Note where you saved compared to expectations",
            "Document change order costs and reasons",
            "Calculate actual cost per square foot",
            "Compare to original estimates and market rates",
            "Assess value of upgrades vs. standard options",
          ],
        },
        {
          type: "heading",
          content: "Building Your Network",
        },
        {
          type: "text",
          content:
            "Through your build, you've developed relationships with contractors, suppliers, and professionals. Maintain these connections—you'll need them for maintenance, future projects, and referrals.",
        },
        {
          type: "list",
          items: [
            "Keep contact information for all contractors and subs",
            "Note who did excellent work (and who didn't)",
            "Stay in touch with your best contractors",
            "Refer good contractors to others",
            "Build relationships with specialty suppliers",
            "Connect with local builder/homeowner groups",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Building Community",
          content:
            "Georgia has active builder associations in most areas. The Home Builders Association of Georgia and local chapters offer networking, education, and resources. Even owner-builders can benefit from these connections for future projects.",
        },
        {
          type: "heading",
          content: "Looking Ahead",
        },
        {
          type: "text",
          content:
            "Your first build often leads to others—whether building again, helping friends and family, or pursuing real estate development. The knowledge and experience you've gained are valuable.",
        },
        {
          type: "list",
          items: [
            "Document your process for future reference",
            "Consider next projects (spec homes, rentals, helping others)",
            "Stay current on building codes and practices",
            "Continue learning through courses and reading",
            "Mentor others starting their build journey",
            "Explore real estate investment opportunities",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Your Achievement",
          content:
            "Building a home is a significant accomplishment. You've navigated complex systems, managed substantial financial decisions, coordinated multiple professionals, and created a tangible result. Few people attempt this—fewer succeed. Take pride in what you've built.",
        },
      ],
      keyTakeaways: [
        "Document lessons learned while memories are fresh",
        "Compare actual costs to budget for future reference",
        "Maintain relationships with quality contractors for future needs",
        "Share your experience to help others on their build journey",
        "Consider how this experience opens doors for future projects",
      ],
      georgiaNote:
        "Georgia's growth means continued building opportunities. The experience you've gained positions you well—whether for personal projects, helping others, or exploring development. Stay connected with local builder associations and keep your contractor network active.",
      quiz: [
        {
          question: "Why should you document lessons learned after your build?",
          options: [
            "It's required for your warranty",
            "To help with taxes",
            "For future reference, helping others, and improving next projects",
            "Documentation isn't important",
          ],
          correctIndex: 2,
          explanation:
            "Documenting lessons while fresh helps with future projects, allows you to share wisdom with others, and creates a record of what worked and what didn't. This knowledge has real value.",
        },
        {
          question:
            "What should you do with contractor relationships after your build?",
          options: [
            "Delete their contact information",
            "Maintain connections for maintenance, future projects, and referrals",
            "Never contact them again",
            "Only keep warranty contacts",
          ],
          correctIndex: 1,
          explanation:
            "Good contractor relationships are valuable. You'll need them for maintenance and repairs, future projects, and referrals. Staying connected with quality contractors benefits everyone.",
        },
      ],
    },
  ],
};
