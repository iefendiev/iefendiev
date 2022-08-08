import type { NextPage } from 'next'

import AppLayout from '../layouts/app.layout'

const About: NextPage = () => (
  <AppLayout title="About Me">
    <div className="text-lg">
      <p>
        Hello! I am İpek. I am a frontend developer who loves creating useful
        products with modern frontend technologies.
      </p>
      <p>
        I am based in Izmir / Turkey 🇹🇷 at the moment. I graduated from Chemical
        Engineering at Izmir Institute of Technology in 2021. After that, I took
        a path to become a frontend developer and got my first job! Since then,
        I have developed and contributed to many projects and the ride still
        goes on.
      </p>
      <p>
        I like to spend time on the internet mostly. Other than that, I ride
        bicycles when I find the chance!
      </p>
      <br />
      <p>
        You can contact me by my LinkedIn account or send an e-mail to{' '}
        <span className="underline">ipekefendiev@gmail.com</span>
      </p>
    </div>
  </AppLayout>
)

export default About
