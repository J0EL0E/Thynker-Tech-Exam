import React from 'react'

const Webviewer = ({url}) => {
  return (
    <div>
      <iframe 
        src={url}
        title="Web Viewer"
        sandbox="allow-scripts allow-same-origin"
        style={{ width: '80%', height: '70vh', border: 'none', margin: '5vh 10% 10vh 10%' }} 
        />
    </div>
  )
}

export default Webviewer
