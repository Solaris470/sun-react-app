import { useState } from "react";
import Sidebar from "./sidebar";

let nextId = 0;

export default function CreateCard() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardDetail ,setCardDetail] = useState(0);

  const handleClickAdd = (name: string, note: string,tel:string ,email:string) => {
    setCards([
      ...cards,
      {
        id: nextId++,
        name: name,
        tel: tel,
        email: email,
        note: note,
      },
    ]);
    setName(""); 
    setNote("");
    setTel(""); 
    setEmail("");
  };

  function handleButtonClick(){
    setIsFormVisible(true)
    
  }
  function handleCloseForm(){
    setIsFormVisible(false)
    
  }
  function handleShowDetail(id){
    setCardDetail(id);
  }

  return (
    <div className="container mx-auto">
        <Sidebar />
        
      <div className="flex justify-end mt-3 ">
      <button onClick={handleButtonClick} className={`bg-blue-500 rounded-lg text-white px-3 py-2 absolute right-10 z-50 ${isFormVisible ? 'opacity-0' : 'opacity-100'}`}>เพิ่มข้อมูล</button>
        <div className={`w-full max-w-md p-4 rounded-lg shadow-md bg-white transition-opacity duration-500 ease-in-out absolute top-0 right-0 ${isFormVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-xl mt-3 text-center">เพิ่มข้อมูล</h1>
          <br />
          <div>
            <label htmlFor="cName">ชื่อ-สกุล:</label>
            <input
              type="text"
              name="cName"
              value={name}
              className="bg-slate-200 rounded-md p-2 m-2 w-full"
              onChange={(e) => setName(e.target.value)}
              id="cName"
            />
          </div>
          <div>
            <label htmlFor="cTel">เบอร์โทรศัพท์:</label>
            <input
              type="number"
              name="cTel"
              value={tel}
              className="bg-slate-200 rounded-md p-2 m-2 w-full"
              onChange={(e) => setTel(e.target.value)}
              id="cName"
            />
          </div>
          <div>
            <label htmlFor="cName">อีเมล์:</label>
            <input
              type="email"
              name="cMail"
              value={email}
              className="bg-slate-200 rounded-md p-2 m-2 w-full"
              onChange={(e) => setEmail(e.target.value)}
              id="cName"
            />
          </div>
          <label htmlFor="cNote">ข้อมูลผู้ถือบัตร</label>
          <textarea
          rows={3}
            name="cNote"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="bg-slate-200 rounded-md p-2 m-2 w-full"
            id="cNote"
          />
          <button
            className="bg-blue-500 rounded-lg p-2 m-2 text-white w-full"
            onClick={() => handleClickAdd(name, note,tel,email)}
          >
            {" "}
            เพิ่มนามบัตร
          </button>
          <button onClick={handleCloseForm} className="bg-red-500 rounded-lg p-2 m-2 text-white w-full">Close Form</button>
        </div>
      </div>

      <hr className="mt-3" />
      <div className="">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cards.map((data) => (
              <tr key={data.id} className="even:bg-gray-300">
                <td scope="col" className="px-6 py-4">
                  {data.id}
                </td>
                <td scope="col" className="px-6 py-4">
                  {data.name}
                </td>
                <td scope="col" className="px-6 py-4">
                  {data.note}
                </td>
                <td scope="col" className="px-6 py-4">
                  <button className="bg-sky-500 rounded-lg px-3 py-2 text-white " onClick={handleShowDetail}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
