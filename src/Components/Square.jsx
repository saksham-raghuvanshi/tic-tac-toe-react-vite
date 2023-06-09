
const Square = ({value,onClick}) => {
  return (
    
    <button type="button" className='square' onClick={onClick}  id={value === 'X' ? 'text-green' : 'text-orange'}>
      
         {value}
   </button>
   
  );
}

export default Square
