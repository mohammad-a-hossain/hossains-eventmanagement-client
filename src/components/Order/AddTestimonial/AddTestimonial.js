import React from 'react'
import { useState } from "react";


 const AddTestimonial= () => {
   /*  const { register, handleSubmit, errors } = useForm() */
    const [message, setMessage] = useState({})
    const [file,setFile] =useState(null)

     const handleBlur = e => {
       const newMessage = { ...message};
       newMessage[e.target.name] = e.target.value;
       setMessage(newMessage);
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
       formData.append('name', message.name);
       formData.append('message', message.message); 
     

       fetch('http://localhost:7200/addTestimonial', {
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
    
/* 
    const onSubmit=data=>{
        data.created = new Date();
      
         fetch('http://localhost:7200/addTestimonial',{
             method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
         })
         .then(res =>res.json())
         .then(success =>{
             if(success){
                 alert('one testimonial added')
             }
         })

        }
 */
    return (
        <section className='container-fluid'>
              <div  className='container-fluid d-flex flex-wrap'>
                  <div className='col-md-4 mt-5'>
                      <h3 className='col-md-4 mt-3'>write a testimonial </h3> 
                    <form onSubmit={handleSubmit}className="p-5" >
                        <div className="form-group">
                            <input type="text" onBlur={handleBlur} name="name" placeholder=" Name" className="form-control" />
                      {/*   {errors.name && <span className="text-danger">This field is required</span>} */}

                        </div>
                        <div className="form-group">
                            <textarea type="text" onBlur={handleBlur}  name="message" placeholder="message" className="form-control" />
                    {/*     {errors.message &&<span className="text-danger">This field is required</span>}
 */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPicture">Upload a package Icon</label>
                            <input type="file" onChange={handleFileChange} className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <div className="form-group text-left">
                            <button type="submit" className="btn btn-brand">Add</button>
                        </div>
                    </form>
               </div>
           <div className='col-md-8 mt-5'>
                <div className='col-md-12 mt-5'>
                    <h3>order list</h3>
  
                    <table className="table table-borderless ">
                     <thead>
                        <tr>
                        <th className="text-secondary" scope="col">title</th>
                        <th className="text-secondary" scope="col">description</th>
                        <th className="text-secondary" scope="col">duration</th>
                        <th className="text-secondary" scope="col">type</th>
                        <th className="text-secondary" scope="col">price</th>
                        <th className="text-secondary" scope="col">icon</th>
                        </tr>
                     </thead>
                     <tbody>   
                        <tr>
                            <td>title</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>personal</td>
                            <td>555</td>
                            <td>image</td>
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>personal</td>
                            <td>555</td>
                            <td>image</td> 
                        </tr>
                        <tr>
                            <td>title</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>Search for the keywords to learn more about each warning</td>
                            <td>personal</td>
                            <td>555</td>
                            <td>image</td>
                        </tr>
                     </tbody>
                    </table>
      
                </div>
           </div>
          
         </div>
     </section>
    )
}
export default  AddTestimonial

 
   