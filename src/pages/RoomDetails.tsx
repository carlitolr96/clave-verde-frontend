import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';
import { LuCalendarCheck2, LuCalendarX2 } from "react-icons/lu";
import { MdPerson } from "react-icons/md";
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
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
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

            <form className="bg-white text-gray-500 rounded-lg border border-gray-500/30 shadow-[0px_4px_4px_rgba(0,0,0,0.05)] px-6 py-4 mt-8 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto max-md:w-full">
                <div className='flex w-full justify-between'>
                    <div className='flex items-center gap-2'>
                        {/* <h2 className="text-lg font-semibold mb-2">Book Your Stay</h2> */}
                        <div className="max-md:w-full md:w-auto">
                            <div className="flex items-center gap-2">
                                <LuCalendarCheck2 />
                                <label htmlFor="checkIn">Llegada</label>
                            </div>
                            <input
                                id="checkIn"
                                type="date"
                                className="max-md:w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            />
                        </div>

                        <div className="max-md:w-full md:w-auto">
                            <div className="flex items-center gap-2">
                                <LuCalendarX2 />
                                <label htmlFor="checkOut">Salida</label>
                            </div>
                            <input
                                id="checkOut"
                                type="date"
                                className="max-md:w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                            />
                        </div>

                        <div className="max-md:w-full md:w-auto">
                            <div className="flex items-center gap-2">
                                <MdPerson />
                                <label htmlFor="guests">Personas</label>
                            </div>
                            <input
                                min={1}
                                max={4}
                                id="guests"
                                type="number"
                                className="max-md:w-full md:max-w-16 rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                                placeholder="0"
                            />
                        </div>
                    </div>

                    <button className="max-md:w-full flex items-center justify-center gap-1 bg-primary px-8 py-2.5 rounded-full text-white my-auto cursor-pointer max-md:py-1">
                        <IoSearchSharp />
                        <span>Book Now</span>
                    </button>
                </div>
            </form>

            <div className='mt-20 space-y-4'>
                {specifications.map((spec, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
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

        </div>
    ) : null;
}

export default RoomDetails;
