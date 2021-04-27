import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Admin_Panel = () => {

    const [data, setData] = useState([]);
    const handleData = async (e) => {
        const res = await axios.get('https://mern-app221.herokuapp.com/getData').then((response) => {
            setData(response.data)
        }).catch((e) => {
            console.log('error',e);
        })
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
