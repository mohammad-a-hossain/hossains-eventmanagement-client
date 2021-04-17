import React from 'react'
import Sidebar from '../dashboard/sidebar/Sidebar'
import { useForm } from "react-hook-form";

 const AddPackage = () => {
    const { register, handleSubmit, errors } = useForm();
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
      
    return (
        <section className='container-fluid row'>
              <div style={containerStyle} className='row container-fluid'>
               
               <div className='col-md-4'>
                <Sidebar></Sidebar>
               </div>
            
               <div className='col-md-8'>
                 <h1 className='col-md-5'>Add package </h1> 
                 <form className="p-5" >
                 <div className="form-group">
                   
                    <input type="text" ref={register({ required: true })} name="packageTitle" placeholder="Package title" className="form-control" />
                    <span className="text-danger">This field is required</span>
                </div>
                <div className="form-group">

                <input type="text" ref={register({ required: true })} name="description" placeholder="package description" className="form-control" />
                <span className="text-danger">This field is required</span>

                </div>
                    <div className="form-group">

                        <input type="text" ref={register({ required: true })} name="duration" placeholder="package duration" className="form-control" />
                       <span className="text-danger">This field is required</span>

                    </div>
                  

                    <div className="form-group">
                   
                        <input type="number" ref={register({ required: true })} name="price" placeholder="Package price"className="form-control" />
                       <span className="text-danger">This field is required</span>
                    </div>
                    <div className="form-group row">
                    
                        <div className="col-4">
                        <label htmlFor="exampleInputName">Package Type</label>
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select package Type</option>
                                <option value="personal">Parsonal</option>
                                <option value="corporate">Corporate</option>
                                <option value="festival">Festival</option>
                            </select>
                           <span className="text-danger">This field is required</span>

                        </div>
                 
                        <div className="form-group">
                    
                            <label htmlFor="exampleInputPicture">Upload a package Icon</label>
                            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                    </div>

                    <div className="form-group text-left">
                        <button type="submit" className="btn btn-brand">Add Package</button>
                    </div>
                </form>
               
           </div>
           
          
              </div>
            </section>
       
    )
}
export default AddPackage 
/* <form className='col-md-5'>
                    
<div className="form-group">
    <label htmlFor="exampleInputName">Package Title</label>
    <input  type="text" className="form-control" name="name" placeholder="Package title" />
</div>
<div className="form-group">
    <label htmlFor="exampleInputDuration">Package duration</label>
    <input  type="text" className="form-control" name="duration" placeholder="package description" />
</div>
  
<div className="form-group">
    <label htmlFor="exampleInputDescription">Package descriptions</label>
    <input  type="text" className="form-control" name="name" placeholder="description" />
</div>
<div className="form-group">
    <label htmlFor="exampleInputArrangement">Package Arrangement Type</label>
    <input  type="text" className="form-control" name="arrangement" placeholder="package Arrangement type" />
</div>
<div className="form-group">
    <label htmlFor="exampleInputPrice">Package Price</label>
    <input type="number" className="form-control" name="price" placeholder="Package price" />
</div>
<div className="form-group">
    <label htmlFor="exampleInputPicture">Upload a package Icon</label>
    <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
</div>
<button type="submit" className="btn btn-primary">Submit</button>

</form> */


          