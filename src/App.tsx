import './styles/index.scss'
import { steps, SuccessPage } from './steps'
import { ObjectType } from './types'
import Plan from './components/Plan'
import MultiStepForm from './components/MultiStepForm'

const initialValue = {
  plan:"arcade",
  billing:"Monthly",
  addons:[],
}

function App() {
  const handleSubmit = (data:ObjectType)=>{
    console.log(data);
    
  }
  return (
    <>
    <main className='container'>
      <h1 className='sr-only'>Multi Step Form</h1>
      <MultiStepForm
      steps={steps}
      handleSubmit={handleSubmit}
      initialValue={initialValue}
      SuccessPage={SuccessPage}
      />
    </main>
    </>
  )
}

export default App
