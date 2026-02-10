function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6">
      
      <h2 className="text-xl font-bold mb-2">
        Card hero my name 
      </h2>

      <p className="text-gray-600 mb-4">
        This is a simple card using Tailwind CSS in React. 
        You can add any content here.
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Read More
      </button>

    </div>
  );
}

export default Card;
