import React, { useState, useEffect } from 'react';
const ViewAllNote = () => {
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/Notes")
            .then((res) => res.json())
            .then((value) => {
                setShowData(value)
            })

    }, []);
    return (
        <div>
            <thead>
               <tr>
                 <th>Note Detail</th>
                 <th>Due Date</th>
                 <th>Category</th>
               </tr>
          </thead>
            {showData.map((item) =>
                <table>
                    <tbody>
                        <tr>
                            <td>{item.note}</td>
                            <td>{item.date}</td>
                            <td>{item.category}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default ViewAllNote;