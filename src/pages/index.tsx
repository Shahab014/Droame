import type { NextPage } from 'next'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../../components/InfoCard';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Droame
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          
          <Navbar.Item>
            <Button auto flat href="#">
              Admin
            </Button> 
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Take your Memories to the sky!</Text>
            <Button onClick={()=>router.push("/contact")} size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Create Customers</Button>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>View & Edit Customers</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Our Presence"
            title="Jaipur"
            imageURL="https://cdn.pixabay.com/photo/2014/09/11/10/13/hawa-mahal-441563__340.jpg"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Our Presence"
            title="Udaipur"
            imageURL="https://cdn.pixabay.com/photo/2017/05/14/10/45/udaipur-2311788_960_720.jpg"
            
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Our Presence"
            title="Banglore"
            imageURL="https://cdn.pixabay.com/photo/2014/01/14/18/52/kempegowda-international-airport-245023__340.jpg"
            
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home
