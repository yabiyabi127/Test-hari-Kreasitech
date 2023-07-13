import React, { useState } from 'react';
import { Navbar, Select } from 'flowbite-react';
import logo from '../src/assets/logo.png';
import seep from '../src/assets/seep.png'
import animations from '../src/assets/ourdisplay.svg'
import exhaust from '../src/assets/exhaust.png'
import accessories from '../src/assets/accessories.png'
//assets
import './App.css';
import './assets/css/style.css'
import Hero from './components/hero';
import About from './components/aboutSlide';
import OurCorepage from './components/OurCore';
import Speciality from './components/speciality';
import Footer from './components/footer';

function App() {

  const aboutSlider = [
    { title: "Who we Are" , sub: 'Technology Company', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 1 },
    { title: "What we do", sub: "Professional Brand Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 2},
    {
      title: "How we do", sub: "Strategize, Design, Collaborate", description: "Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?", page: 3
    }
  ];
  const [SlideDataAbout, setSlideDataAbout] = useState<number>(1);
  const [specialitysize, setSpecialitysize] = useState<number>(1);
  const dataHero = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, est quidem? Earum voluptate accusamus nisi totam cum laborum maxime fugiat soluta. Nemo tenetur consectetur in ut accusamus quae molestias earum?'

  const data = [
    { image: accessories, title: "Accessories Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 1 },
    { image: seep, title: "Seep Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 2 },
    { image: exhaust, title: "Exhaust Improvement", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nulla voluptatem eius perspiciatis ipsam eligendi officia et laudantium consectetur quisquam similique, suscipit laboriosam eveniet molestias voluptas, ratione ad nemo ipsum!", page: 3 },

  ]

  return (
    <div className="App">
      <Navbar
      >
        <Navbar.Brand
        >
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
      <Hero data={dataHero} />
      <About aboutSlider={aboutSlider} setSlideDataAbout={setSlideDataAbout} SlideDataAbout={SlideDataAbout}/>
      <OurCorepage  />
      <Speciality data={data} specialitysize={specialitysize} setSpecialitysize={setSpecialitysize} />
      <Footer />
    </div>
  );
}

export default App;
