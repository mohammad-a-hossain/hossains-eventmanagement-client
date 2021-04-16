import React from 'react'
import img1 from '../../../images/wedding1.jpg'
import img2 from '../../../images/homedeco2.jpg'
import img3 from '../../../images/homedeco6.jpg'
import { Image } from 'react-bootstrap'


 const Gallery = () => {
   /*  const blogData=[
        {name:'Dr Rahul datta',
        date:'25 april, 2021',
        img:img1,
        message:'services we provide services we provide services we provide services we provide services we services we provide services we provide services we provide services we provide services we ',
         title:'we provide services we provide services  we provide services '},
         {name:'Dr Rahul datta',
         date:'25 april, 2021',
         img:img2,
         message:'services we provide services we provide services we provide services we provide services we services we provide services we provide services we provide services we provide services we ',
          title:'we provide services we provide services we provide services'},
          {name:'Dr Rahul datta',
          date:'25 april, 2021',
          img:img3,
          message:'services we provide services we provide services we provide services we provide services we  services we provide services we provide services we provide services we provide services we',
           title:'we provide services we provide services we provide services'},
     ] */
    return (
        <div className='container-fluid' style={{backgroundColor:'red',padding:'20px'}}>
            <div className='row bg-light p-3'><h3>our photos</h3></div>
          <div className='row container-fluid  d-flex flex-wrap p-2'>

             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img1} ></Image>
             </div>
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img2} ></Image>
             </div>
        
            
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img3}></Image>
             </div>
           
             <div className='col-md-4 col-sm-6  col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img2} ></Image>
             </div>
      
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img1} ></Image>
             </div> 
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img3}></Image>
             </div>
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img3}></Image>
             </div>
             <div className='col-md-4 col-sm-6 col-xs-12 col-lg-3 mt-2 mb-2'>
                 <Image thumbnail src={img3}></Image>
             </div>
      
      
         </div> 
         </div>
       
       
    )
}
export default Gallery
/* <Image src={img1} style={{height:'400px'}}></Image><Image src={img1} style={{width:'500px'}} ></Image><Image src={img1} style={{height:'400px'}}></Image><Image src={img1}  style={{width:'500px',height:'400px'}}></Image>
                <Image src={img1}  style={{height:'400px'}}></Image><Image src={img1}  style={{height:'400px'}}></Image> */