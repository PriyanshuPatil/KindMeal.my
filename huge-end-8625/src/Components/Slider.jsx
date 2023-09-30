import SimpleImageSlider from "react-simple-image-slider";
import {Box} from '@chakra-ui/react'
const images = [
  { url: "https://www.kindmeal.my/photos/deal/7/717-5054-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/5/529-2478-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/6/687-4507-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/6/605-3316-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/6/671-4245-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/7/709-4950-m.jpg" },
  { url: "https://www.kindmeal.my/photos/deal/6/657-4063-m.jpg" },
];

export const Slider = () => {
    return (
      <Box  mt='10px' mb='20px' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'>
        <SimpleImageSlider
          width={'75%'}
          margin='auto'
          height={'250px'}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </Box>
    );
  }