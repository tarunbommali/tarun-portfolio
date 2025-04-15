import { InfiniteMovingCards } from "../ui/infinity-moving-cards";

export function MechineCoding() {
  return (
    <InfiniteMovingCards
      items={MechineCodingList}
      direction="left"
      speed="medium"
    />
  );
}

const MechineCodingList = [
  {
    title: "File System VSCode",
    topics: ["State", "useMemo", "DSA Recursion"],
    problemStatement: "Create a file system like VSCode",
    description:
      "Create a file system like VSCode, where you can create folders and files, and navigate through them.",
    link: "https://en.wikipedia.org/wiki/A_Tale_of_Two_Cities",
  },
  {
    title: "Nested Checkboxes",
    topics: ["State Management", "Tree Data Structure", "Recursion"],
    problemStatement:
      "Build nested checkboxes with parent-child selection behavior",
    description:
      "Implement a UI with checkboxes inside checkboxes. Selecting a parent checkbox selects all its children, and changing children affects the parent state accordingly.",
    link: "https://example.com/nested-checkboxes-demo",
  },
  {
    title: "Autocomplete Search Bar",
    topics: ["Debouncing", "API Integration", "Filtering"],
    problemStatement: "Implement an input field with autocomplete suggestions",
    description:
      "Create a search bar that shows matching suggestions while typing. Use debouncing and optional API integration for better performance.",
    link: "https://example.com/autocomplete-search-demo",
  },
  {
    title: "Tab Form",
    topics: ["State Management", "Form Validation", "Multi-Step Forms"],
    problemStatement: "Build a multi-step form using tabs",
    description:
      "Create a form split into multiple steps using tabs. Include navigation, validation, and final data collection on submission.",
    link: "https://example.com/tab-form-demo",
  },
  {
    title: "Pagination Component",
    topics: ["Array Slicing", "State Handling", "UX Navigation"],
    problemStatement: "Implement a pagination component for a long list",
    description:
      "Display a list of items with pagination controls to navigate through pages. Allow selecting number of items per page.",
    link: "https://example.com/pagination-demo",
  },
  {
    title: "Progress Bar",
    topics: ["Dynamic Styling", "Conditional Rendering", "UX Feedback"],
    problemStatement: "Create a responsive progress bar",
    description:
      "Design a progress bar that dynamically updates based on user interaction or task progress. Can be linear or circular.",
    link: "https://example.com/progress-bar-demo",
  },
  {
    title: "OTP Input",
    topics: ["Focus Handling", "Controlled Components", "Validation"],
    problemStatement: "Implement an OTP input field with fixed digit boxes",
    description:
      "Build an OTP input with 4–6 input boxes, automatic focus shift, and validation on submit.",
    link: "https://example.com/otp-input-demo",
  },
];
