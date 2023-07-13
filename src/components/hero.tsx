
import hero from '../assets/hero.png'
//assets
export default function Heroo(props:any) {
    return (
        <div className='h-[30rem] w-full relative overflow-hidden'>
        <img className='hero w-full' src={hero}></img>
        <div className='inner h-[70%] whitespace-normal origin-top-left rotate-12 z-10 bg-sky-500 absolute bottom-0 w-[150%] left-[-1rem]'>
          <div className='text-left py-[2rem] px-[4rem] w-[32rem] ml-[20px]'>
            <h3 className='-rotate-12 text-white text-4xl font-bold mb-[1em] ml-[-28px]'>Discover <br /> Your Wonder</h3>
            <p className='text-white text-sm -rotate-12'>{props.data}</p>
          </div>
        </div>
        <div className='inner h-[70%] origin-bottom md:botton-[-5rem] -rotate-12 right-[-15rem] bg-sky-400 absolute bottom-0 w-full'></div>
      </div>
    );
  }
