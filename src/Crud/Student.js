import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { StoreData } from './Store/Store';
function Student() {
    const navi = useNavigate();
    const [datas, datasf] = useContext(StoreData);
    console.log(datas);
    // console.log(datas.data[0].name)
    const handleDelete = (indexdelete) => {
        const update = datas.filter((item, index) => index !== indexdelete);
        datasf(update);
    }
    return (
        <div>
            <div className='studenttopic'>
                <h1 className='studetailtopic'>Student Details</h1>
                <div>
                    <button className='addstubut' onClick={() => navi("/addstu")}>Add New Student</button>
                </div>

            </div>
            <br />
            <table border="1" style={{ margin: "auto", width: "80%", background: "white" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td><NavLink to="/editstu" state={{ index }}>Edit</NavLink></td>
                                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Student