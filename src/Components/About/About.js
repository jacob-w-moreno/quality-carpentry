import React from "react";

import Bio from "./Bio";
import Intro from "../Intro";

import Andrea from "../../Styles/Assets/Bios/Andrea.jpg";
import Anika from "../../Styles/Assets/Bios/Anika.jpg";
import Cayden from "../../Styles/Assets/Bios/Cayden.jpg";
import Coda from "../../Styles/Assets/Bios/Coda.jpg";
import Dan from "../../Styles/Assets/Bios/Dan.jpg";
import Daric from "../../Styles/Assets/Bios/Daric.jpg";
import Derek from "../../Styles/Assets/Bios/Derek.jpg";
import Donette from "../../Styles/Assets/Bios/Donette.jpg";
import Esteban from "../../Styles/Assets/Bios/Esteban.jpg";
import Ian from "../../Styles/Assets/Bios/Ian.jpg";
import Isaac from "../../Styles/Assets/Bios/Isaac.jpg";
import Jarom from "../../Styles/Assets/Bios/Jarom.jpg";
import Jonathan from "../../Styles/Assets/Bios/Jonathan.jpg";
// import Joseph from "../../Styles/Assets/Bios/Joseph.jpg";
import Josh from "../../Styles/Assets/Bios/Josh.jpg";
import Kyle from "../../Styles/Assets/Bios/Kyle.jpg";
import Landon from "../../Styles/Assets/Bios/Landon.jpg";
import Rob from "../../Styles/Assets/Bios/Rob.jpg";
import Roger from "../../Styles/Assets/Bios/Roger.jpg";
import Rusty from "../../Styles/Assets/Bios/Rusty.jpg";
import Todd from "../../Styles/Assets/Bios/Todd.jpg";
import Tyler from "../../Styles/Assets/Bios/Tyler.jpg";
// import Wes from '../../Styles/Assets/Bios/Wes.jpg';

const About = (props) => {
  // ===== ===== DATA BEG ===== =====

  // ===== ===== DATA END ===== =====
  // ===== ===== FUNCTIONS BEG ===== =====

  // ===== ===== FUNCTIONS END ===== =====
  // ===== ===== 'COMPONENTS' BEG ===== =====

  let bios = (
    <div className="bio_grid">
      <Bio
        pic={Dan}
        name="Daniel Crawley"
        title="Co-founder, owner"
        bio="Daniel has over 13 years' experience as a realtor, and has been in sales for 20 years. With a Bachelor's degree in business management and a marketing degree from Utah Valley State College, he has owned, invested in, or sold nearly 200 flips. Specializes in flips, real estate, and project management."
      />
      <Bio
        pic={Rob}
        name="Robert Crawley"
        title="Co-founder, owner"
        bio="Robert has over 25 years of experience in financing, and has held many high-ranking positions such as CEO, CFO, and VP in his career. He has a Master's Degree in accounting from Brigham Young University. He specializes in management, human resources, finish carpentry, and roofing."
        background="#e3e3e3"
      />
      <Bio
        pic={Andrea}
        name="Andrea Crawley"
        title="Owner"
        bio="Andrea is the one who keeps everything organized and running behind the scenes. She has years of management experience and is a skilled business strategist."
      />
      <Bio
        pic={Josh}
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
        bio="Specializes in tree removal, demolitions, and estate cleanups."
      />
      <Bio
        pic={Anika}
        name="Anika Crawley"
        title="Accountant"
        bio="Anika handles the company's finances and does all of the accounting work. She also helps the Office Manager keep everything organized—from inventory to current jobs and more."
        background="#e3e3e3"
      />
      <Bio
        pic={Donette}
        name="Donette Denison"
        title="Office Manager"
        bio="Donette has 4 children (2 boys and 2 girls) and 7 grandchildren. She loves to work hard and play harder. She loves sports, especially golf, this company, her bosses, and all of our employees."
      />
      <Bio
        pic={Roger}
        name="Roger Stubbs"
        title="General Manager"
        bio="Roger holds a General Contractor license and has 10 years of experience in flips, remodels, framing, and plumbing. He loves training and helping his employees be the best they can be."
      />
      <Bio
        pic={Rusty}
        name="Rusty"
        title="Employee"
        bio="Rusty is a handyman who loves carpentry, plumbing, electrical work, and anything else he can get his hands on."
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
        bio="Landon grew up in Saratoga Springs, Utah before serving a mission in San Diego, California. Landon and his wife love spending all their free time together and look forward to buying a home and having their first child in August."
      />
      <Bio
        pic={Coda}
        name="Coda Lebaron"
        title="Employee"
        bio="Coda was raised in Saratoga Springs. He enjoys playing the piano, hanging out with his friends, and playing sports."
      />
      {/* <Bio
        pic={Joseph}
        name="Joseph"
        title="Employee"
        bio="Joseph is 21 years old and from Ogden, Utah. He recently returned from serving a full-time mission in Chile and St. Louis, Missouri. He is currently studying at Brigham Young University. He loves to run, explore the outdoors, and spend time with family. He loves working at Quality because of the amazing people he gets to work with and because he is learning so much."
      /> */}
      <Bio
        pic={Todd}
        name="Todd Barnum"
        title="Employee"
        bio="Todd grew up in Cedar Valley where he learned to love sports before serving a mission in Johanneburg, South Africa. He is the son of Scott and Julie and is the sibling of 2 brothers and 3 sisters."
      />
      <Bio
        pic={Jarom}
        name="Jarom Rush"
        title="Employee"
        bio="Jarom is a freaking rockstar and he loves you!"
        background="#e3e3e3"
      />
      {/* <Bio
      pic={Wes}
      name="Wes Price"
      title="Employee"
      bio="Wes grew up in Lehi, Utah. He's currently studying architectural design at UVU. His favorite thinga bout working for Quality Carpentry is the process of seeing an idea or plan come to life. He enjoys the small detials that really make a project come together. Some of his hobbies include woodworking, camping, hiking, basketball, soccer, gaming, and exercise."
    /> */}
      <Bio
        pic={Cayden}
        name="Cayden Dennison"
        title="Employee"
        bio="His name is Cayden, but most people call him Denny. He loves learning new things and getting to know new people."
      />
      {/* <Bio
      pic={Placeholder}
      name="Jay Price"
      title="Employee"
      bio="Jay is 24 years old and already has several years of experience in residential remodeling and construction. He is currently studying at Utah Valley University."
    /> */}
      <Bio
        pic={Ian}
        name="Ian Reid"
        title="Employee"
        bio="Ian is from Highland, Utah. He is recently married and is a mechanical engineering student at BYU. He absolutely loves all things carpentry and prides himself on a job well done."
      />
      <Bio
        pic={Isaac}
        name="Isaac Gividen"
        title="Employee"
        bio="Isaac grew up in Cedar Hills Ut. He is currently attending Brigham Young University. He was recently married in August 2020. He has a passion for building and creating."
      />
      <Bio
        pic={Daric}
        name="Daric Meyers"
        title="Employee"
        bio="Daric is from Star, Idaho and is the oldest of 4 children. He grew up loving and playing sports and is an avid BYU fan. Currently, he is a mechanical engineering student at BYU and one day hopes to work in the aerospace industry for NASA."
      />
      <Bio
        pic={Tyler}
        name="Tyler Smith"
        title="Employee"
        bio="Tyler lives in the Ogden area with his family. He's currently studying at Weber State University and hopes to run his own business one day. He loves to play guitar and banjo. He loves working at Quality because it provides a great flexible opportunity to work and still go to school."
      />
      <Bio
        pic={Derek}
        name="Derek Price"
        title="Employee"
        bio="Derek is 21 years old and has been working in construction for 5 years. He plans on attending Salt Lake Community College in the fall."
      />
    </div>
  );

  // ===== ===== 'COMPONENTS' END ===== =====

  return (
    <div className="about">
      <Intro
        primaryText="MEET YOUR NEW TEAM"
        secondaryText="We'll get the job done together"
      />
      {bios}
    </div>
  );
};

export default About;
