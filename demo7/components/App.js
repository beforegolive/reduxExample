import React from 'react'
import { Link, hashHistory} from 'react-router'

let app= ({children})=>{
  return(
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={()=>hashHistory.push('/foo')}>Go to foo </button>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default app
