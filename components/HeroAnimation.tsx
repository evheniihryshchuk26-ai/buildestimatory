"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ── animation data ─────────────────────────────────────────────── */

const CATEGORIES = [
  { slug: "foundation", icon: "🏛️", label: "Foundation" },
  { slug: "floor-framing", icon: "🪵", label: "Floor Framing" },
  { slug: "wall-framing", icon: "🔨", label: "Wall Framing" },
  { slug: "roofing", icon: "🏠", label: "Roofing" },
  { slug: "exterior-shell", icon: "🧱", label: "Exterior Shell" },
  { slug: "insulation-drywall", icon: "🔩", label: "Insulation & Drywall" },
  { slug: "hardware", icon: "🔧", label: "Hardware" },
];

const CALCULATORS = [
  { slug: "anchor-bolt", label: "Anchor Bolt Calculator" },
  { slug: "sill-seal", label: "Sill Seal Calculator" },
  { slug: "sill-plate", label: "Pressure Treated Sill Plate Calculator" },
];

const FIELDS = [
  { id: "perimeter", label: "Foundation Perimeter", unit: "ft", value: "123" },
  { id: "spacing", label: "Bolt Spacing", unit: "ft", value: "10" },
];

const RESULTS = [
  { label: "13 anchor bolts (10 ft spacing)", icon: "✓" },
];

const DISCLAIMER = "Add 10–15% to your order as a waste factor for cuts and mistakes.";

/* ── timing constants (ms) ──────────────────────────────────────── */

const PAUSE_BEFORE_START = 800;
const CURSOR_MOVE_DURATION = 600;
const HOVER_DURATION = 400;
const CLICK_DURATION = 200;
const STEP_TRANSITION = 400;
const TYPE_CHAR_DELAY = 100;
const PAUSE_BETWEEN_FIELDS = 300;
const RESULT_DISPLAY = 3000;
const PAUSE_BEFORE_RESET = 1500;

/* ── component ──────────────────────────────────────────────────── */

type Phase =
  | "idle"
  | "move-to-category"
  | "hover-category"
  | "click-category"
  | "show-step2"
  | "move-to-calculator"
  | "hover-calculator"
  | "click-calculator"
  | "show-step3"
  | "move-to-field1"
  | "type-field1"
  | "move-to-field2"
  | "type-field2"
  | "move-to-button"
  | "hover-button"
  | "click-button"
  | "show-results"
  | "done";

export default function HeroAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCalculator, setSelectedCalculator] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [field1Value, setField1Value] = useState("");
  const [field2Value, setField2Value] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  const wait = useCallback(
    (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutRef.current = setTimeout(() => {
          if (mountedRef.current) resolve();
        }, ms);
      }),
    []
  );

  const typeText = useCallback(
    async (text: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
      for (let i = 0; i <= text.length; i++) {
        if (!mountedRef.current) return;
        setter(text.slice(0, i));
        await wait(TYPE_CHAR_DELAY);
      }
    },
    [wait]
  );

  /* ── main animation loop ────────────────────────────────────── */

  const runAnimation = useCallback(async () => {
    if (!mountedRef.current) return;

    // Reset state
    setSelectedCategory(null);
    setSelectedCalculator(null);
    setHoveredItem(null);
    setField1Value("");
    setField2Value("");
    setActiveField(null);
    setShowResults(false);
    setButtonHovered(false);
    setCurrentStep(1);
    setCursorClicking(false);
    setCursorPos({ x: 50, y: 50 });
    setPhase("idle");

    await wait(PAUSE_BEFORE_START);

    // Step 1: Move to Foundation category
    setPhase("move-to-category");
    setCursorPos({ x: 22, y: 32 });
    await wait(CURSOR_MOVE_DURATION);

    // Hover Foundation
    setPhase("hover-category");
    setHoveredItem("foundation");
    await wait(HOVER_DURATION);

    // Click Foundation
    setPhase("click-category");
    setCursorClicking(true);
    await wait(CLICK_DURATION);
    setCursorClicking(false);
    setSelectedCategory("foundation");
    setHoveredItem(null);
    await wait(STEP_TRANSITION);

    // Transition to Step 2
    setPhase("show-step2");
    setCurrentStep(2);
    await wait(STEP_TRANSITION);

    // Move to Anchor Bolt Calculator
    setPhase("move-to-calculator");
    setCursorPos({ x: 30, y: 38 });
    await wait(CURSOR_MOVE_DURATION);

    // Hover calculator
    setPhase("hover-calculator");
    setHoveredItem("anchor-bolt");
    await wait(HOVER_DURATION);

    // Click calculator
    setPhase("click-calculator");
    setCursorClicking(true);
    await wait(CLICK_DURATION);
    setCursorClicking(false);
    setSelectedCalculator("anchor-bolt");
    setHoveredItem(null);
    await wait(STEP_TRANSITION);

    // Transition to Step 3
    setPhase("show-step3");
    setCurrentStep(3);
    await wait(STEP_TRANSITION);

    // Move to field 1
    setPhase("move-to-field1");
    setCursorPos({ x: 30, y: 38 });
    await wait(CURSOR_MOVE_DURATION);

    // Click and type field 1
    setCursorClicking(true);
    await wait(CLICK_DURATION);
    setCursorClicking(false);
    setActiveField("perimeter");
    await wait(PAUSE_BETWEEN_FIELDS);
    await typeText(FIELDS[0].value, setField1Value);
    setActiveField(null);
    await wait(PAUSE_BETWEEN_FIELDS);

    // Move to field 2
    setPhase("move-to-field2");
    setCursorPos({ x: 72, y: 38 });
    await wait(CURSOR_MOVE_DURATION);

    // Click and type field 2
    setCursorClicking(true);
    await wait(CLICK_DURATION);
    setCursorClicking(false);
    setActiveField("spacing");
    await wait(PAUSE_BETWEEN_FIELDS);
    await typeText(FIELDS[1].value, setField2Value);
    setActiveField(null);
    await wait(PAUSE_BETWEEN_FIELDS);

    // Move to Calculate button
    setPhase("move-to-button");
    setCursorPos({ x: 50, y: 62 });
    await wait(CURSOR_MOVE_DURATION);

    // Hover button
    setPhase("hover-button");
    setButtonHovered(true);
    await wait(HOVER_DURATION);

    // Click button
    setPhase("click-button");
    setCursorClicking(true);
    await wait(CLICK_DURATION);
    setCursorClicking(false);
    setButtonHovered(false);
    await wait(STEP_TRANSITION);

    // Show results
    setPhase("show-results");
    setCurrentStep(4);
    setShowResults(true);
    await wait(RESULT_DISPLAY);

    // Done — pause then restart
    setPhase("done");
    await wait(PAUSE_BEFORE_RESET);

    if (mountedRef.current) {
      runAnimation();
    }
  }, [wait, typeText]);

  useEffect(() => {
    mountedRef.current = true;
    runAnimation();
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [runAnimation]);

  /* ── render ─────────────────────────────────────────────────── */

  return (
    <div className="relative w-full select-none pointer-events-none">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center gap-2">
          <span className="text-orange-500 text-lg" aria-hidden="true">
            📐
          </span>
          <span className="font-semibold text-gray-700 text-sm">Quick Calculator</span>
        </div>

        <div className="p-5 space-y-4">
          {/* Step 1: Categories */}
          {currentStep === 1 && (
            <div
              className="transition-all duration-300"
              style={{ opacity: currentStep === 1 ? 1 : 0 }}
            >
              <p className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                1. Choose Category
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat.slug}
                    className={`flex flex-col items-center gap-1 p-2.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedCategory === cat.slug
                        ? "border-orange-400 bg-orange-50 text-orange-700 shadow-sm"
                        : hoveredItem === cat.slug
                        ? "border-orange-300 bg-orange-50/50 text-orange-600 shadow-sm"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    <span className="text-lg" aria-hidden="true">
                      {cat.icon}
                    </span>
                    <span className="leading-tight text-center text-xs">{cat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Calculators */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                  🏛️ Foundation
                </span>
              </div>
              <p className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                2. Select Calculator
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CALCULATORS.map((calc) => (
                  <div
                    key={calc.slug}
                    className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedCalculator === calc.slug
                        ? "border-orange-400 bg-orange-50 text-orange-700 shadow-sm"
                        : hoveredItem === calc.slug
                        ? "border-orange-300 bg-orange-50/50 text-orange-600 shadow-sm"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {calc.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Fields */}
          {currentStep === 3 && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                  🏛️ Foundation
                </span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                  Anchor Bolt
                </span>
              </div>
              <div>
                <p className="block text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
                  3. Enter Measurements
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {FIELDS.map((field) => (
                    <div key={field.id}>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        {field.label}{" "}
                        <span className="text-gray-500 font-normal">({field.unit})</span>
                      </p>
                      <div
                        className={`w-full h-10 rounded-lg border bg-white px-3 text-sm flex items-center transition-all duration-200 ${
                          activeField === field.id
                            ? "border-orange-400 ring-2 ring-orange-400/30"
                            : "border-gray-300"
                        }`}
                      >
                        <span className="text-gray-800">
                          {field.id === "perimeter" ? field1Value : field2Value}
                        </span>
                        {activeField === field.id && (
                          <span className="inline-block w-px h-5 bg-orange-500 ml-px animate-blink" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`w-full text-center font-semibold py-2.5 rounded-lg transition-all duration-200 text-white ${
                  buttonHovered ? "bg-orange-600 shadow-md" : "bg-orange-500"
                }`}
              >
                Calculate Materials
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && showResults && (
            <div className="animate-fade-in space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                  🏛️ Foundation
                </span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-orange-100 text-orange-700 text-xs font-medium">
                  Anchor Bolt
                </span>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span aria-hidden="true">🛒</span>
                  <span className="font-semibold text-orange-800 text-sm">Your Shopping List</span>
                  <span className="text-sm text-gray-600 ml-auto">Anchor Bolt Calculator</span>
                </div>
                <ul className="space-y-2">
                  {RESULTS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-orange-100 animate-fade-in"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-orange-500 text-white text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-800 text-sm font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-600 bg-white rounded p-2 border border-gray-200 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  ⚠️ {DISCLAIMER}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cursor */}
      <div
        className="absolute z-20 transition-all pointer-events-none"
        style={{
          left: `${cursorPos.x}%`,
          top: `${cursorPos.y}%`,
          transitionDuration: `${CURSOR_MOVE_DURATION}ms`,
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transform: cursorClicking ? "scale(0.85)" : "scale(1)",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`drop-shadow-md transition-transform duration-100 ${
            cursorClicking ? "scale-90" : ""
          }`}
        >
          <path
            d="M5 3l14 8.5-6.5 1.5L9 19.5z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        {cursorClicking && (
          <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-orange-400/40 animate-ping" />
        )}
      </div>
    </div>
  );
}
