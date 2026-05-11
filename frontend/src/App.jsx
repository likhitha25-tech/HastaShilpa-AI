import { useState } from "react";
import axios from "axios";

function App() {

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [style, setStyle] = useState("Modern");
  const [generatedImage, setGeneratedImage] = useState("");

  const uploadImage = async () => {

    if (!image) {
      alert("Please select image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {

      const res = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      setMessage(res.data.message);

    } catch (error) {

      console.log(error);
      setMessage("Upload Failed");

    }

  };

  const generateAIImage = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/ai/generate",
        {
          style: style
        }
      );

      setGeneratedImage(res.data[0].url);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center mb-6 text-green-700">
          HastaShilpa AI
        </h1>

        <input
          type="file"
          className="mb-4"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          onClick={uploadImage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Upload Image
        </button>

        <p className="mt-4 text-center text-green-600">
          {message}
        </p>

        <hr className="my-6" />

        <h2 className="text-xl font-semibold mb-3">
          Select Design Style
        </h2>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="border p-2 rounded-lg w-full mb-4"
        >

          <option>Modern</option>
          <option>Luxury</option>
          <option>Minimal</option>
          <option>Traditional</option>
          <option>Scandinavian</option>

        </select>

        <button
          onClick={generateAIImage}
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Generate AI Design
        </button>

        {generatedImage && (

          <div className="mt-8">

            <h2 className="text-2xl font-bold mb-4">
              Generated Design
            </h2>

            <img
              src={generatedImage}
              alt="Generated"
              className="rounded-xl shadow-md"
            />

          </div>

        )}

      </div>

    </div>

  );

}

export default App;