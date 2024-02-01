import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Students = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/students?page=${page}&limit=${limit}&search=${search}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page, limit, search]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder='Search Students ..' onChange={handleSearchChange}/>
            <Link to={"/add-students"}>add new student</Link>
            <table border="1">
                <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student) => (
                        <tr key={student._id}>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{new Date().getFullYear() - new Date(student.dateOfBirth).getFullYear()}</td>
                            <td>{student.email}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setPage((prev) => prev - 1)}>prev</button>
            <span>{page}</span>
            <button onClick={() => setPage((prev) => prev + 1)}>next</button>
        </div>
    );
};

export default Students;