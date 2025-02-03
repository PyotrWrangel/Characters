import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CardForm ({ addCharacter }) {
    const [formData, setFormData] = useState({
        name: "",
        place: "",
        ruleOf: "",
        imageUrl: "",

    });

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

    const isFormValid = formData.name.trim() !== "" && formData.place.trim() !== "" && formData.ruleOf.trim() !== "";

    return (
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
    )
}

export default CardForm;
