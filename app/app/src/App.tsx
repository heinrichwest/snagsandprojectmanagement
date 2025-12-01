import './App.css'
import { firebaseApp } from './firebaseConfig'

function App() {
  return (
    <div className="app">
      <h1>Snag Reporting System</h1>
      <p>
        Firebase app ID:{' '}
        <code>{firebaseApp.options.appId ?? 'Missing – check your .env'}</code>
      </p>
      <p>
        If this shows your Firebase App ID, your Firebase configuration is
        connected correctly.
      </p>
    </div>
  )
}

export default App
