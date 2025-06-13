import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

interface Room {
  _id: string;
  images: string[];
  hotel: {
    name: string;
    address: string;
  };
  pricePerNight: number;
}

interface HotelCardProps {
  room: Room;
  index: number;
}

const HotelCard = ({ room, index }: HotelCardProps) => {
  return (
    <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id} className='group relative max-w-70 w-full rounded-xl bg-white text-gray-500/90 overflow-hidden border border-gray-500/30 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
      <img className='group-hover:scale-105 transition' src={room.images[0]} alt=""/>

      {index % 2 === 0 && (
        <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>
          Best Seller
        </p>
      )}

      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
          <p className='font-marcellus text-xl font-medium text-gray-800'>{room.hotel.name}</p>
          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="start-icon" /> 4.5
          </div>
        </div>
        <div className='flex items-center gap-2 mt-1 text-gray-500 text-sm'>
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span className='text-[12px]'>{room.hotel.address}</span>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
          <button className='px-4 py-1 text-sm rounded-full border-ecolodge font-medium bg-white transition-all cursor-pointer hover:bg-ecolodge text-ecolodge hover:text-white border-1'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
