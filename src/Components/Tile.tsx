import React from "react"
import { GiFlyingFlag, GiSpikedBall } from "react-icons/gi"

const COLOR_CLASSES = [
  "disabled:text-slate-200",
  "disabled:text-sky-400",
  "disabled:text-teal-500",
  "disabled:text-emerald-500",
  "disabled:text-amber-500",
  "disabled:text-orange-500",
  "disabled:text-red-400",
  "disabled:text-red-500",
  "disabled:text-red-500",
  "disabled:text-red-700",
]

type TileState = {value: number, disabled: boolean, flagged: boolean}

class Tile extends React.Component<{value: number}, TileState> {
  constructor(props: {value: number}) {
    super(props)
    this.state = {
      value: props.value, 
      disabled: false, 
      flagged: false,
    }
  }

  setContent() : JSX.Element {
    if (this.state.disabled) {
      return (
        <span className={COLOR_CLASSES[this.state.value]}>{
          this.state.value == 9 ? 
            <GiSpikedBall /> : 
            this.state.value
          }</span>)
    }

    if (this.state.flagged) {
      return <GiFlyingFlag />
    }

    return <></>
  } 

  handleLeftClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (!this.state.flagged) {
      this.setState({disabled: !this.state.disabled })
    }
  }

  handleRightClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    this.setState({flagged: !this.state.flagged })
  }

  render () {
    let content = this.setContent()

    return (
      <button 
        disabled={this.state.disabled}
        onContextMenu={(e) => this.handleRightClick(e)} 
        onClick={(e) => this.handleLeftClick(e)}
        className={"w-8 h-8 bg-slate-800 flex justify-center items-center text-slate-200 font-bold \
          disabled:bg-slate-200 " + COLOR_CLASSES[this.state.value]}>
        { content }
      </button>
    )
  }
}

export default Tile