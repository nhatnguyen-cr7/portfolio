
import './App.css'
import Proflie from "./assets/Photo.png"

function App() {
  

  return (
    <>
     <header>
      <div className='container m-auto px-4 py-6'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-bold text-xl'>LOGO</h1>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
              </li>
              <li>
                <a className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
              </li>
              <li>
                <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </header>
     <main>
     <section className="mx-auto px-4 max-w-7xl my-12 ">
        <div className="container">
            <div className="gap-4 py-10 flex md:flex-row flex-col justify-between items-center">
                <div className="text-center mb-12 md:text-left md:w-1/2">
                    <h1 className="text-white text-7xl font-extrabold">Hi, I’m Ada</h1>
                    <p className="mt-12 text-white text-3xl font-normal">I’m a full-stack developer with 5 years<br />of
                        experience using React and NodeJS.<br />Reach out if you’d like to learn more!</p>
                    <button
                        className="mt-20 w-[209px] h-[73px] bg-[#2563eb] rounded-[100px] text-white text-3xl font-semibold">Contact
                        Me
                    </button>
                </div>
                <div>
                    <img src={Proflie} alt="" />
                </div>
                
            </div>
        </div>

    </section>
   

     </main>
    </>
  )
}

export default App
