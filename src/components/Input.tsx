type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({value , handleChange}: InputProps) => {
  return (
    <div className="Input">
        <input type = 'text'value={value} onChange={handleChange}/>
    </div>
  )
}

export default Input