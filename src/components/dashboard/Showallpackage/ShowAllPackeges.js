import React from 'react'

export const ShowAllPackeges = ({packages}) => {
    return (
        <div className='p-5'>

        <h1>All packages</h1>
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Package Title</th>
            <th className="text-secondary" scope="col">Package description</th>
            <th className="text-secondary" scope="col">Package duration</th>
            <th className="text-secondary" scope="col">package type</th>
            <th className="text-secondary" scope="col">Insert date</th>
            <th className="text-secondary" scope="col">Price</th>
            <th className="text-secondary" scope="col">icon</th>
            <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           {
             packages.map((packaege, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{packaege.title}</td>
                    <td>{packaege.description}</td>
                    <td>{packaege.duration}</td>
                    <td>{packaege.type}KG</td>
                    <td>{packages.date}</td>
                    <td>{packaege.price}</td>
                    <td>{packaege.icon}</td>
                    <td>
                        <button>edit</button><button>delete</button>
                    </td>
                </tr>
                )
            } 
        </tbody>
    </table>
    </div>
    )
}
export default ShowAllPackeges
