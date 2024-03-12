import "./App.css";
import Proflie from "./assets/Photo.png";
import Project from "./assets/Project.png";

function App() {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">LOGO</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto px-4 max-w-7xl my-12 ">
        <div className="container">
          <div className="gap-4 py-10 flex md:flex-row flex-col justify-between">
            <div className="text-center mb-12 md:text-left md:w-1/2">
              <h1 className="text-white text-7xl font-extrabold">
                Hi, I’m Ada
              </h1>
              <p className="mt-12 text-white text-3xl font-normal">
                I’m a full-stack developer with 5 years
                <br />
                of experience using React and NodeJS.
                <br />
                Reach out if you’d like to learn more!
              </p>
              <button className="mt-20 w-[209px] h-[73px] bg-[#2563eb] rounded-[100px] text-white text-3xl font-semibold">
                Contact Me
              </button>
            </div>
            <div className="md:50%">
              <img
                src={Proflie}
                alt=""
                className="rounded-lg shadow-lg w-96 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 max-w-7xl my-12">
        <div className="container">
          <h1 className="text-white text-3xl font-semibold py-10 text-center">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project 1</h2>
              <img src={Project} alt="" />
              <p className="text-gray-600">Description of Project 1...</p>
              <div className="flex justify-center items-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Github
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project 2</h2>
              <img src={Project} alt="" />
              <p className="text-gray-600">Description of Project 2...</p>
              <div className="flex justify-center items-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Github
                </button>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Project 3</h2>
              <img src={Project} alt="" />
              <p className="text-gray-600">Description of Project 3...</p>
              <div className="flex justify-center items-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Demo
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 max-w-7xl my-12">
        <h1 className="text-white text-3xl font-semibold py-10 text-center">
          Contact With Me
        </h1>
        <div className="flex flex-wrap">
          <div className="container mx-auto w-full md:w-1/3">
            <div className="border rounded-lg bg-gray-200 p-6 shadow-lg">
              <img
                src={Proflie}
                alt=""
                className="rounded-lg w-full h-auto shadow-md mb-4"
              />
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                Thông tin cá nhân
              </h2>
              <p className="text-gray-600 mb-2">Tên: Nguyễn Minh Nhật</p>
              <p className="text-gray-600 mb-2">
                Email: nhatnhatnhat192001@gmail.com
              </p>
              <p className="text-gray-600 mb-2">Số điện thoại: 0943722757</p>
              <p className="text-gray-600 mb-2">Địa chỉ: Đà Nẵng</p>
            </div>
          </div>

          <div className="container mx-auto md:w-2/3 md:pl-4">
            <div className="border rounded-md bg-gray-200 p-4 text-black">
              <h2 className="text-lg font-semibold mb-4">Gửi Email</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="border rounded-md p-2 w-full"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-800 p-8">
        <footer>
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-7xl my-12">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Về chúng tôi</h2>
              <p className="text-sm">
                Chúng tôi là một công ty chuyên cung cấp các dịch vụ...
              </p>
            </div>
            <div className="md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Liên hệ</h2>
              <p className="text-sm">Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
              <p className="text-sm">Email: example@example.com</p>
              <p className="text-sm">Điện thoại: 0123 456 789</p>
            </div>
            <div className="md:w-1/3">
              <h2 className="text-lg font-semibold mb-2">
                Kết nối với chúng tôi
              </h2>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-sm">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
