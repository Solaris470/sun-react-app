import { useState } from "react";
import { sculptureLists } from "./SculptureLists";
import Sidebar from "./sidebar";

export default function EProject() {
  const [index, setIndex] = useState(0);

  let sculpture = sculptureLists[index];

  function handleClickNext() {
    index != sculptureLists.length - 1 ? setIndex(index + 1) : setIndex(0);
  }
  function handleClickPrev() {
    index != 0 ? setIndex(index - 1) : setIndex(0);
  }

  return (
    <main className="container mx-auto p-4 grid justify-center">
        <Sidebar />
      <h1 className="font-bold text-lg">
        <i>{sculpture.name}</i> โดย
        {sculpture.author}
      </h1>

      <img src={sculpture.image} className="object-cover h-48 w-96" title={sculpture.name} />
      <p>{sculpture.description}</p>
      <a href={sculpture.reference} target="_blank">
        เอกสารอ้างอิงฉบับเต็ม
      </a>
      <br />
      <div className="btn-group justify-between flex">
        <button
          onClick={handleClickPrev}
          className="bg-gray-400 rounded-lg text-white py-2 px-3"
        >
          Prev
        </button>
        <button
          onClick={handleClickNext}
          className="bg-blue-500 rounded-lg mx-3 py-2 px-3 text-white"
        >
          Next
        </button>
      </div>
      <h3 className="justify-end grid">
        {index + 1} จาก {sculptureLists.length}
      </h3> 
    </main>
  );
}
