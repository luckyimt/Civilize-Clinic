// import {Helmet} from 'react-helmet-async'
import React from 'react'
import image_1 from "../assets/images/img_1.jpg";
import image_3 from "../assets/images/img_3.jpg";
import image_4 from "../assets/images/img_4.jpg";
import image_5 from "../assets/images/img_5.jpg";
import image_6 from "../assets/images/img_6.jpg";
import image_8 from "../assets/images/1.jpg";
import image_9 from "../assets/images/2.jpg";
import image_10 from "../assets/images/4.jpg";
import image_11 from "../assets/images/5.jpg";
import image_12 from "../assets/images/6.jpg";
import image_13 from "../assets/images/7.jpg";
import image_14 from "../assets/images/8.jpg";
import image_15 from "../assets/images/9.jpg";
import image_16 from "../assets/images/11.jpg";
import image_18 from "../assets/images/13.jpg";
import image_19 from "../assets/images/14.jpg";
import image_20 from "../assets/images/15.jpg";
import image_21 from "../assets/images/16.jpg";
import image_22 from "../assets/images/17.jpg";



function Gallery() {
  return  (
    <>
       {/* <Helmet>
              <title>เสริมจมูกเชียงใหม่ที่ไหนดี</title>
              <meta name='description' content='เสริมจมูกใกล้บ้านจังหวัดเชียงใหม่ เสริมจมูกสวยราคาไม่แพง คลินิกเสริมจมูก เสริมจมูกเชียงใหม่ เสริมจมูกครั้งแรก' />
              <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/shop/'/>
            </Helmet> */}
    <section id="gallery">
          <div className="gallery__container">
            <center>  <img src={image_1} alt="เสริมจมูกให้นางแบบ" ></img></center>
            <center> <img src={image_3} alt="เสริมจมูกนายแบบ"></img></center>
            <center> <img src={image_4} alt="เสริมจมูกสวย"></img></center>
            <center> <img src={image_5} alt="เสริมจมูกหมอเฟิร์ส"></img></center>
            <center> <img src={image_6} alt="เสริมจมูกเชียงใหม่"></img></center>
            <center> <img src={image_8} alt="เสริมจมูกใกล้บ้าน"></img></center>
            <center> <img src={image_9} alt="เสริมจมูกที่ไหนดี"></img></center>
            <center> <img src={image_10} alt="เสริมจมูกที่ไหนสวย"></img></center>
            <center> <img src={image_11} alt="เสริมจมูกอย่างไร"></img></center>
            <center> <img src={image_12} alt="เสริมจมูกราคาเท่าไร"></img></center>
            <center> <img src={image_13} alt="เสริมจมูกปรับโหงวเฮ้ง"></img></center>
            <center> <img src={image_14} alt="เสริมจมูกเพิ่มความโด่ง"></img></center>
            <center> <img src={image_15} alt="เสริมจมูกปรับสวย"></img></center>
            <center> <img src={image_16} alt="เสริมจมูกรับทรัพย์"></img></center>
            <center> <img src={image_18} alt="เสริมจมูกเสริมหน้าที่การงาน"></img></center>
            <center> <img src={image_19} alt="เสริมจมูกขึ้นเงินเดือน"></img></center>
            <center> <img src={image_20} alt="เสริมจมูกชีวิตเปลี่ยน"></img></center>
            <center> <img src={image_21} alt="เสริมจมูกทำอย่างไร"></img></center>
            <center> <img src={image_22} alt="เสริมจมูกสวยทันใจ"></img></center>
           
         
          </div>
        
       
      
    </section>
      
           
    </>
  )
}
export default Gallery;