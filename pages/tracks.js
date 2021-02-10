import Header from '../components/header'
import {Card, Button} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Pagination from 'react-bootstrap/Pagination'

export default function Tracks({data , page , totalposts}) {
    console.log(totalposts)
    const router = useRouter()

    const lastPage = Math.ceil(Number(totalposts)/ 3)   
    return (

            <>
        <Header/>
          
      
        <CardGroup style={{marginTop:"20px"}}>
            {data.map((tag,index) => ( 
  
                    <>
                    
                    <Card>
                        <Card.Img style={{height:'30%', width:'100%'}} variant="top" src={tag.image[0].url} />
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
                    
                </>
             ))}


            </CardGroup>

             <Pagination>
                    {/* <Pagination.First /> */}
                    <Pagination.Prev disabled={page<=1} onClick={()=>router.push(`tracks/?page=${ page - 1 }`)}></Pagination.Prev>
                    <Pagination.Item>{page}/{lastPage}</Pagination.Item>
                    <Pagination.Next disabled={page>=lastPage} onClick={()=>router.push(`tracks/?page=${ page + 1 }`)}></Pagination.Next>
                    {/* <Pagination.Last /> */}
                    </Pagination> 
 
            </>

)
  }

  export async function getServerSideProps({query : {page = 1}}) {

   const start = +page === 1 ? 0 : (+page -1 ) *2

    const numberofPosts = await fetch(process.env.STRAPI_URL + '/tracks/count')
    const totalposts = await numberofPosts.json()

    const res = await fetch(process.env.STRAPI_URL + '/tracks?_limit=2&_start='+ start)

    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          data : data,
          page : +page , 
          totalposts
    }, // will be passed to the page component as props
    }
  }

 