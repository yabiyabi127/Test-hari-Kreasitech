import React from 'react';
// import animations from '../src/assets/ourdisplay.svg'
import animations from '../assets/ourdisplay.svg'
//assets
export default function OurCorepage(props:any) {
    return (
        <div className='values px-[1.5rem] mt-[5rem] bg-gray-100 py-5'>
        <div className='text-center mb-5'>
          <h3 className='text-4xl font-bold text-sky-400'>Our Core Values</h3>
        </div>
        <div className='text-left'>
          <p className='text-gray-400'> Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. <br /> <br /> In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
        </div>
        <div className='grid md:grid-cols-3 text-left'>
          <div className='mt-[3rem] mb-5 mr[-3rem]'>
            <h3 className='text-xl mb-5 '>--- Dedication </h3>
            <p className='text-sm text-gray-400'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
          </div>
          <div className='mt-[3rem] mb- ml[-3rem]'>
            <h3 className='text-xl mb-5'>--- Intellectual Honesty </h3>
            <p className='text-sm text-gray-400'>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
          </div>
          <div className='mt-[3rem] mb-2 ml[-3rem]'>
            <h3 className='text-xl mb-5'>--- Curiosity </h3>
            <p className='text-sm text-gray-400'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
          </div>
        </div>
        <div className='mt-5'>
          <img src={animations} className="m-auto md:w-[50%]"/>
        </div>
      </div>
    );
  }
