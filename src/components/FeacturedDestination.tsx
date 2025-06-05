import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeacturedDestination = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-10 bg-slate-50'>
      <Title title='Titulo principal' subTitle='Sub Titulo' />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-12'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-1 text-sm rounded-full border-primary font-medium bg-white transition-all cursor-pointer hover:bg-primary text-primary hover:text-white border-1'>
        Mas Informacion
      </button>
    </div>
  )
}

export default FeacturedDestination