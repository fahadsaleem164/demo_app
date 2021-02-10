import Header from '../components/header'
import React from "react"
import axios from "axios"
import * as qs from "query-string"
class ContactFormPage extends React.Component {

    constructor(props) {

        console.log(process.env.STRAPI_URL + '/contacts')


        super(props)
        // this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
        this.state = {name : '' , last_name: '' , email: '', message : ''}

      }

      handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
      }

      handleSubmit(event) {

      
        event.preventDefault()
     
        const formData = {}
        var fd = new FormData();
        fd.append('form-name','Contact Form')
        fd.append( 'name', this.state.name);
        fd.append( 'last_name', this.state.last_name);
        fd.append( 'email', this.state.email);
        fd.append( 'message', this.state.message);
      

        
        for (var key of fd.entries()) {
            console.log(key[0] + ', ' + key[1]);
            formData[key[0]] = key[1]
        }
        console.log(formData)
       
        // Object.keys(this.domRef.current.value).map(key => (formData[key] = this.domRef.current.value))
      
        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
          url: 'https://strapi-postgres-demo-abc.herokuapp.com/contacts',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData)
        }
      
        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
        axios(axiosOptions)
          .then(response => {
            this.setState({
              feedbackMsg: "Form submitted successfully!",
              name: '',
              last_name : '',
              email: '',
              message : '',

            })
            // this.domRef.current.reset()
          })
          .catch(err =>
            console.log(err)
            // this.setState({
            //   f.",
            // })
          )
      }
  
    
 
    render() {
       
        return (
          <>
<Header/>
        <section class="section-2">
            <div class="container">
                <h2 style={{textAlign:"center"}}>CONTACT US</h2>
                <div class="row">
                    
                    
                    <div class="col-12 col-lg-6">
                         <div class="row form-group-margin">

                                <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                     <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>

                                <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                Suite# 203, 2nd Floor, Plot No 37-C, 8th Lane Off Khayaban-e-Muslim, Bukhari Commercial, Phase 6 DHA, Karachi, Pakistan
                                </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">
                                    (+92)333-0202729 (+92)300-2017020
                                        {/* <p>{data.allMarkdownRemark.edges[0].node.frontmatter.phone_number}</p> */}
                                       
                                    </div>

                            </div>

                            <div class="row form-group-margin">

                                    <div class="col-12 col-md-6 col-lg-2 m-0 p-2 input-group">
                                           <i class="fa fa-envelope" aria-hidden="true"></i>

                                    </div>

                            <div class="col-12 col-md-6 col-lg-8 m-0 p-2 input-group">

                            bei@cambridgeadvisorsnetwork.com
                            {/* <p>{data.allMarkdownRemark.edges[0].node.frontmatter.email}</p> */}
                            </div>

                            </div>
                    </div>

                    <div class="col-12 col-lg-6">

                    {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
                    <form  name="Contact Form" method="POST" data-netlify="true" onSubmit={event => this.handleSubmit(event)}>
                            
                            
                            <div class="row form-group-margin">
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="name" class="form-control field-name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} class="form-control field-email" placeholder="Last Name"/>
                                </div>
                                <br></br>
                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} class="form-control field-phone" placeholder="Email"/>
                                </div>
                                <div class="col-12 m-0 p-2 input-group">
                                    <textarea name="message" class="form-control  field-message" value={this.state.message} onChange={this.handleChange} placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 col-12 m-0 pl-md-2">
                                    <span class="form-alert"></span>
                                </div>
                                <div class="col-12 input-group m-0 p-2">
                                <button class="btn primary-button" type="submit">SEND</button>
                                    
                                </div>
                            </div>
                        </form>




                    </div>
                </div>
            </div>
        </section>

       </>
     
        )}

   

        }

  




  
export default ContactFormPage