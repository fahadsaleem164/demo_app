import Header from '../components/header'
import axios from "axios"
import * as qs from "query-string"
import React, { useState } from 'react';



export default function Faq({data}) {
    
    // const [posts] = useState(data);
    const [faq, setFaq] = useState(data);
    

        //  console.log(faqs)
   function search(event){

       

       axios.get(`https://strapi-postgres-demo-abc.herokuapp.com/faqs?_where[title_contains]=${event.target.value}`).then(function (response) {
         // handle success
           
                console.log(response.data)
                setFaq(response.data)
                 console.log(faq)

                //  setCount(data)
  })
   
    }

    

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
                                <nav data-aos="zoom-out-up" data-aos-delay="800" aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">FAQs</li>
                                    </ol>
                                </nav>
                                <h1 class="mb-0 title effect-static-text">FAQs</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="section-2 offers" style={{background:"#eef4ed"}}>
            <div class="container">
            <div class="col-12 mt-0 input-group align-self-center item">
                                <input type="text" name="name" onChange={()=> search(event)} class="form-control field-name" placeholder="Search" />
                            </div>
                <div class="row text-center intro">

                {faq.map((tag,index) => ( 
                  <>
                    <div class="col-12" style={{textAlign: "left"}}>
                         <h2>{tag.title}</h2>
                        <div class="row item widget-tags">
                            <div class="col-12 align-self-center">
                           <div class="col-12">
                               {tag.description}
                          
                            </div>
                            <br></br>

                            </div>
                        </div>
                    </div>
                    
                     </>
                    
                      ))}
                     
                   </div>
        
                <div class="row justify-content-center items">
            </div>
         </div>
    </section>

 
            </>

)
  }

export async function getServerSideProps(context) {
    const res = await fetch(process.env.STRAPI_URL + '/faqs')
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