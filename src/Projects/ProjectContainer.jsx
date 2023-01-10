import React from 'react'

function ProjectContainer(props) {
  const { header, desc, link } = props
  return (
    <div>
      <p style={'"font-size": 18'}>{header}</p>
      <p>
        {desc}
      </p>
      <p>Read more</p>
      <a href={link}>here</a>
    </div>
  )
}

export default ProjectContainer