import type { GuidesTranslations } from "@/lib/i18n/types";

const guides: GuidesTranslations = {
  breadcrumbGuides: "Guides",

  index: {
    title: "Construction Guides",
    metaDescription:
      "In-depth construction guides for builders, contractors, and DIYers. Learn about framing spacing, material selection, building codes, and more.",
    heading: "Construction Guides",
    description:
      "In-depth guides to help you make better decisions on your next building project.",
    guides: [
      {
        title: "16 vs 24 On-Center Spacing: Complete Guide",
        description:
          "Learn when to use 16-inch vs 24-inch on-center spacing for studs, joists, and rafters. Includes code requirements, cost comparison, and material impact.",
        href: "/guides/16-vs-24-on-center-spacing",
      },
    ],
  },

  spacingGuide: {
    title: "16 vs 24 On-Center Spacing: Complete Guide",
    metaDescription:
      "16 vs 24 on-center spacing explained: when to use each for wall studs, floor joists, roof rafters. Includes IRC building code requirements, cost comparison, and material impact.",

    heroTitle: "16 vs 24 On-Center Spacing",
    heroSubtitle: "Complete Guide",
    heroDescription:
      "Everything you need to know about choosing between 16-inch and 24-inch on-center spacing for wall studs, floor joists, ceiling joists, and roof rafters.",

    quickAnswerHeading: "Quick Answer",
    quickAnswerText:
      "Use 16\" on-center (OC) spacing for load-bearing walls, most floor joists, and any application where maximum structural strength is required. Use 24\" OC spacing for non-load-bearing interior partition walls, some roof trusses, and situations where code allows it and you want to reduce material costs by up to 33%.",

    whatIsHeading: "What Is On-Center Spacing?",
    whatIsText1:
      "On-center (OC) spacing is the distance measured from the center of one framing member to the center of the next. This is the standard way builders and building codes specify the spacing of studs, joists, rafters, and trusses in wood-frame construction.",
    whatIsText2:
      "The two most common on-center spacing measurements in residential construction are 16 inches and 24 inches. The choice between these two spacings affects structural capacity, material cost, insulation performance, and compatibility with standard building materials.",
    whatIsText3:
      "Standard building materials like 4\u00d78-foot plywood, OSB sheets, and drywall panels are manufactured in dimensions divisible by both 16 and 24 inches, so panel edges always land on a framing member at either spacing.",

    comparisonHeading: "16\" OC vs 24\" OC: Side-by-Side Comparison",
    comparisonSubheading:
      "How the two most common framing spacings compare across every major application.",
    comparisonCol1: "Application",
    comparisonCol2: "16\" On-Center",
    comparisonCol3: "24\" On-Center",
    comparisonRows: [
      {
        category: "Exterior Load-Bearing Walls",
        oc16: "Required by most codes for 2\u00d74 walls. Strongest option.",
        oc24: "Allowed with 2\u00d76 studs in some jurisdictions (check local code).",
      },
      {
        category: "Interior Non-Load-Bearing Walls",
        oc16: "Common but not required. More fastening points for cabinets.",
        oc24: "Code-compliant. Saves ~33% on stud material.",
      },
      {
        category: "Floor Joists (2\u00d710, typical span)",
        oc16: "Spans up to ~16 ft with Douglas Fir #2. Stiffer floor.",
        oc24: "Spans up to ~13 ft with same lumber. May feel bouncy.",
      },
      {
        category: "Ceiling Joists (non-attic storage)",
        oc16: "Standard for attic storage. Supports drywall plus loads.",
        oc24: "Adequate for drywall-only ceilings with no attic storage.",
      },
      {
        category: "Roof Rafters / Trusses",
        oc16: "Used in high snow-load areas (>40 psf ground snow load).",
        oc24: "Standard for engineered trusses in moderate climate zones.",
      },
      {
        category: "Material Cost (per linear foot of wall)",
        oc16: "~$3.75\u2013$5.00/ft (more lumber, more fasteners).",
        oc24: "~$2.50\u2013$3.50/ft (fewer studs, less labor).",
      },
      {
        category: "Insulation",
        oc16: "Standard R-13 to R-15 batts for 2\u00d74, R-19 to R-21 for 2\u00d76.",
        oc24: "Wider bays allow R-21+ for 2\u00d76 walls. Better thermal performance.",
      },
      {
        category: "Drywall Support",
        oc16: "Excellent fastening. Less risk of nail pops and sagging.",
        oc24: "Requires 5/8\" drywall on ceilings to prevent sag.",
      },
    ],

    when16Heading: "When to Use 16\" On-Center Spacing",
    when16Intro:
      "16-inch on-center spacing is the more conservative and commonly used option. Here is when it is required or strongly recommended:",
    when16Items: [
      "Load-bearing exterior walls \u2014 Required by the IRC (International Residential Code) for most 2\u00d74 wall assemblies carrying roof and floor loads.",
      "Floor joists for longer spans \u2014 16\" OC allows joists to span greater distances. For a 2\u00d710 Douglas Fir #2 joist, 16\" OC spans up to 16\u20192\u2033 vs only 13\u20191\u2033 at 24\" OC.",
      "Areas supporting heavy finishes \u2014 Tile floors, stone countertops, or built-in cabinetry benefit from the extra support that 16\" OC framing provides.",
      "High wind or seismic zones \u2014 Building codes in hurricane and earthquake zones often mandate 16\" OC (or closer) for shear wall construction.",
      "Ceiling joists with attic storage \u2014 If the attic will be used for storage or future living space, 16\" OC provides the necessary load capacity.",
      "Walls with heavy cladding \u2014 Brick veneer, stucco over OSB, and fiber cement siding all perform better with studs at 16\" OC.",
    ],
    when16Summary:
      "Bottom line: when in doubt, 16\" OC is the safer choice. The extra material cost is modest compared to the structural benefits.",

    when24Heading: "When to Use 24\" On-Center Spacing",
    when24Intro:
      "24-inch on-center spacing uses fewer framing members and can save significant material and labor costs. Here is when it is appropriate:",
    when24Items: [
      "Non-load-bearing interior partition walls \u2014 The IRC allows 24\" OC for interior walls that carry no structural load. This is the most common application.",
      "Engineered roof trusses \u2014 Most manufactured trusses are designed for 24\" OC spacing. The truss engineering accounts for the wider spacing.",
      "Advanced framing (OVE) construction \u2014 Optimum Value Engineering uses 2\u00d76 studs at 24\" OC with single top plates, reducing lumber by up to 30% while improving insulation.",
      "Gable end walls \u2014 Non-structural gable end walls above the roof line can typically use 24\" OC spacing.",
      "Ceiling joists (drywall only) \u2014 Where the ceiling only supports drywall with no attic storage above, 24\" OC is code-compliant.",
      "Budget-conscious projects \u2014 On a 2,000 sq ft home, switching non-load-bearing walls to 24\" OC can save $800\u2013$1,200 in lumber alone.",
    ],
    when24Summary:
      "Bottom line: 24\" OC is a smart choice where code allows it, especially for non-load-bearing walls and engineered trusses.",

    codeHeading: "Building Code Requirements (IRC)",
    codeIntro:
      "The International Residential Code (IRC) provides specific guidance on when each spacing is permitted. Here are the key code sections:",
    codeItems: [
      "IRC R602.3 \u2014 Exterior load-bearing walls: 2\u00d74 studs at 16\" OC or 2\u00d76 studs at 24\" OC (with approved sheathing).",
      "IRC R602.3.1 \u2014 Interior non-load-bearing partitions: 2\u00d74 or 2\u00d73 studs at 24\" OC maximum.",
      "IRC R502.3 \u2014 Floor joist spans: Tables specify maximum spans for each species, grade, and spacing (12\", 16\", 19.2\", 24\").",
      "IRC R802.4 \u2014 Rafter spans: Similar span tables for roof rafters at various spacings.",
      "IRC R702.3.5 \u2014 Drywall application: 1/2\" drywall on walls at up to 24\" OC; 5/8\" drywall required on ceilings at 24\" OC.",
      "Local amendments may override IRC defaults. Always check with your local building department before finalizing framing plans.",
    ],
    codeSummary:
      "Important: Building codes are minimum standards. Your engineer or local building department may require closer spacing based on site-specific conditions like soil type, wind exposure, or snow load.",

    costHeading: "Cost Comparison: 16\" vs 24\" On-Center",
    costIntro:
      "Material savings is one of the biggest reasons builders consider 24\" OC spacing. Here is how the numbers break down:",
    costText1:
      "For a standard 8-foot wall, 16\" OC spacing requires one stud every 16 inches \u2014 roughly 0.75 studs per linear foot of wall. At 24\" OC, you need about 0.50 studs per linear foot. That is a 33% reduction in stud count.",
    costText2:
      "On a typical 2,000 sq ft single-story home with ~200 linear feet of interior partitions, switching from 16\" to 24\" OC saves approximately 50 studs. At $6\u2013$8 per stud (2024 pricing for 2\u00d74\u00d796 SPF), that is $300\u2013$400 in studs alone. Factor in reduced fasteners, reduced labor (fewer studs to cut, carry, and nail), and the savings reach $800\u2013$1,200.",
    costText3:
      "However, do not use 24\" OC spacing just to save money on load-bearing walls. The cost of a structural failure or code violation far exceeds any material savings. The savings apply only where 24\" OC is code-compliant.",

    impactHeading: "Impact on Other Materials",
    impactIntro:
      "Your framing spacing does not just affect lumber. It has a ripple effect across multiple building systems:",
    impactInsulationHeading: "Insulation",
    impactInsulationText:
      "Fiberglass batts come in widths designed for both 16\" and 24\" OC bays. At 16\" OC, standard batts are 15 inches wide (R-13 or R-15 for 2\u00d74 walls). At 24\" OC, batts are 23 inches wide. The wider bays at 24\" OC actually improve thermal performance because there are fewer studs acting as thermal bridges. In advanced framing, 2\u00d76 studs at 24\" OC can achieve R-21 wall assemblies with standard batts.",
    impactDrywallHeading: "Drywall",
    impactDrywallText:
      "Standard 1/2-inch drywall works well on walls at either 16\" or 24\" OC. However, on ceilings, the IRC requires 5/8-inch drywall when joists or trusses are spaced at 24\" OC to prevent sagging. 5/8-inch drywall costs about 20\u201330% more per sheet than 1/2-inch, which partially offsets the framing savings.",
    impactSheathingHeading: "Sheathing and Siding",
    impactSheathingText:
      "4\u00d78 plywood and OSB panels work at both spacings since their edges land on framing members. However, at 24\" OC, the panel spans a greater unsupported distance between studs. For structural sheathing (like wall bracing), verify the panel rating matches the stud spacing. Panels rated for \"wall-24 OC\" are required when using 24-inch spacing on structural sheathing applications.",

    calculatorCtaHeading: "Calculate Your Materials",
    calculatorCtaText:
      "Use our free calculators to get exact material quantities for your project at either 16\" or 24\" on-center spacing:",
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
        question: "Can I use 24-inch on-center spacing for exterior walls?",
        answer:
          "Yes, but only with 2\u00d76 studs and approved structural sheathing in most jurisdictions. The IRC (R602.3) permits 2\u00d76 studs at 24\" OC for exterior load-bearing walls up to certain heights and load conditions. Always verify with your local building code.",
      },
      {
        question: "Is 16 or 24 on-center better for hanging cabinets?",
        answer:
          "16-inch on-center is better for cabinet installation because it provides more fastening points. With studs at 16\" OC, a 36-inch upper cabinet will hit at least two studs. At 24\" OC, a narrow cabinet might only catch one stud, requiring toggle bolts or a French cleat for the other attachment point.",
      },
      {
        question: "What does on-center mean in construction?",
        answer:
          "On-center (abbreviated OC or o.c.) means the distance is measured from the center of one framing member to the center of the adjacent member. For 16\" on-center studs, the center of each stud is 16 inches from the center of the next stud. This standardized measurement ensures consistent spacing and compatibility with 48-inch and 96-inch panel materials.",
      },
      {
        question: "How much money does 24\" OC spacing save?",
        answer:
          "Switching from 16\" to 24\" OC on non-load-bearing walls saves approximately 33% on stud material. For a typical 2,000 sq ft home, this translates to $800\u2013$1,200 in combined lumber, fastener, and labor savings. The exact amount depends on local lumber prices and labor rates.",
      },
      {
        question: "Can I use 1/2-inch drywall on 24\" OC ceiling joists?",
        answer:
          "No. The IRC (R702.3.5) requires 5/8-inch drywall on ceilings where framing is spaced at 24\" OC. Using 1/2-inch drywall at this spacing will cause sagging over time, especially in humid conditions. On walls, 1/2-inch drywall is acceptable at 24\" OC.",
      },
      {
        question: "What is advanced framing (OVE)?",
        answer:
          "Advanced framing, also called Optimum Value Engineering (OVE), is a framing technique that uses 2\u00d76 studs at 24\" OC with single top plates, two-stud corners, and ladder blocking. It reduces lumber use by up to 30% while allowing thicker insulation (R-21 vs R-13). It is recognized by the IRC and promoted by the U.S. Department of Energy.",
      },
      {
        question: "Do roof trusses use 16 or 24 on-center spacing?",
        answer:
          "Most engineered roof trusses are designed for 24\" OC spacing. The truss manufacturer engineers each truss to carry the required loads at the specified spacing. However, in areas with heavy snow loads (above 40 psf ground snow load), 16\" OC truss spacing may be specified by the engineer.",
      },
      {
        question: "Does stud spacing affect energy efficiency?",
        answer:
          "Yes. Studs act as thermal bridges, conducting heat through the wall assembly. At 16\" OC, studs make up about 25% of the wall area, reducing the effective R-value. At 24\" OC, studs account for only about 17% of the wall area, which improves whole-wall R-value. Combined with 2\u00d76 framing, 24\" OC spacing can improve wall energy efficiency by 15\u201320%.",
      },
    ],
  },
};

export default guides;
