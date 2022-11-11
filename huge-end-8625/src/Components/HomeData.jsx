import {Box,Flex,Heading,Text,Spacer,Link,Image} from '@chakra-ui/react'

function Carddata({props,bg}){

return (
    <Box bg={bg} pt='30px' pb='30px'>
    <Box w='75%' m='auto' p='20px'   bg='#f2fffe' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' >
    <Flex >
        <Text fontSize='21px' color='gray.500'>{props.Heading}</Text>
        <Spacer/>
        <Link color="blue" fontSize='13px' m='auto' >{props.linkdata1}</Link>
        <Text m='auto 10px'> •  </Text>
        <Link color="blue" fontSize='13px' m='auto' >{props.linkdata2}</Link>
        <Text m='auto 10px'> •  </Text>
        <Link color="blue" fontSize='13px' m='auto' >{props.linkdata3}</Link>
    </Flex>
    <Flex gap='15px' mt='10px'  >
        <Box w='19%' >
            <Image src={props.imgurl1} h='150px' w='100%'/>
            <Text fontSize='12px' color='gray'>{props.imgtext1}</Text>
            <Text fontSize='11px'>{props.author1}</Text>
        </Box>
        <Box w='19%'>
            <Image src={props.imgurl2} h='150px' w='100%'/>
            <Text fontSize='12px' color='gray'>{props.imgtext2}</Text>
            <Text fontSize='11px'>{props.author2}</Text>
        </Box>
        <Box w='19%'>
            <Image src={props.imgurl3} h='150px'w='100%'/>
            <Text fontSize='12px' color='gray'>{props.imgtext3}</Text>
            <Text fontSize='11px'>{props.author3}</Text>
        </Box>
        <Box w='19%'>
            <Image src={props.imgurl4}  h='150px' w='100%'/>
            <Text fontSize='12px' color='gray'>{props.imgtext4}</Text>
            <Text fontSize='11px'>{props.author4}</Text>
        </Box>
        <Box w='19%'>
            <Image src={props.imgurl5} h='150px' w='100%'/>
            <Text fontSize='12px' color='gray'>{props.imgtext5}</Text>
            <Text fontSize='11px'>{props.author5}</Text>
        </Box>
    </Flex>
    </Box>
    </Box>
)
}
export function HomeData(){

    const carddata1={
      Heading:"Latest News & Videos"  ,
      linkdata1:"Save Lives with Your Blog",
      linkdata2:"News & Articles",
      linkdata3:"Follow Our Facebook",
      imgurl1:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/83909250_515842169093530_1287344682367451136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=FoawV48DSOkAX-_cXga&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfCQqxoUNCWnCKqhFmJ_LOqP_nyoQLqonzb7sa4cow83Yw&oe=6372BB55",
      imgtext1:"Tornado Potatoes 🌪🥔",
      author1:"",
      imgurl2:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/298969854_601112454850438_5265806124209675410_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=WZDVFJjewEIAX9CbLYZ&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfByIQuo6q_FP-_uissbga9dKo123Gd0OfckEL4aQgVXwA&oe=6372D358",
      imgtext2:"Mama And Baby Elephant Get Stuck In 7 Foot Hole",
      author2:"",
      imgurl3:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/271582707_265022372394889_56974782009965446_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=AvnOZmUGPm4AX9yLKFO&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDGKeW6MyGzXI8ZactDSRY_wK7sPNoOJDPG8z5d90C6nA&oe=6372E4A3",
      imgtext3:"Watch These White Fluffy Babies Turn Into The Most Gorgeous ..",
      author:"",
      imgurl4:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/117878469_336434917736037_3866333495709289709_n.jpg?stp=dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=LJ4Mzxi0yckAX9Yttmo&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfDPk7hZf7M4PRZTN0ePz5giA6irwysp_DltNLwLdl4bxA&oe=63721345",
      imgtext4:"Goulash & Dumplings From Speedy Bosh!",
      author4:"",
      imgurl5:"https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/289716764_300414298892410_2889986081793667301_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=RwwitqaIrFQAX8XdIRZ&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AfBG0NyVNzSBoXHKEvuZJn5c-APbTni-1icvJy-JutUFdw&oe=6372D9B0",
      imgtext5:"Best Friends At Off The Plate Sanctuary",
      author5:""

    }
    const carddata2={
        Heading:"Yummylicious Moments"  ,
        linkdata1:"Secret Recipes",
        linkdata2:"Member Hot Picks ",
        linkdata3:" Photo Moments",
        imgurl1:"https://www.kindmeal.my/photos/moment/24/24609-47688-s.jpg",
        imgtext1:"Fusion Western Delicacies",
        author1:"William21",
        imgurl2:"https://www.kindmeal.my/photos/moment/24/24604-47676-s.jpg",
        imgtext2:"Seed Organic Farm & Wholesome Dining",
        author2:"VyVian",
        imgurl3:"https://www.kindmeal.my/photos/moment/24/24597-47663-s.jpg",
        imgtext3:"Malaysian Favorites & Ramen",
        author3:"FatJedi",
        imgurl4:"https://www.kindmeal.my/photos/moment/24/24596-47660-s.jpg",
        imgtext4:"Malaysian Favorites & Ramen",
        author4:"WongEeLynn",
        imgurl5:"https://www.kindmeal.my/photos/moment/24/24595-47657-s.jpg",
        imgtext5:"Simple Is the Best",
        author5:"FoodLover422"
  
      }
      const carddata3={
        Heading:"Discover Restaurants"  ,
        linkdata1:"Vegetarian Directory",
        linkdata2:"Restaurant Menu",
        linkdata3:"Food Map",
        imgurl1:"https://www.kindmeal.my/photos/item/0/353-3796-s.jpg",
        imgtext1:"Vegetarian Fish Head Vermicelli 余头米粉面",
        author1:"",
        imgurl2:"https://www.kindmeal.my/photos/item/0/583-8129-s.jpg",
        imgtext2:"Aglio e Olio with Beyond Sausage",
        author2:"",
        imgurl3:"https://www.kindmeal.my/photos/item/0/538-7371-s.jpg",
        imgtext3:"Creamy Mushroom Pumpkin",
        author3:"",
        imgurl4:"https://www.kindmeal.my/photos/item/0/601-8769-s.jpg",
        imgtext4:"Hakka Cha Nyuk Rice",
        author4:"",
        imgurl5:"https://www.kindmeal.my/photos/item/0/121-1080-s.jpg",
        imgtext5:"Choc Waffle with Homemade Peanut Butter ..",
        author5:""
  
      }
      const carddata4={
        Heading:"Amazing Superheroes"  ,
        linkdata1:"Latest Buzz ",
        linkdata2:"Lifestyle Ambassadors",
        linkdata3:"Win Gifts!",
        imgurl1:"https://www.kindmeal.my/photos/member/39/39580-m.jpg",
        imgtext1:"RajeshKothari",
        author1:"",
        imgurl2:"https://www.kindmeal.my/photos/member/39/39004-m.jpg",
        imgtext2:"GeetaanjalliLingam",
        author2:"",
        imgurl3:"https://www.kindmeal.my/photos/member/38/38516-m.jpg",
        imgtext3:"JingShun",
        author3:"",
        imgurl4:"https://www.kindmeal.my/photos/member/41/41396-m.jpg",
        imgtext4:"LeebeeEng",
        author4:"",
        imgurl5:"https://www.kindmeal.my/photos/member/33/33305-m.jpg",
        imgtext5:"ZeeYinzhiCheong",
        author5:""
  
      }

      return (
        <Box>
        <Carddata props={carddata1} />
        <Carddata props={carddata2} />
        <Carddata props={carddata3} />
        <Carddata props={carddata4} bg='#cfe3df'/>
        </Box>
      )




}



