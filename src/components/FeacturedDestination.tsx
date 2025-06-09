import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import TitlePage from './TitlePage'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const FeacturedDestination = () => {

  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center py-10 bg-slate-50' id='rooms-card'>

      <TitlePage
        title={t("FeacturedDestination.title")}
        subTitle={t("FeacturedDestination.subTitle")}
      />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-12'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button onClick={() => { navigate('/rooms'); scrollTo(0, 0) }} className='my-16 px-4 py-1 text-sm rounded-full font-medium bg-primary transition-all cursor-pointer hover:opacity-90 text-white'>
        Mas Informacion
      </button>
    </div>
  )
}

export default FeacturedDestination