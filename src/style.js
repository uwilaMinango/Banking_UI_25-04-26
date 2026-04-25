// styles.js
// Rather than copying the same long Tailwind strings into every component,
// we store them here and just import what we need. Much easier to update too —
// change it once here and it updates everywhere.

const styles = {

  // Stops the page content from getting too wide on big screens.
  // On anything smaller it just takes up the full width.
  boxWidth: "xl:max-w-[1280px] w-full",

  // The main section heading style. Slightly smaller on mobile,
  // bigger once we hit the xs breakpoint (480px).
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",

  // Regular body text. Uses dimWhite which we set up in index.css.
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  // Dead center — both horizontally and vertically.
  flexCenter: "flex justify-center items-center",

  // Centered left-to-right but pinned to the top.
  flexStart: "flex justify-center items-start",

  // Side padding. Breathing room on desktop, tighter on mobile.
  paddingX: "sm:px-16 px-6",

  // Top and bottom padding. Same idea — more room on larger screens.
  paddingY: "sm:py-16 py-6",

  // Both axes combined. Handy when you need all four sides at once.
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  // Side margins. Matches the paddingX spacing so things line up nicely.
  marginX: "sm:mx-16 mx-6",

  // Top and bottom margins.
  marginY: "sm:my-16 my-6",
};

// These are the bigger page-level layout patterns.
// Built by mixing the styles above so everything stays consistent.
// Import separately when you need them:
//   import { layout } from '../styles'
export const layout = {

  // Standard section — side by side on desktop, stacked on mobile.
  section: `flex md:flex-row flex-col ${styles.paddingY}`,

  // Same as above but the mobile stack order is flipped.
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  // The image half of a section when the image sits on the right.
  // Adds left margin on desktop to give it some space from the text.
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  // The image half when it sits on the left.
  // Adds right margin on desktop instead.
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  // The text half of a section. Stacks its content vertically.
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

// Default export for the main styles object.
// Named export above for layout.
// To grab both at once: import styles, { layout } from '../styles'
export default styles;