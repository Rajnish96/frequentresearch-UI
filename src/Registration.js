import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {
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
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (<>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-6'>
                    <div className='row'>
                        <h1>registration</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex justify-content-between gap-2'>
                                <div class="form-group">
                                    <label for="fristName">Frist Name</label>
                                    <input name='first_name' type="text" class="form-control" id="fristName" placeholder="Frist Name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input name='first_name' type="text" class="form-control" id="lastName" placeholder="Last Name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input name='first_name' type="email" class="form-control" id="email" placeholder="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='d-flex justify-content-between gap-2'>
                                <div class="form-group">
                                    <label for="country">Country</label>
                                    <input name='first_name' type="text" class="form-control" id="country" placeholder="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="state">State</label>
                                    <input name='first_name' type="text" class="form-control" id="state" placeholder="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input name='first_name' type="text" class="form-control" id="city" placeholder="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between gap-2'>
                                <div class="form-group">
                                    <label for="gender">Gender</label>
                                    <input name='first_name' type="radio" class="form-control" id="gender" placeholder="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="dateofbirth">Date of Birth</label>
                                    <input name='first_name' type="text" class="form-control" id="dateofbirth" placeholder="dateofbirth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="aga">Aga</label>
                                    <input name='first_name' type="number" class="form-control" id="aga" placeholder="aga"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary my-2">Submit</button>
                        </form>
                        {/* <Link to='/dashboard'>Dashboard</Link> */}
                    </div>

                </div>
            </div>
        </div>


    </>
    )
}
