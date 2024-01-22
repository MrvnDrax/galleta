
const Fortuna = ({ data }) => {
  
  return (
   <article className='fortuna'>
    
    <p className="fortune">{data.phrase}</p>
    <p className="fortune">autor: {data.author}</p>
   </article>
  )
}

export default Fortuna
