// eslint-disable-next-line react/prop-types
function Card({ name, place, ruleOf, imageUrl, onRemoveCharacter }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{place}</p>
        <p className="text-gray-600">{ruleOf}</p>
        <button onClick={onRemoveCharacter} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
          Rimuovi
        </button>      </div>
    </div>
  );
}

export default Card;