/* eslint-disable no-unused-vars */
import { useState, useReducer } from "react";

// eslint-disable-next-line react/prop-types
function CardForm ({ addCharacter }) {
    const [formData, setFormData] = useState({
        name: "",
        place: "",
        ruleOf: "",
        imageUrl: "",

    });

    const formReducer = (state, action) => {
        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    [action.field]: action.value,
                };
            case 'reset':
                return {
                    name: '',
                    email: '',
                };
    }
}

    const [formState, dispatchFormState] = useReducer(formReducer, {name: '', email: ''});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const inputValue = value;
        const setValue = e.target.value
        setFormData({
            ...formData,
            [name]: inputValue,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const character = {
            id: Math.random(),
            name: formData.name,
            place: formData.place,
            ruleOf: formData.ruleOf,
            imageUrl: formData.imageUrl,
        };
        setFormData({
            name: "",
            descrition: "",
            ruleOf: "",
            imageUrl: "",
            place: "",
        })
        addCharacter(character);
    }

    const handleFieldChange = (field, value) => {
        dispatchFormState({type: 'input', field, value});
    }

    const resetForm = (e) => {
        e.preventDefault();
        dispatchFormState({type: 'reset'});
    }

    const sendForm = (e) => {
        e.preventDefault();
        console.log(formState);
    }
    const isFormValid = formData.name.trim() !== "" && formData.place.trim() !== "" && formData.ruleOf.trim() !== "";

    return (
        <>
        <form onSubmit={handleSubmit} className="container flex flex-col gap-3 w-80 mb-10 bg-gray-800 p-5 rounded-md mt-5 ">
            <div className="flex flex-col text-white">
                <label>
                    <span>Nome: </span>
                    <input type="text"  className="bg-gray-500" name="name" value={formData.name} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col text-white">
                <label>
                    <span>Luogo: </span>
                    <input type="text" className="bg-gray-500" name="place" value={formData.place} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col text-white">
                <label>
                    <span>Regnante: </span>
                    <input type="text" className="bg-gray-500" name="ruleOf" value={formData.ruleOf} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col text-white bg-gray-800">
                <label>
                    <span>Immagine: </span>
                    <input type="text" className="bg-gray-500" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col text-white ">
                <button type="submit"  className="bg-black p-2 rounded-md mt-5 mb-0" disabled={!isFormValid}>Aggiungi</button>
            </div>
           </form>  
           <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="bg-gray-600" value={formState.email} onChange={(e) => handleFieldChange("email", e.target.value)} required />
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" className="bg-gray-600" value={formState.name}  onChange={(e) => handleFieldChange("name", e.target.value)} required />
              <div className="flex flex-col text-white ">
                 <button type="submit" onClick={sendForm}  className="bg-black p-2 rounded-md mt-5 mb-0" >Aggiungi</button>
                </div>
                <div className="flex flex-col text-white ">
                 <button className="bg-black p-2 rounded-md mb-0" onClick={resetForm}>Reset</button>
             </div>
           </form>
        </>

    )
}

export default CardForm;
