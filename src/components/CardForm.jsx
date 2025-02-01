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
        addCharacter(character);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10">
            <div className="flex flex-col">
                <label>
                    <span>Nome:</span>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col">
                <label>
                    <span>Luogo</span>
                    <input type="text" name="place" value={formData.place} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col">
                <label>
                    <span>Regnante:</span>
                    <input type="text" name="ruleOf" value={formData.ruleOf} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col">
                <label>
                    <span>Immagine:</span>
                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange}/>
                </label>
            </div>
            <div className="flex flex-col">
                <button type="submit" className="bg-blue-500  p-2 rounded-md">Aggiungi</button>
            </div>
           </form> 
    )
}

export default CardForm;
