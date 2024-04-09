'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SkillsWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SkillsWidget Component/SkillsWidget.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SkillsWidget Component/SkillsWidget.css';
import WorkWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/WorkWidget Component/WorkWidget.css';
import Navbar from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Navbar component/Navbar.jsx';
import Footer from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Footer component/Footer.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Footer component/Footer.css';
import SignupWidget from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SignupWidget.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/SignupWidget Component/SingupWidget.css';
import ThemeSwitcher from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Theme Switcher/ThemeSwitcher.css';
import ArticleCard from '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Article Card component/ArticleCard.jsx';
import '/workspaces/cs220-portfolio-team-3-kaiden-gustavo-thomas/src/components/Article Card component/ArticleCard.css';

export const HomePage = {
  title: 'Portfolio - Home',
  description: 'Home page of my portfolio.',
};

export default function Home() {
  const skillsData = [
    {
      icon: '/html5.png',
      name: 'HTML',
      proficiency: 90,
    },
    {
      icon: '/css3.png',
      name: 'CSS',
      proficiency: 85,
    },
    {
      icon: '/javascript.png',
      name: 'JavaScript',
      proficiency: 80,
    },
  ];

  const workExperiences = {
    title: 'Work',
    content: 'My work experience.',
    experiences: [
      {
        logo: '/slack.png',
        organization: 'Slack',
        jobTitle: 'Software Engineer',
        startYear: 2016,
        endYear: null,
      },
      {
        logo: '/spotify.png',
        organization: 'Spotify',
        jobTitle: 'Software Engineer',
        startYear: 2014,
        endYear: 2015,
      },
      {
        logo: '/audible.png',
        organization: 'Audible',
        jobTitle: 'Software Engineer',
        startYear: 2012,
        endYear: 2013,
      },
      {
        logo: '/microsoft.png',
        organization: 'Microsoft',
        jobTitle: 'Software Engineer',
        startYear: 2010,
        endYear: 2011,
      },
    ]
  };

  const options = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/uses', label: 'Uses' },
  ];

  const [links, setLinks] = useState([
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Projects', url: '/projects' },
    { title: 'Users', url: '/users' },
  ]);

  return (
    <div>
      <header>
        <Navbar options={options} />
        <ThemeSwitcher darkClassName="dark" />
      </header>
      <main>
        <h1 className="hone">Software Engineer, Father, and Believer</h1>
        <section>
          {/* <ArticleCard
            date="December 25, 2023"
            title="Lorem ipsum dolor sit amet. "
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..."
            link="/sample-article"
          /> */}
          <p className ="h1_subpara">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi...</p>
        </section>
        <section>
          <WorkWidget
            title={workExperiences.title}
            content={workExperiences.content}
            experiences={workExperiences.experiences}
          />
        </section>
        <section>
          <SkillsWidget
            title="Skills"
            content="Skilled in Java, JavaScript, HTML, and CSS"
            skills={skillsData}
          />
        </section>
        <section>
          <SignupWidget
            title="Subscribe to our Newsletter"
            content="Sign up to receive updates straight to your inbox."
          />
        </section>
      </main>
      <aside>
        <section>
          {/* Other content goes here */}
        </section>
      </aside>
      <Footer links={links} />
    </div>
  );
}

Home.propTypes = {
  // Define prop types if needed
};
