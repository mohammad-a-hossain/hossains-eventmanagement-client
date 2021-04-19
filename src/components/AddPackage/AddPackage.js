import React from 'react'
import Sidebar from '../dashboard/sidebar/Sidebar'
import { useState } from "react";

 const AddPackage = () => {
    /* const { register, handleSubmit, errors } = useForm();

    const onSubmit=data=>{
        data.created = new Date();
       
      
         fetch('http://localhost:7200/addPackage',{
             method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
         })
         .then(res =>res.json())
         .then(success =>{
             if(success){
                 alert('one package inserted')
             }
         }) */


   /*    const formData = new FormData()
      //console.log(doctorInfo);
      formData.append('file', file);
      formData.append('name', doctorInfo.name);
      formData.append('email', doctorInfo.email); 
      formData.append('phone', doctorInfo.phone); 
    
    }  */
 
     const [packages, setPackage] = useState({})
     const [file,setFile] =useState(null)
 
      const handleBlur = e => {
        const newPackage = { ...packages};
        newPackage[e.target.name] = e.target.value;
        console.log(newPackage)
        setPackage(newPackage);
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
        formData.append('title', packages.title);
        formData.append('description', packages.description); 
        formData.append('duration', packages.duration); 
        formData.append('price', packages.price);
        formData.append('key', packages.key);  
        formData.append('packageType', packages.packageType); 

        fetch('http://localhost:7200/addPackage', {
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

                 <form className="p-5"onSubmit={handleSubmit}>
                 <div className="form-group">
                   
                    <input type="text"  onBlur={handleBlur} /* ref={register({ required: true })} */ name="title" placeholder="Package title" className="form-control" />
                   {/*  {errors.title && <span className="text-danger">This field is required</span>} */}
                </div>
                <div className="form-group">

                <input type="text" onBlur={handleBlur} /* ref={register({ required: true })} */ name="description" placeholder="package description" className="form-control" maxLength="100" />
            {/*   {errors.description &&<span className="text-danger">This field is required</span>} */}

                </div>
                    <div className="form-group">

                        <input type="text" onBlur={handleBlur} /* ref={register({ required: true })} */ name="duration" placeholder="package duration" className="form-control" />
                     {/*  {errors.duration && <span className="text-danger">This field is required</span>} */}

                    </div>
                  

                    <div className="form-group">
                   
                        <input type="number" onBlur={handleBlur} /* ref={register({ required: true })} */ name="price" placeholder="Package price"className="form-control" />
                     {/*  {errors.price && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group row">
                    
                        <div className="col-4">
                        <label htmlFor="exampleInputName">Package Type</label>
                            <select className="form-control" name="packageType"onBlur={handleBlur} /* ref={register({ required: true })} */ >
                                <option disabled={true} value="Not set">Select package Type</option>
                                <option value="personal">Parsonal</option>
                                <option value="corporate">Corporate</option>
                                <option value="festival">Festival</option>
                            </select>
                      {/*   {errors.packageType && <span className="text-danger">This field is required</span>} */}

                        </div>
                 
                        <div className="form-group">
                    
                            <label htmlFor="exampleInputPicture">Upload a package Icon</label>
                            <input type="file" onChange={handleFileChange} className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                   
                        <input type="text" onBlur={handleBlur} /* ref={register({ required: true })} */ name="key" placeholder="generate a unique key number + text"className="form-control" />
                     {/*  {errors.price && <span className="text-danger">This field is required</span>} */}
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


          