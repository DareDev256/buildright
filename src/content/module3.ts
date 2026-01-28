import { Module } from "./types";

export const module3: Module = {
  id: "3",
  title: "Funding Your Build",
  description: "Construction loans, owner-builder financing, budgeting, and working with lenders",
  totalLessons: 7,
  lessons: [
    // Lesson 1: Construction Financing Overview
    {
      id: "3-1",
      moduleId: "3",
      order: 1,
      title: "Construction Financing Overview",
      subtitle: "How building a home is financed differently than buying one",
      duration: "8 min read",
      content: [
        {
          type: "text",
          content:
            "Financing a new construction home works differently than getting a mortgage for an existing house. You can't get a traditional mortgage for a house that doesn't exist yet. This lesson explains your options and how construction financing works.",
        },
        {
          type: "heading",
          content: "Why Construction Financing is Different",
        },
        {
          type: "list",
          items: [
            "No collateral yet — The house doesn't exist, so there's nothing to secure the loan against initially",
            "Higher risk for lenders — Construction projects can fail, go over budget, or remain incomplete",
            "Funds released in stages — Money is disbursed as work progresses, not all at once",
            "Short-term loan — Construction loans are typically 6-18 months, not 30 years",
            "Must convert to permanent financing — You'll need a mortgage after construction completes",
          ],
        },
        {
          type: "heading",
          content: "Types of Construction Financing",
        },
        {
          type: "text",
          content:
            "There are three main approaches to financing new construction:",
        },
        {
          type: "list",
          items: [
            "Construction-to-Permanent (One-Time Close) — Single loan that converts to a mortgage at completion",
            "Stand-Alone Construction Loan — Separate construction loan, then refinance to a mortgage",
            "Cash — Pay for construction out of pocket, get mortgage after if needed",
          ],
        },
        {
          type: "heading",
          content: "Construction-to-Permanent Loans",
        },
        {
          type: "text",
          content:
            "This is the most popular option for most borrowers. You close once, and the loan automatically converts to a permanent mortgage when construction is complete.",
        },
        {
          type: "list",
          items: [
            "Single closing — One set of closing costs",
            "Rate lock — Can lock your permanent rate at closing (protection against rising rates)",
            "Interest-only during construction — Only pay interest on funds disbursed",
            "Automatic conversion — Becomes a standard mortgage at completion",
            "Qualification — Must qualify for the full mortgage amount upfront",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best For",
          content:
            "Construction-to-permanent loans are ideal for most borrowers. You have certainty about your permanent rate, only close once, and avoid the risk of not qualifying for a mortgage after construction.",
        },
        {
          type: "heading",
          content: "Stand-Alone Construction Loans",
        },
        {
          type: "text",
          content:
            "A separate short-term loan just for construction. You'll refinance to a permanent mortgage when the house is complete.",
        },
        {
          type: "list",
          items: [
            "Two closings — Construction loan close, then mortgage close (two sets of costs)",
            "Flexibility — Can shop for best mortgage rates at completion",
            "Risk — Must qualify for mortgage after construction; rates may have risen",
            "Higher construction rates — Stand-alone construction loans often have higher rates",
            "May be only option — Some situations require this approach",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Refinance Risk",
          content:
            "With a stand-alone construction loan, you must qualify for a mortgage AFTER construction. If rates rise significantly, your financial situation changes, or the appraisal comes in low, you could have problems. Construction-to-permanent eliminates this risk.",
        },
        {
          type: "heading",
          content: "Paying Cash",
        },
        {
          type: "text",
          content:
            "If you have significant resources, paying cash for construction has advantages:",
        },
        {
          type: "list",
          items: [
            "No interest costs during construction (can save $20,000+)",
            "No lender oversight or draw inspections",
            "Faster process without lender delays",
            "Can get a mortgage after completion if desired (cash-out refinance)",
            "Requires significant liquid assets ($300,000+ typically)",
          ],
        },
        {
          type: "heading",
          content: "Typical Construction Loan Terms",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Construction Phase",
              items: [
                "Term: 6-18 months",
                "Rate: Prime + 0-2%",
                "Payments: Interest-only",
                "Down payment: 20-25%",
                "Draws: Monthly inspections",
              ],
            },
            {
              title: "Permanent Phase",
              items: [
                "Term: 15-30 years",
                "Rate: Market mortgage rate",
                "Payments: Principal + interest",
                "Converts automatically",
                "Standard mortgage servicing",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Construction Loan Market",
          content:
            "Georgia has a competitive construction lending market. Local and regional banks (Synovus, Atlantic Capital, Renasant) often have better construction loan programs than national banks. Credit unions and community banks are also good options. Shop at least 3-4 lenders.",
        },
      ],
      keyTakeaways: [
        "Construction financing is short-term and disbursed in stages",
        "Construction-to-permanent loans (one-time close) are best for most borrowers",
        "Stand-alone construction loans require refinancing — with risk",
        "Expect 20-25% down payment for construction loans",
        "Interest-only payments during construction keep costs manageable",
      ],
    },

    // Lesson 2: What Lenders Look For
    {
      id: "3-2",
      moduleId: "3",
      order: 2,
      title: "What Lenders Look For",
      subtitle: "Qualifying for a construction loan",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Construction loans are riskier than traditional mortgages, so lenders are more selective. Understanding what they evaluate helps you prepare a strong application and avoid surprises.",
        },
        {
          type: "heading",
          content: "Credit Score Requirements",
        },
        {
          type: "list",
          items: [
            "Minimum: 680 for most construction loans (some require 700+)",
            "Best rates: 740+ credit score",
            "All three bureaus: Lenders typically use middle score",
            "Recent history matters: Late payments in past 12 months are red flags",
            "New credit: Avoid opening new accounts during the process",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Improve Before Applying",
          content:
            "If your score is below 700, spend 3-6 months improving it before applying. Pay down credit cards below 30% utilization, correct any errors on your report, and avoid new credit applications.",
        },
        {
          type: "heading",
          content: "Debt-to-Income Ratio (DTI)",
        },
        {
          type: "text",
          content:
            "DTI compares your monthly debt payments to your gross monthly income. Lenders use this to ensure you can afford the loan.",
        },
        {
          type: "list",
          items: [
            "Front-end DTI: Housing costs / gross income (typically max 28-31%)",
            "Back-end DTI: All debt payments / gross income (typically max 43-45%)",
            "Housing costs include: Principal, interest, taxes, insurance (PITI)",
            "All debts include: Car payments, student loans, credit cards, child support",
            "Lower is better: 36% back-end DTI gets best rates",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "DTI Calculation Example",
          content:
            "Income: $10,000/month gross. Car payment: $400. Student loan: $300. New house PITI: $2,500. Total debt: $3,200. DTI = $3,200 ÷ $10,000 = 32% — Looks good!",
        },
        {
          type: "heading",
          content: "Down Payment Requirements",
        },
        {
          type: "list",
          items: [
            "Typical requirement: 20-25% of total project cost",
            "Land equity counts: If you own land, its value can serve as down payment",
            "Gifts allowed: With proper documentation and gift letter",
            "Reserves required: 3-6 months of payments in savings after down payment",
            "No borrowed funds: Down payment generally can't come from loans",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Using Land as Down Payment",
          content:
            "If you already own your land, its equity can count toward your down payment. Example: Building $400K house on land worth $80K (owned free and clear) = 20% down payment equivalent. This is common in Georgia where many buyers purchase land first.",
        },
        {
          type: "heading",
          content: "Income Verification",
        },
        {
          type: "text",
          content:
            "Lenders verify income thoroughly. What you'll need depends on your employment type:",
        },
        {
          type: "list",
          items: [
            "W-2 employees: 2 years W-2s, recent pay stubs, employment verification",
            "Self-employed: 2 years tax returns (all schedules), YTD profit/loss, business verification",
            "Commission/bonus income: 2-year history required, often averaged",
            "Rental income: Lease agreements, 2 years Schedule E",
            "Retirement income: Award letters, 1099s",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Self-Employed Challenges",
          content:
            "Self-employed borrowers face extra scrutiny. Lenders use NET income from tax returns (after deductions), which is often much lower than what you feel you 'make.' If you aggressively deduct expenses, your qualifying income may be surprisingly low.",
        },
        {
          type: "heading",
          content: "The Project Itself",
        },
        {
          type: "text",
          content:
            "Lenders evaluate the construction project, not just you:",
        },
        {
          type: "list",
          items: [
            "Complete plans: Detailed blueprints and specifications required",
            "Licensed builder: Most lenders require a licensed general contractor",
            "Builder approval: Lender may need to approve your builder",
            "Realistic budget: Line-item budget reviewed for completeness",
            "Appraisal: 'As-completed' appraisal to confirm value will support loan",
            "Contingency: Budget should include 5-10% contingency",
          ],
        },
        {
          type: "heading",
          content: "Builder Requirements",
        },
        {
          type: "list",
          items: [
            "Licensed in Georgia (verify at sos.ga.gov)",
            "Adequate insurance (liability and workers' comp)",
            "Experience: Most lenders want 3+ years, 5+ homes",
            "Financial stability: Some lenders check builder's credit/finances",
            "References: Lender may contact previous clients",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Owner-Builder Lending Challenge",
          content:
            "Most lenders will NOT provide construction loans to owner-builders (acting as your own GC). The risk is too high. You'll need to find specialized lenders, use a construction manager arrangement, or have significant cash to self-fund.",
        },
        {
          type: "heading",
          content: "Documentation Checklist",
        },
        {
          type: "list",
          items: [
            "□ 2 years tax returns (all pages and schedules)",
            "□ 2 years W-2s or 1099s",
            "□ Recent pay stubs (30 days)",
            "□ 2-3 months bank statements (all pages)",
            "□ Asset statements (retirement, investments)",
            "□ ID and Social Security verification",
            "□ Land deed or purchase contract",
            "□ Complete building plans and specs",
            "□ Detailed construction budget",
            "□ Builder contract",
            "□ Builder license and insurance certificates",
            "□ Lot survey",
          ],
        },
      ],
      keyTakeaways: [
        "Construction loans require stronger credit (680+ minimum, 740+ ideal)",
        "Debt-to-income ratio should be under 43% for most loans",
        "Land equity can count toward your down payment",
        "Self-employed borrowers: Your qualifying income is NET from tax returns",
        "Most lenders won't finance owner-builders — plan accordingly",
      ],
      georgiaNote:
        "Georgia requires general contractors to be licensed. Lenders will verify your builder's license at sos.ga.gov. Using an unlicensed contractor can void your loan and your insurance coverage.",
      quiz: [
        {
          id: "3-2-q1",
          question: "What credit score is typically required for a construction loan?",
          options: [
            "580 minimum",
            "620 minimum",
            "680 minimum (700+ preferred)",
            "750 minimum",
          ],
          correctIndex: 2,
          explanation:
            "Most construction loans require a minimum 680 credit score, with some lenders requiring 700+. Higher scores (740+) get the best rates.",
        },
        {
          id: "3-2-q2",
          question: "Can owned land count toward your down payment?",
          options: [
            "No, only cash counts",
            "Yes, land equity can serve as down payment",
            "Only if the land was inherited",
            "Only for loans under $300,000",
          ],
          correctIndex: 1,
          explanation:
            "If you own land free and clear (or have substantial equity), that value can count toward your down payment. This is a common strategy in Georgia.",
        },
      ],
    },

    // Lesson 3: The Draw Process
    {
      id: "3-3",
      moduleId: "3",
      order: 3,
      title: "The Draw Process",
      subtitle: "How construction funds are disbursed",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Unlike a regular mortgage where you get all the money at once, construction loan funds are released in stages called 'draws.' Understanding this process prevents cash flow problems and keeps your project on track.",
        },
        {
          type: "heading",
          content: "What is a Draw?",
        },
        {
          type: "text",
          content:
            "A draw is a disbursement of construction loan funds. As work is completed, your builder requests payment, the lender verifies the work, and funds are released. This protects everyone:",
        },
        {
          type: "list",
          items: [
            "Protects the lender: Money only flows for completed work",
            "Protects you: Builder must perform before getting paid",
            "Protects the builder: Ensures funds are available for each phase",
          ],
        },
        {
          type: "heading",
          content: "Typical Draw Schedule",
        },
        {
          type: "text",
          content:
            "Most construction loans have 4-7 draws tied to construction milestones:",
        },
        {
          type: "list",
          items: [
            "Draw 1 (10-15%): Land payoff + site work + foundation",
            "Draw 2 (15-20%): Framing complete + roof dried in",
            "Draw 3 (15-20%): MEP rough-in complete (electrical, plumbing, HVAC)",
            "Draw 4 (15-20%): Drywall + interior rough complete",
            "Draw 5 (15-20%): Interior finishes (cabinets, flooring, paint)",
            "Draw 6 (10-15%): Final completion + Certificate of Occupancy",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Draw Percentages Vary",
          content:
            "Every lender has their own draw schedule. Some use 5 draws, some use 7. The percentages are based on your specific budget breakdown. Review the draw schedule carefully before closing.",
        },
        {
          type: "heading",
          content: "The Draw Request Process",
        },
        {
          type: "list",
          items: [
            "1. Builder completes phase work",
            "2. Builder submits draw request to lender with documentation",
            "3. Lender orders inspection to verify work completion",
            "4. Inspector confirms work matches draw request",
            "5. Lender approves and disburses funds (typically 3-7 business days)",
            "6. Builder receives payment and begins next phase",
          ],
        },
        {
          type: "heading",
          content: "Draw Inspections",
        },
        {
          type: "text",
          content:
            "Before releasing each draw, the lender sends an inspector to verify work completion:",
        },
        {
          type: "list",
          items: [
            "Independent inspector: Usually a third-party appraiser or inspector",
            "Cost: $100-200 per inspection (you pay, part of closing costs or per draw)",
            "What they check: Work completion percentage matches draw request",
            "Documentation: Photos and written report to lender",
            "Timing: Usually scheduled within 2-3 days of request",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Front Your Own Money",
          content:
            "Some owners pay their builder ahead of draws to 'keep things moving.' This is risky. If the builder disappears or the project fails, you've lost that money. Let the draw process work as designed.",
        },
        {
          type: "heading",
          content: "Managing Cash Flow Between Draws",
        },
        {
          type: "text",
          content:
            "The gap between work completion and draw disbursement creates cash flow challenges:",
        },
        {
          type: "list",
          items: [
            "Builder may need to float costs for 1-2 weeks",
            "Subcontractors expect payment upon completion",
            "Material suppliers may require upfront payment",
            "Good builders have working capital to manage this",
            "Your contingency fund helps bridge unexpected gaps",
          ],
        },
        {
          type: "heading",
          content: "Holdback and Retainage",
        },
        {
          type: "text",
          content:
            "Lenders often hold back a portion of each draw as protection:",
        },
        {
          type: "list",
          items: [
            "Retainage: 5-10% withheld from each draw",
            "Released at final completion after CO and final inspection",
            "Ensures builder completes punch list items",
            "Also protects against mechanic's liens from unpaid subs",
            "Budget for this in your builder contract",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Lien Laws",
          content:
            "Georgia has strong mechanic's lien laws. Subcontractors and suppliers can lien your property if they're not paid, even if you paid your builder. Lenders often require lien waivers with each draw to protect against this.",
        },
        {
          type: "heading",
          content: "Common Draw Problems",
        },
        {
          type: "list",
          items: [
            "Work not complete: Inspector finds work isn't finished — draw delayed",
            "Budget overruns: Costs exceed budget line item — may need to bring cash",
            "Change orders: Approved changes require draw schedule modification",
            "Inspector disagreement: Builder and inspector disagree on completion %",
            "Documentation missing: Permit inspections, lien waivers not provided",
          ],
        },
        {
          type: "heading",
          content: "Tips for Smooth Draws",
        },
        {
          type: "list",
          items: [
            "Review draw schedule before closing — understand the milestones",
            "Stay involved — know where the project stands vs. the draw schedule",
            "Keep copies of all permit inspections",
            "Collect lien waivers from subs as work completes",
            "Don't let draws get ahead of work — it reduces your protection",
            "Communicate with your builder about draw timing",
          ],
        },
      ],
      keyTakeaways: [
        "Draws release funds in stages as construction progresses",
        "Lender inspections verify work before each disbursement",
        "Retainage (5-10%) is held until final completion",
        "Never pay your builder ahead of the draw schedule",
        "Georgia mechanic's lien laws mean lien waivers are important",
      ],
    },

    // Lesson 4: Building Your Budget
    {
      id: "3-4",
      moduleId: "3",
      order: 4,
      title: "Building Your Budget",
      subtitle: "Creating a complete and realistic construction budget",
      duration: "12 min read",
      content: [
        {
          type: "text",
          content:
            "Your construction budget is the financial blueprint for your project. An incomplete or unrealistic budget leads to funding shortfalls, stress, and compromises. This lesson helps you build a comprehensive budget that accounts for everything.",
        },
        {
          type: "heading",
          content: "The Complete Project Budget",
        },
        {
          type: "text",
          content:
            "A complete budget includes much more than just construction costs:",
        },
        {
          type: "list",
          items: [
            "Land cost (purchase price + closing costs)",
            "Site development (clearing, grading, utilities, driveway)",
            "Construction (the house itself — 'hard costs')",
            "Soft costs (permits, design, inspections, fees)",
            "Financing costs (interest, loan fees, closing costs)",
            "Contingency (buffer for unknowns — 10% minimum)",
          ],
        },
        {
          type: "heading",
          content: "Land Costs",
        },
        {
          type: "list",
          items: [
            "Purchase price",
            "Closing costs (2-5% of purchase price)",
            "Survey ($400-1,500)",
            "Soil test / perc test ($300-800)",
            "Environmental assessment if needed ($1,500-5,000)",
          ],
        },
        {
          type: "heading",
          content: "Site Development Costs",
        },
        {
          type: "list",
          items: [
            "Tree clearing ($1,000-10,000+ depending on lot)",
            "Grading and earthwork ($5,000-20,000)",
            "Driveway ($3,000-15,000 depending on length)",
            "Well ($8,000-15,000 if no public water)",
            "Septic system ($10,000-25,000 if no sewer)",
            "Utility connections (electric, gas, water tap fees)",
            "Erosion control ($1,000-3,000)",
            "Retaining walls if needed ($5,000-30,000+)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Site Costs Surprise Many Buyers",
          content:
            "Site development often costs $30,000-80,000 for difficult lots. This is ON TOP of the house construction cost. Get a site work bid BEFORE finalizing your land purchase.",
        },
        {
          type: "heading",
          content: "Construction Costs (Hard Costs)",
        },
        {
          type: "text",
          content:
            "This is the cost to build the actual house. A detailed line-item budget includes:",
        },
        {
          type: "list",
          items: [
            "Foundation: $15,000-40,000",
            "Framing (labor + materials): $40,000-100,000",
            "Roofing: $10,000-30,000",
            "Windows and exterior doors: $10,000-40,000",
            "Siding/exterior: $15,000-50,000",
            "Electrical: $15,000-35,000",
            "Plumbing: $15,000-35,000",
            "HVAC: $12,000-30,000",
            "Insulation: $5,000-15,000",
            "Drywall: $15,000-35,000",
            "Interior doors and trim: $8,000-25,000",
            "Cabinets: $10,000-50,000+",
            "Countertops: $3,000-20,000+",
            "Flooring: $10,000-40,000",
            "Paint: $5,000-15,000",
            "Fixtures and hardware: $5,000-20,000",
            "Appliances: $5,000-25,000",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Construction Cost Ranges (2024)",
          content:
            "Budget: $120-160/sq ft | Mid-range: $180-250/sq ft | Custom/High-end: $300-450+/sq ft. These are construction costs only, not including land or site work. Metro Atlanta runs 10-20% higher than rural Georgia.",
        },
        {
          type: "heading",
          content: "Soft Costs",
        },
        {
          type: "list",
          items: [
            "Architectural plans: $3,000-30,000 (or 5-15% of construction)",
            "Engineering (structural, civil): $2,000-10,000",
            "Building permits: $2,000-10,000 depending on jurisdiction",
            "Impact fees: $2,000-15,000 (varies widely by county)",
            "Inspections (private, beyond code): $500-2,000",
            "Builder's risk insurance: $2,000-5,000",
            "Title insurance and legal: $2,000-5,000",
          ],
        },
        {
          type: "heading",
          content: "Financing Costs",
        },
        {
          type: "list",
          items: [
            "Loan origination fee: 0.5-1.5% of loan amount",
            "Appraisal fee: $500-1,000",
            "Construction interest: $15,000-40,000 (depends on rate and timeline)",
            "Closing costs: 2-5% of loan amount",
            "Rate lock fee (if applicable): 0-0.5%",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Estimating Construction Interest",
          content:
            "You pay interest only on funds disbursed. If your $400K loan is disbursed evenly over 12 months at 8%, you'd pay interest on an average balance of ~$200K, or about $16,000 in construction interest. Faster builds = less interest.",
        },
        {
          type: "heading",
          content: "Contingency",
        },
        {
          type: "text",
          content:
            "Contingency is your buffer for unknowns. Construction ALWAYS has surprises:",
        },
        {
          type: "list",
          items: [
            "Minimum: 10% of construction cost",
            "Recommended for first-timers: 15%",
            "Complex projects or difficult sites: 20%",
            "What it covers: Weather delays, material price increases, hidden site conditions, design changes, errors",
            "If unused: Congratulations — apply it to finishes or keep it",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Skip Contingency",
          content:
            "Cutting contingency to make your budget 'work' is a recipe for disaster. Something WILL go wrong. Without contingency, you'll either stop construction, slash quality, or scramble for additional financing at the worst time.",
        },
        {
          type: "heading",
          content: "Sample Complete Budget",
        },
        {
          type: "text",
          content:
            "Here's a complete budget for a 2,000 sq ft mid-range home in suburban Georgia:",
        },
        {
          type: "list",
          items: [
            "Land (0.5 acre): $50,000",
            "Land closing costs: $3,000",
            "Site development: $35,000",
            "Construction ($210/sq ft): $420,000",
            "Soft costs: $25,000",
            "Financing costs: $30,000",
            "Contingency (10%): $42,000",
            "TOTAL PROJECT: $605,000",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Build the Budget First",
          content:
            "Create your complete budget BEFORE designing the house. Know your total available funds, subtract land, site work, soft costs, financing, and contingency. What remains is your actual construction budget for the house.",
        },
      ],
      keyTakeaways: [
        "Total project cost includes land, site work, construction, soft costs, financing, and contingency",
        "Site development can add $30,000-80,000+ to 'cheap' land",
        "Construction interest during the build adds $15,000-40,000",
        "Never budget less than 10% contingency (15% recommended)",
        "Build your budget first, then design to fit it",
      ],
      georgiaNote:
        "Georgia impact fees and permit costs vary dramatically by county. Gwinnett County impact fees can exceed $10,000, while some rural counties charge under $1,000. Research your specific county early.",
      quiz: [
        {
          id: "3-4-q1",
          question: "What is the minimum recommended contingency for a construction budget?",
          options: [
            "5%",
            "10%",
            "20%",
            "No contingency is needed if you plan well",
          ],
          correctIndex: 1,
          explanation:
            "10% contingency is the minimum recommended, with 15% better for first-time builders. Construction always has surprises — contingency prevents them from derailing your project.",
        },
      ],
    },

    // Lesson 5: Owner-Builder Financing
    {
      id: "3-5",
      moduleId: "3",
      order: 5,
      title: "Owner-Builder Financing",
      subtitle: "Options when you're your own general contractor",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Acting as your own general contractor can save 15-25% on construction costs. But financing an owner-builder project is significantly harder. Most mainstream lenders won't do it. This lesson covers your options.",
        },
        {
          type: "heading",
          content: "Why Lenders Avoid Owner-Builders",
        },
        {
          type: "list",
          items: [
            "Higher risk: Inexperienced management increases failure risk",
            "No licensed contractor: No professional accountability",
            "Insurance gaps: Builder's risk and liability more complex",
            "Budget overruns: More common without professional oversight",
            "Timeline delays: Inexperience leads to scheduling problems",
            "Quality concerns: May affect completed value/appraisal",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "The Reality",
          content:
            "Most banks, credit unions, and mortgage companies will simply say 'no' to owner-builder construction loans. This isn't negotiable — it's their policy. Don't waste time trying to convince them.",
        },
        {
          type: "heading",
          content: "Option 1: Self-Funding",
        },
        {
          type: "text",
          content:
            "The simplest solution is to pay for construction yourself:",
        },
        {
          type: "list",
          items: [
            "Pay cash for land and construction",
            "No lender restrictions or oversight",
            "Get a mortgage AFTER completion if needed",
            "Requires substantial liquid assets ($300,000+)",
            "Home equity line of credit (HELOC) on existing home may help",
          ],
        },
        {
          type: "heading",
          content: "Option 2: Specialized Owner-Builder Lenders",
        },
        {
          type: "text",
          content:
            "A few lenders specialize in owner-builder loans. They exist but have different requirements:",
        },
        {
          type: "list",
          items: [
            "Higher down payment: 25-35% typical (vs. 20% for GC builds)",
            "Higher rates: 1-2% above standard construction loans",
            "More documentation: Detailed budget, sub contracts, your experience",
            "Stricter draws: More inspections, smaller draws",
            "Experience requirements: Some require previous construction experience",
            "Construction management plan: Detailed schedule and management approach",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Owner-Builder Lenders",
          content:
            "Some community banks and credit unions in Georgia will consider owner-builder loans on a case-by-case basis. Farm credit lenders (AgGeorgia, AgSouth) may finance owner-builders for rural properties. Expect to make many phone calls.",
        },
        {
          type: "heading",
          content: "Option 3: Construction Manager Arrangement",
        },
        {
          type: "text",
          content:
            "A hybrid approach that satisfies lenders while keeping you in control:",
        },
        {
          type: "list",
          items: [
            "Hire a licensed GC as 'construction manager' for a flat fee",
            "GC pulls permits and is contractor of record",
            "YOU manage day-to-day, hire subs, make decisions",
            "GC provides oversight, signs off on draws",
            "Fee typically 5-10% of construction cost",
            "Satisfies lender requirement for licensed contractor",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best of Both Worlds",
          content:
            "A construction manager arrangement can save money while getting standard financing. You do the work of a GC, but have a professional backstop. Some lenders specifically allow this arrangement.",
        },
        {
          type: "heading",
          content: "Option 4: Staged Approach",
        },
        {
          type: "text",
          content:
            "Build in phases, financing as you go:",
        },
        {
          type: "list",
          items: [
            "Phase 1: Buy land with land loan or cash",
            "Phase 2: Build to 'dried in' with personal funds",
            "Phase 3: Get completion financing for finish work",
            "OR: Get renovation loan on partially complete structure",
            "Complex and not always possible, but creative option",
          ],
        },
        {
          type: "heading",
          content: "What Owner-Builder Lenders Want to See",
        },
        {
          type: "text",
          content:
            "If pursuing owner-builder financing, prepare to demonstrate:",
        },
        {
          type: "list",
          items: [
            "Experience: Any construction, project management, or related background",
            "Detailed budget: Line-item budget with realistic costs",
            "Signed sub contracts: Agreements from key trades (foundation, framing, etc.)",
            "Project schedule: Realistic timeline with milestones",
            "Contingency plan: What happens if you can't complete?",
            "Strong financials: Excellent credit, low DTI, significant reserves",
            "Skin in the game: Large down payment (30%+)",
          ],
        },
        {
          type: "heading",
          content: "Is Owner-Builder Right for You?",
        },
        {
          type: "list",
          items: [
            "Do you have construction or project management experience?",
            "Can you manage multiple contractors and schedules?",
            "Do you have time to be on-site regularly?",
            "Can you handle the financing challenges?",
            "Are you comfortable with ambiguity and problem-solving?",
            "Is the 15-25% savings worth the stress and risk?",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Honest Assessment",
          content:
            "Many people underestimate the time, stress, and expertise required to act as their own GC. The savings are real, but so are the challenges. A bad owner-builder experience can cost MORE than hiring a good GC.",
        },
      ],
      keyTakeaways: [
        "Most mainstream lenders won't finance owner-builders",
        "Self-funding (cash) is the simplest path for owner-builders",
        "Specialized owner-builder lenders exist but require more down payment and higher rates",
        "Construction manager arrangement can satisfy lenders while keeping you in control",
        "Be honest about whether owner-building is right for you",
      ],
      georgiaNote:
        "Georgia's owner-builder exemption allows you to build without a contractor's license, but doesn't help with financing. You must still live in the home 1 year before selling.",
    },

    // Lesson 6: Working with Lenders
    {
      id: "3-6",
      moduleId: "3",
      order: 6,
      title: "Working with Lenders",
      subtitle: "Choosing, applying, and maintaining a good relationship",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "Your construction lender is a partner for the next 6-18 months. Choosing the right lender and maintaining a good relationship makes the difference between a smooth build and constant frustration.",
        },
        {
          type: "heading",
          content: "Types of Construction Lenders",
        },
        {
          type: "list",
          items: [
            "Local/regional banks: Often best for construction loans, know local market",
            "Credit unions: Competitive rates, may be more flexible, membership required",
            "National banks: Less competitive on construction, may not offer it",
            "Mortgage brokers: Can shop multiple lenders, may find niche options",
            "Online lenders: Limited construction loan options currently",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Lender Recommendations",
          content:
            "For construction loans in Georgia, start with: Synovus, Atlantic Capital, Renasant, Ameris, South State. Credit unions like Delta Community, Georgia's Own, and LGE also offer construction programs. Farm credit (AgGeorgia, AgSouth) for rural builds.",
        },
        {
          type: "heading",
          content: "What to Compare",
        },
        {
          type: "text",
          content:
            "Get quotes from at least 3-4 lenders. Compare these factors:",
        },
        {
          type: "list",
          items: [
            "Interest rate (construction phase and permanent phase)",
            "Down payment required",
            "Closing costs and fees",
            "Draw schedule and process",
            "Inspection process and timing",
            "Rate lock options and cost",
            "Builder approval requirements",
            "Experience with construction loans (ask how many they do)",
            "Responsiveness (how quickly do they reply?)",
          ],
        },
        {
          type: "heading",
          content: "Questions to Ask Lenders",
        },
        {
          type: "list",
          items: [
            "How many construction loans do you close per year?",
            "What's your typical timeline from application to closing?",
            "How quickly are draws processed after inspection?",
            "What happens if construction costs exceed the budget?",
            "What are your builder approval requirements?",
            "Can I lock my permanent rate at closing?",
            "What documentation do you need from me and my builder?",
            "Who will be my point of contact during construction?",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Experience Matters",
          content:
            "A lender who does 5 construction loans a year will handle your project differently than one who does 100. Experienced construction lenders have smoother processes and understand builder needs.",
        },
        {
          type: "heading",
          content: "The Application Process",
        },
        {
          type: "list",
          items: [
            "1. Pre-qualification: Initial review of your finances (quick, non-binding)",
            "2. Full application: Submit all documentation",
            "3. Processing: Lender verifies income, assets, credit",
            "4. Builder approval: Lender reviews builder credentials",
            "5. Appraisal: 'As-completed' appraisal of planned home",
            "6. Underwriting: Final review and approval",
            "7. Closing: Sign documents, funds available for first draw",
          ],
        },
        {
          type: "heading",
          content: "Timeline Expectations",
        },
        {
          type: "list",
          items: [
            "Pre-qualification: 1-3 days",
            "Full application to approval: 3-6 weeks",
            "Appraisal: 2-3 weeks",
            "Closing after approval: 1-2 weeks",
            "Total: 6-10 weeks from application to closing",
            "Start the process EARLY — before you're ready to break ground",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Wait",
          content:
            "Start your loan application while finalizing plans and builder selection. Financing takes longer than most expect. Running out of time creates pressure to accept worse terms.",
        },
        {
          type: "heading",
          content: "During Construction",
        },
        {
          type: "text",
          content:
            "Maintaining a good lender relationship during construction:",
        },
        {
          type: "list",
          items: [
            "Respond quickly to lender requests",
            "Keep them informed of any issues or changes",
            "Submit draw requests promptly with complete documentation",
            "Address inspection findings immediately",
            "Don't surprise them — communicate proactively",
            "Follow the approved plans and budget",
          ],
        },
        {
          type: "heading",
          content: "When Things Go Wrong",
        },
        {
          type: "text",
          content:
            "Construction rarely goes exactly to plan. Here's how to handle common issues:",
        },
        {
          type: "list",
          items: [
            "Budget overrun: Notify lender immediately. You may need to bring cash or request a loan modification.",
            "Timeline delay: Communicate early. Extensions are usually possible but may have fees.",
            "Change orders: Get lender approval for significant changes before proceeding.",
            "Builder issues: Involve lender if you're considering changing builders.",
            "Inspection problems: Work with builder to address quickly; delays compound.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "The Golden Rule",
          content:
            "No surprises. Lenders can work with problems they know about. They can't help with problems you hide. When something goes wrong, call your lender before it becomes a crisis.",
        },
      ],
      keyTakeaways: [
        "Local and regional banks often have the best construction loan programs",
        "Compare at least 3-4 lenders on rates, fees, and experience",
        "Start the loan process 6-10 weeks before you need to close",
        "Maintain proactive communication throughout construction",
        "No surprises — tell your lender about problems early",
      ],
    },

    // Lesson 7: Protecting Your Investment
    {
      id: "3-7",
      moduleId: "3",
      order: 7,
      title: "Protecting Your Investment",
      subtitle: "Insurance, contracts, and risk management during construction",
      duration: "10 min read",
      content: [
        {
          type: "text",
          content:
            "A construction project involves significant risk — theft, damage, injuries, contractor disputes, and more. Proper insurance and contracts protect your investment. Skimping here can be catastrophic.",
        },
        {
          type: "heading",
          content: "Builder's Risk Insurance",
        },
        {
          type: "text",
          content:
            "Builder's risk (also called 'course of construction' insurance) protects the structure during construction:",
        },
        {
          type: "list",
          items: [
            "Covers: Fire, theft, vandalism, weather damage, some accidents",
            "What's insured: Structure, materials on site, sometimes materials in transit",
            "Not covered: Usually excludes flood, earthquake, faulty workmanship",
            "Who buys it: Either you or your builder (clarify in contract)",
            "Cost: $2,000-5,000 for typical home (one-time premium)",
            "Coverage amount: Should match construction budget",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Don't Skip This",
          content:
            "A fire can destroy months of work overnight. Theft of materials happens regularly. Builder's risk insurance is NOT optional. Verify coverage is in place before construction starts.",
        },
        {
          type: "heading",
          content: "General Liability Insurance",
        },
        {
          type: "text",
          content:
            "Liability insurance covers injuries and property damage during construction:",
        },
        {
          type: "list",
          items: [
            "Your builder should carry: General liability ($1M+ coverage typical)",
            "Covers: Injuries to visitors, damage to neighboring property, accidents",
            "Verify: Get certificate of insurance naming you as additional insured",
            "Workers' comp: Builder must have this too (covers worker injuries)",
            "Don't assume: Ask for proof — some contractors let coverage lapse",
          ],
        },
        {
          type: "heading",
          content: "Workers' Compensation",
        },
        {
          type: "list",
          items: [
            "Covers: Medical costs and lost wages for injured workers",
            "Required: Georgia requires workers' comp for most contractors",
            "Without it: YOU could be liable for worker injuries on your property",
            "Verify: Get certificate showing current workers' comp coverage",
            "Subcontractors: Should also have their own coverage",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Workers' Comp Requirements",
          content:
            "Georgia requires workers' comp insurance for employers with 3+ employees. However, some small contractors claim exemptions. Regardless of legal requirements, ensure everyone on your job site is covered — an injury could result in a lawsuit against YOU.",
        },
        {
          type: "heading",
          content: "The Construction Contract",
        },
        {
          type: "text",
          content:
            "Your contract with the builder is your primary protection. Key elements:",
        },
        {
          type: "list",
          items: [
            "Scope of work: Detailed description of what's included (and excluded)",
            "Plans and specs: Reference to specific drawings and specifications",
            "Price: Fixed price or cost-plus, clearly stated",
            "Payment schedule: Draw schedule tied to milestones",
            "Timeline: Start date, completion date, consequences for delays",
            "Change order process: How changes are documented and priced",
            "Warranty: What's covered and for how long",
            "Dispute resolution: How disagreements are handled",
            "Termination: How either party can exit the contract",
          ],
        },
        {
          type: "heading",
          content: "Fixed Price vs. Cost-Plus Contracts",
        },
        {
          type: "comparison",
          columns: [
            {
              title: "Fixed Price",
              items: [
                "Set total price upfront",
                "Builder absorbs overruns",
                "You get budget certainty",
                "Less flexibility for changes",
                "Builder adds margin for risk",
              ],
            },
            {
              title: "Cost-Plus",
              items: [
                "Pay actual costs + fee (%)",
                "You absorb overruns",
                "More flexibility for changes",
                "Requires trust and oversight",
                "Can be cheaper if smooth",
              ],
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "For First-Timers",
          content:
            "Fixed-price contracts are generally safer for first-time builders. You have budget certainty, and the builder is motivated to control costs. Cost-plus works well with trusted builders on complex projects.",
        },
        {
          type: "heading",
          content: "Mechanic's Liens",
        },
        {
          type: "text",
          content:
            "Georgia has strong mechanic's lien laws that can affect you:",
        },
        {
          type: "list",
          items: [
            "What: Subcontractors and suppliers can place liens on your property",
            "When: If they're not paid, even if you paid your builder",
            "Risk: You could pay twice — once to builder, once to clear liens",
            "Protection: Collect lien waivers with each draw",
            "Lien waiver: Document where sub/supplier confirms payment received",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Lien Waivers Are Critical",
          content:
            "Before each draw is disbursed, collect lien waivers from all subs and suppliers who worked on that phase. Your lender will likely require this, but even if they don't — do it anyway. It's your protection.",
        },
        {
          type: "heading",
          content: "Other Protections",
        },
        {
          type: "list",
          items: [
            "Permit in your name: Ensure permits are pulled in YOUR name, not builder's",
            "Regular site visits: Visit the site at least weekly during construction",
            "Photo documentation: Take photos at each stage",
            "Keep all documents: Contracts, change orders, receipts, correspondence",
            "Don't over-pay: Keep payments tied to actual work completed",
            "Title insurance: Protects against title defects, may cover some lien issues",
          ],
        },
        {
          type: "heading",
          content: "If Things Go Wrong",
        },
        {
          type: "list",
          items: [
            "Document everything: Keep records of all issues and communications",
            "Written notice: Send concerns in writing, keep copies",
            "Mediation: Many contracts require mediation before litigation",
            "Georgia Licensing Board: Can file complaints against licensed contractors",
            "Attorney: Consult one early if disputes arise — don't wait",
          ],
        },
        {
          type: "callout",
          variant: "georgia",
          title: "Georgia Resources",
          content:
            "File contractor complaints with the Georgia Licensing Board for Residential and General Contractors. They can investigate, impose fines, and revoke licenses. However, they cannot award you money damages — that requires legal action.",
        },
      ],
      keyTakeaways: [
        "Builder's risk insurance protects the structure during construction — don't skip it",
        "Verify your builder has liability insurance AND workers' comp",
        "Get everything in a detailed written contract before starting",
        "Collect lien waivers with every draw to protect against mechanic's liens",
        "Document everything and visit the site regularly",
      ],
      georgiaNote:
        "Georgia's mechanic's lien laws are favorable to contractors and suppliers. Even if you paid your builder, unpaid subs can lien your property. Lien waivers are your protection — collect them religiously.",
      quiz: [
        {
          id: "3-7-q1",
          question: "What does builder's risk insurance cover?",
          options: [
            "Injuries to construction workers",
            "Damage to the structure during construction (fire, theft, weather)",
            "Your mortgage payments if you lose your job",
            "Builder mistakes in workmanship",
          ],
          correctIndex: 1,
          explanation:
            "Builder's risk insurance covers damage to the structure during construction, including fire, theft, vandalism, and weather damage. Worker injuries are covered by workers' comp.",
        },
        {
          id: "3-7-q2",
          question: "Why are lien waivers important?",
          options: [
            "They reduce your insurance premiums",
            "They prove you paid your property taxes",
            "They protect you from paying twice if your builder doesn't pay subcontractors",
            "They are required for the final inspection",
          ],
          correctIndex: 2,
          explanation:
            "Lien waivers confirm that subcontractors and suppliers have been paid. Without them, unpaid subs can place liens on your property — even if you paid your builder in full.",
        },
      ],
    },
  ],
};
