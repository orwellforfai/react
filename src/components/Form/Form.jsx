import React from 'react'
import { useFormik } from 'formik';

const Form = () => {

    <h1>Checkout</h1>
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            total: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" placeholder="Diego" onChange={formik.handleChange} value={formik.values.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" placeholder="Maradona" onChange={formik.handleChange} value={formik.values.lastName}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="diego@maradona.com"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}

                />
                <label htmlFor="total">Total</label>
                <input id="total" name="total" placeholder="total" onChange={formik.handleChange} value={formik.values.total}
                />

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Form
