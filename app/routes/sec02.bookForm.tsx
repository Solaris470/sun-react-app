import { useNavigate } from "@remix-run/react";

export default function BookForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3000/api/addBooks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
      });
      if (response.ok) {
        const data = await response.json();
        alert("บันทึกข้อมูลสำเร็จ");
        navigate("/sec02/bookList");
      } else {
        const data = await response.json();
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Error: เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    // part 2
    <>
      <div className="m-3">
        <h1 className="text-3xl">เพิ่มหนังสือใหม่</h1>
        <hr className="my-3" />
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-3">
            <label htmlFor="bookTitle">
              ชื่อหนังสือ<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              name="bookTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookDesc">รายละเอียด</label>
            <textarea
              rows={3}
              cols={50}
              name="bookDesc"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="bookType">หมวดหมู่</label>
            <select
              name="bookCate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">เลือกหมวดหมู่</option>
              <option value={10}>วิทยาศาตร์</option>
              <option value={20}>เทคโนโลยี</option>
              <option value={30}>คอมพิวเตอร์</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="bookAuthor">ผู้แต่ง</label>
            <input
              type="text"
              name="bookAuthor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bookStock">สถานะคลังสินค้า</label>
            <div className="flex items-center mb-4">
              <input
                defaultChecked={true} 
                type="radio"
                value="1"
                name="bookStock"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="radio1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                In-stock
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                value="0"
                name="bookStock"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Out-of-stock
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            บันทึก
          </button>
          <button
            type="reset"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            เคลียร์
          </button>
        </form>
      </div>
    </>
  );
}
