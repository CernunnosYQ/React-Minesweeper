import Board from "./Components/Board"

function App() {

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 to-slate-800
                    flex flex-col justify-center items-center">
      <h1 className="my-8 text-5xl font-bold text-slate-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
        Minesweeper v0.0.1</h1>
      <Board />
    </div>
  )
}

export default App
