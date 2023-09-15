import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StoreData } from './Store/Store';

function Editstudent() {
    const navi = useNavigate();
    const indexData = useLocation().state.index;
    const datas = useContext(StoreData);
    // const [value] = useState(datas);
    console.log(datas)
    console.log(indexData);
    const [updateData, setUpdateData] = useState({
        name: datas.data[indexData].name,
        age: datas.data[indexData].age,
        course: datas.data[indexData].course,
        batch: datas.data[indexData].batch
    });
    function handleChange(e) {
        console.log("Handle change");
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
    function handleSubmit() {
        console.log("submit");
        // console.log(updateData);
        console.log(datas.data[indexData])
        datas.data[indexData] = updateData;
        navi('/student');

    }
    return (
        <div>
            <div className='form-parent'>
                <div className='form-child'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" onChange={handleChange} value={updateData.name} />
                </div>
                <div className='form-child'>
                    <label htmlFor='age'>Age</label>
                    <input type="number" name="age" id="age" placeholder='Enter Age' onChange={handleChange} value={updateData.age} />
                </div>
                <div className='form-child'>
                    <label htmlFor='course'>Course</label>
                    <input type="text" name="course" placeholder="Enter Course" onChange={handleChange} value={updateData.course} />
                </div>
                <div className='form-child'>
                    <label htmlFor='batch'>Batch</label>
                    <input type='text' name='batch' id="batch" placeholder="Enter Batch" onChange={handleChange} value={updateData.batch} />
                </div>
            </div>
            <div>
                <button className='butedit' onClick={handleSubmit}>Update</button>
                <button className='butedit' onClick={() => navi('/student')}>Cancel</button>
            </div>
        </div>

    )
}

export default Editstudent