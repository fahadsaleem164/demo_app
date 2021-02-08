import '../styles/globals.css'
import {Helmet} from "react-helmet";






function MyApp({ Component, pageProps }) {

  return <>
     <Helmet>
        <link rel="stylesheet" href="./../assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="./../assets/css/vendor/slider.min.css"/>
        <link rel="stylesheet" href="./../assets/css/main.css"/>
        <link rel="stylesheet" href="./../assets/css/vendor/icons.min.css"/>
        <link rel="stylesheet" href="./../assets/css/vendor/icons-fa.min.css"/>
        <link rel="stylesheet" href="./../assets/css/vendor/animation.min.css"/>
        <link rel="stylesheet" href="./../assets/css/vendor/gallery.min.css"/>
        <link rel="stylesheet" href="./../assets/css/vendor/cookie-notice.min.css"/>
        <link rel="stylesheet" href="./../assets/css/default.css"/>

     </Helmet>

    <Component {...pageProps} />
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js?render=6Lf-NwEVAAAAAPo_wwOYxFW18D9_EKvwxJxeyUx7"></script>
      <script src="assets/js/vendor/jquery.min.js"></script>
      {/* <script src="assets/js/vendor/jquery.easing.min.js"></script>
      <script src="assets/js/vendor/jquery.min.js"></script>
      <script src="assets/js/vendor/jquery.inview.min.js"></script>
      <script src="assets/js/vendor/popper.min.js"></script>
      <script src="assets/js/vendor/bootstrap.min.js"></script>
      <script src="assets/js/vendor/ponyfill.min.js"></script>
      <script src="assets/js/vendor/slider.min.js"></script>
      <script src="assets/js/vendor/animation.min.js"></script>
      <script src="assets/js/vendor/progress-radial.min.js"></script>
      <script src="assets/js/vendor/bricklayer.min.js"></script>
      <script src="assets/js/vendor/gallery.min.js"></script>
      <script src="assets/js/vendor/shuffle.min.js"></script>
      <script src="assets/js/vendor/cookie-notice.min.js"></script>
      <script src="assets/js/vendor/particles.min.js"></script>
      <script src="assets/js/main.js"></script> */}
    </Helmet>
  </>


}

export default MyApp
