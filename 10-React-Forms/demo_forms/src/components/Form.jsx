import { useState } from 'react';
const Form = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (event) => {
            setForm({
               ...form, 
                [event.target.name]: event.target.value
            })
            validate();
    }

    const validate = () => {
        if(!/\S+@\S+\.\S+/.test(form.email)){
            setError({
                ...error,
                email:'email inválido'
            })
        }
        else setError({...error, email: ''});
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h1>Form</h1>
            <label htmlFor="email">Email:</label>
            <input name='email' type="email" placeholder="Ingrese su email" value={form.email} onChange={handleOnChange}/>
            {error.email && <p>{error.email}</p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input name="password" type="text" placeholder="Ingrese su password" value={form.password} onChange={handleOnChange}/>
            <hr />
            <button disabled= {!form.email || !form.password || !error.email || !error.password}>Enviar</button>
        </form>
    )
}

export default Form;