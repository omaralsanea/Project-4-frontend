import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className='hero is-fullheight-with-navbar'>
      <div className='about text-is-info'>
        {/* <div className='welcome has-text-black has-text-centered is-size-3'>
          <h1 className='mt-2 rateify'>About Me</h1>
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className='has-text-white is-size-4'>
          Welcome to intelliHench!
          <br></br>
          Everyone is welcome here - from the seasoned lifters to the newcomers
          who have never set foot in a gym before!
          <br></br>
          Or maybe you are going through physiotheraphy for an injury and you're
          in seek of alternative exercises that won't aggravate your injury.
          <br></br>
          intelliHench is designed to give aspiring lifters the knowldege they
          need to perform targetted training.
          <br></br>
          So whatever your level or experience, get started today!
        </p>
        <br></br>
        <br></br>
        <div className='profiles pt-1'>
          <div className='Omar column is-narrow mx-6'>
            <h2 className='is-size-4 mt-5'>Omar Al-Sanea</h2>
            <p>
              <a
                href='https://github.com/omaralsanea'
                target='_blank'
                rel='noreferrer'
                className='github is-size-5'
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                href='https://www.linkedin.com/in/omar-al-sanea/'
                target='_blank'
                rel='noreferrer'
                className='is-size-5'
              >
                LinkedIn
              </a>
            </p>
            <figure className='profile'>
              <img
                src='https://i.imgur.com/uw419r0.jpg'
                alt='Omar'
                className=''
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
