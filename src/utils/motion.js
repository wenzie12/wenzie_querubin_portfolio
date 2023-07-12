import { SECONDARY_COLOR } from "../themes/constants";

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const perspectiveVariant = (degree='0deg', perspective='400px') => {
  return {
    initial: {
      transform: `perspective(${perspective}) rotateY(${degree})`,
      // transformStyle: "preserve-3d",
    },
    animate: {
      transform: "perspective(400px) rotateY(0deg)",
    }
  }
}

export const perspectiveVariantImage = (degree='0deg',translateX='-10px', translateY='-10px', perspective='400px') => {
  return {
    initial: {
      transform: `perspective(${perspective}) rotateY(${degree})`,
      // transformStyle: "preserve-3d",
    },
    animate: {
      transform: `perspective(400px) rotateY(0deg) translateX(${translateX}) translateY(${translateY})`,
    }
  }
}

export const slideRightVariant = (type, delay) => {
  return {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: type, // sprint
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const scaleHeight = (type, delay, duration=1.5) => {
  return {
    hidden: {
      transform: "scaleY(0)",
      transformOrigin: "top",
      opacity: 0,
    },
    show: {
      transform: "scaleY(1)",
      opacity: 1,
      transition: {
        type: type, // spring
        duration,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: {
        delay: delay,
      }
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

export const scaleRight = {
  hidden: {
    
  },
  show: {
    
  }
}

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
      transition: {
        scale: {
          duration: .3,
        },
      }
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const raiseUp = {
  initial: {
    y: 0,
  },
  animate: {
    y: -8,
    transition: {
      duration: .2,
      ease: "easeInOut"
    }
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const swivelVariants = {
  hidden: {
    transform: "perspective(550px) rotateY(-25deg) rotateX(-15deg)",
    perspectiveOrigin: "top left",
    transformStyle: "flat",
    zIndex: 10,
    opacity: .1,
  },
  show: {
    transform: "perspective(550px) rotateY(0deg) rotateX(0deg)",
    transformStyle: "flat",
    opacity: 1,
    transition: { 
      staggerChildren: .15,
      ease: "easeInOut",
      duration: .6,
    },
  },
}

// used once

export const scaleImageVariant = (delay, duration) => {
  return {
    hidden: {
      scale: 1.2,
    },
    show: {
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }
    }
  }
}


export const tagVariants = (direction) => {
  return {
    initial: { 
      x: direction === "left" ? "4px" : direction === "right" ? "-4px" : 0,
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "sprint"
    },
    selected: { 
      x: 0,
      opacity: 1,
      color: SECONDARY_COLOR, // secondary
    },
    hover: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "sprint",
        ease: "easeIn"
      }
    }
  }
};

export const menuContainerVariants = {
  show: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    }
  }),
  hidden: {
    clipPath: "circle(0% at 95% 0)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
};




