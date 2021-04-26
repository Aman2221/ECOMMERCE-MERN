import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Admin_Panel = () => {

    const [data, setData] = useState([]);
    const handleData = async (e) => {
        const res = await axios.get('http://localhost:5000/getData').then((response) => {
            setData(response.data)
        }).catch((e) => {
            console.log(e);
        })
        console.log(data);
        console.log(res);
    }

    useEffect(() => {
        handleData();
    }, [])

    return (
        <>
        <div className='adminPanel'>
           <div className="admin_data">
            <ul>
            <li >
                <h6 className='table_head'>ID</h6>
                {
                data.map((item) => (
                    <p className='table_data'>
                    {item._id}
                    </p>  
                ))}
                
            </li>
            
            <li >
                <h6 className='table_head'>Email</h6>
                {
                    data.map((item) => (
                    <p className='table_data'>
                    {item.email}
                    </p>  
                ))}
            </li>
            <li >
                <h6 className='table_head'>Password</h6>
                {
                    data.map((item) => (
                    <p className='table_data'>
                    {item.password}
                    </p>  
                ))}
            </li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Admin_Panel
