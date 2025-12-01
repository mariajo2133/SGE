import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function DeliveryScheduleModal({ isOpen, onClose, pedido, onSchedule }) {
  const [fechaProgramada, setFechaProgramada] = useState("2025-10-15");
  const [horaProgramada, setHoraProgramada] = useState("14:30");

  if (!isOpen || !pedido) return null;

  // Mock data - in a real app, this would come from the pedido object
  const orderDetails = {
    nombre: "Ana Torres",
    direccion: "Av. Principal",
    telefono: "6621334569",
    items: ["Cafe Latte x1", "Croissant x2", "Jugo de Naranja x1"],
  };

  const deliveryPerson = {
    nombre: "Francisco",
    vehiculo: "Moto",
    telefono: "6621334569",
  };

  const handleSubmit = () => {
    console.log("Programando entrega:", {
      pedidoId: pedido.id,
      fecha: fechaProgramada,
      hora: horaProgramada,
    });
    
    // Call the onSchedule callback to update order status
    if (onSchedule) {
      onSchedule(pedido.id);
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gray-700 text-white px-6 py-4 flex items-center gap-4 rounded-t-lg">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-600 rounded transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-lg font-bold uppercase">
              Programación de Entrega
            </h2>
            <p className="text-sm text-gray-300">N. Pedido {pedido.id}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gray-100">
          <div className="bg-gray-200 rounded-lg p-6">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pedido Section */}
              <div className="bg-gray-300 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  Pedido
                </h3>
                <div className="space-y-2 text-sm text-gray-800">
                  <p>
                    <span className="font-semibold">Nombre:</span>{" "}
                    {orderDetails.nombre}
                  </p>
                  <p>
                    <span className="font-semibold">Direccion:</span>{" "}
                    {orderDetails.direccion}
                  </p>
                  <p>
                    <span className="font-semibold">Telefono:</span>{" "}
                    {orderDetails.telefono}
                  </p>
                  <div className="mt-3 space-y-1">
                    {orderDetails.items.map((item, index) => (
                      <p key={index} className="text-gray-700">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Repartidor Section */}
              <div className="bg-gray-300 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  Repartidor
                </h3>
                <div className="space-y-2 text-sm text-gray-800">
                  <p>
                    <span className="font-semibold">Nombre:</span>{" "}
                    {deliveryPerson.nombre}
                  </p>
                  <p>
                    <span className="font-semibold">Vehiculo:</span>{" "}
                    {deliveryPerson.vehiculo}
                  </p>
                  <p>
                    <span className="font-semibold">Telefono:</span>{" "}
                    {deliveryPerson.telefono}
                  </p>
                </div>
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                    Fecha Programada
                  </label>
                  <input
                    type="date"
                    value={fechaProgramada}
                    onChange={(e) => setFechaProgramada(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                    Hora Programada
                  </label>
                  <input
                    type="time"
                    value={horaProgramada}
                    onChange={(e) => setHoraProgramada(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition uppercase text-sm shadow-md"
              >
                Programar Entrega
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
