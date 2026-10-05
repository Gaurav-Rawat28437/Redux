import Cake from './Components/Cake'
import IceCream from './Components/IceCream'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900">

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8 text-white">
        🍰 Cake & 🍦 IceCream Store
      </h1>

      {/* Components side by side */}
      <div className="flex flex-wrap gap-10 justify-center items-start">
        <Cake />
        <IceCream />
      </div>

    </main>
  )
}

export default App