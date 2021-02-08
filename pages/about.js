import Header from '../components/header'

export default function About({data}) {

console.log(data.image[0].url.slice(1))
console.log(process.env.STRAPI_URL)


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
                                        <li class="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                                <h1 class="mb-0 title effect-static-text">About Us</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="about" class="section-1 highlights team image-right">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8 align-self-top text" style={{textAlign:"center"}}>
                        <div class="row intro m-0">
                            <div class="col-12 p-0">
                         
                                <h2>{data.title}</h2>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 p-0 pr-md-5" style={{textAlign:"left"}}>
                               <p>{data.description}</p>
                               {/* <p>description</p> */}
                            </div>
                        </div>
                    </div>
                    <div  class="col-12 col-lg-4" style={{width:"100%" , height:"100%" ,marginTop:'5%'}}>
                       
                              
                                <img src={data.image[0].url} class="fit-image" /> 
                             
                        
                    </div>
                </div>
            </div>
        </section>

 
            </>

)
  }


  export async function getStaticProps(context) {
    const res = await fetch( process.env.STRAPI_URL + '/about-us')
    
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