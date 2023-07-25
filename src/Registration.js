import React, { useState } from 'react';
import country from "./constant/country.json"
import state from "./constant/state.json"
import city from "./constant/city.json"
import axios from 'axios';
import { BASE_URL, REGISTER_USER } from './constant/Endpoints';

export default function Registration(props) {
    const { responseData } = props
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        country: "",
        state: "",
        city: "",
        gender: "",
        date_of_birth: "",
        age: "",
    })
    const [countryName, setCountryName] = useState()
    const [stateName, setStateName] = useState()
    const handleChange = (e) => {
        if (e.target.name === "country") {
            setCountryName(e.target.selectedOptions[0].text)
        }
        if (e.target.name === "state") {
            setStateName(e.target.selectedOptions[0].text)
        }
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            const data = {
                "first_name": formData.first_name,
                "last_name": formData.last_name,
                "email": formData.email,
                "country": countryName,
                "state": stateName,
                "city": formData.city,
                "gender": formData.gender,
                "date_of_birth": formData.date_of_birth,
                "age": formData.age
            }
            axios.post(`${BASE_URL}${REGISTER_USER}`,
                data
            )
                .then(function (response) {
                    responseData(response.data.result)
                    
                })
                .catch(function (error) {
                    alert(error ? error : "error")
                });
        }
        catch (err) {
            console.log(err ? err : "something went worng");
        }

    }

    const st = state?.filter((item) => item?.countryId === +formData.country)
    const ct = city?.filter((item) => item?.stateId === formData.state)

    return (<>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <div className='row'>
                        <h1>registration</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Frist Name</label>
                                <input name='first_name' type="text" className="form-control" placeholder="Frist Name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input name='last_name' type="text" className="form-control" placeholder="Last Name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name='email' type="email" className="form-control" placeholder="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='gap-2'>
                                <div className="form-group">
                                    <label>Country</label>
                                    <select name="country" className='form-control' onChange={handleChange}>
                                        <option>select country name</option>
                                        {country?.map((item, index) => (
                                            <option value={item?.countryId} key={index}>{item?.country}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <select name="state" className='form-control' onChange={handleChange}>
                                        {st?.map((item, index) => (
                                            <option value={item?.stateId} key={index}>{item?.stateName}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <select name='city' className='form-control' onChange={handleChange}>
                                        {ct?.map((item, index) => (
                                            <option key={index}>{item?.cityName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='me-5'>Gender</label>
                                <label className='me-2'>Male</label>
                                <input name='gender' value='Male' type="radio" placeholder="gender" className='me-3' onChange={handleChange} />
                                <label className='me-2'>Female</label>
                                <input name='gender' value='Female' type="radio" placeholder="gender" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input name='date_of_birth' type="date" className="form-control" placeholder="dateofbirth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Aga</label>
                                <input name='age' type="number" className="form-control" placeholder="aga"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary my-2">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    </>
    )
}
