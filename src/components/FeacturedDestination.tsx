import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import TitlePage from './TitlePage'
import { useNavigate } from 'react-router-dom'

const FeacturedDestination = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-10 bg-slate-50' id="rooms-card">
      <TitlePage
        title='Vive la experiencia Clave Verde'
        subTitle='Sumérgete en la tranquilidad de la naturaleza en Samaná con nuestros paquetes especiales.' />
      <div className='flex flex-wrap items-center justify-center gap-6 mt-12'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className='my-16 px-4 py-1 text-sm rounded-full bg-primary font-medium transition-all cursor-pointer text-white hover:opacity-90'>
        Mas Informacion
      </button>
    </div>
  )
}

export default FeacturedDestination