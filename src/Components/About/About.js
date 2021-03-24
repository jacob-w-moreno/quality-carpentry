import React from 'react';

import Intro from '../Intro';
import Bio from './Bio';
import Esteban from '../../Styles/Assets/Bios/Esteban.png';
import Jonathan from '../../Styles/Assets/Bios/Jonathan.png';
import Rob from '../../Styles/Assets/Bios/Rob.png';
import Placeholder from '../../Styles/Assets/Bios/Placeholder.png';

const About = props => {
  return <div className='about'>
    <Intro
      primaryText="MEET YOUR NEW TEAM"
      secondaryText="We'll get the job done together"/>
    <h2>THE OWNERS</h2>
    <div className='bio_grid'>
      <Bio
        pic={Placeholder}
        name="Daniel Crawley"
        title="Co-founder, owner"
        bio="Daniel has over 13 years' experience as a realtor, and
        has been in sales for 20 years. With a Bachelor's degree
        in business management and a marketing degree from Utah
        Valley State College, he has owned, invested in, or sold
        nearly 200 flips. Specializes in flips, real estate, and
        project management."
      />
      <Bio
        pic={Rob}
        name="Robert Crawley"
        title="Co-founder, owner"
        bio="Robert has over 25 years of experience in financing,
        and has held many high-ranking positions such as CEO, CFO,
        and VP in his career. He has a Master's Degree in accounting
        from Brigham Young University. He specializes in management,
        human resources, finish carpentry, and roofing."
        background="#e3e3e3"
      />
      <Bio
        pic={Placeholder}
        name="Josh Smith"
        title="Owner"
        bio="Josh has spent many years as a general contractor. He
        specializes in flooring and banisters."
      />
      <Bio
        pic={Esteban}
        name="Esteban Sagrero"
        title="Owner"
        bio="Specializes in programming, storage, and marketing."
        background="#e3e3e3"
      />
      <Bio
        pic={Jonathan}
        name="Jonathan Winston Crawley"
        title="Owner"
        bio="Specializes in tree removal, demolitions, and estate
        cleanups."
      />
    </div>

    {/* ===== ===== NEW PEOPLE ===== ===== */}
    <Bio
      pic={Esteban}
      name="Kyle { Last Name }"
      title="unsure"
      bio="Kyle was born and raised in Texas, hailing from a small town named Farmersville. He and his wife currently share a home in Orem with their dog Milo. Kyle is a junior at BYU majoring in Construction Management. He loves working with his hands and designing homes. He really enjoys working at Quality Carpentry and hopes to grow in knowledge and experience!"
      background="#e3e3e3"
    />
    <Bio
      pic={Jonathan}
      name="Jonathan Winston Crawley"
      title="Owner"
      bio="Specializes in tree removal, demolitions, and estate
      cleanups."
    />
  </div>
}

export default About;