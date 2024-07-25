import { useState } from "react";
import { sculptureLists } from "./SculptureLists";
import Sidebar from "./sidebar";

export default function EProject() {
  const [index, setIndex] = useState(0);
  const [sctList, setSctList] = useState(sculptureLists);

  return (
    <main className="container mx-auto p-4 grid justify-center">
       <Sidebar />
      {sctList.map((item) => (
        <div key={item.id} className="mt-3">
          <button
            onClick={() => {
              setSctList(sctList.filter((tmp) => tmp.id !== item.id));
            }}
            className="py-2 px-3 rounded-lg bg-red-500 text-white"
          >
            Delete
          </button>
          <h1 className="font-bold text-lg">
            <i>{item.name}</i> โดย
            {item.author}
          </h1>
          <img
            src={item.image}
            className="object-cover h-48 w-96"
            title={item.name}
          />
          <p>{item.description}</p>
          <a
            href={item.reference}
            target="_blank"
            className="text-blue-500 flex"
          >
            เอกสารอ้างอิงฉบับเต็ม{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </a>
        </div>
      ))}
    </main>
  );
}
