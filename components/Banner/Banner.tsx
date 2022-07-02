import styles from "./Banner.module.css";
import Image from 'next/image';
import bannerSample from '../../public/banner-sample.png'
import { Box } from "@mui/material";

const Banner: React.FC = () => {

  const sampleText = "wokAwish is under construction"
  
  return (
    <Box className={styles.banner} >
       <div className={styles.radialBackground}></div>
      <Image className={styles.bannerImg} src={bannerSample}/>
      <h1 className={styles.heroText}>{sampleText}</h1>
    </Box>
  );
};

export default Banner;
