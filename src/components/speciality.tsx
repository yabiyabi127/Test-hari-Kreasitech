import React from 'react';
// import hero from '../src/assets/hero.png'
import hero from '../assets/hero.png'
//assets
export default function Speciality(props:any) {
    return (
        <div className='speciality bg-sky-400 p-4'>
        <div className='bg-white p-[2rem] text-left'>
          <h3 className='mb-4 font-bold text-sky-400 text-xl'>OUR SPECIALITY</h3>
          <p className='text-gray-400 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eum ipsam aut totam eligendi harum iure mollitia facere doloribus officia blanditiis perspiciatis dicta dolorum, eaque modi cupiditate repudiandae. Quod, vel?</p>
          <div className='slides mt-5 text-center'>
            {
              props.data?.filter((y:any) => y.page === props.specialitysize).map((result:any, i:any) => (
                <div key={i}>
                  <img className='m-auto p-3' src={result?.image} alt="" />
                  <p>{result?.title}</p>
                  <p className='text-sm text-gray-400'>{result?.description}</p>
                </div>
              ))
            }
          </div>
          <div className='grid grid-cols-3'>
            <div>
              <button onClick={() => props.setSpecialitysize(props.specialitysize === 1 ? props.data?.length : props.specialitysize-1 )} className='p-3 px-[15px] py-[10px]'><i className="fa fa-arrow-left"></i></button>
            </div>
            <div className='dots flex gap-2 justify-center items-center'>
              {
                props.data?.map((x:any, i:any) => (
                  <button key={i} onClick={() => props.setSpecialitysize(i+1)} className={`w-[10px] h-[10px] border-2 rounded-lg bg-blue-300 ${x.page === props.specialitysize && 'border-blue-500 !bg-white' }`}></button>
                ))
              }
            </div>
            <div className='text-right'>
              <button onClick={() => props.setSpecialitysize(props.data?.length === props.specialitysize ? 1 : props.specialitysize+1)} className='p-3 px-[15px] py-[10px]'><i className="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }





