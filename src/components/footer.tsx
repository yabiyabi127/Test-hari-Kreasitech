
import logo from '../assets/logo.png'
//assets
export default function Footer(props:any) {
    return (
        <div className='foot p-[1.5em] relative overflow-hidden h-[45rem] bg-sky-800'>
        <div className='flex'>
        <img src={logo}></img>
        </div>
        <div className='bg-white p-4 py-[3rem] mt-5 text-left'>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>TECHNOLOGY DEPARTMENT</option>
</select>
          <div className='w-[13rem]'>
            <p className='mt-4 text-blue-500'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
          </div>
        </div>
        <div className='inner h-[43%] whitespace-normal  origin-top-left rotate-12  bg-sky-900 absolute bottom-0 w-[150%] left-[-1rem]'>
          <div className='text-left py-[2rem] px-[4rem] w-[32rem] ml-[20px]'></div>
        </div>
        <div className='inner h-[34%] origin-bottom -rotate-[29deg] right-[-18rem] bg-sky-700 absolute bottom-[-3rem] w-[150%]'></div>
      </div>
    );
  }
