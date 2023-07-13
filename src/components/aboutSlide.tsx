
export default function About(props:any) {
    return (
        <div className='relative px-[1.5rem]'>
        <button className='rounded-full absolute bg-white top-[-13px] z-30 px-[12px] py-[8px] shadow-lg'><i className="fa fa-chevron-down"></i></button>
        {
          props.aboutSlider?.filter((y:any) => y.page === props.SlideDataAbout).map((result :any, i:any) => (
            <div className='slide pt-[3rem] text-left' key={i}>
              <div className='w-full'>
                <h3 className='text-2xl font-bold text-sky-400'>{result?.title}</h3>
                <br />
                <p>{result?.sub}</p>
                <p className='text-xs text-gray-500 mt-4'>{result?.description}</p>
              </div>
            </div>
          ))
        }

        <div className='grid grid-cols-2 justify-between mt-[5rem] mb-5'>
          <div className='text-left font-bold'>
            <span className='text-lg'>0{props.SlideDataAbout}</span>/ <span className='text-gray-500 text-sm'>0{props.aboutSlider?.length}</span>
          </div>
          <div className='ml-auto flex gap-2 rounded-none'>
            <button className='p-3 bg-gray-200 px-[15px] py-[10px]' onClick={() => props.setSlideDataAbout(props.SlideDataAbout === 1 ? 3 : props.SlideDataAbout-1)}><i className="fa fa-arrow-left"></i></button>
            <button className='p-3 bg-sky-400 text-white px-[15px] py-[10px]' onClick={() => props.setSlideDataAbout(props.SlideDataAbout === 3 ? 1 : props.SlideDataAbout+1)}><i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    );
  }
