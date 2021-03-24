import React from 'react';

import Intro from '../Intro';
import Bio from './Bio';
import Esteban from '../../Styles/Assets/Bios/Esteban.png';
import Jonathan from '../../Styles/Assets/Bios/Jonathan.png';
import Rob from '../../Styles/Assets/Bios/Rob.png';
import Placeholder from '../../Styles/Assets/Bios/Placeholder.png';
import Kyle from '../../Styles/Assets/Bios/Kyle.jpg';
import Landon from '../../Styles/Assets/Bios/Landon.jpg';
import Jarom from '../../Styles/Assets/Bios/Jarom.jpg';
import Donette from '../../Styles/Assets/Bios/Donette.jpg';
import Cody from '../../Styles/Assets/Bios/Cody.jpg';
import Wes from '../../Styles/Assets/Bios/Wes.jpg';
import Cayden from '../../Styles/Assets/Bios/Cayden.jpg';

const About = props => {
  return <div className='about'>
    <Intro
      primaryText="MEET YOUR NEW TEAM"
      secondaryText="We'll get the job done together"/>
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
      <Bio
        pic={Kyle}
        name="Kyle Ravsten"
        title="Employee"
        bio="Kyle was born and raised in Texas, hailing from a small town named Farmersville. He and his wife currently share a home in Orem with their dog Milo. Kyle is a junior at BYU majoring in Construction Management. He loves working with his hands and designing homes. He really enjoys working at Quality Carpentry and hopes to grow in knowledge and experience!"
        background="#e3e3e3"
      />
      <Bio
        pic={Landon}
        name="Landon Lebaron"
        title="Employee"
        bio="Landon grew up in Saratoga springs, Utah before serving a mission in San Diego, California. Landon and his wife love spending all their free time together and look forward to buying a home and having their first child in August."
      />
      <Bio
        pic={Jarom}
        name="Jarom Rush"
        title="Employee"
        bio="Jarom is a freaking rockstar and he loves you!"
        background="#e3e3e3"
      />
      <Bio
        pic={Donette}
        name="Donette Dennison"
        title="Office Manager"
        bio="Donette has 4 children (2 boys and 2 girls) and 7 grandchildren. She loves to work hard and play harder. She loves sports, especially golf, this company, her bosses, and all of our employees."
      />
      <Bio
        pic={Cody}
        name="Cody McLaughlin"
        title="Employee"
        bio="Cody grew up living all around Utah county and traveling around the United States playing in soccer and futsal tournaments. He is planning to attend WSU to study accounting after his wife graduates with her masters from Skin Science Institute."
        background="#e3e3e3"
      />
      <Bio
        pic={Wes}
        name="Wes Price"
        title="Employee"
        bio="Wes grew up in Lehi, Utah. He's currently studying architectural design at UVU. His favorite thinga bout working for Quality Carpentry is the process of seeing an idea or plan come to life. He enjoys the small detials that really make a project come together. Some of his hobbies include woodworking, camping, hiking, basketball, soccer, gaming, and exercise."
      />
      <Bio
        pic={Cayden}
        name="Cayden Dennison"
        title="Employee"
        bio="His name is Cayden, but most people call him Denny. He loves learning new things and getting to know new people."
      />
      <Bio
        pic={Placeholder}
        name="Jay Price"
        title="Employee"
        bio="Jay is 24 years old and already has several years of experience in residential remodeling and construction. He is currently studying at Utah Valley University."
      />
    </div>
  </div>
}

export default About;