import React, { useContext, useState } from 'react';
import { StoreData } from './Store/Store';
import { useNavigate } from 'react-router-dom';

function Addstudent() {
    const navi = useNavigate();
    const datas = useContext(StoreData);
    const [tempData, setTempData] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });

    function handleChange(e) {
        setTempData({ ...tempData, [e.target.name]: e.target.value });
        console.log(tempData.name)
    }
    function handleSubmit() {
        console.log(datas);
        datas.data.push(tempData);
        navi("/student");
    }
    return (
        <div>
            <div className='form-parent'>
                <div className='form-child'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" onChange={handleChange} />
                </div>
                <div className='form-child'>
                    <label htmlFor='age'>Age</label>
                    <input type="number" name="age" id="age" placeholder='Enter Age' onChange={handleChange} />
                </div>
                <div className='form-child'>
                    <label htmlFor='course'>Course</label>
                    <input type="text" name="course" placeholder="Enter Course" onChange={handleChange} />
                </div>
                <div className='form-child'>
                    <label htmlFor='batch'>Batch</label>
                    <input type='text' name='batch' id="batch" placeholder="Enter Batch" onChange={handleChange} />
                </div>
            </div>
            <div>
                <button className='butedit' onClick={handleSubmit}>Submit</button>
                <button className='butedit' onClick={() => navi('/student')}>Cancel</button>
            </div>
            {/* <label htmlFor='name'>Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name" onChange={handleChange} /><br />
            <label htmlFor='age'>Age</label>
            <input type="number" name="age" id="age" placeholder='Enter Age' onChange={handleChange} /><br />
            <label htmlFor='course'>Course</label>
            <input type="text" name="course" placeholder="Enter Course" onChange={handleChange} /><br />
            <label htmlFor='batch'>Batch</label>
            <input type='text' name='batch' id="batch" placeholder="Enter Batch" onChange={handleChange} /><br />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => navi('/student')}>Go Back</button> */}
        </div>
    )
}

export default Addstudent