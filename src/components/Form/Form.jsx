import React, {useContext} from 'react'
import {useFormik} from 'formik';
import {collection, updateDoc, addDoc, doc, getDoc} from "firebase/firestore";
import {db} from '../../firebase/config';
import generateOrderObject from '../../services/generateOrderObject';
import {Shop} from "../../contexts/shop";

const Form = () => {

    const {products, totalCart} = useContext(Shop)

    const confirmPurchase = () => {
        (async () => {
            const nombreComprador = formik.values.Name
            const telefono = formik.values.Phone
            const email = formik.values.email

            const generatedOrder = generateOrderObject(
                nombreComprador,
                email,
                telefono,
                products,
                totalCart())


            let productOutOfStock = []
            //Chequear el stock de los productos en el carrito
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.quantity > productInFirebase.quantity) productOutOfStock.push(productInCart)
            }

            if (productOutOfStock.length === 0) {
                //Disminuir el stock existente

                for (const productInCart of products) {
                    const productRef = doc(db, "products", productInCart.id);

                    const docSnap = await getDoc(productRef);
                    const productInFirebase = {...docSnap.data(), id: doc.id}

                    // Set the "capital" field of the city 'DC'
                    await updateDoc(productRef, {
                        quantity: productInFirebase.quantity - productInCart.quantity
                    });
                }

                //Generar la orden

                // Add a new document with a generated id
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Se generó la order correctamente con ID: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            } else {
                alert("Hay algún producto fuera de stock")
            }
        })()
    }


    const formik = useFormik({
        initialValues: {
            Name: '',
            Phone: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Name">First Name</label>
                <input id="Name" name="Name" placeholder="Diego" onChange={formik.handleChange}
                       value={formik.values.Name}
                />

                <label htmlFor="Phone">Phone</label>
                <input id="Phone" name="Phone" placeholder="11111111" onChange={formik.handleChange}
                       value={formik.values.Phone}
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


                <button type="submit" onClick={confirmPurchase}>Submit</button>
            </form>

        </div>
    )
}

export default Form
