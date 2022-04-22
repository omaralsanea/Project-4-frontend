import React from 'react';
// import '../styles/About.css';

const About = () => {
  return (
    <section className='hero is-fullheight-with-navbar has-background-grey-light'>
      <div className='about'>
        {/* <div className='welcome has-text-black has-text-centered is-size-3'>
          <h1 className='mt-2 rateify'>About Me</h1>
        </div> */}
        <div className='about container has-text-black pt-1 has-text-centered'>
          <div className='profiles has-text-black pt-1 columns is-centered'>
            <div className='Omar column is-narrow has-text-centered mx-6'>
              <h2 className='is-size-4 mt-5'>Omar Al-Sanea</h2>
              <p>
                <a
                  href='https://github.com/omaralsanea'
                  target='_blank'
                  rel='noreferrer'
                  className='has-text-link is-size-5'
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href='https://www.linkedin.com/in/omar-al-sanea/'
                  target='_blank'
                  rel='noreferrer'
                  className='has-text-link is-size-5'
                >
                  LinkedIn
                </a>
              </p>
              <figure className='image artist-img'>
                <img
                  src='https://i.imgur.com/JPKo5b3.jpg'
                  alt='Omar'
                  className='is-rounded mt-3 about-pic'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
