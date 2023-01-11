import React from 'react'

function ProjectContainer(props) {
  const { header, desc, link } = props
  return (
    <div style={{ "margin": "22" }}>
      <br />
      <br />
      <p className='subHeader'>{header}</p>
      <br />
      <p style={{ "font-size": "18px" }}>
        {desc}
      </p>
      <br />
      <div className='readMoreText'>
        <p style={{ "float": "left" }}>Read more &nbsp;</p>
        <a href={link}>here</a>.
      </div>
    </div>
  )
}

export default ProjectContainer