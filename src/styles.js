export const styles = {
    paddingXHero: "sm:px-20 px-8",
    paddingX: "sm:px-12 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    // content spacing
    contentContainer: "p-2 xl:p-8",
    contentSpacing: "py-4",
    cardContainer: "px-0 md:px-4 py-4",
    cardSpacing: "py-2",
  
    // landing page headers
    heroHeadText:
      // "font-bold 2xl:text-[120px] lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] 2xl:leading-[138px] lg:leading-[98px] mt-2",
      "font-[650] lg:text-[4.875rem] sm:text-[3.75rem] xs:text-[3.12] text-[2.5rem] lg:leading-[90px] 2xl:leading-[120px]",
    heroSubText:
      // "font-normal 2xl:text-[32px] lg:text-[24px] sm:text-[22px] xs:text-[18px] text-[16px] 2xl:leading-[42px] lg:leading-[36px]",
      // "font-light lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[36px]",
      "sm:text-[1.25rem] xs:text-[1.12rem] text-[1rem] lg:leading-[30px] lg:mt-2",
    
    //  section headers
    sectionHeadText:
      "font-[550] md:text-[3.62rem] sm:text-[3.25rem] xs:text-[2.62rem] text-[2rem] leading-tight",
    sectionSubText:
      "text-sm uppercase tracking-wider",
    sectionText: 
      "text-sm leading-[30px]",

    // project image not needed: delete these
    // profileImage: "h-[160px] xs:h-[280px] md:h-[320px] lg:h-[420px]",
    profileImage: "h-[160px] xs:h-[280px] md:h-[320px] lg:h-[420px]",
    ProjectImage: "xs:h-[220px] md:-[280px] lg:h-[320px]", // temporary width.. update to aspect ratio
    ProjectImageMobile: "h-[140px] md:h-[180px] lg:h-[250px]",
      //   w-[160px] xs:w-[280px] lg:w-[380px]
      //  h-[160px] xs:h-[280px] lg:h-[360px]
      //  pt-4 pb-2 md:pt-0 lg:pb-0 mx-auto

    borderBox: "rounded-md border-2 px-3",

    // forms
    formInput: `
      block w-full mt-1 px-3 py-2
      bg-primary border-none rounded-md 
      text-sm shadow-sm placeholder-blue-200
      
      focus:outline-none focus:border-blue-200 focus:ring-1 focus:ring-blue-200
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      `
  };
