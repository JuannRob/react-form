import { useFormik } from 'formik';
import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [error, setError] = useState([]);
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            textarea: ''
        },
        onSubmit: values => {
            const errorList = [];
            if (formik.values.name === '') {
                errorList.push("name");
            }
            if (formik.values.email === '') {
                errorList.push("email");
                setError(errorList);
            }
            if (formik.values.password === '') {
                errorList.push("password");
            }
            console.log('error list: ', errorList);
            if (errorList.length === 0) {
                alert(JSON.stringify(values, null, 2))
            } else {
                setError(errorList);
            }
        }
    })

    const checkField = (e) => {
        const { name, value } = e.target;
        if (error.includes(name)) {
            setError(error.filter((e) => e !== name))
        }
    }

    return (
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={(e) => {
                        checkField(e);
                        formik.handleChange(e);
                    }}
                    className={error.includes("name") ? "invalid" : "valid"} />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={(e) => {
                        checkField(e);
                        formik.handleChange(e);
                    }}
                    className={error.includes("email") ? "invalid" : "valid"} />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={(e) => {
                        checkField(e);
                        formik.handleChange(e);
                    }}
                    className={error.includes("password") ? "invalid" : "valid"} />
                <label>
                    Text Area
                    <textarea name="textarea"
                        value={formik.values.textarea}
                        onChange={formik.handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
    )
}

export default Form