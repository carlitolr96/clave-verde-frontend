import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { EMAIL_CONFIG } from "../utils/emailConfig";
import {
    LuCalendarCheck2,
    LuCalendarX2
} from "react-icons/lu";
import { MdPerson } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import successAnimation from "../../public/lotties/success.json";

interface ReservationFormProps {
    roomName: string;
}

const ReservationForm = ({ roomName }: ReservationFormProps) => {
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        guests: 1
    });

    const [userDetails, setUserDetails] = useState({
        name: "",
        whatsapp: "",
        email: ""
    });

    const [showModal, setShowModal] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [orderNumber, setOrderNumber] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (currentStep === 2) {
            generateOrderNumber();
        }
    }, [currentStep]);

    const generateOrderNumber = () => {
        const now = new Date();
        const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}`;
        const random = Math.floor(1000 + Math.random() * 9000);
        setOrderNumber(`RES-${timestamp}-${random}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.checkIn || !formData.checkOut || formData.guests < 1) {
            toast.warn("Por favor, completa todos los campos correctamente.");
            return;
        }

        setShowModal(true);
        setCurrentStep(2);
    };

    const handleFinalSubmit = async () => {
        if (!userDetails.name || !userDetails.whatsapp) {
            toast.warn("Por favor, completa tu nombre y WhatsApp.");
            return;
        }

        const templateParams = {
            check_in: formData.checkIn,
            check_out: formData.checkOut,
            guests: formData.guests,
            room_name: roomName,
            user_name: userDetails.name,
            whatsapp: userDetails.whatsapp,
            email: userDetails.email,
            order_number: orderNumber,
            date: new Date().toLocaleString()
        };

        try {
            await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_RESERVA,
                templateParams,
                EMAIL_CONFIG.PUBLIC_KEY
            );

            toast.success(
                `Reserva enviada con éxito. Tu número de orden es ${orderNumber}`
            );

            setCurrentStep(3);
            setShowSuccess(true);
        } catch (error) {
            console.error("Error al enviar la reserva:", error);
            toast.error("Error al enviar la reserva");
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        setShowModal(false);
        setCurrentStep(1);
        setFormData({ checkIn: "", checkOut: "", guests: 1 });
        setUserDetails({ name: "", whatsapp: "", email: "" });
        setOrderNumber("");
    };

    const StepBar = () => {
        const steps = ["Fechas", "Datos", "Confirmación"];
        return (
            <div className="flex justify-between items-center mb-4 gap-x-4">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`flex-1 text-center text-sm font-semibold py-1 px-2 rounded ${
                            currentStep >= i + 1 ? "bg-primary text-white" : "bg-gray-200"
                        }`}
                    >
                        Paso {i + 1}: {step}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="bg-white text-gray-500 rounded-lg border border-gray-300 shadow px-6 py-6 mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
            >
                <div className="flex flex-col gap-4 w-full md:flex-row md:items-end">
                    <div className="w-full md:w-auto">
                        <label htmlFor="checkIn" className="flex items-center gap-2 mb-1 text-sm font-medium">
                            <LuCalendarCheck2 />
                            Llegada
                        </label>
                        <input
                            id="checkIn"
                            type="date"
                            value={formData.checkIn}
                            onChange={handleChange}
                            required
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
                            value={formData.checkOut}
                            onChange={handleChange}
                            required
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
                            value={formData.guests}
                            onChange={handleChange}
                            min={1}
                            max={4}
                            required
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

            {/* Modal de Confirmación */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
                        <StepBar />

                        {showSuccess ? (
                            <div className="flex flex-col items-center justify-center text-center">
                                <Lottie animationData={successAnimation} loop={false} className="w-48 h-48" />
                                <h3 className="text-lg font-bold mt-4 text-green-600">¡Reserva confirmada!</h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    Te contactaremos por correo o WhatsApp.<br />
                                    Número de orden: <strong>{orderNumber}</strong>
                                </p>
                                <button
                                    onClick={handleCloseSuccess}
                                    className="mt-6 bg-primary text-white px-4 py-2 rounded text-sm font-semibold cursor-pointer"
                                >
                                    Cerrar
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-lg font-bold mb-4">Confirma tu información</h2>
                                <div className="flex flex-col gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre completo"
                                        value={userDetails.name}
                                        onChange={handleUserDetailsChange}
                                        className="border border-gray-300 rounded px-3 py-2 text-sm"
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        placeholder="Número de WhatsApp"
                                        value={userDetails.whatsapp}
                                        onChange={handleUserDetailsChange}
                                        className="border border-gray-300 rounded px-3 py-2 text-sm"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Correo electrónico (opcional)"
                                        value={userDetails.email}
                                        onChange={handleUserDetailsChange}
                                        className="border border-gray-300 rounded px-3 py-2 text-sm"
                                    />
                                    <div className="text-xs text-gray-400">
                                        Número de orden generado: <strong>{orderNumber}</strong>
                                    </div>
                                    <div className="flex justify-end gap-2 mt-4">
                                        <button
                                            onClick={() => {
                                                setShowModal(false);
                                                setCurrentStep(1);
                                            }}
                                            className="text-gray-500 hover:text-gray-700 text-sm"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={handleFinalSubmit}
                                            className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold"
                                        >
                                            Confirmar Reserva
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ReservationForm;
