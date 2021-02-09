import { Router } from 'next/router';
import { useRouter } from 'next/router';
import Header from '../../components/header'
import {Card, Button} from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Tracks({data}) {
  console.log(data)
    const router = useRouter()

    return (

       <>
            <Header/>
            <section id="slider" class="hero p-0 odd featured">
            <div class="swiper-container no-slider animation slider-h-50 slider-h-auto">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-center">
                        <img src="assets/images/bg-wide.jpg" alt="Full Image" class="full-image" data-mask="80"/>
                        <div class="slide-content row text-center">
                            <div class="col-12 mx-auto inner">
                                <h1 class="mb-0 title effect-static-text">{data.title}</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         </section>

          <section id="single" class="section-1 single">
            <div class="container">
                <div class="row content"> 
                    <div class="col-12 col-lg-8 p-0 text">
                        <div class="row intro">
                            <div class="col-12">
                                <h2 class="mb-0"><span>{data.title}</span></h2>
                            </div>

                          
                            
                        </div>

                        <div class="row">
                            <div class="col-12 align-self-center">
                                
                            
                                <div>{data.description}</div>

                                <div class="mb-5 gallery">
                                        <img src={data.image[0].url} class="fit-image" alt="Introduction Video"/>
                                    
                                </div>

                        
                            </div>
                        </div>

            
                    </div>
                    
                   
                    <aside class="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
    
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                                <h4 class="title">Tags</h4>
                                <div class="badges">
                                    <span class="badge"><a href="#">Consulting</a></span>
                                    <span class="badge"><a href="#">Audit</a></span>
                                    <span class="badge"><a href="#">Assurance</a></span>
                                    <span class="badge"><a href="#">Advisory</a></span>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </section>

 
      </>

)
  }

  



    export async function getServerSideProps(context) {

        console.log(context.query.id)
        var id = context.query.id
          
        const res = await fetch(process.env.STRAPI_URL + '/tracks/'+ id)
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
    
     





