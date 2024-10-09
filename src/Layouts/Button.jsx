
// eslint-disable-next-line react/prop-types
const Button = ({title}) => {
  return (
    <div>
       <button className="text-white bg-primary font-bold border-none  px-5 py-2 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out ">{title}</button>
    </div>
  )
}

export default Button
