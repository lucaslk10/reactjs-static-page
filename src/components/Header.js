import React from "react"
// import ReactLogo from "/react-logo.png"
export default function Header() {
  return (
    <div className="header">
      <section className="header--photo">
      </section>
      <section className="header--person-info">
        <h1 className="header--person-name">
          Lucas Santana
        </h1>
        <h2 className="header--person-role">
          Full-Stack Engineer
        </h2>
        <p className="header--person-website">github.com/lucaslk10</p>
        <section className="contact">
          <div className="contact--email btn">
            Email
          </div>
          <div className="contact--linkedin btn">
            Linkedin
          </div>
        </section>
      </section>
    </div>
  )
}