import Tile from "./Tile"

function Board() {
  return (
    <div className='border-8 border-slate-200 rounded-lg flex w-2/3 h-2/3
      drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]'>
      <Tile value={0} />
      <Tile value={1} />
      <Tile value={2} />
      <Tile value={3} />
      <Tile value={4} />
      <Tile value={5} />
      <Tile value={6} />
      <Tile value={7} />
      <Tile value={8} />
      <Tile value={9} />
      {/* {window.innerWidth}
      {window.innerHeight} */}
    </div>
  )
}

export default Board