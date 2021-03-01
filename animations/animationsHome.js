// FIXME: 
// fading out of right statements

// 2 after the heart
// BACKGROUND

export const bgLeftVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 2,
      ease: "linear"
    }
  }
}

// 3
// STATEMENT 1, PART 1

export const statemet1Part1Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 2.4,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 4
// STATEMENT 1, PART 2

export const statemet1Part2Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 3.4,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 5
// STATEMENT 1, PART 3

export const statemet1Part3Variants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 4.2,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 6
// NAV

export const aboutVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewY: 5
  },
  visible: {
    
    opacity: 1,
    skewY: 0,
    transition: {
      delay: 5.1,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 6
// NAV

export const communityVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5,
    y: 10
  },
  visible: {
    y: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 5.3,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 7
// STATEMENT 1 MOVES UP

export const statemet1Variants = {
  // initial: {
  //   y: 0,
  //   x: 0
  // },
  // animate: {
  //   x: -20,
  //   y: -20,
  //   transition: {
  //     delay: 5.4,
  //     duration: 1,
  //     type: 'spring',
  //     mass: 0.4,
  //     stiffness: 50,
  //     velocity: 2
  //   }
  // }
}

// 8
// BLOB 

export const blobWrapperVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: 0,
    y: 0
  },
  visible: {
    y: -20,
    x: 20,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 5.4,
      duration: 1,
      ease: "linear"
    }
  }
}

// 8
// BLOB

export const blobVariants = {
  hidden: {
    opacity: 0,
    scale: 0.1
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 5.4,
      duration: 1,
      ease: "linear"
    }
  }
}

// 9
// PROJECT HEART

export const projectHeartVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 6.1,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 10
// HEART

export const heartVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5
  },
  visible: {
    rotate: [0, -5, 0],
    // scale: [1, 1.05, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 6.3,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 11
// TOP BG SLIDES DOWN

export const bgTopVariants = {
  hidden: {
    opacity: 0,
    y: -1000
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 7.3,
      duration: 2,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

// 11
// RIGHT BG  SLIDES FROM THE RIGHT

export const bgRightVariants = {
  hidden: {
    opacity: 0,
    x: 1000
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 7.4,
      duration: 1,
      type: 'spring',
      mass: 0.4,
      stiffness: 50,
      velocity: 2
    }
  }
}

// 12 
// RED ABOUT AND COMMUNITY REPLACE THE WHITE ONES

export const secondAboutVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5,
    y: 10
  },
  visible: {
    y: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 8.4,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 12 
// RED ABOUT AND COMMUNITY REPLACE THE WHITE ONES

export const secondCommunityVariants = {
  hidden: {
    opacity: 0,
    originX: 0,
    originY: 1,
    skewX: 5,
    y: 10
  },
  visible: {
    y: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 8.5,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 13
// 1ST DOT

export const firstDotVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.1, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 9,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 12
// STATEMENT 2, PART 1

export const statemet2Part1Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 10,
      duration: 2,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 13
// STATEMENT 2, PART 1

export const statemet2Part2Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 11,
      duration: 2,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 14
// 2ND STATEMENT FADES OUT

export const statemet2DivVariants = {
  initial: {
    opacity: 1,
    x: 0
  },
  animate: {
    x: 30,
    opacity: 0,
    transition: {
      delay: 13,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 15
// 2ND DOT

export const secondDotVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.1, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 14,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 16
// 3RD STATEMENT

export const statemet3Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 15,
      duration: 2,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 17
// 3RD STATEMENT FADES OUT

export const statemet3DivVariants = {
  initial: {
    opacity: 1,
    x: 0
  },
  animate: {
    x: 40,
    opacity: 0,
    transition: {
      delay: 17,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 18 
// 3RD DOT

export const thirdDotVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    scale: [1, 1.1, 1],
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 18,
      duration: 1,
      type: 'spring',
      bounce: 0.25
    }
  }
}

// 19 
// 4TH STATEMENT

export const statemet4Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    skewX: 0,
    transition: {
      delay: 19,
      duration: 2,
      type: 'spring',
      bounce: 0.25
    }
  }
}


