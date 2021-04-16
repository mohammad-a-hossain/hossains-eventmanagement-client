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
        <div className='container-fluid d-flex' style={{backgroundColor:'red',padding:'10px'}}>
            <div>
         <div className=' d-flex'>
         <Image src={img1} style={{height:'400px',width:'100%'}}></Image>
         <Image src={img2} style={{height:'400px',width:'100%'}}></Image>
         <Image src={img1} style={{height:'400px',width:'100%'}}></Image>
         </div>
      {/*    <div className='d-flex container-fluid'>
         <Image src={img2} style={{height:'400px',width:'100%'}}></Image>
         <Image src={img1} style={{height:'800px',width:'100%'}}></Image>
         </div> */}
        </div>
        </div>
    )
}
export default Gallery
/* <Image src={img1} style={{height:'400px'}}></Image><Image src={img1} style={{width:'500px'}} ></Image><Image src={img1} style={{height:'400px'}}></Image><Image src={img1}  style={{width:'500px',height:'400px'}}></Image>
                <Image src={img1}  style={{height:'400px'}}></Image><Image src={img1}  style={{height:'400px'}}></Image> */