import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleSection from '../components/TitleSection';
import StarRating from '../components/StarRating';
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import clsx from 'clsx';
import SEO from "../components/SEO";
import Breadcrumb from '../components/Breadcrumb';

type Room = (typeof roomsDummyData)[0];

type CheckBoxProps = {
    label: string;
    selected?: boolean;
    onChange?: (checked: boolean, label: string) => void;
};

const CheckBox = ({ label, selected = false, onChange = () => { } }: CheckBoxProps) => (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
        <input
            type="checkbox"
            checked={selected}
            onChange={(e) => onChange(e.target.checked, label)}
        />
        <span className="font-light select-none">{label}</span>
    </label>
);

const AllRooms = () => {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
    const [selectedSort, setSelectedSort] = useState<string>("");

    const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Room'];
    const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
    const sortOptions = ["Price Low to High", "Price High to Low", "Newest First"];

    const clearFilters = () => {
        setSelectedTypes([]);
        setSelectedPrices([]);
        setSelectedSort("");
    };

    const isRoomMatch = (room: Room) => {
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(room.roomType);
        const priceMatch =
            selectedPrices.length === 0 ||
            selectedPrices.some((range) => {
                const [min, max] = range.split(' to ').map(Number);
                return room.pricePerNight >= min && room.pricePerNight <= max;
            });
        return typeMatch && priceMatch;
    };

    const filteredRooms = roomsDummyData.filter(isRoomMatch);

    const sortRooms = (rooms: Room[]) => {
        switch (selectedSort) {
            case "Price Low to High":
                return [...rooms].sort((a, b) => a.pricePerNight - b.pricePerNight);
            case "Price High to Low":
                return [...rooms].sort((a, b) => b.pricePerNight - a.pricePerNight);
            case "Newest First":
                return [...rooms].sort((a, b) => (a._id < b._id ? 1 : -1));
            default:
                return rooms;
        }
    };

    const displayedRooms = sortRooms(filteredRooms);

    const handleNavigate = (roomId: string) => {
        navigate(`/rooms/${roomId}`);
        scrollTo(0, 0);
    };

    return (
        <>
            <SEO
                title="Todas los Paquetes - Clave Verde"
                description="Conoce nuestros paquetes en Clave Verde."
            />
            <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-24 px-4 md:px-16 lg:px-28">
                <div>
                    <Breadcrumb  />
                    <TitleSection
                        title="All Rooms"
                        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus nisi fugiat!"
                    />

                    {displayedRooms.map((room) => (
                        <div
                            key={room._id}
                            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-200 cursor-pointer"
                        >
                            <img
                                src={room.images[0]}
                                alt="hotel-img"
                                title="View Room Details"
                                onClick={() => handleNavigate(room._id)}
                                className="cursor-pointer max-h-56 md:w-1/2 rounded-xl shadow-lg object-cover"
                            />
                            <div className="md:w-full flex flex-col gap-2">
                                <p className="text-gray-500">{room.hotel.city}</p>
                                <p className="text-gray-800 text-3xl font-playfair cursor-pointer">
                                    {room.hotel.name}
                                </p>
                                <div className="flex items-center gap-1 text-gray-500 mt-2">
                                    <img src={assets.locationIcon} alt="location-icon" />
                                    <span>{room.hotel.address}</span>
                                </div>
                                <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                                    {room.amenities.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5f5]/70"
                                        >
                                            <img
                                                src={facilityIcons[item as keyof typeof facilityIcons]}
                                                alt={item}
                                                className="w-5 h-5"
                                            />
                                            <p className="text-xs">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <p className="text-xl font-medium text-gray-700">
                                        ${room.pricePerNight} /night
                                    </p>
                                    <div className='flex flex-row items-center'>
                                        <StarRating />
                                        <p className="text-gray-600 font-medium ml-2">200+ reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Filtros */}
                <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 rounded-lg shadow-lg p-6">
                    <div
                        className={clsx(
                            'flex items-center justify-between px-5 py-2.5',
                            'min-lg:border-b border-gray-300',
                            { 'border-b': openFilters }
                        )}
                    >
                        <p className="text-base font-medium text-gray-800">FILTROS</p>
                        <div className="text-xs cursor-pointer flex gap-4">
                            <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                                {openFilters ? 'HIDE' : 'SHOW'}
                            </span>
                            <span onClick={clearFilters} className="hidden lg:block">
                                CLEAR
                            </span>
                        </div>
                    </div>

                    <div
                        className={clsx(
                            'transition-all duration-700 overflow-hidden',
                            {
                                'h-auto': openFilters,
                                'h-0 lg:h-auto': !openFilters,
                            }
                        )}
                    >
                        <div className="px-5 pt-5">
                            <p className="font-medium text-gray-800 pb-2">Room Type</p>
                            {roomTypes.map((type) => (
                                <CheckBox
                                    key={type}
                                    label={type}
                                    selected={selectedTypes.includes(type)}
                                    onChange={(checked) => {
                                        if (checked) {
                                            setSelectedTypes((prev) => [...prev, type]);
                                        } else {
                                            setSelectedTypes((prev) =>
                                                prev.filter((item) => item !== type)
                                            );
                                        }
                                    }}
                                />
                            ))}

                            <p className="font-medium text-gray-800 mt-6 pb-2">Price Range</p>
                            {priceRanges.map((range) => (
                                <CheckBox
                                    key={range}
                                    label={range}
                                    selected={selectedPrices.includes(range)}
                                    onChange={(checked) => {
                                        if (checked) {
                                            setSelectedPrices((prev) => [...prev, range]);
                                        } else {
                                            setSelectedPrices((prev) =>
                                                prev.filter((item) => item !== range)
                                            );
                                        }
                                    }}
                                />
                            ))}

                            <p className="font-medium text-gray-800 mt-6 pb-2">Sort By</p>
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                value={selectedSort}
                                onChange={(e) => setSelectedSort(e.target.value)}
                            >
                                <option value="">Select</option>
                                {sortOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllRooms;
