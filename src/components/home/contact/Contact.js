import React from 'react'

 const Contact = () => {
    return (
        <div className='container-fluid ' style={{padding:'150px 0px',backgroundColor:'rgb(47, 51, 58)'}}>
            <div className='container'><h3 className='text-white'>send your mail...</h3></div>
          <div className=' d-flex justify-content-center' >
            <div className='col-md-5'>
            <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your email"/>
            </div>
            <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="subject"/>
            </div>
            <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="message" rows="3"></textarea>
            </div>
            <div class="mb-3">
            <input type="submit" class="form-control" value='Submit'/>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Contact