import React from 'react'

export default ({ location }) => {
    return (
      <div>
        <h3>
          No match for <code>{location.pathname} &gt;.&lt; </code>
        </h3>
      </div>
    );
  }
  