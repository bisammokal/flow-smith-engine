// Premium Motion System - Global Animation Utilities
// Inspired by Apple Vision Pro x Tesla UI x OpenAI

export const motionConfig = {
  // Luxury timing curves
  easing: {
    luxury: [0.22, 0.61, 0.36, 1] as const,
    smooth: [0.25, 0.1, 0.25, 1] as const,
    elegant: [0.4, 0, 0.2, 1] as const,
  },
  
  // Consistent durations
  duration: {
    fast: 0.18,
    normal: 0.25,
    slow: 0.35,
    cinematic: 0.6,
  },
  
  // Stagger timings
  stagger: {
    minimal: 0.015,
    normal: 0.025,
    visible: 0.05,
  },
};

// Fade up animation variant
export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.luxury,
    }
  }
};

// Fade in simple
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.smooth,
    }
  }
};

// Scale in with fade
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.luxury,
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.luxury,
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: motionConfig.duration.slow,
      ease: motionConfig.easing.luxury,
    }
  }
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: motionConfig.stagger.normal,
      delayChildren: 0.1,
    }
  }
};

// 3D tilt on hover
export const tiltOnHover = {
  rest: { 
    rotateX: 0, 
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: motionConfig.duration.normal,
      ease: motionConfig.easing.smooth,
    }
  }
};
