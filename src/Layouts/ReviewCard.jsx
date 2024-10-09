import { RiDoubleQuotesL } from "react-icons/ri";


// eslint-disable-next-line react/prop-types
const ReviewCard = ({id , desc , name}) => {
  return (
    <div className="mx-auto p-5 w-full md:w-2/4 bg-tertiary space-y-3 rounded-lg text-center cursor-pointer" 
    key={id}>
       <RiDoubleQuotesL size={65} className="mx-auto text-primary" />
       <p>{desc}</p>
       <p className="text-2xl font-semibold">{name}</p>
    </div>
  )
}

export default ReviewCard
