 import  Logo  from "./../public/assets/images/about-1.jpg";
 import {Helmet} from "react-helmet";
 import Link from 'next/link'



export default function Header() {
    return (

            <>

    

<header id="header">
        <nav class="navbar navbar-expand navbar-fixed" style={{background:'black'}}>
               
                <div class="container">

                    <ul class="navbar-nav items">
                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link href={'/'}>HOME</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link href={'/about'}>About</Link></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link href={'/faq'}>FAQs</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link href={'/tracks'}>Tracks</Link></a>
                        </li>

                        <li class="nav-item dropdown">
                            <a  class="nav-link"><Link href={'/contact'}>Contact US</Link></a>
                        </li>

                      
                    
                       
                    </ul>

                   


                </div>
            </nav> 

  </header>
 
    </>

)
  }