import React from 'react'
import Sidebar from '../dashboard/sidebar/Sidebar'
import { useForm } from "react-hook-form";

 const AddTestimonial= () => {
/* 
     const [doctorInfo, setDoctorInfo] = useState({})
     const [file,setFile] =useState(null)
 */
  /*    const handleBlur = e => {
        const newDrInfo = { ...doctorInfo };
        newDrInfo[e.target.name] = e.target.value;
        setDoctorInfo(newDrInfo);
    }
 
     const handleFileChange =(e)=>{
         const newFile =e.target.files[0]
         setFile(newFile)
     }
       const handleSubmit=(e)=>{
          // e.preventDefault()
        const formData = new FormData()
        //console.log(doctorInfo);
        formData.append('file', file);
        formData.append('name', doctorInfo.name);
        formData.append('email', doctorInfo.email); 
        formData.append('phone', doctorInfo.phone); 

        fetch('https://protected-plains-09672.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
       }
     */
       const containerStyle={
        backgroundColor:'rgb(157,185,270)',height:'100%'
    }
    const { register, handleSubmit, errors } = useForm();
    return (
        <section className='container-fluid row'>
              <div style={containerStyle} className='row container-fluid'>
               
               <div className='col-md-4'>
                <Sidebar></Sidebar>
               </div>
            
               <div className='col-md-8'>
                 <h1 className='col-md-5'>Add Testimonial </h1> 
                 <form className="p-5" >
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder=" Name" className="form-control" />
                       <span className="text-danger">This field is required</span>

                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="name" placeholder="message" className="form-control" />
                       <span className="text-danger">This field is required</span>

                    </div>
                
                    <div className="form-group">
                    
                    <label htmlFor="exampleInputPicture">Upload a package Icon</label>
                    <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>

                    <div className="form-group text-left">
                        <button type="submit" className="btn btn-brand">Add</button>
                    </div>
                </form>
           </div>
           
          
              </div>
            </section>
       
    )
}
export default  AddTestimonial

          