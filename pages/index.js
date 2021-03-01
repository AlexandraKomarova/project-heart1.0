import Head from 'next/head'
import styles from '../styles/Home.module.css'
import animations from '../animations/HomeAnimations.module.css'
import { motion } from 'framer-motion'
import {
  firstHeartAppearsVariants, firstHeartWigglesVariants,
  bgLeftVariants, 
  blobVariants, blobWrapperVariants,
  aboutVariants, communityVariants,
  heartVariants, projectHeartVariants, 
  statemet1Variants, 
  statemet1Part1Variants, statemet1Part2Variants, statemet1Part3Variants,
  bgRightVariants, bgTopVariants, secondAboutVariants, secondCommunityVariants,
  firstDotVariants,
  statemet2Part1Variants, statemet2Part2Variants,
  statemet2DivVariants, 
  secondDotVariants, statemet3Variants, statemet3DivVariants, 
  thirdDotVariants, statemet4Variants  } from '../animations/animationsHome'

export default function Home() {
  return (
    <div 
      // PAGE WRAPPER
    className={styles.container}>
      <Head>
        <title className={styles.title}>project heart</title>
        <link rel="icon" href="/hearticon.png" />
      </Head>
      <motion.img 
        // FIRST HEART
          // variants={firstHeartAppearsVariants}
          // variants={firstHeartWigglesVariants}
          // initial="initial"
          // animate="animate"
        className={styles.firstHeart} className={animations.firstHeart} src="hearticon.png" alt=""/>
      <motion.div
      // LEFT BG THAT COVERS ALL
        variants={bgLeftVariants}
        initial="hidden"
        animate="visible"
      className={styles.bgLeft}></motion.div>
      <motion.div
      // RIGHT BG LANDSCAPE
          variants={bgRightVariants}
          initial="hidden"
          animate="visible"
        className={styles.bgRight}>
      </motion.div>
      <motion.div
      // TOP BG PORTRAIT
          variants={bgTopVariants}
          initial="hidden"
          animate="visible"
        className={styles.bgTop}>
      </motion.div>
      <motion.div
          // BLOB WRAPPER
          variants={blobWrapperVariants}
          initial="hidden"
          animate="visible"
        className={styles.blobWrapper}>
        <motion.div
          // BLOB
          variants={blobVariants}
          initial="hidden"
          animate="visible"
        className={styles.blob}>
          <motion.div
          // PROJECT HEART
              variants={projectHeartVariants}
              initial="hidden"
              animate="visible"
            className={styles.projectHeart}>
            <span className={styles.project}>project</span>
            <span className={styles.heartWord}>heart</span>
            <motion.img
            // SECOND HEART
            variants={heartVariants}
            initial="hidden"
            animate="visible"
          className={styles.blobHeart}src="hearticon.png" alt=""/>
          </motion.div>
        </motion.div>
      </motion.div>
      <nav 
      // NAV
      className={styles.nav}>
        <motion.div 
        // ABOUT
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
        className={styles.about}
        >
          <p className={styles.aboutP}>about</p>
        </motion.div>
        <motion.div 
        // SECOND ABOUT
          variants={secondAboutVariants}
          initial="hidden"
          animate="visible"
        className={styles.about}
        >
          <p className={styles.aboutP2}>about</p>
        </motion.div> 
        <motion.div
        // COMMUNITY
          variants={communityVariants}
          initial="hidden"
          animate="visible"
        className={styles.community}
        >
          <p className={styles.communityP}>community</p>
        </motion.div>
        <motion.div 
        // SECOND COMMUNITY
          variants={secondCommunityVariants}
          initial="hidden"
          animate="visible"
        className={styles.community}
        >
          <p className={styles.communityP2}>community</p>
        </motion.div>
      </nav>
      <motion.div 
      // STATEMENT 1 WRAPPER
        variants={statemet1Variants}
        initial="initial"
        animate="animate"
      className={styles.statement1}>
        <motion.div
          // STATEMENT 1, PART 1
          variants={statemet1Part1Variants}
          initial="hidden"
          animate="visible"
        >intentional nomadesque community </motion.div>
        <motion.div
          // STATEMENT 1, PART 2
          variants={statemet1Part2Variants}
          initial="hidden"
          animate="visible"
        >without borders - </motion.div>
        <motion.div
          // STATEMENT 1, PART 3
          variants={statemet1Part3Variants}
          initial="hidden"
          animate="visible"
        >
          beyond borders
        </motion.div>
      </motion.div>
      <div 
      // RIGHT STATEMENTS WRAPPER
      className={styles.rightStatementsWrapper}>
        <div className={styles.dots}>
          <motion.span 
            variants={firstDotVariants}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <motion.span 
            variants={secondDotVariants}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <motion.span
            variants={thirdDotVariants}
            initial="hidden"
            animate="visible"
          ></motion.span>
        </div>
        <motion.div
          // STATEMENT 2 WRAPPER
            variants={statemet2DivVariants}
            initial="initial"
            animate="animate"
          className={styles.rightStatement}>
            <motion.div
              // STATEMENT 2, PART 1
              variants={statemet2Part1Variants}
              initial="hidden"
              animate="visible"
            >
              hearts connected by the desire to leave a positive trace in the world
            </motion.div>
            <motion.div
              // STATEMENT 2, PART 2
              variants={statemet2Part2Variants}
              initial="hidden"
              animate="visible"
            >
            in the pursuit of a more creative and heartfelt existence
          </motion.div>
        </motion.div>
        <motion.div
          // STATEMENT 3 WRAPPER
          variants={statemet3DivVariants}
          initial="initial"
          animate="animate"
        className={styles.rightStatement}>
          <motion.div
            // STATEMENT 3
            variants={statemet3Variants}
            initial="hidden"
            animate="visible"
          >
            an organizational template for how we interact in the world
          </motion.div>
        </motion.div>
        <motion.div
        className={styles.rightStatement}>
          <motion.p
            variants={statemet4Variants}
            initial="hidden"
            animate="visible"
          >
            a semi-structured canvas upon which the community members contribute their talents
          </motion.p>
        </motion.div> 
      </div>
    </div>
  )
}