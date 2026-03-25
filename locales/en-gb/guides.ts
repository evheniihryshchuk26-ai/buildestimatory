import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Guides",

  index: {
    title: "Construction Guides",
    metaDescription:
      "In-depth construction guides for builders, contractors, and DIY enthusiasts. Learn about framing spacing, material selection, building regulations, and more.",
    heading: "Construction Guides",
    description:
      "In-depth guides to help you make better decisions on your next building project.",
    guides: [
      {
        title: "400mm vs 600mm Centres Spacing: Complete Guide",
        description:
          "Learn when to use 400mm vs 600mm centres spacing for studs, joists, and rafters. Includes Building Regulations requirements, cost comparison, and material impact.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
      {
        title: "Roof Pitch Chart: Complete Reference Guide",
        description:
          "Full roof pitch chart with degrees, slope percentages, and multipliers for every common pitch from 1:12 to 12:12. Includes material and climate recommendations.",
        href: "/guides/roof-pitch-chart",
      },
      {
        title: "Minimum Roof Pitch for Slates, Metal & Tile",
        description:
          "Find the minimum roof pitch required for concrete tiles, natural slate, standing seam metal, clay tile, and more. Includes Building Regulations references and low-slope solutions.",
        href: "/guides/minimum-roof-pitch-for-shingles",
      },
      {
        title: "Ready-Mix vs Bagged Concrete: Which Should You Use?",
        description:
          "Ready-mix vs bagged concrete compared: cost per cubic metre, strength, convenience, and best uses. Learn when to order a truck vs mix bags yourself.",
        href: "/guides/ready-mix-vs-bagged-concrete",
      },
      {
        title: "How Much Does Concrete Cost? 2026 Price Guide",
        description:
          "Concrete costs £80–£120 per cubic metre for ready-mix. Complete price guide covering slabs, footings, driveways, bagged concrete, labour costs, and saving tips.",
        href: "/guides/concrete-cost-guide",
      },
      {
        title: "How Much Paint Do I Need? Complete Guide",
        description:
          "How much paint for walls, ceilings, and trim? Complete guide covering measurement, coverage rates, coats, surface prep, and cost breakdown with calculator links.",
        href: "/guides/how-much-paint-do-i-need",
      },
      {
        title: "Timber Prices Guide: What Does Wood Cost?",
        description:
          "Current timber prices by species, grade, and size. Covers structural timber, engineered wood, plywood, price trends, where to buy, and bulk discounts.",
        href: "/guides/lumber-prices-guide",
      },
      {
        title: "Composite vs Wood Decking: Which Is Better?",
        description:
          "Composite vs wood decking compared: cost, durability, maintenance, appearance, and lifespan. Learn which deck material is best for your project and climate.",
        href: "/guides/composite-vs-wood-decking",
      },
    ],
  },

  spacingGuide: {
    title: "400mm vs 600mm Centres Spacing: Complete Guide",
    metaDescription:
      "400mm vs 600mm centres spacing explained: when to use each for wall studs, floor joists, roof rafters. Includes UK Building Regulations requirements, cost comparison, and material impact.",

    heroTitle: "400mm vs 600mm Centres Spacing",
    heroSubtitle: "Complete Guide",
    heroDescription:
      "Everything you need to know about choosing between 400mm and 600mm centres spacing for wall studs, floor joists, ceiling joists, and roof rafters.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "Use 400mm centres spacing for load-bearing walls, most floor joists, and any application where maximum structural strength is required. Use 600mm centres spacing for non-load-bearing internal partition walls, some roof trusses, and situations where regulations allow it and you want to reduce material costs by up to 33%.",

    whatIsHeading: "What Is Centres Spacing?",
    whatIsText1:
      "Centres (c/c) spacing is the distance measured from the centre of one framing member to the centre of the next. This is the standard way builders and Building Regulations specify the spacing of studs, joists, rafters, and trusses in timber-frame construction.",
    whatIsText2:
      "The two most common centres spacing measurements in residential construction are 400mm and 600mm. The choice between these two spacings affects structural capacity, material cost, insulation performance, and compatibility with standard building materials.",
    whatIsText3:
      "Standard building materials like 2400×1200mm plywood, OSB sheets, and plasterboard panels are manufactured in dimensions divisible by both 400 and 600mm, so panel edges always land on a framing member at either spacing.",

    comparisonHeading: "400mm vs 600mm Centres: Side-by-Side Comparison",
    comparisonSubheading:
      "How the two most common framing spacings compare across every major application.",
    comparisonCol1: "Application",
    comparisonCol2: "400mm Centres",
    comparisonCol3: "600mm Centres",
    comparisonRows: [
      {
        category: "Exterior Load-Bearing Walls",
        oc16: "Required by most designs for 89mm (38×89) stud walls. Strongest option.",
        oc24: "Allowed with 140mm (38×140) studs in some designs (check structural engineer's specification).",
      },
      {
        category: "Internal Non-Load-Bearing Walls",
        oc16: "Common but not required. More fixing points for kitchen units.",
        oc24: "Compliant with Building Regulations. Saves ~33% on stud material.",
      },
      {
        category: "Floor Joists (47×225, typical span)",
        oc16: "Spans up to ~4.9m with C16 graded timber. Stiffer floor.",
        oc24: "Spans up to ~4.0m with same timber. May feel bouncy.",
      },
      {
        category: "Ceiling Joists (non-loft storage)",
        oc16: "Standard for loft storage. Supports plasterboard plus loads.",
        oc24: "Adequate for plasterboard-only ceilings with no loft storage.",
      },
      {
        category: "Roof Rafters / Trusses",
        oc16: "Used in high snow-load areas (>1.0 kN/m² ground snow load).",
        oc24: "Standard for engineered trusses in moderate climate zones.",
      },
      {
        category: "Material Cost (per linear metre of wall)",
        oc16: "~£8–£12/m (more timber, more fixings).",
        oc24: "~£5–£8/m (fewer studs, less labour).",
      },
      {
        category: "Insulation",
        oc16: "Standard mineral wool batts for 89mm walls, full-fill for 140mm.",
        oc24: "Wider bays allow better insulation performance. Better thermal bridging ratio.",
      },
      {
        category: "Plasterboard Support",
        oc16: "Excellent fixing. Less risk of nail pops and sagging.",
        oc24: "Requires 15mm plasterboard on ceilings to prevent sag.",
      },
    ],

    when16Heading: "When to Use 400mm Centres Spacing",
    when16Intro:
      "400mm centres spacing is the more conservative and commonly used option. Here is when it is required or strongly recommended:",
    when16Items: [
      "Load-bearing exterior walls — Required by most structural designs for 89mm (38×89) wall assemblies carrying roof and floor loads.",
      "Floor joists for longer spans — 400mm centres allows joists to span greater distances. For a 47×225 C16 joist, 400mm centres spans up to 4.9m vs only 4.0m at 600mm centres.",
      "Areas supporting heavy finishes — Tile floors, stone worktops, or built-in cabinetry benefit from the extra support that 400mm centres framing provides.",
      "High wind or exposed zones — Building Regulations for exposed sites often mandate 400mm centres (or closer) for braced wall construction.",
      "Ceiling joists with loft storage — If the loft will be used for storage or future living space, 400mm centres provides the necessary load capacity.",
      "Walls with heavy cladding — Brick slips, render over sheathing, and fibre cement cladding all perform better with studs at 400mm centres.",
    ],
    when16Summary:
      "Bottom line: when in doubt, 400mm centres is the safer choice. The extra material cost is modest compared to the structural benefits.",

    when24Heading: "When to Use 600mm Centres Spacing",
    when24Intro:
      "600mm centres spacing uses fewer framing members and can save significant material and labour costs. Here is when it is appropriate:",
    when24Items: [
      "Non-load-bearing internal partition walls — Building Regulations allow 600mm centres for internal walls that carry no structural load. This is the most common application.",
      "Engineered roof trusses — Most manufactured trusses are designed for 600mm centres spacing. The truss engineering accounts for the wider spacing.",
      "Advanced framing construction — Uses 140mm studs at 600mm centres with single top plates, reducing timber by up to 30% while improving insulation.",
      "Gable end walls — Non-structural gable end walls above the roof line can typically use 600mm centres spacing.",
      "Ceiling joists (plasterboard only) — Where the ceiling only supports plasterboard with no loft storage above, 600mm centres is compliant.",
      "Budget-conscious projects — On a 185 m² home, switching non-load-bearing walls to 600mm centres can save £600–£900 in timber alone.",
    ],
    when24Summary:
      "Bottom line: 600mm centres is a smart choice where regulations allow it, especially for non-load-bearing walls and engineered trusses.",

    codeHeading: "Building Regulations Requirements",
    codeIntro:
      "UK Building Regulations and related standards provide specific guidance on when each spacing is permitted. Here are the key references:",
    codeItems: [
      "Approved Document A (Structure) — Sets out structural requirements for walls, floors, and roofs. Refers to BS 5268 / BS EN 1995 (Eurocode 5) for timber design.",
      "BS 5268-2 / BS EN 1995-1-1 — Timber design standards specifying allowable spans for joists, rafters, and studs at various spacings (400mm, 450mm, 600mm).",
      "TRADA span tables — Widely used in the UK to determine maximum joist and rafter spans for each timber grade, size, and spacing.",
      "Approved Document L (Conservation of fuel and power) — Impacts wall construction as thermal bridging through studs at 400mm centres is greater than at 600mm centres.",
      "BS 8103-3 — Structural design of low-rise buildings: timber. Covers stud wall requirements and spacing.",
      "Local authority building control may impose additional requirements. Always consult your local building control officer or approved inspector before finalising framing plans.",
    ],
    codeSummary:
      "Important: Building Regulations are minimum standards. Your structural engineer or building control officer may require closer spacing based on site-specific conditions like soil type, wind exposure, or snow load.",

    costHeading: "Cost Comparison: 400mm vs 600mm Centres",
    costIntro:
      "Material savings is one of the biggest reasons builders consider 600mm centres spacing. Here is how the numbers break down:",
    costText1:
      "For a standard 2.4-metre wall, 400mm centres spacing requires one stud every 400mm — roughly 2.5 studs per linear metre of wall. At 600mm centres, you need about 1.67 studs per linear metre. That is a 33% reduction in stud count.",
    costText2:
      "On a typical 185 m² single-storey home with ~60 linear metres of internal partitions, switching from 400mm to 600mm centres saves approximately 50 studs. At £4–£6 per stud (2026 pricing for 38×89×2400 C16 timber from Jewson or Travis Perkins), that is £200–£300 in studs alone. Factor in reduced fixings, reduced labour (fewer studs to cut, carry, and nail), and the savings reach £600–£900.",
    costText3:
      "However, do not use 600mm centres spacing just to save money on load-bearing walls. The cost of a structural failure or Building Regulations non-compliance far exceeds any material savings. The savings apply only where 600mm centres is compliant.",

    impactHeading: "Impact on Other Materials",
    impactIntro:
      "Your framing spacing does not just affect timber. It has a ripple effect across multiple building systems:",
    impactInsulationHeading: "Insulation",
    impactInsulationText:
      "Mineral wool batts come in widths designed for both 400mm and 600mm centres bays. At 400mm centres, standard batts are 370mm wide. At 600mm centres, batts are 570mm wide. The wider bays at 600mm centres actually improve thermal performance because there are fewer studs acting as thermal bridges. In advanced framing, 140mm studs at 600mm centres can achieve significantly better U-values with standard mineral wool batts.",
    impactDrywallHeading: "Plasterboard",
    impactDrywallText:
      "Standard 12.5mm plasterboard works well on walls at either 400mm or 600mm centres. However, on ceilings, 15mm plasterboard is required when joists or trusses are spaced at 600mm centres to prevent sagging. 15mm plasterboard costs about 20–30% more per board than 12.5mm, which partially offsets the framing savings.",
    impactSheathingHeading: "Sheathing and Cladding",
    impactSheathingText:
      "2400×1200mm plywood and OSB panels work at both spacings since their edges land on framing members. However, at 600mm centres, the panel spans a greater unsupported distance between studs. For structural sheathing (like wall bracing), verify the panel rating matches the stud spacing. Panels rated for 600mm centres are required when using 600mm spacing on structural sheathing applications.",

    calculatorCtaHeading: "Calculate Your Materials",
    calculatorCtaText:
      "Use our free calculators to get exact material quantities for your project at either 400mm or 600mm centres spacing:",
    calculatorLinks: [
      {
        label: "Stud Calculator",
        href: "/calculators/wall-framing/stud-calculator",
        description: "Calculate the number of studs needed for any wall length and spacing.",
      },
      {
        label: "Floor Joist Calculator",
        href: "/calculators/floor-framing/floor-joist-calculator",
        description: "Determine joist count, spacing, and rim board for your floor system.",
      },
      {
        label: "Rafter Calculator",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calculate rafters needed based on roof span, spacing, and pitch.",
      },
      {
        label: "Roof Truss Calculator",
        href: "/calculators/roofing/roof-truss-calculator",
        description: "Estimate truss count and spacing for your roof system.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can I use 600mm centres spacing for exterior walls?",
        answer:
          "Yes, but only with 140mm (38×140) studs and approved structural sheathing in most designs. The structural engineer's specification must confirm that 600mm centres is acceptable for the load conditions. Always verify with your structural engineer and building control officer.",
      },
      {
        question: "Is 400mm or 600mm centres better for hanging kitchen units?",
        answer:
          "400mm centres is better for kitchen unit installation because it provides more fixing points. With studs at 400mm centres, a 900mm wall unit will hit at least two studs. At 600mm centres, a narrow unit might only catch one stud, requiring additional fixings such as wall plugs or a batten for the other attachment point.",
      },
      {
        question: "What does centres spacing mean in construction?",
        answer:
          "Centres (abbreviated c/c) means the distance is measured from the centre of one framing member to the centre of the adjacent member. For 400mm centres studs, the centre of each stud is 400mm from the centre of the next stud. This standardised measurement ensures consistent spacing and compatibility with 1200mm and 2400mm panel materials.",
      },
      {
        question: "How much money does 600mm centres spacing save?",
        answer:
          "Switching from 400mm to 600mm centres on non-load-bearing walls saves approximately 33% on stud material. For a typical 185 m² home, this translates to £600–£900 in combined timber, fixing, and labour savings. The exact amount depends on local timber prices and labour rates.",
      },
      {
        question: "Can I use 12.5mm plasterboard on 600mm centres ceiling joists?",
        answer:
          "No. 15mm plasterboard is required on ceilings where framing is spaced at 600mm centres to prevent sagging. Using 12.5mm plasterboard at this spacing will cause sagging over time, especially in humid conditions. On walls, 12.5mm plasterboard is acceptable at 600mm centres.",
      },
      {
        question: "What is advanced framing?",
        answer:
          "Advanced framing is a framing technique that uses 140mm studs at 600mm centres with single top plates, two-stud corners, and ladder blocking. It reduces timber use by up to 30% while allowing thicker insulation and improved U-values. It is recognised by UK Building Regulations and promoted for improved energy performance under Approved Document L.",
      },
      {
        question: "Do roof trusses use 400mm or 600mm centres spacing?",
        answer:
          "Most engineered roof trusses are designed for 600mm centres spacing. The truss manufacturer engineers each truss to carry the required loads at the specified spacing. However, in areas with heavy snow loads (above 1.0 kN/m² ground snow load), 400mm centres truss spacing may be specified by the structural engineer.",
      },
      {
        question: "Does stud spacing affect energy efficiency?",
        answer:
          "Yes. Studs act as thermal bridges, conducting heat through the wall assembly. At 400mm centres, studs make up about 25% of the wall area, reducing the effective U-value. At 600mm centres, studs account for only about 17% of the wall area, which improves the whole-wall U-value. Combined with 140mm framing, 600mm centres spacing can improve wall energy efficiency by 15–20%, helping meet Approved Document L requirements.",
      },
    ],
  },
  roofPitchChart: {
    title: "Roof Pitch Chart: Complete Reference Guide",
    metaDescription:
      "Roof pitch chart showing degrees, slope percentage, and multiplier for every pitch from 1:12 to 12:12. Learn which pitch works best for your roofing material, climate, and budget.",

    heroTitle: "Roof Pitch Chart",
    heroSubtitle: "Complete Reference Guide",
    heroDescription:
      "A full reference chart covering every standard roof pitch from 1:12 through 12:12, including degree conversions, slope percentages, area multipliers, and guidance on materials and climate.",

    quickRefHeading: "Roof Pitch Quick Reference Table",
    quickRefSubheading:
      "All common roof pitches with their degree equivalents, slope percentages, and area multipliers. The multiplier tells you how much larger the roof surface is compared to the flat footprint.",
    quickRefColPitch: "Pitch (Rise:Run)",
    quickRefColDegrees: "Degrees",
    quickRefColSlope: "Slope %",
    quickRefColMultiplier: "Multiplier",
    quickRefColDescription: "Description",
    quickRefRows: [
      { pitch: "1:12", degrees: "4.76°", slopePercent: "8.3%", multiplier: "1.003", description: "Nearly flat — membrane or built-up only" },
      { pitch: "2:12", degrees: "9.46°", slopePercent: "16.7%", multiplier: "1.014", description: "Low slope — minimum for tiles w/ underlayment" },
      { pitch: "3:12", degrees: "14.04°", slopePercent: "25.0%", multiplier: "1.031", description: "Low slope — metal panels, modified bitumen" },
      { pitch: "4:12", degrees: "18.43°", slopePercent: "33.3%", multiplier: "1.054", description: "Standard minimum for concrete tiles" },
      { pitch: "5:12", degrees: "22.62°", slopePercent: "41.7%", multiplier: "1.083", description: "Common residential — good drainage" },
      { pitch: "6:12", degrees: "26.57°", slopePercent: "50.0%", multiplier: "1.118", description: "Popular residential pitch in the UK" },
      { pitch: "7:12", degrees: "30.26°", slopePercent: "58.3%", multiplier: "1.158", description: "Moderate steep — traditional style" },
      { pitch: "8:12", degrees: "33.69°", slopePercent: "66.7%", multiplier: "1.202", description: "Upper range of standard pitches" },
      { pitch: "9:12", degrees: "36.87°", slopePercent: "75.0%", multiplier: "1.250", description: "Steep — good snow shedding" },
      { pitch: "10:12", degrees: "39.81°", slopePercent: "83.3%", multiplier: "1.302", description: "Steep — requires extra safety measures" },
      { pitch: "11:12", degrees: "42.51°", slopePercent: "91.7%", multiplier: "1.357", description: "Very steep — gothic and Victorian styles" },
      { pitch: "12:12", degrees: "45.00°", slopePercent: "100.0%", multiplier: "1.414", description: "45-degree angle — maximum common pitch" },
    ],

    readingHeading: "How to Read Roof Pitch Notation",
    readingText1:
      "Roof pitch is expressed as a ratio of vertical rise to horizontal run. When you see \"6:12\" (also written 6/12), it means the roof rises 6 units for every 12 units of horizontal distance. In the UK, pitch is also commonly expressed in degrees — a 6:12 pitch is approximately 26.6 degrees.",
    readingText2:
      "You can convert any pitch to degrees using the formula: degrees = arctan(rise / run). For a 6:12 pitch, that is arctan(6/12) = 26.57 degrees. The slope percentage is simply (rise / run) × 100, so a 6:12 pitch has a 50% slope.",
    readingText3:
      "The area multiplier is calculated as the square root of (1 + (rise/run)²). This number tells you how much roofing material you need compared to the flat footprint of the building. A 6:12 roof requires 11.8% more material than the flat area, while a 12:12 roof requires 41.4% more.",

    lowSlopeHeading: "Low Slope Pitches (1:12 – 3:12)",
    lowSlopeIntro:
      "Low slope roofs are common on commercial buildings, modern residential designs, and extensions like porches and carports. They require special attention to waterproofing because water drains slowly.",
    lowSlopeItems: [
      "1:12 pitch — The absolute minimum for any roof. Requires continuous membrane roofing such as EPDM, single-ply, or built-up roofing (BUR). Standing seam metal with sealed seams is also acceptable at this pitch.",
      "2:12 pitch — The minimum pitch at which concrete interlocking tiles can be installed, but only with a fully lapped and sealed underlayment covering the entire deck. Most tile manufacturers will honour the warranty at 2:12 with proper underlayment.",
      "3:12 pitch — Metal roofing panels with exposed fixings can be used starting at this pitch. Modified bitumen roll roofing is also suitable. Drainage is still relatively slow, so high-quality underlayment is recommended.",
      "Materials for low-slope roofs cost more per square metre due to the additional underlayment and sealing requirements. Budget an extra £5–£15 per square metre for waterproofing on roofs below 4:12.",
      "Drainage is the primary concern. Standing water (ponding) can occur if the pitch is too low or if the structure deflects under load. Ponding voids most roofing warranties and accelerates deterioration.",
    ],
    lowSlopeSummary:
      "Low slope roofs are cost-effective for covering large areas but require premium waterproofing. Always use materials rated for the specific pitch.",

    standardHeading: "Standard Pitches (4:12 – 8:12)",
    standardIntro:
      "The 4:12 through 8:12 range covers the vast majority of residential roofs in the United Kingdom. These pitches provide good drainage, work with nearly all roofing materials, and are walkable for installation and maintenance.",
    standardItems: [
      "4:12 pitch — The standard minimum for concrete and clay tiles without special underlayment. Most Building Regulations and tile manufacturers specify approximately 17.5 degrees (close to 4:12) as the minimum pitch for a standard tile installation with appropriate underlayment.",
      "5:12 pitch — A popular choice for bungalows and single-storey homes. Provides excellent drainage while keeping the roof line relatively low. Roofers can walk this pitch comfortably without special equipment.",
      "6:12 pitch — A very common residential roof pitch in the UK. It provides a good balance between aesthetics, drainage, and loft space. Nearly all roofing materials perform well at this angle.",
      "7:12 and 8:12 pitches — Common on period-style and traditional homes. These pitches create a more prominent roof line and provide generous loft space. Roofers may begin using roof ladders and brackets for footing at 8:12.",
      "Insurance and resale value — Standard-pitch roofs are preferred by insurers because they shed water and debris effectively. Homes with 5:12 to 7:12 roofs tend to have the lowest roofing maintenance costs over time.",
    ],
    standardSummary:
      "Standard pitches are the sweet spot for residential construction: compatible with all common materials, easy to work on, and cost-effective.",

    steepHeading: "Steep Pitches (9:12 – 12:12)",
    steepIntro:
      "Steep roofs are found on A-frame cabins, Victorian homes, churches, and buildings in heavy-snow regions. They shed snow and rain quickly but cost more to build and maintain.",
    steepItems: [
      "9:12 and 10:12 pitches — Common in areas with heavy snowfall. The steep angle prevents heavy snow accumulation, reducing the risk of ice dams and structural overload. However, snow slides off rapidly, so snow guards or snow retention systems are often required to protect walkways below.",
      "11:12 and 12:12 pitches — Used for dramatic architectural effect on Victorian, gothic revival homes, and steep gable accents. A 12:12 pitch creates a perfect 45-degree angle. These roofs are difficult to walk on and require full scaffolding or harness systems for installation.",
      "Cost impact — Steep roofs use significantly more material (a 12:12 roof has 41.4% more surface area than a flat roof) and require more labour due to safety equipment and slower installation. Expect to pay 20–50% more for a steep roof compared to the same footprint at a standard pitch.",
      "Material considerations — Concrete tiles, natural slate, clay tiles, and cedar shingles all perform well on steep pitches. In fact, these materials often look best and last longest on steep roofs because water runs off quickly. Metal roofing with concealed fixings is also excellent.",
      "Wind resistance — Steep roofs catch more wind. In exposed coastal areas, steep pitches may require enhanced fixing schedules or wind-rated materials. Check local wind speed requirements before specifying a pitch above 8:12 in exposed regions.",
    ],
    steepSummary:
      "Steep pitches excel at shedding precipitation and provide dramatic kerb appeal, but they come at a premium in both materials and labour.",

    costHeading: "How Pitch Affects Roofing Cost",
    costIntro:
      "Roof pitch directly impacts the total cost of a roofing project in three ways: material quantity, labour difficulty, and waste factor.",
    costText1:
      "Material quantity increases with pitch because a steeper roof has more surface area. Use the multiplier from the chart above to estimate the true roof area. For example, a building with a 140 m² footprint and a 6:12 pitch has 140 × 1.118 = 156.5 m² of actual roof surface. At a 12:12 pitch, that same footprint has 140 × 1.414 = 198 m² — an extra 41.5 m² of material.",
    costText2:
      "Labour costs rise steeply above 8:12 pitch. Roofing crews need specialised safety equipment (harnesses, roof ladders, scaffolding), and installation speed drops by 25–40%. Most roofing contractors add a steep-charge surcharge for pitches above 8:12, typically ranging from £5 to £20 per square metre.",
    costText3:
      "Waste factor also increases on steep and complex roofs. Valleys, hips, and ridges on steep roofs generate more cut-off waste. Budget 10–15% waste for standard pitches and 15–20% for steep or complex roof geometries.",

    materialHeading: "Recommended Pitch by Roofing Material",
    materialIntro:
      "Each roofing material has a minimum and optimal pitch range. Using the right material for your pitch ensures proper drainage, warranty coverage, and maximum lifespan.",
    materialItems: [
      "Concrete interlocking tiles — Minimum approximately 17.5° (around 4:12). Optimal range 22°–45°. The most common roofing material in the UK, available from Marley, Redland, and Russell.",
      "Standing seam metal — Minimum 1:12 (with sealed seams). Optimal range 3:12 to 12:12. Excellent for low-slope and steep applications. Panels expand and contract with temperature, so standing seams allow thermal movement.",
      "Metal panels (exposed fastener) — Minimum 3:12. Optimal range 3:12 to 8:12. Less expensive than standing seam but not suitable for low-slope roofs due to exposed screw penetrations.",
      "Clay tiles — Minimum approximately 35° for plain tiles, 17.5° for interlocking. Optimal range 30°–45°. Traditional UK roofing material available from Dreadnought, Keymer, and Tudor.",
      "Natural slate — Minimum approximately 20° (varies by slate size and overlap). Optimal range 25°–45°. Welsh and Spanish slates offer 100+ year lifespans. Available from Welsh Slate, SSQ, and Burlington Stone.",
      "Fibre cement slates — Minimum approximately 20°. Optimal range 25°–45°. Manufactured by Marley Eternit and Cembrit. Lighter than natural slate and more affordable.",
      "Membrane (EPDM, single-ply, GRP) — Minimum 1° (0.25:12). Optimal range 1°–15°. Designed specifically for flat and low-slope roofs. Standard on flat-roofed extensions and dormers.",
      "Built-up roofing (BUR) — Minimum 1° (0.25:12). Optimal range 1°–15°. Multiple layers of bitumen and reinforcing fabric create a durable, waterproof membrane for flat commercial roofs.",
    ],

    climateHeading: "Best Roof Pitch by Climate",
    climateIntro:
      "Climate plays a major role in determining the ideal roof pitch. Here is how to match your pitch to your local weather conditions:",
    climateItems: [
      "Highland Scotland and heavy snow areas — Use 8:12 to 12:12 pitches to shed snow before it accumulates to dangerous levels. Install snow guards to control snow release. Steeper pitches reduce ice dam risk by preventing meltwater from pooling.",
      "Moderate snowfall areas (most of northern England, Scotland) — Use 6:12 to 9:12 pitches. These provide good snow shedding without the extra cost of very steep construction. Adequate loft ventilation is critical to prevent condensation.",
      "Heavy rainfall regions (Wales, Lake District, western Scotland) — Use 5:12 to 8:12 pitches for rapid water runoff. Select materials rated for high moisture like metal or clay tile. Ensure gutters and downpipes can handle peak flow rates.",
      "South-east England and drier climates — Use 4:12 to 6:12 pitches. Lower pitches reduce the amount of exposed roof surface. Flat roofs with membrane are also common on contemporary extensions.",
      "Exposed coastal and high wind zones — Use 4:12 to 6:12 pitches. Hip roofs with moderate pitches perform best in high winds. Avoid steep gable ends, which catch wind like a sail. Use wind-rated fixings and enhanced nailing patterns to BS 5534.",
      "Mixed climates — Use 5:12 to 7:12 pitches as a versatile choice that handles rain, moderate snow, and wind. This range is the most common across England and Wales for good reason.",
    ],

    calculatorCtaHeading: "Calculate Your Roof Materials",
    calculatorCtaText:
      "Use our free roofing calculators to estimate materials based on your roof pitch, area, and chosen material:",
    calculatorLinks: [
      {
        label: "Roof Pitch Calculator",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convert between pitch ratio, degrees, and slope percentage.",
      },
      {
        label: "Roof Area Calculator",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calculate true roof area from footprint and pitch.",
      },
      {
        label: "Roof Slope Calculator",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determine slope factor and material multiplier for any pitch.",
      },
      {
        label: "Rafter Calculator",
        href: "/calculators/roofing/rafter-calculator",
        description: "Calculate rafter length, count, and timber for your roof system.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is a 4/12 pitch in degrees?",
        answer:
          "A 4/12 roof pitch equals 18.43 degrees. This is calculated using the arctangent formula: arctan(4/12) = 18.43°. A 4:12 pitch is approximately the standard minimum slope for concrete tiles installed with conventional underlayment.",
      },
      {
        question: "What is the standard roof pitch for a house?",
        answer:
          "The most common residential roof pitch in the UK is between 5:12 and 7:12 (22–30 degrees). Traditional pitched roofs in England and Wales typically sit around 35–45 degrees for plain tiles and natural slate. The exact pitch depends on architectural style, climate, and roofing material.",
      },
      {
        question: "What is the roof pitch angle chart used for?",
        answer:
          "A roof pitch angle chart converts pitch ratios (like 6:12) to degrees, slope percentages, and area multipliers. Builders use it to determine the correct roofing material for a given pitch, calculate true roof area for material ordering, and verify compliance with Building Regulations and manufacturer requirements.",
      },
      {
        question: "How do I measure roof pitch from the ground?",
        answer:
          "You can estimate roof pitch from the ground using a roofing square and a spirit level held against the rake (angled edge) of the roof from a ladder. Alternatively, measure from inside the loft: place a spirit level horizontally against a rafter, measure 300mm along the level, then measure the vertical distance from that point down to the rafter. Calculate the ratio to find your pitch.",
      },
      {
        question: "What roof pitch is considered a flat roof?",
        answer:
          "Any roof with a pitch below approximately 10° (around 2:12) is generally classified as a low-slope or flat roof by Building Regulations and roofing manufacturers. Truly flat roofs still have a slight fall (typically 1:80 to 1:40) to allow water to drain to outlets or hoppers.",
      },
      {
        question: "Does roof pitch affect home insurance premiums?",
        answer:
          "Yes. Insurance companies consider roof pitch when calculating premiums. Standard pitches (4:12 to 8:12) typically receive the best rates because they shed water effectively without creating excessive wind exposure. Very low pitches may increase premiums due to leak risk, while very steep pitches may increase premiums due to higher replacement costs and wind vulnerability.",
      },
    ],
  },

  minimumRoofPitch: {
    title: "Minimum Roof Pitch for Slates, Metal & Tile",
    metaDescription:
      "Find the minimum roof pitch for concrete tiles (17.5°), natural slate (20°+), metal roofing (1:12), clay tile (17.5°+), and more. Includes Building Regulations references and low-slope solutions.",

    heroTitle: "Minimum Roof Pitch",
    heroSubtitle: "for Slates, Metal & Tile",
    heroDescription:
      "Every roofing material has a minimum slope requirement set by Building Regulations and manufacturers. Installing a material below its minimum pitch voids the warranty, violates regulations, and invites leaks. This guide covers the minimums for every common material.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "The minimum roof pitch for standard concrete interlocking tiles is approximately 17.5° (around 4:12). Natural slate requires a minimum of approximately 20° depending on slate size and head lap. Standing seam metal roofing can go as low as 1:12 (4.76°), and membrane roofing systems (EPDM, single-ply, GRP) work down to approximately 1° (0.25:12).",

    materialTableHeading: "Minimum Roof Pitch by Material",
    materialTableSubheading:
      "This table shows the standard minimum pitch, the absolute minimum with special provisions, and key notes for each roofing material.",
    materialTableColMaterial: "Roofing Material",
    materialTableColStandardMin: "Standard Minimum",
    materialTableColAbsoluteMin: "Absolute Minimum",
    materialTableColNotes: "Notes",
    materialTableRows: [
      {
        material: "Concrete Interlocking Tiles",
        standardMin: "17.5°",
        absoluteMin: "15°",
        notes: "15° requires sealed lap tiles and full underlayment. Manufacturers: Marley, Redland, Russell.",
      },
      {
        material: "Concrete Plain Tiles",
        standardMin: "35°",
        absoluteMin: "30°",
        notes: "Require greater overlap at lower pitches. Standard tile size 265×165mm.",
      },
      {
        material: "Standing Seam Metal",
        standardMin: "3:12 (14°)",
        absoluteMin: "1:12 (5°)",
        notes: "At 1:12–2:12, seams must be mechanically sealed or use sealant tape. Hydrostatic (waterproof) seams recommended below 3:12.",
      },
      {
        material: "Metal Panels (Exposed Fastener)",
        standardMin: "3:12 (14°)",
        absoluteMin: "3:12 (14°)",
        notes: "Exposed screw penetrations make these panels unsuitable below 3:12. Sealant washers are critical at all pitches.",
      },
      {
        material: "Clay Interlocking Tiles",
        standardMin: "17.5°",
        absoluteMin: "15°",
        notes: "Some manufacturers require 22.5°. Waterproof underlayment beneath tiles is required in all cases.",
      },
      {
        material: "Clay Plain Tiles",
        standardMin: "35°",
        absoluteMin: "30°",
        notes: "Traditional UK material. Heavier than concrete tiles. Manufacturers: Dreadnought, Keymer, Tudor.",
      },
      {
        material: "Natural Slate",
        standardMin: "20°–25°",
        absoluteMin: "20°",
        notes: "Minimum depends on slate size and head lap. Welsh slate, Spanish slate. Requires non-ferrous fixings to BS 5534.",
      },
      {
        material: "Fibre Cement Slates",
        standardMin: "20°",
        absoluteMin: "15°",
        notes: "Lighter than natural slate. Manufacturers: Marley Eternit, Cembrit. Follow fixing guidance in BS 5534.",
      },
      {
        material: "Built-Up Roofing (BUR)",
        standardMin: "1° (0.25:12)",
        absoluteMin: "1° (0.25:12)",
        notes: "Multiple layers of bitumen and reinforcing. Designed for flat and near-flat roofs. Requires positive drainage.",
      },
      {
        material: "EPDM / Single-Ply / GRP Membrane",
        standardMin: "1° (0.25:12)",
        absoluteMin: "1° (0.25:12)",
        notes: "EPDM, TPO, PVC, and GRP membranes with welded or bonded seams. Industry standard for flat roofs and extensions.",
      },
      {
        material: "Modified Bitumen",
        standardMin: "2° (0.5:12)",
        absoluteMin: "1° (0.25:12)",
        notes: "Torch-applied or peel-and-stick rolls. Common on low-slope residential extensions and porches.",
      },
    ],

    whyMinHeading: "Why Minimum Pitch Matters",
    whyMinIntro:
      "The minimum pitch specification is not arbitrary. It exists because each roofing material relies on gravity to move water off the roof before it can penetrate seams, overlaps, and fixing holes. Here is why it matters:",
    whyMinItems: [
      "Water infiltration — Below the minimum pitch, water moves too slowly across the roof surface. It can wick upward under tile overlaps through capillary action, penetrate around nail holes, and seep into lapped joints. Even a small amount of water infiltration causes rot, mould, and structural damage over time.",
      "Warranty coverage — Every roofing manufacturer specifies a minimum pitch in their installation instructions. Installing their product below that pitch voids the warranty entirely. If a leak develops, the manufacturer will deny the claim and the homeowner bears the full cost of repair.",
      "Building Regulations compliance — Approved Document C (Site preparation and resistance to contaminants and moisture) and BS 5534 (Code of practice for slating and tiling) set requirements for roof coverings. A roof installed below minimum pitch fails inspection and may require strip-off and reinstallation at the owner's expense.",
      "Condensation prevention — In the UK's damp climate, low-pitch roofs are more susceptible to condensation within the roof space. Adequate ventilation to BS 5250 and appropriate vapour barriers are essential.",
      "Insurance implications — Home insurance policies may exclude coverage for water damage caused by improper roofing installation. If the pitch is below the material's minimum requirement, the insurer can classify it as a pre-existing defect and deny claims.",
    ],
    whyMinSummary:
      "Installing roofing material at or above its minimum pitch is not optional. It protects your warranty, satisfies Building Regulations, and prevents water damage that can cost thousands to repair.",

    codeHeading: "Building Regulations Requirements",
    codeIntro:
      "UK Building Regulations and British Standards establish minimum pitch requirements to protect occupant safety and building longevity. Here are the key references:",
    codeItems: [
      "BS 5534: Code of Practice for Slating and Tiling — The primary standard for pitched roof coverings in the UK. Specifies minimum pitches, fixing requirements, and underlayment for all tile and slate types.",
      "BS 8217: Reinforced Bitumen Membranes — Covers flat roofing requirements including minimum falls and installation standards for built-up and modified bitumen systems.",
      "Approved Document C (Resistance to moisture) — Requires roofs to resist the passage of moisture. References BS 5534 for pitched roofs and BS 6229/BS 8217 for flat roofs.",
      "BS 5250: Management of Moisture in Buildings — Covers ventilation requirements for roof spaces, critical for low-pitch designs where condensation risk is higher.",
      "NHBC Standards Chapter 7.2 — For new-build homes, the NHBC sets additional requirements for roof coverings, often more stringent than Building Regulations alone.",
      "Local authority building control may impose additional requirements. Always verify your project's specific requirements with your building control officer or approved inspector before selecting roofing materials.",
    ],
    codeSummary:
      "Building Regulations are minimum standards, not best practices. Many roofing professionals recommend pitches at least one step above the regulatory minimum to provide an extra margin of safety against wind-driven rain.",

    belowMinHeading: "What Happens Below Minimum Pitch",
    belowMinIntro:
      "Installing roofing material below its minimum pitch creates a cascade of problems that worsen over time:",
    belowMinItems: [
      "Voided manufacturer warranty — This is the most immediate consequence. The manufacturer has no obligation to replace defective material or cover labour costs if the product was installed outside its specifications. Warranty claims are routinely denied based on pitch violations.",
      "Chronic leaks — Water sits on the roof longer and penetrates seams, overlaps, and fixing holes. These leaks may not appear immediately but develop within 2–5 years as sealants deteriorate and materials degrade from prolonged moisture exposure.",
      "Condensation in cold climates — Low-pitch roofs in the UK are highly susceptible to interstitial condensation because the roof space may not ventilate adequately. Persistent condensation causes timber decay and mould growth in the roof structure.",
      "Mould and rot — Persistent moisture from slow drainage creates ideal conditions for mould growth in the loft space and rot in the roof decking and structural timbers. Mould remediation and structural repair can cost £8,000–£25,000 or more.",
      "Failed building control inspection — A roof that does not meet minimum pitch requirements will fail inspection. Building control can issue a stop-work order and require the roof to be stripped and reinstalled with compliant materials, doubling the project cost.",
      "Reduced lifespan — Even if leaks are minor, roofing materials installed below minimum pitch degrade faster. Concrete tiles on an insufficient pitch without proper underlayment may last only 10–15 years versus 40–60 years at the proper pitch.",
    ],
    belowMinSummary:
      "There are no shortcuts when it comes to minimum pitch. The cost of doing it right the first time is always less than the cost of repair, replacement, and water damage remediation.",

    solutionsHeading: "Solutions for Low-Slope Roofs",
    solutionsIntro:
      "If your roof has a pitch below 17.5°, you still have several excellent roofing options. Here are the most reliable approaches:",
    solutionsItems: [
      "Fully sealed underlayment — For pitches between 15° and 17.5°, some tile manufacturers allow installation with a fully sealed breathable membrane underlayment. This creates a waterproof secondary barrier that protects against wind-driven rain and capillary action. Cost: approximately £5–£12 per m² more than standard underlay.",
      "Standing seam metal roofing — Standing seam panels with mechanically seamed or snap-lock joints work down to 1:12. The raised seams keep water channels away from the flat panel surface. Choose panels with a minimum 38mm seam height for pitches below 3:12. This is often the best option for low-slope residential roofs.",
      "Membrane roofing systems — For pitches below 10°, EPDM, single-ply (TPO/PVC), or GRP membrane roofing is the industry standard. These membranes are bonded or mechanically fixed to create a seamless waterproof surface. Membrane roofs are standard on flat-roof extensions and work well on low-slope residential roofs.",
      "Modified bitumen — Torch-applied or peel-and-stick modified bitumen rolls provide a durable, waterproof surface for low-slope roofs. They are a good choice for porches, carports, and small extensions where membrane roofing may be overkill. Multiple layers increase waterproofing reliability.",
      "Structural modification — In some cases, it is cost-effective to increase the roof pitch by adding new rafters or trusses over the existing structure. This is called a \"roof-over\" or \"re-pitch\" and allows you to use standard roofing materials. Consult a structural engineer before modifying any roof structure.",
      "Tapered insulation and crickets — On flat or near-flat roofs, tapered insulation boards can create positive drainage towards outlets or hoppers. A cricket (small peaked diverter) behind chimneys and abutment walls prevents water ponding at penetrations.",
    ],
    solutionsSummary:
      "Low-slope roofs are not a problem as long as you use the right materials. Standing seam metal and membrane systems provide decades of reliable service on pitches that would destroy tiles.",

    calculatorCtaHeading: "Calculate Your Roof Materials",
    calculatorCtaText:
      "Use our free roofing calculators to determine the right materials and quantities for your roof pitch:",
    calculatorLinks: [
      {
        label: "Roof Pitch Calculator",
        href: "/calculators/roofing/roof-pitch-calculator",
        description: "Convert between pitch ratio, degrees, and slope percentage.",
      },
      {
        label: "Roof Area Calculator",
        href: "/calculators/roofing/roof-area-calculator",
        description: "Calculate true roof area from footprint and pitch.",
      },
      {
        label: "Roof Slope Calculator",
        href: "/calculators/roofing/roof-slope-calculator",
        description: "Determine slope factor and material multiplier for any pitch.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can you put tiles on a low-pitch roof?",
        answer:
          "Yes, but only with special underlayment. Concrete interlocking tiles can be installed down to approximately 15° with a fully sealed breathable membrane. Most tile manufacturers (Marley, Redland) will honour their warranty at 15° when the correct underlayment is properly installed. Without the full sealed underlayment, the minimum for standard interlocking tiles is 17.5°.",
      },
      {
        question: "What is the minimum roof pitch for metal roofing?",
        answer:
          "For standing seam metal roofing, the minimum pitch is 1:12 (approximately 5°). However, at pitches between 1:12 and 3:12, the seams must be mechanically sealed or use sealant tape to prevent water infiltration. Exposed fastener metal panels require a minimum pitch of 3:12 (approximately 14°) because the screw penetrations are vulnerable to water at lower slopes.",
      },
      {
        question: "What happens if roof pitch is too low for tiles?",
        answer:
          "If tiles are installed below the minimum pitch, water moves too slowly to clear the tile overlaps. Capillary action wicks water upward under tiles, and wind-driven rain pushes water under the edges. This causes chronic leaks, rot in the roof timbers, mould growth, and voided manufacturer warranties. Building control will also fail the installation for non-compliance.",
      },
      {
        question: "What is the minimum pitch for natural slate?",
        answer:
          "The minimum pitch for natural slate depends on the slate size and head lap, but is generally 20°–25°. Larger slates (e.g. 600×300mm) can be used at lower pitches than smaller slates due to fewer joints per square metre. Welsh slate and Spanish slate follow BS 5534 requirements for fixing and minimum pitch.",
      },
      {
        question: "What is the minimum pitch for a tile roof?",
        answer:
          "The minimum pitch for concrete interlocking tiles is approximately 17.5° (some manufacturers allow 15° with sealed underlayment). For plain tiles (clay or concrete), the minimum is approximately 35°. Interlocking clay tiles have a minimum of approximately 17.5°. Always check the specific manufacturer's recommendations and BS 5534.",
      },
      {
        question: "Can you change the pitch of an existing roof?",
        answer:
          "Yes, it is possible to change an existing roof's pitch by adding new rafters or trusses over the current structure, a process sometimes called a roof-over or re-pitch. This is a significant structural modification that requires structural engineering calculations, Building Regulations approval, and potentially planning permission. The cost typically ranges from £8,000 to £25,000 depending on the roof size and the amount of pitch change needed.",
      },
    ],
  },

  readyMixVsBagged: {
    title: "Ready-Mix vs Bagged Concrete: Which Should You Use?",
    metaDescription:
      "Ready-mix vs bagged concrete compared: cost per cubic metre, strength, convenience, and best uses. Learn when to order a truck vs mix bags yourself for your project.",

    heroTitle: "Ready-Mix vs Bagged Concrete",
    heroSubtitle: "Which Should You Use?",
    heroDescription:
      "A complete comparison of ready-mix (truck-delivered) concrete and bagged concrete (Postcrete, Blue Circle) to help you choose the right option for your project size, budget, and timeline.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "Use bagged concrete for small projects under 1 cubic metre — fence posts, small pads, repairs, and anything you can mix by hand or with a portable mixer. Use ready-mix (truck delivery) for anything over 1 cubic metre — driveways, slabs, foundations, and large pours where consistent quality and speed matter. The cost per cubic metre is similar (£80–£120), but delivery fees and minimum orders make ready-mix impractical for small jobs.",

    whatIsReadyMixHeading: "What Is Ready-Mix Concrete?",
    whatIsReadyMixText1:
      "Ready-mix concrete is batched at a central plant, mixed in a rotating drum truck, and delivered to your job site ready to pour. The concrete arrives fully mixed to the specified strength class (typically C25/30 or C30/37 for residential work), with the correct water-to-cement ratio already dialled in by the batch plant. You simply direct the chute or pump to where the concrete needs to go.",
    whatIsReadyMixText2:
      "A standard ready-mix truck holds 6–8 cubic metres of concrete and can usually pour its entire load in 30–90 minutes. Most suppliers require a minimum order of 1 cubic metre, with part-load fees applied to orders under 4–6 cubic metres. The truck must have access within about 60 metres of the pour location, or you will need a concrete pump (£150–£300+ per hour) to reach further.",

    whatIsBaggedHeading: "What Is Bagged Concrete?",
    whatIsBaggedText1:
      "Bagged concrete is a pre-blended dry mix of cement, sand, and aggregate sold in bags at builders' merchants and DIY stores. The most common brands are Blue Circle, Postcrete, and various own-brand mixes from Wickes, B&Q, and Screwfix. Bags come in 20 kg and 25 kg sizes. You add water, mix by hand or with a mixer, and pour it into your formwork. A 25 kg bag yields approximately 0.012 cubic metres of finished concrete, meaning you need about 83 bags to make one cubic metre.",
    whatIsBaggedText2:
      "Bagged concrete typically reaches C25/30 strength in 28 days, which is comparable to standard residential ready-mix. The convenience is that you buy exactly what you need from any builders' merchant, mix at your own pace, and require no heavy equipment access. The trade-off is that mixing is labour-intensive, and large volumes become impractical quickly — mixing 83 bags for a single cubic metre takes several hours of hard physical work.",

    comparisonHeading: "Ready-Mix vs Bagged: Side-by-Side Comparison",
    comparisonSubheading:
      "How truck-delivered ready-mix and bagged concrete compare across the factors that matter most.",
    comparisonCol1: "Factor",
    comparisonCol2: "Ready-Mix (Truck)",
    comparisonCol3: "Bagged (Blue Circle, etc.)",
    comparisonRows: [
      {
        category: "Cost per Cubic Metre",
        readyMix: "£80–£120 per m³ (material only). Delivery fees of £30–£80+ may apply.",
        bagged: "£100–£170 per m³ (about 80–85 bags at £4–£6 each for 25 kg bags).",
      },
      {
        category: "Minimum Order",
        readyMix: "1 m³ minimum. Part-load fees (£20–£50/m³) for orders under 4–6 m³.",
        bagged: "No minimum. Buy as few or as many bags as you need.",
      },
      {
        category: "Strength Class",
        readyMix: "Customisable: C20/25 to C40/50+. Standard residential is C25/30 to C30/37.",
        bagged: "Standard C25/30. High-strength bags available at C30/37.",
      },
      {
        category: "Convenience",
        readyMix: "Arrives ready to pour. No mixing required. Fast for large volumes.",
        bagged: "Must be mixed on site. Labour-intensive for large quantities.",
      },
      {
        category: "Mixing Time",
        readyMix: "Zero — arrives pre-mixed. Pour time depends on access and volume.",
        bagged: "3–5 minutes per bag by hand. 1–2 minutes per bag with a mixer.",
      },
      {
        category: "Best For",
        readyMix: "Driveways, slabs >10 m², foundations, footings, large pours.",
        bagged: "Fence posts, small pads, repairs, remote locations.",
      },
      {
        category: "Shelf Life",
        readyMix: "Must be poured within 60–90 minutes of batching. No storage.",
        bagged: "6–12 months if kept dry and sealed. Buy ahead for weekend projects.",
      },
      {
        category: "Quality Control",
        readyMix: "Plant-controlled mix design. Consistent batch-to-batch. Tested per BS EN 206.",
        bagged: "Depends on your mixing technique and water ratio. More room for error.",
      },
    ],

    costHeading: "Cost Breakdown: Ready-Mix vs Bagged Concrete",
    costIntro:
      "The per-cubic-metre cost of concrete is surprisingly similar between the two options. The real cost difference comes from delivery fees, labour, and the scale of your project.",
    costText1:
      "Bagged concrete: A 25 kg bag of Blue Circle or Postcrete costs £4–£6 at most builders' merchants (2026 pricing). Each 25 kg bag yields about 0.012 cubic metres. One cubic metre requires approximately 83 bags. At £5 per bag, that is about £415 per cubic metre in material alone. However, 20 kg bags (£3.50–£4.50) are more common for DIY projects and bring the cost to roughly £300–£380 per cubic metre. Factoring in the time to mix (easily 4–6 hours per cubic metre by hand), the total cost including your labour value is significantly higher than ready-mix for large pours.",
    costText2:
      "Ready-mix concrete: The base price for standard C25/30 ready-mix ranges from £80 to £120 per cubic metre, depending on your region and the current cost of cement. Most suppliers add delivery fees (£30–£80 for a standard truck trip) and may charge part-load fees (£20–£50 per cubic metre) for orders under their minimum (typically 4–6 m³). A fuel surcharge of £15–£40 is also common. For a 3 m³ driveway pour, expect to pay £240–£360 in material plus £30–£100 in fees, totalling £270–£460.",
    costText3:
      "Bottom line: For projects under half a cubic metre (about 40 bags), bagged concrete is almost always cheaper and more practical. For projects over 1 cubic metre, ready-mix saves you hours of labour and typically costs less per cubic metre once you factor in your time. The crossover point is usually around 0.5–1.0 cubic metres.",

    whenReadyMixHeading: "When to Choose Ready-Mix Concrete",
    whenReadyMixIntro:
      "Ready-mix concrete is the clear choice for larger projects where volume, speed, and consistency matter. Here are the situations where ordering a truck is the right call:",
    whenReadyMixItems: [
      "Projects requiring more than 1 cubic metre — Mixing more than 83 bags by hand is exhausting, slow, and increases the risk of cold joints (where fresh concrete meets partially-set concrete). A truck delivers it all at once.",
      "Driveways, patios, and large slabs — A typical double driveway (6×6 m, 100mm thick) requires about 3.6 cubic metres. That would be 300+ bags. A ready-mix truck pours this in under an hour.",
      "Foundation footings and walls — Structural concrete for foundations should be poured continuously when possible. Ready-mix provides the volume and consistency that building control inspectors expect for structural work.",
      "Time-critical pours — If you have hired formwork, arranged a finishing crew, or have a narrow weather window, ready-mix eliminates the hours of mixing time that bagged concrete requires.",
      "Projects requiring specific strength classes or additives — Ready-mix plants can customise the mix with fibre reinforcement, accelerators (for cold weather), retarders (for hot weather), air entrainment (for freeze-thaw cycles), and custom strength classes.",
      "When you have good truck access — If the truck can back up within 60 metres of your pour location with a clear path, ready-mix is the most efficient choice. For tighter access, a concrete pump adds cost but still beats mixing hundreds of bags.",
    ],
    whenReadyMixSummary:
      "Rule of thumb: if your project needs more than 1 cubic metre, call a ready-mix supplier. The labour savings alone justify the delivery fee.",

    whenBaggedHeading: "When to Choose Bagged Concrete",
    whenBaggedIntro:
      "Bagged concrete excels for small, quick projects where ordering a truck would be overkill. Here are the best uses for bagged concrete:",
    whenBaggedItems: [
      "Fence posts and gate posts — Each post hole typically needs 1–3 bags (25 kg). You can set posts one at a time at your own pace, and fast-setting formulas like Postcrete let you pour the dry mix directly into the hole and add water on top.",
      "Small repair jobs — Patching a path section, filling a small hole, repairing a step, or topping off a deteriorated surface. These jobs might need only 2–10 bags.",
      "Projects under 0.5 cubic metres — Small pads for bin stores, hot tub bases, or small path sections. At 40 bags or fewer, mixing is manageable.",
      "Remote or hard-to-access locations — Garden projects behind fences, hillside retaining wall footings, or rural sites where a concrete truck cannot reach. Bags can be carried by hand to almost any location.",
      "Weekend DIY projects — If you want to work at your own pace without the pressure of a truck waiting (drivers typically allow 5–7 minutes per cubic metre before charging waiting fees), bags let you take your time.",
      "When you already have the bags — If you have leftover bags from a previous project or can get a good deal on a pallet, use what you have. Just verify the bags are still good (no lumps or hardened sections).",
    ],
    whenBaggedSummary:
      "Rule of thumb: if your project needs fewer than 30 bags (about 0.35 cubic metres), bagged concrete is simpler, cheaper, and requires no scheduling.",

    calculatorCtaHeading: "Calculate Your Concrete Needs",
    calculatorCtaText:
      "Use our free concrete calculators to figure out exactly how many cubic metres or bags you need for your project:",
    calculatorLinks: [
      {
        label: "Concrete Calculator",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calculate cubic metres and bags needed for slabs, footings, columns, and custom shapes.",
      },
      {
        label: "Anchor Bolt Calculator",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determine anchor bolt spacing and count for your concrete foundation.",
      },
      {
        label: "Sill Plate Calculator",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estimate sill plate timber for the top of your foundation walls.",
      },
      {
        label: "Sill Seal Calculator",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calculate sill seal gasket needed between foundation and framing.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How many bags of concrete make 1 cubic metre?",
        answer:
          "You need approximately 83 bags of 25 kg concrete or 108 bags of 20 kg concrete to make 1 cubic metre. A 25 kg bag yields about 0.012 cubic metres. This is why most projects over 1 cubic metre are better served by ready-mix delivery.",
      },
      {
        question: "Is ready-mix concrete stronger than bagged?",
        answer:
          "Not necessarily. Standard bagged concrete (Blue Circle, Postcrete) achieves C25/30 strength in 28 days, while standard ready-mix for residential use is typically batched at C25/30 to C30/37. Both are more than adequate for driveways, patios, paths, and footings. The advantage of ready-mix is that it is professionally mixed with precise water-to-cement ratios, which makes quality more consistent. With bagged concrete, adding too much water is a common mistake that reduces strength.",
      },
      {
        question: "Can I pour ready-mix concrete myself (DIY)?",
        answer:
          "Yes, many homeowners order ready-mix for DIY projects. The concrete supplier delivers the truck, and you direct the pour into your prepared formwork. You will need helpers (2–3 people minimum) to screed, float, and finish the concrete before it sets. Plan everything before the truck arrives: formwork built, reinforcement placed, tools ready, and helpers briefed. Drivers typically allow 5–7 minutes per cubic metre before charging overtime fees (£1–£2 per minute).",
      },
      {
        question: "What is the minimum order for ready-mix concrete?",
        answer:
          "Most ready-mix suppliers have a minimum order of 1 cubic metre. However, many charge a part-load fee for orders under 4–6 cubic metres. This fee typically ranges from £20 to £50 per cubic metre under the minimum. For example, ordering 2 m³ when the minimum full-load is 6 m³ might add £80–£200 in part-load fees. Always ask your supplier about their fee structure before ordering.",
      },
      {
        question: "How long does bagged concrete take to set?",
        answer:
          "Standard bagged concrete sets enough to walk on in 24–48 hours, but does not reach full design strength (C25/30) for 28 days. Fast-setting formulas (like Postcrete) set in 5–10 minutes and reach working strength in 1–2 hours, making them ideal for fence posts and small repairs. During the curing period, keep the concrete moist for the first 3–7 days for maximum strength.",
      },
      {
        question: "Can I mix different brands of bagged concrete together?",
        answer:
          "Yes, you can mix Blue Circle, Postcrete, and other standard concrete mixes together. They all use the same basic ingredients (Portland cement, sand, aggregate). However, do not mix regular concrete with specialty products like fast-setting concrete, mortar mix, or fence post mix, as these have different formulations and set times. Stick to the same type (all standard, all fast-setting, etc.) within a single pour for consistent results.",
      },
    ],
  },

  concreteCostGuide: {
    title: "How Much Does Concrete Cost? 2026 Price Guide",
    metaDescription:
      "Concrete costs £80–£120 per cubic metre for ready-mix delivery. Complete 2026 price guide covering slabs, footings, driveways, bagged concrete, labour costs, and money-saving tips.",

    heroTitle: "How Much Does Concrete Cost?",
    heroSubtitle: "2026 Price Guide",
    heroDescription:
      "A complete breakdown of concrete prices for every type of residential project. Covers ready-mix delivery, bagged concrete, labour costs, and the factors that affect what you will pay.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "Ready-mix concrete costs £80–£120 per cubic metre delivered in 2026, with most homeowners paying £90–£110 per cubic metre for standard C25/30 residential concrete. Total installed cost (including labour, formwork, and finishing) ranges from £60–£140 per square metre for flatwork like driveways, patios, and paths. Bagged concrete (Blue Circle, Postcrete) costs £4–£6 per 25 kg bag, which works out to about £330–£500 per cubic metre for the material alone.",

    costByProjectHeading: "Concrete Cost by Project Type",
    costByProjectIntro:
      "What you will pay for concrete depends heavily on the type and size of project. Here are typical 2026 costs for common residential concrete projects, including material and professional installation:",
    costByProjectColProject: "Project",
    costByProjectColTypical: "Typical Cost",
    costByProjectColNotes: "Notes",
    costByProjectRows: [
      { project: "Driveway (double, 6×6 m)", typical: "£3,000–£6,000", notes: "3.6+ cubic metres. Plain finish. Pattern imprinted adds 30–50%." },
      { project: "Patio (4×5 m)", typical: "£2,000–£4,000", notes: "2+ cubic metres. Brushed finish. Decorative options cost more." },
      { project: "Garden Path (1.2 m wide, 10 m long)", typical: "£800–£1,500", notes: "1.2+ cubic metres. Includes formwork, pouring, and finishing." },
      { project: "Garage Floor (6×6 m)", typical: "£2,500–£5,000", notes: "3.6+ cubic metres. 100–150mm thick. Mesh or fibre reinforced." },
      { project: "Foundation Strip Footings (3-bed house)", typical: "£2,500–£6,000", notes: "5–10 cubic metres depending on design. Reinforcement included." },
      { project: "Foundation Raft/Slab", typical: "£8,000–£18,000", notes: "12–25 cubic metres. Includes formwork, reinforcement, and waterproofing." },
      { project: "Concrete Steps (5 steps, 1.2 m wide)", typical: "£800–£1,500", notes: "0.5–1 cubic metres. Labour-intensive formwork and finishing." },
      { project: "Fence Post Footings (20 posts)", typical: "£100–£200 (DIY)", notes: "1–3 bags per post. Bagged concrete (Postcrete), no truck needed." },
    ],

    baggedCostHeading: "Bagged Concrete Costs",
    baggedCostIntro:
      "Bagged concrete is sold at builders' merchants and DIY stores. Prices vary by bag size, brand, and region:",
    baggedCostText1:
      "Standard bag sizes and prices (2026): 20 kg bags cost £3.50–£4.50 each (yields 0.009 m³). 25 kg bags cost £4.00–£6.00 each (yields 0.012 m³). The 25 kg bag offers the best price per cubic metre, but at 25 kg per bag, the physical labour of mixing is substantial. Many DIYers prefer 20 kg bags as a compromise between cost and manageability. Available from Jewson, Travis Perkins, Wickes, B&Q, and Screwfix.",
    baggedCostText2:
      "Cost per cubic metre from bags: Using 25 kg bags at £5 each, one cubic metre costs approximately £415 in material (83 bags). Using 20 kg bags at £4 each, one cubic metre costs approximately £430 (108 bags). These prices are higher than ready-mix delivery (£80–£120/m³), but bags have no delivery fees, no minimum orders, and no waiting time fees. For small projects under 0.5 cubic metres, bags are almost always the more economical choice.",
    baggedCostText3:
      "Specialty bagged concrete costs more: Fast-setting Postcrete runs £6–£8 per 25 kg bag. High-early-strength (£5–£7), crack-resistant fibre-reinforced (£6–£8), and post mix formulas have premium pricing. For most driveways, patios, and footings, standard C25/30 mix is all you need.",

    readyMixPricingHeading: "Ready-Mix Concrete Pricing",
    readyMixPricingIntro:
      "Ready-mix is ordered by the cubic metre and delivered by truck. Here is what to expect when you call a local ready-mix supplier:",
    readyMixPricingText1:
      "Base price: Standard C25/30 concrete costs £80–£110 per cubic metre in most markets. C30/37 mix costs £90–£120 per m³. C40/50 high-strength costs £100–£140 per m³. Prices vary by region — urban areas with multiple suppliers tend to be cheaper than rural areas with limited competition. Remote locations often pay 10–20% more due to transport costs.",
    readyMixPricingText2:
      "Additional fees: Delivery fee of £30–£80 per trip (covers truck fuel and driver time). Part-load fee of £20–£50 per m³ for orders under 4–6 cubic metres (the most impactful fee for small projects). Overtime or waiting charge of £1–£2 per minute if the pour takes longer than the allotted time (typically 5–7 minutes per m³). Saturday delivery surcharge of £40–£100 at some plants. Fuel surcharge of £15–£40 per load (increasingly common).",
    readyMixPricingText3:
      "Additives and upgrades: Air entrainment (freeze-thaw resistance) adds £3–£6 per m³. Fibre reinforcement adds £5–£10 per m³. Accelerator (speeds curing in cold weather) adds £5–£12 per m³. Retarder (slows curing in hot weather) adds £3–£8 per m³. Colour pigment adds £8–£20 per m³. Concrete pump hire (for hard-to-reach pours) adds £150–£300+ per hour.",

    factorsHeading: "Factors That Affect Concrete Cost",
    factorsIntro:
      "The price you pay for concrete depends on several factors beyond just the volume you need. Understanding these can help you budget more accurately:",
    factorsItems: [
      "Location — Concrete prices vary significantly by region. The Midlands tends to have competitive pricing (£75–£100/m³), while London and the South-East are higher (£100–£140/m³). Rural and remote areas pay more due to longer delivery distances. Always get quotes from at least 2–3 local suppliers.",
      "Quantity ordered — Ordering more concrete lowers your per-cubic-metre cost. Part-load fees for small orders (under 4–6 m³) can add £20–£50 per m³. A 2 m³ order might cost £130/m³ including fees, while a 6 m³ order costs £95/m³ with no penalty. If you are close to the minimum, consider adding a small project to reach it.",
      "Strength class — Higher strength costs more. C20/25 is suitable for paths and non-structural pads. C25/30 is recommended for driveways and garage floors. C30/37 is used for structural foundations. Each strength tier adds roughly £5–£15 per cubic metre.",
      "Additives and mix design — Air entrainment, fibre reinforcement, accelerators, retarders, and colour pigments each add £3–£20 per m³. In cold regions, air entrainment is recommended for exposed external concrete and adds £3–£6 per m³.",
      "Time of year — Concrete prices tend to be highest in spring and summer when demand peaks. Winter pours may be cheaper per cubic metre but require insulating blankets and accelerators that can offset the savings. Autumn is often the sweet spot for pricing and ideal curing temperatures.",
      "Delivery distance — Most ready-mix plants include delivery within a 15–30 km radius in their base price. Beyond that, expect surcharges of £1–£3 per km. For remote sites, these delivery costs can add £30–£150+ to your total.",
    ],

    laborHeading: "Labour Costs: DIY vs Hiring a Contractor",
    laborIntro:
      "The cost of the concrete itself is often less than half the total project cost. Labour, formwork, finishing, and site preparation make up the rest:",
    laborText1:
      "DIY costs: If you do the work yourself, your main costs are concrete (£80–£120/m³ for ready-mix or £330–£500/m³ for bags), formwork timber (£30–£100), reinforcement mesh (£20–£60), and tool hire (£40–£80 for a concrete vibrator, bull float, tamper, etc.). A typical 3×3 m patio pad (about 0.9 m³) might cost £200–£400 in total materials as a DIY project, compared to £1,000–£1,800 installed by a contractor.",
    laborText2:
      "Contractor costs: Professional concrete work typically runs £60–£140 per square metre installed for standard flatwork (slab, driveway, patio, path). This includes site preparation, sub-base, formwork, reinforcement, concrete, pouring, finishing (brushed or smooth), and basic cleanup. Decorative finishes (pattern imprinted, exposed aggregate) add £20–£50 per square metre. Vertical work (foundation walls, retaining walls) costs £80–£180 per square metre due to more complex formwork.",
    laborText3:
      "When to hire a professional: Consider hiring a concrete contractor for any structural work (foundations, load-bearing footings), any pour over 3 cubic metres, decorative or pattern imprinted finishes, sloped or drainage-critical surfaces, and any project requiring building control sign-off. The cost of fixing a bad concrete pour (break-out and replacement) is 2–3 times the cost of doing it right the first time.",

    savingTipsHeading: "Cost-Saving Tips",
    savingTipsIntro:
      "There are several ways to reduce your concrete costs without cutting corners on quality:",
    savingTipsItems: [
      "Get multiple quotes — Prices can vary 15–30% between ready-mix suppliers in the same area. Call at least 3 suppliers and ask for their full fee schedule including delivery, part-load, overtime, and fuel surcharges.",
      "Order the right amount — Over-ordering wastes money; under-ordering means an expensive second truck trip. Use our concrete calculator to get an accurate estimate, then add 5–10% for waste, spillage, and sub-base irregularities.",
      "Avoid part-load fees — If your project needs 2.5 cubic metres and the part-load threshold is 4 m³, consider whether you can use the extra for a small side project (stepping stones, a small pad, filling holes). The extra material costs less than the part-load fee.",
      "Schedule off-peak — If your timeline is flexible, schedule pours for Tuesday through Thursday in autumn or early spring. Weekend and peak-season deliveries often carry surcharges.",
      "Do your own prep work — Even if you hire a contractor for the pour, you can save £400–£1,200 by doing the excavation, sub-base, and formwork yourself. Contractors are happy to pour into your formwork if it is properly built and checked.",
      "Compare bags vs ready-mix for small jobs — For projects under 1 cubic metre, do the maths both ways. Factor in your time value: mixing 60+ bags takes 3–4 hours of hard labour. If your time is worth £20/hour, that adds £60–£80 to the bag cost. Sometimes a part-load of ready-mix is actually cheaper.",
    ],

    calculatorCtaHeading: "Calculate Your Concrete Costs",
    calculatorCtaText:
      "Use our free calculators to estimate the exact volume of concrete your project needs, then multiply by your local per-cubic-metre price for an accurate budget:",
    calculatorLinks: [
      {
        label: "Concrete Calculator",
        href: "/calculators/foundation/concrete-calculator",
        description: "Calculate cubic metres and bags needed for slabs, footings, columns, and custom shapes.",
      },
      {
        label: "Anchor Bolt Calculator",
        href: "/calculators/foundation/anchor-bolt-calculator",
        description: "Determine anchor bolt spacing and count for your concrete foundation.",
      },
      {
        label: "Sill Plate Calculator",
        href: "/calculators/foundation/sill-plate-calculator",
        description: "Estimate sill plate timber for the top of your foundation walls.",
      },
      {
        label: "Sill Seal Calculator",
        href: "/calculators/foundation/sill-seal-calculator",
        description: "Calculate sill seal gasket needed between foundation and framing.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much does a cubic metre of concrete cost in 2026?",
        answer:
          "A cubic metre of ready-mix concrete costs £80–£120 for the material, depending on your region and the strength class. Add delivery fees (£30–£80) and potential part-load fees (£20–£50/m³ for small orders). Total delivered cost for a typical 3–4 m³ residential order is usually £90–£115 per cubic metre all-in.",
      },
      {
        question: "How much does it cost to pour a 3×3 m concrete slab?",
        answer:
          "A 3×3 m concrete slab (100mm thick) requires about 0.9 cubic metres of concrete. DIY material cost is £150–£300 (concrete, formwork, reinforcement, sub-base). Professionally installed, expect £600–£1,500 depending on site preparation, finish, and your local labour market. This includes excavation, sub-base, formwork, reinforcement, concrete, and a brushed or smooth finish.",
      },
      {
        question: "Is it cheaper to mix your own concrete or order ready-mix?",
        answer:
          "For small projects (under 1 cubic metre), mixing bags yourself is cheaper in material cost. For projects over 1 cubic metre, ready-mix is almost always cheaper per m³ and saves hours of labour. The break-even point is typically around 0.5–1.0 cubic metres. At that volume, the total cost of bags plus your labour time roughly equals a ready-mix delivery with part-load fee.",
      },
      {
        question: "How much does a concrete driveway cost?",
        answer:
          "A standard double concrete driveway (approximately 6×6 m, 100mm thick) costs £3,000–£6,000 installed in 2026. This includes about 3.6 cubic metres of concrete, sub-base, formwork, mesh reinforcement, and a brushed finish. Pattern imprinted or decorative concrete driveways cost £5,000–£10,000+ depending on the pattern and colour choices.",
      },
      {
        question: "Why does concrete cost vary so much by region?",
        answer:
          "Concrete prices depend on the cost of cement (which varies by proximity to cement works), local aggregate costs, fuel prices for delivery trucks, labour market rates, and competition among suppliers. Areas near major cement works (the Midlands, Yorkshire) tend to have lower prices. Remote and rural locations pay the most due to transport costs.",
      },
      {
        question: "How much does exposed aggregate concrete cost per m³?",
        answer:
          "Exposed aggregate concrete costs £120–£180 per cubic metre for the ready-mix material, which is £30–£60 more than standard concrete due to the decorative aggregate blend. Professionally installed, expect £100–£180 per square metre including preparation, pouring, surface retarder application, and pressure washing to expose the aggregate. Total cost for a typical 20 m² patio with exposed aggregate finish is £2,500–£4,500 installed.",
      },
      {
        question: "How much concrete do I need for a project?",
        answer:
          "Concrete is measured in cubic metres. For rectangular slabs: multiply length (m) × width (m) × thickness (m) to get cubic metres. A 3×3 m slab at 100mm thick = 3 × 3 × 0.1 = 0.9 cubic metres. Always add 5–10% for waste, sub-base irregularities, and spillage. Use our free concrete calculator for exact results on slabs, footings, columns, and custom shapes.",
      },
    ],
  },

  howMuchPaint: {
    title: "How Much Paint Do I Need? Complete Guide",
    metaDescription:
      "How much paint do I need? Complete guide covering wall measurement, coverage rates by paint type, number of coats, surface prep, ceiling and trim paint, and cost breakdown.",

    heroTitle: "How Much Paint Do I Need?",
    heroSubtitle: "Complete Guide",
    heroDescription:
      "Everything you need to know to calculate the right amount of paint for walls, ceilings, and trim — avoid buying too much or running out mid-project.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "One litre of interior emulsion covers approximately 10 to 12 square metres with one coat. For a standard room (3.6×3.6 m, 2.4 m ceilings), you need about 5 litres for two coats on the walls. Add 2.5 litres for the ceiling and 1 litre of gloss or satinwood for trim and doors. Always round up — leftover paint is essential for future touch-ups.",

    measuringWallsHeading: "How to Measure Your Walls",
    measuringWallsIntro:
      "Accurate wall measurements are the foundation of any paint estimate. Here is how to measure like a professional decorator:",
    measuringWallsItems: [
      "Measure the length of each wall in metres and multiply by the ceiling height. A 4.2-metre wall with 2.4-metre ceilings = 10.1 square metres. Repeat for all four walls and add them together.",
      "For quick whole-room calculations, measure the room perimeter (sum of all wall lengths) and multiply by ceiling height. A 3.6×4.2 m room has a 15.6-metre perimeter, times 2.4-metre ceilings = 37.4 square metres of wall area.",
      "Subtract openings: a standard door is approximately 1.9 square metres (0.8×2.1 m) and a standard window is approximately 1.4 square metres (1.2×1.2 m). For a room with one door and two windows, subtract about 4.7 square metres.",
      "For rooms with vaulted or cathedral ceilings, measure the wall height at the tallest point and the shortest point, average them, and multiply by the wall length.",
      "Include cupboard interiors if you plan to paint them — a standard built-in wardrobe adds about 5 square metres of wall area.",
      "Record all measurements before going to the paint supplier. Take photos of the rooms for reference when choosing colours.",
    ],
    measuringWallsSummary:
      "A typical 140 m² house has 370 to 460 square metres of paintable wall area, depending on ceiling height, number of rooms, and window/door count.",

    coverageRatesHeading: "Coverage Rates by Paint Type",
    coverageRatesIntro:
      "Not all paints cover the same area. Coverage rates vary by finish, quality, and the surface you are painting.",
    coverageRatesText1:
      "Matt emulsion has the highest coverage rates at 12 to 14 square metres per litre because it has lower binder content and spreads easily. It is ideal for ceilings and low-traffic rooms but shows marks and is difficult to clean. Silk emulsion covers 10 to 12 square metres per litre and is the most popular choice for living rooms, bedrooms, and hallways — it has a subtle sheen that is easy to clean without being too shiny.",
    coverageRatesText2:
      "Eggshell finish covers 10 to 12 square metres per litre and is excellent for kitchens, bathrooms, and high-traffic areas due to its moisture resistance and washability. Satinwood covers 10 to 12 square metres per litre and is the standard choice for trim, skirting boards, doors, and window frames — its durable surface is easy to wipe clean. Gloss covers 10 to 12 square metres per litre and is used for doors, window frames, and any surface where maximum durability and reflectivity are desired.",
    coverageRatesText3:
      "Premium paints from brands like Dulux, Farrow & Ball, and Little Greene typically achieve the higher end of these coverage ranges due to higher pigment concentration and better levelling properties. Economy paints often fall at the lower end and may require an additional coat to achieve full coverage. Textured, porous, or unpainted surfaces reduce coverage by 20 to 30 per cent regardless of paint quality — always use an appropriate primer on these surfaces first.",

    numberOfCoatsHeading: "How Many Coats of Paint Do You Need?",
    numberOfCoatsIntro:
      "The number of coats directly affects how much paint you need to buy. Here is when to apply one, two, or three coats:",
    numberOfCoatsItems: [
      "One coat is sufficient only for touch-ups using the exact same paint colour and sheen on a previously painted surface in good condition. Some premium paints advertise one-coat coverage, but professional decorators still recommend two coats for best results.",
      "Two coats is the standard recommendation for virtually all painting projects. The first coat seals and primes the surface, while the second coat provides the final colour depth, uniform sheen, and maximum durability. Two coats of quality paint can last 7 to 10 years on interior walls.",
      "Three coats are necessary when making a dramatic colour change — especially going from a dark colour (red, navy, forest green) to a light colour (white, cream, pastel). The first coat of tinted primer neutralises the old colour, followed by two topcoats for full coverage.",
      "New, unpainted plasterboard or fresh plaster always requires a mist coat (watered-down emulsion) plus two topcoats (three coats total). The mist coat seals the porous surface and provides a uniform base for the paint. Skipping the mist coat on new plaster causes flashing — visible differences in sheen where the filler and bare plaster absorb paint at different rates.",
      "Textured surfaces like Artex and stippled ceilings may require an extra coat because the texture creates peaks and valleys that are difficult to cover evenly with a single pass.",
    ],
    numberOfCoatsSummary:
      "For budgeting purposes, always calculate paint quantity based on two coats. If you need primer or a mist coat, calculate that separately at the primer's coverage rate.",

    surfacePrepHeading: "Surface Preparation",
    surfacePrepIntro:
      "Proper surface preparation is the single most important factor in a long-lasting paint job. No amount of expensive paint can compensate for poor prep work.",
    surfacePrepItems: [
      "Clean all surfaces before painting. Dust, grease, and cobwebs prevent paint adhesion. Wipe walls with a damp cloth or use sugar soap solution for greasy kitchen walls. Allow surfaces to dry completely before painting.",
      "Fill nail holes, dents, and cracks with lightweight filler. Apply with a filling knife, let it dry, and sand smooth with 150-grit sandpaper. For larger holes (over 12mm), use scrim tape and filler, applied in two thin coats.",
      "Sand glossy surfaces lightly with 150-grit sandpaper to create a key for the new paint to grip. This is especially important when painting over gloss or satinwood finishes.",
      "Remove or sand any loose, peeling, or flaking paint down to a sound surface. Feather the edges of remaining paint with sandpaper to create a smooth transition.",
      "Apply masking tape to trim, skirting boards, ceiling lines, and any areas you want to protect. Press the tape firmly with a scraper or card to prevent paint from bleeding underneath.",
      "Protect floors and furniture with dust sheets. Cotton dust sheets grip the floor better than plastic and absorb drips. Move furniture to the centre of the room and cover with plastic sheeting.",
    ],

    ceilingPaintHeading: "Calculating Ceiling Paint",
    ceilingPaintIntro:
      "Ceilings require their own calculation since they often use a different paint formulation than walls.",
    ceilingPaintText1:
      "Ceiling paint (matt emulsion) is specifically formulated with higher solids content for better spatter resistance when rolling overhead, and it dries to a perfectly matt finish to minimise the appearance of imperfections. Standard ceiling paint covers 12 to 14 square metres per litre. To calculate the amount needed, multiply the room length by the room width — a 3.6×4.5 m room has 16.2 square metres of ceiling. At 13 m² per litre, that is about 1.25 litres — buy 2.5 litres for that room.",
    ceilingPaintText2:
      "Most ceilings only need one coat if they are being painted the same white colour. If you are changing the ceiling colour or painting over a stain, apply a stain blocker first and then two topcoats. For Artex or textured ceilings, reduce the coverage rate to 8 to 10 square metres per litre because the texture absorbs more paint. A whole-house ceiling (140 m²) typically requires 10 to 12 litres of ceiling paint.",

    trimPaintHeading: "Calculating Trim and Door Paint",
    trimPaintIntro:
      "Trim, skirting boards, doors, and window frames are typically painted with a satinwood or gloss finish for durability and easy cleaning.",
    trimPaintText1:
      "Skirting boards: Measure the total linear metres of skirting in the room. Standard skirting is 100 to 150mm tall. A room with 15.6 linear metres of skirting has approximately 2.3 square metres of paintable surface. One litre of satinwood covers about 10 to 12 square metres — enough for a large room's skirting boards.",
    trimPaintText2:
      "Doors: A standard interior door (both sides) has approximately 3.6 square metres of paintable surface. Window trim (frame and architrave) averages 1 square metre per window. For a whole house, plan on 2 to 5 litres of gloss or satinwood for all skirting boards, door frames, window trim, and any dado or picture rails. Paint doors with a foam roller for the smoothest finish — brush marks are very visible on gloss paint on large flat surfaces.",

    costBreakdownHeading: "Paint Cost Breakdown",
    costBreakdownIntro:
      "Understanding the full cost of a painting project helps you budget accurately and choose the right products for your needs.",
    costBreakdownText1:
      "Wall paint is the largest cost component. Budget £15 to £50 per 2.5 litres depending on quality tier. For a typical room requiring 5 litres at 2 coats, wall paint costs £30 to £100. For a whole 140 m² house (approximately 30–40 litres needed for walls), paint costs £180 to £800. Buying 5-litre or 10-litre tins saves 15 to 20 per cent per litre compared to 2.5-litre tins.",
    costBreakdownText2:
      "Primer costs £8 to £20 per litre. New plaster requires a mist coat (watered-down emulsion at no extra material cost) or a dedicated primer at about 1 litre per 10–12 square metres. For a 140 m² house with all new plaster, that is 30 to 40 litres of mist coat. Self-priming paints (available in premium lines) eliminate this step but are more expensive per litre. For repaints over similar colours, primer is usually unnecessary.",
    costBreakdownText3:
      "Supplies for a whole-house interior paint job cost £80 to £160 total: roller frames and sleeves (£15 to £25), extension pole for ceilings (£10 to £20), angled brushes in 50mm and 65mm widths (£15 to £25), masking tape (£20 to £35 for multiple rolls), dust sheets (£10 to £25), paint trays and liners (£8 to £12), sandpaper and filler (£8 to £12), and rags and cleanup supplies (£4 to £8). Quality tools make a significant difference in the final result — do not skimp on roller sleeves and brushes. Available from Dulux, B&Q, Screwfix, and Toolstation.",

    calculatorCtaHeading: "Calculate Your Paint Needs",
    calculatorCtaText:
      "Use our free paint calculators to get an instant, accurate estimate for your project.",
    calculatorLinks: [
      {
        label: "Paint Coverage Calculator",
        href: "/calculators/finishing/paint-coverage-calculator",
        description: "How many litres for your wall area — with coat and coverage adjustments.",
      },
      {
        label: "Paint Cost Calculator",
        href: "/calculators/finishing/paint-cost-calculator",
        description: "Total project cost by paint quality level — includes supplies estimate.",
      },
      {
        label: "Primer Calculator",
        href: "/calculators/finishing/primer-calculator",
        description: "How much primer for your surface type — new plaster, wood, or repaints.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How much paint do I need for a 3.6×3.6 m room?",
        answer:
          "A 3.6×3.6 m room with 2.4 m ceilings has about 34.6 square metres of wall area. Subtract approximately 4.5 square metres for a door and window, leaving about 30 square metres. At 11 m² per litre with 2 coats, you need about 5.5 litres — buy a 5-litre tin plus a 1-litre tin. Add 2.5 litres of ceiling paint for the 13 m² ceiling. Total: about 6 litres of wall emulsion + 2.5 litres of ceiling paint.",
      },
      {
        question: "How many square metres does a litre of paint cover?",
        answer:
          "A litre of interior emulsion covers 10 to 14 square metres on smooth, previously painted surfaces with one coat. Matt finishes cover closer to 12–14 m², while silk and eggshell cover about 10–12 m². On porous or textured surfaces like new plaster or Artex, expect only 8 to 10 m² per litre.",
      },
      {
        question: "Should I buy 2.5-litre tins or 5-litre tins?",
        answer:
          "Five-litre tins are 15 to 20 per cent cheaper per litre and guarantee colour consistency across all walls. Buy 5-litre tins when you need more than 3 litres of the same colour. For accent walls or rooms requiring less than 2.5 litres, individual tins are more practical. Many stores also sell tester pots and 1-litre tins for small touch-up projects.",
      },
      {
        question: "How much does it cost to paint a room yourself?",
        answer:
          "A DIY room painting project costs £50 to £150 in materials: 5 litres of emulsion (£20 to £80), supplies (£20 to £40), and optional primer (£8 to £20 per litre). A professional decorator charges £200 to £500 for the same room. For a whole house interior, DIY costs £500 to £1,500 in materials vs £2,000 to £6,000 for a professional decorator.",
      },
      {
        question: "Do I need primer before painting?",
        answer:
          "Primer or a mist coat is necessary on new plaster, bare wood, repaired or filled areas, and when making dramatic colour changes (dark to light). On previously painted surfaces in good condition with a similar colour, you can skip primer — especially with self-priming premium paints. When in doubt, prime — it costs £8 to £20 per litre and saves on topcoat coverage.",
      },
      {
        question: "What is the best paint for interior walls?",
        answer:
          "For most interior walls, a silk or eggshell emulsion in a mid-range to premium quality provides the best balance of appearance, durability, and washability. Top-rated brands include Dulux Trade, Farrow & Ball, Little Greene, and Crown Trade. Use matt finish only on ceilings and low-traffic rooms. Use satinwood or gloss on trim, doors, and high-moisture areas like bathrooms.",
      },
    ],
  },
  lumberPrices: {
    title: "Timber Prices Guide: What Does Wood Cost?",
    metaDescription:
      "Current timber prices by species, grade, and size. Covers structural timber, engineered wood, plywood, price trends, where to buy, and bulk discounts for builders and DIY enthusiasts.",
    heroTitle: "Timber Prices Guide",
    heroSubtitle: "What Does Wood Cost?",
    heroDescription:
      "A comprehensive guide to timber pricing in the UK — from structural framing to hardwood boards — so you can budget accurately for your next building project.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "A standard C16 47×100×2400mm stud costs £3 to £6 at retail builders' merchants. Structural timber (C16/C24) averages £300 to £500 per cubic metre wholesale. Hardwood timber ranges from £20 to £100+ per cubic metre depending on species. Plywood runs £15 to £60 per 2440×1220mm sheet depending on thickness and grade. Prices fluctuate with market conditions, so always get current quotes from your supplier before ordering for a project.",

    speciesPricingHeading: "Timber Prices by Species",
    speciesPricingIntro:
      "Wood species is the single biggest factor in timber pricing. Here is what common species cost in the current market:",
    speciesPricingText1:
      "Softwood structural timber — spruce, pine, and imported whitewood — is the most affordable option and the backbone of residential construction. A 47×100×2400mm C16 stud costs £3 to £6 retail, while longer timbers like 47×225×3600mm run £12 to £25 each. Douglas fir, used for heavy structural applications, commands a 20–40% premium over standard whitewood. Treated softwood, required for ground contact and external use, costs 30–50% more than untreated. Western red cedar, prized for its natural durability and beauty, costs £8 to £15 per metre for 25×150mm cladding or fencing grade.",
    speciesPricingText2:
      "Domestic and European hardwoods span a wide price range. European oak, the most commonly used hardwood for joinery, beams, and furniture, costs £40 to £80 per cubic foot (sawn). Ash runs £25 to £50 per cubic foot. Beech costs £25 to £45 per cubic foot. Elm, where available, costs £30 to £60 per cubic foot. American walnut — a premium import — runs £60 to £120 per cubic foot depending on width and grade. These prices assume sawn or PAR (planed all round) boards from a hardwood specialist like Interesting Timbers, Timbmet, or Arnold Laver.",
    speciesPricingText3:
      "Exotic and tropical species sit at the top of the price scale. Iroko, a popular alternative to teak for outdoor use, costs £50 to £80 per cubic foot. Sapele, widely used for doors and window frames, runs £40 to £70 per cubic foot. Genuine teak, used for garden furniture and marine applications, costs £80 to £150 per cubic foot. Accoya (modified radiata pine with 50-year durability guarantee) costs £40 to £60 per linear metre for decking profiles. Import duties, shipping costs, and sustainability certifications (FSC, PEFC) all affect tropical timber pricing.",

    dimensionalVsEngineeredHeading: "Structural Timber vs Engineered Wood",
    dimensionalVsEngineeredIntro:
      "Modern construction increasingly uses engineered wood products alongside traditional sawn timber. Understanding the cost differences helps you choose the right product for each application:",
    dimensionalVsEngineeredItems: [
      "Structural timber (C16/C24 graded sawn softwood in sizes like 47×100, 47×150, 47×225) is the default choice for wall framing, roof framing, and short-span floor joists. It is the cheapest option per linear metre for spans under 5 metres.",
      "Laminated veneer lumber (LVL) beams cost £8 to £15 per linear metre for a 45×200mm beam — roughly 3 to 5 times the cost of a comparable solid timber. LVLs are used for lintels, ridge beams, and long spans where solid timber would require oversized sections.",
      "I-joists (such as Posi-Joist, JJI) cost £4 to £8 per linear metre depending on depth and specification. They replace solid 47×225 and 47×300 floor joists for spans over 4 metres, offering lighter weight, no crowning issues, and pre-punched knockouts for services.",
      "Glulam beams cost £15 to £35 per linear metre depending on size. They are used for exposed structural beams, long-span openings, and custom architectural elements. Available from suppliers such as Boise Cascade and Finnforest.",
      "SIPs (Structural Insulated Panels) cost £60 to £120 per square metre and combine structure and insulation in a single panel system. Increasingly popular for energy-efficient new builds under Part L of the Building Regulations.",
    ],
    dimensionalVsEngineeredSummary:
      "For most residential framing, structural sawn timber remains the most cost-effective choice. Engineered wood products make economic sense when you need longer spans, heavier loads, or more predictable performance than sawn timber can provide.",

    gradeHeading: "Understanding Timber Grades and Their Impact on Price",
    gradeIntro:
      "Timber grade directly affects price — higher grades cost more because they have fewer defects and more consistent structural properties:",
    gradeItems: [
      "C16 grade — The standard structural grade for most residential construction in the UK. Suitable for studs, joists, rafters, and general framing. This is what most builders' merchants stock as their default framing timber.",
      "C24 grade — A higher-strength grade with fewer knots and better structural properties than C16. Used when structural calculations require higher allowable stresses. Costs 10–20% more than C16 and is readily available from merchants like Jewson and Travis Perkins.",
      "TR26 grade — A specialist truss grade with controlled properties for manufactured roof trusses. Usually only available through truss manufacturers.",
      "GS (General Structural) and SS (Special Structural) — Older grading designations still encountered on some projects. GS is roughly equivalent to C16; SS is roughly equivalent to C24.",
      "Appearance grades (joinery grade, clear grade) — Used for finish carpentry, skirtings, architraves, and exposed applications where looks matter. Priced 50–100% above structural grades.",
      "D40, D50, D60 (Hardwood grades) — Strength grades for hardwoods per BS EN 338. The higher the number, the stronger and more expensive the timber.",
    ],
    gradeSummary:
      "For framing, C16 grade is the standard and most economical choice. Only specify C24 or higher when structural calculations demand it — you will pay significantly more for marginal improvements in strength.",

    priceTrendsHeading: "Timber Price Trends and Forecasting",
    priceTrendsIntro:
      "Timber prices are notoriously volatile, and understanding the market cycle helps you time your purchases:",
    priceTrendsText1:
      "UK timber prices surged dramatically during 2020–2021, driven by pandemic-fuelled demand, supply chain disruptions, and reduced imports from Scandinavia and the Baltic states. Structural timber prices more than doubled before stabilising through 2022–2026. A standard 47×100×2400 that cost £8–£10 at the peak can now be found for £3–£5. These dramatic swings underscore the importance of getting current prices rather than relying on historical estimates.",
    priceTrendsText2:
      "Seasonal patterns are predictable: timber prices typically peak in spring and early summer (March through June) when building season drives demand, and bottom out in late autumn and winter (October through January) when construction slows. Buying framing packages in November or December can save 10–20% compared to May pricing. However, you need dry, covered storage to protect timber purchased months before your project start date.",
    priceTrendsText3:
      "Long-term factors affecting timber prices include UK housing starts (the primary demand driver), post-Brexit import dynamics, Scandinavian and Baltic supply capacity, environmental regulations on forestry, and exchange rate fluctuations (as most structural softwood is imported). The weak pound has added significant cost to imported timber, particularly from Sweden, Latvia, and Finland.",

    whereToBuyHeading: "Where to Buy Timber: Retail vs Trade",
    whereToBuyIntro:
      "Where you buy timber significantly affects your total project cost. Here are the main channels, ranked from most to least expensive per metre:",
    whereToBuyItems: [
      "DIY stores (B&Q, Wickes, Homebase): Most convenient for small projects and individual lengths. Prices are posted, returns are easy, and stock is immediately available. However, pricing is 15–30% above trade merchants for the same species and grade. Best for: homeowners, small repairs, and projects under £300 in timber.",
      "National builders' merchants (Jewson, Travis Perkins, Buildbase): Better quality control, wider range of sizes and grades, knowledgeable staff, and trade pricing. Most offer delivery for orders over £250. Expect 10–25% savings over DIY store pricing on comparable materials. Best for: contractors, large DIY projects, and anyone who values quality and range.",
      "Independent timber merchants and sawmills: The best pricing, typically 20–40% below retail, with expert advice and the ability to cut to size. Some sell direct to the public, especially in rural timber-producing areas. Best for: house framing packages, bespoke joinery, and large orders.",
      "Online specialists (Timbmet, UK Timber, Timber Online): Best source for hardwoods, sheet materials, and specialist products. Pricing includes delivery surcharges. Best for: hardwood projects, specific species requirements, and those outside easy reach of a good merchant.",
      "Reclamation yards and salvage dealers: Reclaimed timber (old beams, floorboards, railway sleepers) at variable prices but with character and provenance. Best for: renovation projects, exposed beam features, and period-appropriate repairs.",
    ],
    whereToBuySummary:
      "For projects over £500 in timber cost, always get a quote from at least one trade merchant in addition to checking DIY store prices. The savings on a framing package can easily reach £500 to £2,000.",

    bulkDiscountsHeading: "Bulk Buying and Volume Discounts",
    bulkDiscountsIntro:
      "Buying timber in volume unlocks significant savings. Here is how bulk pricing works at each level:",
    bulkDiscountsItems: [
      "Pack pricing: Structural timber sold by the pack (a banded bundle, typically 6–10 lengths of the same size) costs 10–20% less than individual piece pricing. A pack of 47×100×2400 C16 might cost £25–£40 versus £4–£6 per individual length.",
      "Framing packages: Many builders' merchants will quote your entire framing material list as a package deal, including studs, plates, lintels, joists, rafters, sheathing, and fixings. Package pricing is typically 15–25% below the sum of individual retail prices. Submit your framing plans and get at least two quotes.",
      "Trade accounts: Builders who purchase regularly can set up trade accounts with merchants for an additional 5–15% discount below package pricing. Jewson, Travis Perkins, and Buildbase all offer trade account programmes.",
      "Pallet pricing for sheet materials: Buying a full pallet of plywood (50–60 sheets for 18mm) saves 10–15% over individual sheet pricing. A pallet of 18mm structural plywood at £28/sheet versus £35/sheet saves £350 to £420.",
      "Seasonal promotions: DIY stores run major timber sales during spring and bank holiday weekends. Watch for 10–15% off structural timber, multi-buy deals on treated timber, and trade pricing events at merchants.",
    ],
    bulkDiscountsSummary:
      "The biggest single savings opportunity is getting a complete framing package quote from a trade merchant. For a typical 140 m² house frame, the difference between retail piece pricing and a merchant package can be £2,500 to £6,000.",

    calculatorCtaHeading: "Calculate Your Timber Costs",
    calculatorCtaText:
      "Use our free timber calculators to estimate the exact cost of your project — from framing studs to hardwood boards to plywood sheets.",
    calculatorLinks: [
      { label: "Lumber Cost Calculator", href: "/calculators/hardware/lumber-cost-calculator", description: "Estimate total cost for structural timber by size and quantity." },
      { label: "Board Feet Calculator", href: "/calculators/hardware/board-feet-calculator", description: "Convert timber dimensions to board feet with cost estimates." },
      { label: "Plywood Calculator", href: "/calculators/hardware/plywood-calculator", description: "Calculate plywood sheets needed and total cost by thickness." },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      { question: "How much does a 47×100 stud cost right now?", answer: "As of 2026–2025, a standard C16 47×100×2400mm stud costs £3 to £6 at builders' merchants like Jewson, Travis Perkins, or Wickes. Prices vary by region, with higher costs in London and the South-East and lower prices in the Midlands and North. Treated timber costs 30–50% more for the same size. Check your local merchant's website or call for current pricing — timber prices can change weekly." },
      { question: "Why is timber so expensive compared to 5 years ago?", answer: "Timber prices spiked dramatically during 2020–2021 due to pandemic-driven demand, supply chain disruptions, and reduced imports from Scandinavia. While prices have fallen significantly from the peak, they remain 20–40% above pre-2020 levels due to higher transport costs, exchange rate pressure on imports, and increased demand from the housing sector. The market has normalised but at a higher baseline than the pre-pandemic levels." },
      { question: "What is the best time of year to buy timber?", answer: "Late autumn and winter (October through January) typically offers the lowest timber prices because construction activity slows and suppliers discount stock. You can save 10–20% compared to spring and summer peak pricing. If you have dry, covered storage, buying your framing package in November for a spring build can yield significant savings. Watch for bank holiday sales at DIY stores for additional discounts." },
      { question: "Is treated timber worth the extra cost?", answer: "Yes, for any wood in ground contact, within 150mm of soil, or exposed to persistent moisture. Treated timber costs 30–50% more than untreated softwood but lasts 15–30 years versus 3–5 years for untreated wood in ground contact. It is required by Building Regulations for sole plates, external joinery, and any structural timber near grade. The most common treatment is tanalised (copper-based preservative) to Use Class 2, 3, or 4 depending on the application." },
      { question: "How much timber do I need to frame a house?", answer: "A typical 140 m² timber-frame house requires approximately 15 to 25 cubic metres of structural timber for the complete frame (walls, floor, and roof). This translates to roughly 300–400 studs, 50–70 sheets of sheathing, plus joists, rafters/trusses, plates, and lintels. At current pricing, the framing timber package for a 140 m² house costs £6,000 to £12,000 depending on specification, market conditions, and where you buy." },
      { question: "What is the difference between C16 and C24 timber?", answer: "C16 and C24 are strength grades defined in BS EN 338. C24 has higher bending strength (24 N/mm² vs 16 N/mm²), fewer knots, and straighter grain than C16. C24 costs 10–20% more but allows longer spans or smaller timber sizes for the same structural requirement. For most residential framing, C16 is perfectly adequate and is the standard grade stocked by all UK builders' merchants. Only specify C24 when your structural engineer's calculations require it." },
    ],
  },

  compositeVsWood: {
    title: "Composite vs Wood Decking: Which Is Better?",
    metaDescription:
      "Composite vs wood decking compared: upfront cost, long-term value, durability, maintenance, appearance, lifespan, and environmental impact. Complete guide for choosing the right deck material.",

    heroTitle: "Composite vs Wood Decking",
    heroSubtitle: "Which Is Better?",
    heroDescription:
      "A comprehensive comparison of composite and wood decking materials to help you choose the right option for your budget, climate, and lifestyle.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "Choose composite decking if you want minimal maintenance, 25–50 year lifespan, and consistent appearance over time. Choose wood (treated softwood or cedar) if upfront budget is your primary concern, you enjoy the natural look and feel of real wood, and you are willing to maintain it annually. Composite costs 2–4x more upfront but saves money over 20+ years when you factor in staining, oiling, and replacement costs for wood.",

    whatIsCompositeHeading: "What Is Composite Decking?",
    whatIsCompositeText1:
      "Composite decking is an engineered building material made from a combination of wood fibres (sawdust, wood flour) and plastic polymers (typically polyethylene or polypropylene). The wood fibres provide structural rigidity and a natural appearance, while the plastic component delivers moisture resistance and durability. Most modern composite boards feature a protective polymer cap (shell) on all four sides that resists staining, fading, mould, and scratching.",
    whatIsCompositeText2:
      "Major composite decking brands available in the UK include Trex, TimberTech, Millboard, Cladco, and Composite Prime. Prices range from £20 to £50 per linear metre for the boards alone, with most homeowners choosing mid-range products at £25 to £35 per linear metre. Composite boards are typically available in 2.4 m, 3.6 m, and 4.8 m lengths and 140mm or 190mm widths.",

    whatIsWoodHeading: "What Is Wood Decking?",
    whatIsWoodText1:
      "Wood decking uses natural timber boards as the deck surface. The three most common wood species for decking in the UK are treated softwood (the most affordable and widely available), western red cedar (naturally rot-resistant with a warm tone), and tropical hardwoods like iroko, cumaru, and ipe (the most durable but most expensive). Treated softwood accounts for roughly 75% of all wood decks built in the United Kingdom.",
    whatIsWoodText2:
      "Treated softwood deck boards cost £3 to £8 per linear metre, making them the most budget-friendly decking option. Cedar ranges from £8 to £15 per linear metre, while tropical hardwoods run £15 to £35 per linear metre. Wood deck boards are available in 2.4 m, 3.0 m, 3.6 m, and 4.8 m lengths. The standard deck board is 32×150mm (finished), which provides good stiffness and comfort underfoot. Available from Jewson, Travis Perkins, Wickes, and specialist timber merchants.",

    comparisonHeading: "Composite vs Wood: Side-by-Side Comparison",
    comparisonSubheading: "How the two materials stack up across every important category.",
    comparisonCol1: "Category",
    comparisonCol2: "Composite Decking",
    comparisonCol3: "Wood Decking",
    comparisonRows: [
      { category: "Upfront Cost (per m²)", composite: "£60–£160 installed", wood: "£30–£90 installed" },
      { category: "Lifespan", composite: "25–50 years", wood: "10–30 years (varies by species)" },
      { category: "Annual Maintenance", composite: "Soap and water wash", wood: "Oil/stain every 1–2 years" },
      { category: "Maintenance Cost (20 yr)", composite: "£0–£150 total", wood: "£1,500–£4,000 total" },
      { category: "Appearance", composite: "Consistent, manufactured look", wood: "Natural grain, weathers to grey" },
      { category: "Heat Retention", composite: "Gets very hot in sun", wood: "Stays cooler underfoot" },
      { category: "Scratch Resistance", composite: "Good (capped products)", wood: "Varies by species" },
      { category: "Fade Resistance", composite: "Excellent (25-yr warranty)", wood: "Greys without maintenance" },
      { category: "Environmental Impact", composite: "Recycled content, long life", wood: "Renewable, shorter life" },
      { category: "DIY Difficulty", composite: "Moderate (special fixings)", wood: "Easy (standard screws)" },
    ],

    costHeading: "Cost Comparison: The Full Picture",
    costIntro: "The upfront price difference between composite and wood is significant, but the total cost of ownership over the deck's lifetime tells a different story.",
    costText1:
      "For a typical 4×5 m deck (20 m²), treated softwood decking material costs £200 to £400 for the boards alone. The same deck in mid-range composite (Trex or Millboard) costs £700 to £1,400 for boards. Including the substructure, fixings, and installation labour, the total installed cost is approximately £2,000 to £4,000 for wood and £4,000 to £7,000 for composite.",
    costText2:
      "However, wood decks require annual maintenance. Oiling and treating a 20 m² deck costs £100 to £300 per year in materials (quality decking oil plus application supplies). Over 20 years, that is £2,000 to £6,000 in maintenance costs alone. A treated softwood deck also typically needs board replacement after 10 to 15 years (£500 to £1,500). Composite decks need only occasional soap-and-water cleaning.",
    costText3:
      "Over a 25-year period, the total cost of ownership for a 4×5 m wood deck is approximately £5,000 to £12,000 (initial build plus maintenance and partial replacement). The same composite deck costs £4,000 to £7,000 total with virtually zero maintenance expense. At the 12 to 15-year mark, composite becomes the more economical choice.",

    whenCompositeHeading: "When to Choose Composite Decking",
    whenCompositeIntro: "Composite decking is the better choice in these situations:",
    whenCompositeItems: [
      "You want a low-maintenance deck that never needs oiling, staining, or painting.",
      "You live in a damp or coastal climate where wood decays quickly.",
      "You plan to stay in the home for 10+ years and want long-term value.",
      "You prefer a consistent, uniform appearance that will not change over time.",
      "You want a 25 to 50-year manufacturer warranty for peace of mind.",
      "You are building a raised or hard-to-access deck where maintenance would be difficult.",
    ],
    whenCompositeSummary:
      "Composite is the best all-round choice for homeowners who prioritise convenience, durability, and long-term savings over the lowest possible upfront cost.",

    whenWoodHeading: "When to Choose Wood Decking",
    whenWoodIntro: "Wood decking makes more sense in these situations:",
    whenWoodItems: [
      "Your upfront budget is limited and you need to minimise initial construction cost.",
      "You love the natural look, feel, and scent of real wood and are willing to maintain it.",
      "You live in a climate where composite would be uncomfortably hot underfoot in summer.",
      "You are building a temporary or short-term structure (5 to 10 year horizon).",
      "You enjoy DIY maintenance projects and view annual oiling as a satisfying ritual.",
      "You want a tropical hardwood deck (iroko, ipe) that offers both natural beauty and 25+ year durability.",
    ],
    whenWoodSummary:
      "Wood is ideal for budget-conscious builders, natural-wood enthusiasts, and projects where the warmth and character of real wood outweigh the maintenance commitment.",

    calculatorCtaHeading: "Calculate Your Deck Materials",
    calculatorCtaText: "Use our free deck calculators to estimate boards, footings, balustrade, and stairs for your project.",
    calculatorLinks: [
      { label: "Deck Board Calculator", href: "/calculators/outdoor/deck-board-calculator", description: "Estimate deck boards needed for any size deck." },
      { label: "Deck Footing Calculator", href: "/calculators/outdoor/deck-footing-calculator", description: "Calculate concrete footings and post layout." },
      { label: "Deck Railing Calculator", href: "/calculators/outdoor/deck-railing-calculator", description: "Get post, baluster, and rail quantities." },
      { label: "Deck Stair Calculator", href: "/calculators/outdoor/deck-stair-calculator", description: "Find step count, stringers, and tread boards." },
    ],

    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Is composite decking worth the extra cost?",
        answer:
          "Yes, for most homeowners. While composite costs 2–4x more upfront, it eliminates £2,000 to £6,000 in maintenance costs over 20 years and lasts 25–50 years versus 10–15 for treated softwood. The break-even point is typically 12 to 15 years. If you plan to stay in your home long-term, composite is almost always the better financial decision when you account for total cost of ownership.",
      },
      {
        question: "Does composite decking get too hot to walk on?",
        answer:
          "Composite decking does absorb more heat than wood, especially darker colours. On a warm summer day in direct sun, dark composite can become uncomfortable for bare feet. Lighter colours stay significantly cooler. Mitigation strategies include choosing lighter board colours, adding shade structures (pergola or sail shade), or using outdoor rugs in barefoot areas. Wood decking stays noticeably cooler than composite in the same conditions.",
      },
      {
        question: "How long does composite decking last?",
        answer:
          "Quality composite decking from major manufacturers (Trex, Millboard, TimberTech) lasts 25 to 50 years with minimal maintenance. Most carry 25-year structural warranties and 25 to 50-year fade and stain warranties. First-generation composites from the early 2000s had mould and fading issues, but modern capped composites have largely solved these problems. The substructure (treated softwood joists and beams) may need replacement before the composite boards.",
      },
      {
        question: "Can you paint or stain composite decking?",
        answer:
          "Capped composite decking should not be painted or stained because the polymer cap prevents adhesion, and paint will peel within 1–2 seasons. Uncapped or older composite boards can be painted with a solid-colour exterior paint after thorough cleaning and priming with a bonding primer. If you want to change the colour of a composite deck, contact the manufacturer for approved finishing products.",
      },
      {
        question: "Which is more eco-friendly: composite or wood?",
        answer:
          "Both have environmental trade-offs. Composite decking uses recycled materials (Trex uses 95% recycled content) and its long lifespan means fewer replacements over time. However, composite is not biodegradable and difficult to recycle at end of life. Wood is a renewable, biodegradable resource that sequesters carbon, but treated wood contains chemical preservatives and has a shorter lifespan requiring more frequent harvesting. FSC or PEFC certified sustainably harvested wood has the lowest environmental impact, while composite wins on longevity and recycled content.",
      },
      {
        question: "Can I mix composite and wood on the same deck?",
        answer:
          "Yes, many builders use a treated softwood substructure (posts, beams, joists) with composite deck boards and balustrade on top. This is actually the standard approach since composite boards are designed as a decking surface, not structural members. The treated wood frame provides the structural support at a lower cost than an all-composite system, while the composite surface delivers the low-maintenance benefits where you see and touch the deck.",
      },
    ],
  },
};

export default guides;
