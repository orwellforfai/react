import React from 'react'
import { useFormik } from 'formik';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import generateOrderObject from "../.../services/generateOrderObject";

const Form = () => {

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

    async ()=> {
        const firstname = firstname
        const lastname = lastname
        const email = email
            total: totalCart()
            date: new Date().toLocaleDateString()

        const generatedOrder = generateOrderObject(firstname,lastname,email,products,totalCart())
        console.log(generatedOrder);
    }
    try {
        const docRef = await addDoc(collection(db, "orders"), generatedOrder);
        alert(`Se generó la order correctamente con ID: ${docRef.id}`)
    } catch (error) {
        console.log(error)
    }
    }

    return (

        <div >
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

                <button type="submit" onClick={  confirmPurchase(orderData)}>Submit</button>
            </form>

        </div>
    )
}

export default Form
