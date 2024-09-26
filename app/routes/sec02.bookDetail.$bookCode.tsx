import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function bookList() {
  const navigate = useNavigate();
  const [loadStatus, setLoadStatus] = useState(true);
  const [bookData, setBookData] = useState([]);
  const myParam = useParams();

  useEffect(() => {
    if (loadStatus) {
      try {
        const fetchData = async () => {
          const book = await fetch("http://localhost:3000/api/getBook/" + myParam.bookCode);
          if (book.ok) {
            const bookJson = await book.json();
            setBookData(bookJson);
          } else {
            alert("Error: เกิดข้อผิดพลากในการดึงข้อมูลหนังสือ" + book.statusText);
          }
        };
        fetchData().catch(console.error);
        setLoadStatus(false);
      } catch (error) {
        alert("Error: เกิดข้อผิดพลาดในระหว่างการอ่านข้อมูลหนังสือ" + error);
      }
    }
  },[loadStatus]);

  const handleDelete = async (bookCode) => {
    alert(`กำลังลบหนังสือรหัส : ${bookCode}`);
    try {
      const fetchData = async () => {
        const data = await fetch(
          `http://localhost:3000/api/deleteBook/${bookCode}`,
          {
            method: "DELETE"
          }
        );
        if(data.ok) {
          const myJson = await data.json();
          alert(myJson.message);
        }else {
          alert("Error: เกิดข้อผิดพลาดในการลบหนังสือ");
        }
      }
      fetchData();
      setLoadStatus(true);
    } catch (error) {
      alert("Error: เกิดข้อผิดพลาดในการลบหนังสือ" + error);
    }
  };

  return (
    <>
      <a href="/sec02/bookForm">
        <button className="text-white bg-blue-500 rounded-lg px-5 py-2.5">
          เพิ่มหนังสือ
        </button>
      </a>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left text-gray-600">ชื่อหนังสือ</th>
            <th className="px-5 py-3 text-left text-gray-600">รายละเอียด</th>
            <th className="px-5 py-3 text-left text-gray-600">ผู้แต่ง</th>
            <th className="px-5 py-3 text-left text-gray-600">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((item, index) => (
            <tr key={item.bookCode}>
              <td className="px-5 py-3 text-left">{item.bookTitle}</td>
              <td className="px-5 py-3 text-left">{item.bookDesc}</td>
              <td className="px-5 py-3 text-left">{item.bookAuthor}</td>
              <td className="px-5 py-3 text-left">
                <a href={`/sec02/bookDetail/${item.bookCode}`} >
                  <button className="text-white bg-sky-300 rounded px-2.5 py-2">
                    ดูรายละเอียด
                  </button>
                </a>
                <a href={`/sec02/bookEditForm/${item.bookCode}`} >
                  <button className="text-white bg-yellow-500 rounded mx-3 px-2.5 py-2">
                    แก้ไข
                  </button>
                </a>
                <a
                  href="#"
                  onClick={(e) => handleDelete(`${item.bookCode}`)}
                >
                  <button className="text-white bg-red-500 rounded px-2.5 py-2">
                    ลบ
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
