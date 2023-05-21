import { useState } from "react"
import '../App.css'

const BMIapp = () => {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [age, setAge] = useState('')
    const [result, setResult] = useState('')
    const [message, setMessage] = useState('')

    let calcBmi = (event) => {
        event.preventDefault()

        if (isNaN(weight) || isNaN(height) || weight === 0 || height === 0 || weight === '' || height === '' ) {
          alert('Please enter a valid weight and height')

        } else {
            let bmi = (Number(weight) / (Number(height) * Number(height))).toFixed(2);
            setResult(bmi);
            setAge('')
            setHeight('')
            setWeight('')
            
          if (bmi < 18) {
            setMessage('You are underweight')
          } else if (bmi >= 18 && bmi < 25) {
            setMessage('Normal weight')
          } else {
            setMessage('You are overweight')
          }
        }
       
      }
    
  return (
   <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Weight (Kgs)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (m)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {result}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default BMIapp
