import React from 'react'
import './About.css'
import team from '../../assets/team.jpg'

const About = () => {
  return (
      <div className='about'>
          <div className='about-left'>
            <h2>Über uns</h2>
            <p>Wir sind das engagierte Team hinter der Kleidungspende-Organisation. Unsere Mission ist es, Bedürftigen zu helfen und einen positiven Einfluss auf die Gesellschaft zu haben, indem wir Kleidungsspenden sammeln und verteilen. Unser Team besteht aus leidenschaftlichen Freiwilligen, die sich für soziale Gerechtigkeit und Nachhaltigkeit einsetzen.</p>
            <p> Wir glauben fest daran, dass jeder Mensch das Recht auf angemessene Kleidung hat, unabhängig von ihrer sozialen oder wirtschaftlichen Situation.</p>
            <p>Unser Team ist stolz darauf, einen positiven Beitrag in unserer Gemeinschaft zu leisten und das Leben von Menschen zu verbessern.</p>
            <p>Wir laden Sie ein, sich unserer Bewegung anzuschließen und Teil unserer Kleidungspende-Familie zu werden. Gemeinsam können wir eine bedeutende Veränderung bewirken und Hoffnung in die Herzen derjenigen bringen, die es am dringendsten brauchen.</p>
        </div>
        <div className='about-right'>
            <img src={team}  alt="..." className='team-img'/>
        </div>
    </div>
  )
}

export default About
