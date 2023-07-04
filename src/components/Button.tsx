type ButtonProps = {
    handleClick : ()=> void;
    handleEventClick? : (event : React.MouseEvent) => void;
    style?: React.CSSProperties

}

const Button = (props : ButtonProps) => {
  return (
    <div className="buttons">
        <button style={props.style} onClick = {props.handleClick}>CLICK ME</button>
        <button style= {props.style}onClick = {props.handleEventClick}>CLICK ME</button>
    </div>
  )
}

export default Button