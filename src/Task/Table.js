import React, { useState } from "react";
import { Table } from "react-bootstrap"

export default function Task() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const [formList, setFormList] = useState([]);
    
      const [displayForm, setDisplayForm] = useState(false);
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleAdd = event => {
        event.preventDefault();
        setFormList([...formList, formData]);
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      };
    
      const handleUpdate = (event, form) => {
        event.preventDefault();
        setFormData(form);
        setDisplayForm(true);
      };
    
      const handleUpdateSubmit = event => {
        event.preventDefault();
        const updatedFormList = formList.map(form => {
          if (form.name === formData.name) {
            return formData;
          }
          return form;
        });
        setFormList(updatedFormList);
        setDisplayForm(false);
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      };


    return (
        <div>
            <h2>Hiii</h2>

            <form onSubmit={handleAdd}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>

            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formList.map((form, index) => (
                        <tr key={index}>
                            <td>{form.name}</td>
                            <td>{form.email}</td>
                            <td>{form.password}</td>
                            <td>
                                <button onClick={(event) => handleUpdate(event, index)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}