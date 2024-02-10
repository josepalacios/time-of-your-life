import { useState, useEffect } from 'react'
import ClockProps from './ClockProps'
import ValidationForm from '../validation-helper'
import Presets from './Presets'


function SetClockProps(props) {
  const clockProps = new ClockProps()
  const [fontFamily, setFontFamily] = useState(clockProps.fontFamily)
  const [fontColor, setFontColor] = useState(clockProps.fontColor)
  const [blinkColons, setBlinkColons] = useState(clockProps.blinkColons)
  const [textTitle, setTextTitle] = useState(clockProps.textTitle)
  const [presets, setPresets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const response = await fetch('clock/presets')
      const data = await response.json()
      setPresets(data)
      setLoading(false)
    })()
  }, [])

  const getProps = () => {
    const props = new ClockProps()
    props.fontFamily = document.getElementById('fontFamily').value
    props.titleFontSize = document.getElementById('titleFontSize').value
    props.clockFontSize = document.getElementById('clockFontSize').value
    props.fontColor = document.getElementById('fontColor').value
    props.blinkColons = document.getElementById('blinkColons').checked
    props.textTitle = document.getElementById('textTitle').value
    return props
  }

  const setClockProps = () => {
    const setProps = getProps()
    props.setClockProps(setProps)
  }

  const fontSizeOptions = (selctedSize) => {
    return clockProps.availableFontSizes.map((size) => {
      var option = <option>{size}</option>
      if (size === selctedSize) {
        option = <option selected>{size}</option>
      }
      return option
    })
  }

  const setFontFamilyUI = (event) => {
    setFontFamily(document.getElementById('fontFamily').value)
    clockProps.fontFamily = document.getElementById('fontFamily').value
    const newClockObject = {...clockValues}
    newClockObject.fontFamily = clockProps.fontFamily;
    setClockValues(newClockObject);
    
  }

  const setFontColurUI = (e) => {
    setFontColor(document.getElementById('fontColor').value)
    clockProps.fontColor = document.getElementById('fontColor').value
    const newClockObject = {...clockValues}
    newClockObject.fontColor = clockProps.fontColor;
    setClockValues(newClockObject);
  }

  const setBlinkColonsUI = () => {
    setBlinkColons(document.getElementById('blinkColons').checked)
    clockProps.blinkColons = document.getElementById('blinkColons').checked
    setClockProps()
  }

  const setTextTitleUI = (e) => {
    setTextTitle(document.getElementById('textTitle').value)
    clockProps.texTitle = document.getElementById('textTitle').value
    const newClockObject = {...clockValues}
    newClockObject.textTitle = clockProps.texTitle;
    setClockValues(newClockObject);
  }

  const [clockValues, setClockValues] = useState({
     fontFamily: clockProps.fontFamily,
     fontColor: clockProps.fontColor,
     textTitle: clockProps.textTitle 
  });

  const [errors, setErrors] = useState({});

  function handleValidation(event) {
    debugger;
    event.preventDefault();
    setErrors(ValidationForm(clockValues));
  }


  const presetsDisplay = (() => {
    console.log(presets)
    return loading ? (
      <div>
        This is a good place to display and use the presets stored on the sever.
      </div>
    ) : (
      <ul>
        {presets.map((p, i) => (
          <li>
            Preset {i + 1}:{' '}
            {`Font: ${p.fontFamily}, Color: ${p.fontColor}, Title Size: ${p.titleFontSize}, Clock Size: ${p.clockFontSize}`}
          </li>
        ))}
      </ul>
    )
  })()

  return (
   
    <div id="ClockProps" style={{ overflow: 'auto' }}>
      <div
        style={{
          float: 'left',
          width: '40px',
          height: '100%',
          border: '1px solid white',
          fontSize: '20pt',
        }}
      >
        <a
          style={{ cursor: 'pointer' }}
          onClick={() =>
            alert(
              'This the button that would expand or collapse the settings panel.'
            )
          }
        >
          +/-
        </a>
      </div>
      <div>
      <form onSubmit={handleValidation}>
      <div>
          <h1>Clock Properties</h1>
          <hr />
        </div>
        <div>
          <div>
            <h2>Settings</h2>
          </div>
          <div>
            <div>Font Family</div>
            <div>
              <input
                id="fontFamily"
                value={fontFamily}
                onChange={(e) => setFontFamilyUI(e)}
              />
              <button onClick={setClockProps}>✓</button>
              {errors.fontFamily && <p style={{color:"red"}}>{errors.fontFamily} </p>}
            </div>
            
          </div>
          <div>
            <div>Title Font Size</div>
            <div>
              <select id="titleFontSize" onChange={setClockProps}>
                {fontSizeOptions(clockProps.titleFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Clock Font Size</div>
            <div>
              <select id="clockFontSize" onChange={setClockProps}>
                {fontSizeOptions(clockProps.clockFontSize)}
              </select>
            </div>
          </div>
          <div>
            <div>Font Color</div>
            <div>
              <input
                id="fontColor"
                value={fontColor}
                onChange={(e) => setFontColurUI(e)}
              />
              <button onClick={setClockProps}>✓</button>
              {errors.fontColor && <p style={{color:"red"}}>{errors.fontColor} </p>}
            </div>
          </div>
          <div>
            <div>Blink Colons</div>
            <div>
              <input
                id="blinkColons"
                checked={blinkColons}
                type="checkbox"
                onChange={setBlinkColonsUI}
              />
            </div>
          </div>
          <div>
            <div>Text Title</div>
            <div>
              <input
                id="textTitle"
                value={textTitle}
                onChange={(e) => setTextTitleUI(e)}
              />
              <button onClick={setClockProps}>✓</button>
              {errors.textTitle && <p style={{color:"red"}}>{errors.textTitle} </p>}
            </div>
          </div>
          <div>
            <div>
              <button
                
              >
                Save Preset
              </button>
            </div>
          </div>
        </div>
      </form>
        <hr />
        <div>
          <h2>Presets</h2>
          <div>{presetsDisplay}</div>
          <div>
          <Presets/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetClockProps
