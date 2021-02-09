import Header from '../components/header'
import {Card, Button} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function Tracks({data}) {
    const router = useRouter()

    return (

            <>
        <Header/>
          
      
        <CardGroup style={{marginTop:"50px"}}>
            {data.map((tag,index) => ( 
  
  
                    <Card>
                        <Card.Img variant="top" src={tag.image[0].url} />
                        <Card.Body>
                        <Card.Title>{tag.title}</Card.Title>
                        <Card.Text>
                            {tag.description.substring(0,150)} ...
                        </Card.Text>
                        <Link href="readmore/[id]" as={`readmore/${tag.id}`}>
                            <Button>Read More</Button>  
                        </Link>
                        </Card.Body>
                    </Card>
                    

             ))}
            </CardGroup>
 
            </>

)
  }

  export async function getServerSideProps(context) {

    const pageNumber = context.query.slug

    console.log(pageNumber)
      
    const res = await fetch(process.env.STRAPI_URL + '/tracks')
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          data
    }, // will be passed to the page component as props
    }
  }

 