import React from "react";
import { ArrowLeft } from "lucide-react";

export default function TrackingModal({ isOpen, onClose, pedido }) {
  if (!isOpen || !pedido) return null;

  // Mock data - in a real app, this would come from the pedido object
  const customerData = {
    nombre: "Ana Torres",
    direccion: "Av. Principal",
    telefono: "6621334569",
  };

  const deliveryPerson = {
    nombre: "Francisco",
    vehiculo: "Moto",
    telefono: "6621334569",
  };

  const scheduledDate = "2025-10-15";
  const scheduledTime = "14:30pm";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
              Seguimiento del Pedido
            </h2>
            <p className="text-sm text-gray-300">N. Pedido {pedido.id}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Customer and Delivery Info */}
            <div className="space-y-6">
              {/* Customer Data */}
              <div className="bg-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-base">
                  Datos del cliente
                </h3>
                <div className="space-y-2 text-sm text-gray-800">
                  <p>
                    <span className="font-semibold">Nombre:</span>{" "}
                    {customerData.nombre}
                  </p>
                  <p>
                    <span className="font-semibold">Direccion:</span>{" "}
                    {customerData.direccion}
                  </p>
                  <p>
                    <span className="font-semibold">Telefono:</span>{" "}
                    {customerData.telefono}
                  </p>
                </div>
              </div>

              {/* Delivery Person */}
              <div className="bg-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-base">
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

              {/* Scheduled Date and Time */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Fecha Programada
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {scheduledDate}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Hora Programada
                    </p>
                    <p className="text-base font-bold text-gray-900">
                      {scheduledTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map Placeholder */}
            <div className="bg-gray-300 rounded-lg p-6 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-gray-600">
                <svg
                  className="w-24 h-24 mx-auto mb-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-sm font-semibold">
                  Mapa de seguimiento
                </p>
                <p className="text-xs mt-2">
                  Próximamente disponible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
