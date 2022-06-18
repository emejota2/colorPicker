import React,{useState} from 'react'
import './ColorPicker.css'

const ColorPicker = () => {
    const [color, setColor] = useState('#5ed756');
    function handleChange(e){
        setColor(e.target.value);
    }
        return (
        <div className="background" style={{backgroundColor: color}}>
            <div className="container-fluid">
                <div className="container">
                    <h1 className="form-label my-4">Color picker</h1>
                    <div className="inputs mb-4">
                        <input className="form-control form-control-color" type="color" value={color} onChange={handleChange} id="exampleColorInput" title="Choose your color"/>
                        <input className="form-control color-selected" type="text" value={color} onChange={handleChange} id="disabledInput" placeholder="color seleccionado" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default ColorPicker