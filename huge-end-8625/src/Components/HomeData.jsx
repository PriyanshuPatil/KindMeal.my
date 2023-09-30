import {Box,Flex,Heading,Text,Spacer,Link,Image, Grid} from '@chakra-ui/react'

function Carddata({props,bg}){

return (
    <Box bg={bg} pt='30px' pb='30px' >
    <Box  p='20px'   bg='#f2fffe' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' >
    <Flex >
        <Text fontSize={{ base:"18px" , sm:"22px", md:"25px" }} color='gray.500'>{props.Heading}</Text>
        <Spacer/>
        <Link display={{ base:"none" , sm:"flex", md:"flex" }} color="blue" fontSize='13px' m='auto' >{props.linkdata1}</Link>
        <Text display={{ base:"none" , sm:"flex", md:"flex" }} m='auto 10px'> •  </Text>
        <Link display={{ base:"none" , sm:"flex", md:"flex" }} color="blue" fontSize='13px' m='auto' >{props.linkdata2}</Link>
        <Text display={{ base:"none" , sm:"flex", md:"flex" }} m='auto 10px'> •  </Text>
        <Link display={{ base:"none" , sm:"flex", md:"flex" }} color="blue" fontSize='13px' m='auto' >{props.linkdata3}</Link>
    </Flex>
    <Grid gap='10px' mt='30px' gridTemplateColumns={{ base:"repeat(1,1fr)" , sm:"repeat(2,1fr)", md:"repeat(5,1fr)" }}  >
        <Box  >
            <Image src={props.imgurl1} h='200px' w='100%'/>
            <Text fontSize='14px' color='gray'>{props.imgtext1}</Text>
            <Text fontSize='12px'>{props.author1}</Text>
        </Box>
        <Box >
            <Image src={props.imgurl2} h='200px' w='100%'/>
            <Text fontSize='14px' color='gray'>{props.imgtext2}</Text>
            <Text fontSize='12px'>{props.author2}</Text>
        </Box>
        <Box >
            <Image src={props.imgurl3} h='200px'w='100%'/>
            <Text fontSize='14px' color='gray'>{props.imgtext3}</Text>
            <Text fontSize='12px'>{props.author3}</Text>
        </Box>
        <Box >
            <Image src={props.imgurl4}  h='200px' w='100%'/>
            <Text fontSize='14px' color='gray'>{props.imgtext4}</Text>
            <Text fontSize='12px'>{props.author4}</Text>
        </Box>
        <Box>
            <Image src={props.imgurl5} h='200' w='100%'/>
            <Text fontSize='14px' color='gray'>{props.imgtext5}</Text>
            <Text fontSize='12px'>{props.author5}</Text>
        </Box>
    </Grid>
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
      imgurl1:"https://i.postimg.cc/k53086Vh/372387315-326327356434652-7843122652551500740-n.jpg",
      imgtext1:"Duckling Was Afraid Of The Water Until This Girl Teaches Him..",
      author1:"",
      imgurl2:"https://i.postimg.cc/dVYMZZZN/170053992-295844292090384-1570598295181544427-n.jpg",
      imgtext2:"The Octopus: An Alien Among Us?",
      author2:"",
      imgurl3:"https://i.postimg.cc/C533NzP1/376429501-995400045065411-1122861520430673708-n.jpg",
      imgtext3:"Delicious, Fresh, Tasty Crispy Tofu Dal",
      author:"",
      imgurl4:"https://i.postimg.cc/QxB5KHZ7/355970594-2435378753288306-2950729409996334444-n.jpg",
      imgtext4:"Lost Pigeon Loves Waking Her New Owner Up With Morning Kisse..",
      author4:"",
      imgurl5:"https://i.postimg.cc/G2ythsy3/367291301-3512725142376874-4612718823293778278-n.jpg",
      imgtext5:"People Used This Bear For Selfies, But He Was Made For Freed..",
      author5:""

    }
    const carddata2={
        Heading:"Yummylicious Moments"  ,
        linkdata1:"Secret Recipes",
        linkdata2:"Member Hot Picks ",
        linkdata3:" Photo Moments",
        imgurl1:"https://i.postimg.cc/W1Z8MDVC/25784-51839-s.jpg",
        imgtext1:"Japanese Fusion Delights",
        author1:"mmteh75",
        imgurl2:"https://i.postimg.cc/rwv8PPvz/25783-51838-s-1.jpg",
        imgtext2:"A Delicious Connection",
        author2:"mmteh75",
        imgurl3:"https://i.postimg.cc/K899cXZv/25782-51836-s.jpg",
        imgtext3:"Pure Heart Vegetarian",
        author3:"William21",
        imgurl4:"https://i.postimg.cc/dtCvTB7Y/25780-51829-s.jpg",
        imgtext4:"Good Food By Gan",
        author4:"YeeHuanGan",
        imgurl5:"https://i.postimg.cc/qqTfcf6H/25777-51814-s.jpg",
        imgtext5:"A Delicious KindMoment",
        author5:"MayNg"
  
      }
      const carddata3={
        Heading:"Discover Restaurants"  ,
        linkdata1:"Vegetarian Directory",
        linkdata2:"Restaurant Menu",
        linkdata3:"Food Map",
        imgurl1:"https://i.postimg.cc/5y46yztv/305-3195-s.jpg",
        imgtext1:"Fruit Juice",
        author1:"",
        imgurl2:"https://i.postimg.cc/ydycds7J/567-7919-s.jpg",
        imgtext2:"Bibimbap",
        author2:"",
        imgurl3:"https://i.postimg.cc/XYB2vGmp/350-3728-s.jpg",
        imgtext3:"Pesto Pasta",
        author3:"",
        imgurl4:"https://i.postimg.cc/bYbkd0wX/125-1122-s.jpg",
        imgtext4:"Green Bean Pancake with Coconut",
        author4:"",
        imgurl5:"https://i.postimg.cc/Y0prrwSC/213-2140-s.jpg",
        imgtext5:"Mushroom Risotto",
        author5:""
  
      }
      const carddata4={
        Heading:"Amazing Superheroes"  ,
        linkdata1:"Latest Buzz ",
        linkdata2:"Lifestyle Ambassadors",
        linkdata3:"Win Gifts!",
        imgurl1:"https://i.postimg.cc/nzhmWqGr/10072-m.jpg",
        imgtext1:"WongEeLynn",
        author1:"",
        imgurl2:"https://i.postimg.cc/NGmc9Zcs/39004-m.jpg",
        imgtext2:"GeetaanjalliLingam",
        author2:"",
        imgurl3:"https://i.postimg.cc/7L0VM1Y2/38516-m.jpg",
        imgtext3:"JingShun",
        author3:"",
        imgurl4:"https://i.postimg.cc/BZVKbLJ9/41396-m.jpg",
        imgtext4:"LeebeeEng",
        author4:"",
        imgurl5:"https://i.postimg.cc/3r1h7VQd/17366-m.jpg",
        imgtext5:"YuehTyanChuah",
        author5:""
  
      }

      return (
        <Box >
        <Carddata props={carddata2} />
        <Carddata props={carddata3} />
        <Carddata props={carddata4} />
        <Carddata props={carddata1} />
        </Box>
      )




}



