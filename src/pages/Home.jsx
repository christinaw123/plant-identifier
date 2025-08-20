import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">🌱 Plant Identification App</h1>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleUpload}
        className="mb-4"
      />
      
      {image && (
        <div className="mt-4">
          <p className="font-semibold">Preview:</p>
          <img src={image} alt="uploaded plant" className="w-64 h-auto rounded-lg border" />
          <p className="mt-2 text-gray-600">[Result will display here later]</p>
        </div>
      )}
    </div>
  );
}
