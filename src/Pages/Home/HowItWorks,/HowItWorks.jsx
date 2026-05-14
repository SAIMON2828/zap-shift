
import { TbTruckDelivery } from "react-icons/tb"
const services = [
  {
    icon: <TbTruckDelivery />,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    icon: <TbTruckDelivery />,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    icon: <TbTruckDelivery />,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time."
  },
  {
    icon: <TbTruckDelivery />,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time."
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold mb-10">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl p-6">
            <div className="text-3xl text-black mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg text-black mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks;