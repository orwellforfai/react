import React from 'react';
import { Formik, Field } from 'formik';

const Form = () => (
    <div>
        <h1>Checkout</h1>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                Total: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Diego" />

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Maradona" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="diego@maradona.com"
                    type="email"
                />
                <label htmlFor="Total">Total</label>
                <Field id="total" name="total" placeholder="total" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

export default Form
