import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
import { LuCalendarCheck2, LuCalendarX2 } from "react-icons/lu";
import { MdPerson } from "react-icons/md";
import LeavesEcology from "../assets/leaves-ecology.svg"
import { IoSearchSharp } from "react-icons/io5";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState<any>(null);
    const [mainImage, setMainImage] = useState<string | null>(null);

    const specifications = [
        { icon: assets.homeIcon, title: 'Clean & Safe Stay', description: 'A well-maintained and hygienic space just for you.' },
        { icon: assets.badgeIcon, title: 'Enhanced Cleaning', description: 'This host follows Staybnb strict cleaning standards.' },
        { icon: assets.locationFilledIcon, title: 'Excellent Location', description: '90% of guests rated the location 5 stars.' },
        { icon: assets.heartIcon, title: 'Smooth Check-In', description: '100% of guests gave check-in a 5-star rating.' },
    ];

    useEffect(() => {
        const roomData = roomsDummyData.find(room => room._id === id);
        if (roomData) {
            setRoom(roomData);
            setMainImage(roomData.images[0]);
        }
    }, [id]);

    return room ? (
        <div className='py-28 md:py-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h1 className="text-2xl md:text-4xl font-playfair leading-snug">
                        {room.hotel.name}
                    </h1>
                    <span className="text-sm font-inter text-gray-600 md:ml-3 px-3 py-1 rounded bg-gray-100">
                        {room.roomType}
                    </span>
                </div>

                <p className="text-xs font-inter px-3 py-1.5 text-white bg-orange-500 rounded-full w-max">
                    20% OFF
                </p>
            </div>

            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage || ''} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room.images.length > 1 && room.images.map((image: string, index: number) => (
                        <img
                            onClick={() => setMainImage(image)}
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && `outline-3 outline-primary`}`}
                            key={index}
                            src={image}
                            alt={`Room Image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item: string, index: number) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img
                                    src={facilityIcons[item as keyof typeof facilityIcons]}
                                    alt={item}
                                    className='w-6 h-5'
                                />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
            </div>

            <form className="bg-white text-gray-500 rounded-lg border border-gray-300 shadow px-6 py-6 mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-4 w-full md:flex-row md:items-end">

                    <div className="w-full md:w-auto">
                        <label htmlFor="checkIn" className="flex items-center gap-2 mb-1 text-sm font-medium">
                            <LuCalendarCheck2 />
                            Llegada
                        </label>
                        <input
                            id="checkIn"
                            type="date"
                            className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                        />
                    </div>

                    <div className="w-full md:w-auto">
                        <label htmlFor="checkOut" className="flex items-center gap-2 mb-1 text-sm font-medium">
                            <LuCalendarX2 />
                            Salida
                        </label>
                        <input
                            id="checkOut"
                            type="date"
                            className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                        />
                    </div>

                    <div className="w-full md:w-auto">
                        <label htmlFor="guests" className="flex items-center gap-2 mb-1 text-sm font-medium">
                            <MdPerson />
                            Personas
                        </label>
                        <input
                            id="guests"
                            type="number"
                            min={1}
                            max={4}
                            placeholder="0"
                            className="w-full md:max-w-[70px] rounded border border-gray-200 px-3 py-2 text-sm outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-full text-white text-sm font-semibold hover:brightness-110 transition"
                >
                    <IoSearchSharp />
                    <span>Reservar</span>
                </button>
            </form>


            <div className="mt-20 space-y-4">
                {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 flex-shrink-0">
                            <img
                                src={spec.icon}
                                alt={`${spec.title}-icon`}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base font-medium">{spec.title}</p>
                            <p className="text-gray-500 text-sm">{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>


            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident
                    suscipit voluptate a, hic fugit eligendi, aliquam commodi unde laudantium
                    minima. Dolor reiciendis iure, tempora quidem autem assumenda expedita
                    tempore repellendus facilis ratione pariatur qui repellat omnis, explicabo
                    quam. Odio culpa possimus porro modi voluptates at nulla? Autem sit commodi
                    voluptatum nemo saepe itaque quaerat quibusdam, aperiam voluptate.
                </p>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={LeavesEcology} alt="Host" className="bg-gray-100 h-14 w-14 md:h-18 md:w-18 rounded-full object-contain" />
                    <div>
                        <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ) : null;
}

export default RoomDetails;
