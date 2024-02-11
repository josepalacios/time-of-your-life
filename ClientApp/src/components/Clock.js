import { useState, useEffect } from 'react'
import TimeToWords from '../components/TimeToWords'

function Clock(props) {
  const [date, setDate] = useState(new Date())


  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  let displayText = date.toLocaleTimeString()
  if (props.clockProps.blinkColons & (date.getSeconds() % 2 === 0)) {
    displayText = displayText.replace(/:/g, ' ')
  }

  let displayStyle = {
    fontFamily: props.clockProps.fontFamily,
    color: props.clockProps.fontColor,
  }

  let titleStyle = {
    fontSize: `${props.clockProps.titleFontSize}pt`,
  }

  let clockStyle = {
    fontSize: `${props.clockProps.clockFontSize}pt`,
  }


  let textTitle = '';
  if(props.clockProps.textTitle)
  {
    textTitle = props.clockProps.textTitle;
  }

  return (
    <div id="Clock">
      <div id="Digits" style={displayStyle}>
        <div id="title" style={titleStyle}>
        {textTitle}
        </div>
        <div id="time" style={clockStyle}>
          {displayText} 
          <TimeToWords/>
        </div>
      </div>
    </div>
  );
}

export default Clock
