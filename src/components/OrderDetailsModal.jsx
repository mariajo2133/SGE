import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function OrderDetailsModal({ isOpen, onClose, pedido, onUpdateStatus, onOpenTracking }) {
  if (!isOpen || !pedido) return null;

  // Mock data - in a real app, this would come from the pedido object
  const customerData = {
    nombre: "Ana Torres",
    direccion: "Av. Principal",
    telefono: "6621334569",
  };

  const products = ["Cafe Latte x1", "Croissant x2", "Jugo de Naranja x1"];

  const trackingCode = "jko548545151";

  // Determine current status stage based on detailedStatus
  let currentStage = 1;
  if (pedido.detailedStatus === "En camino") {
    currentStage = 2;
  } else if (pedido.detailedStatus === "Finalizado") {
    currentStage = 3;
  }

  const handleUpdateStatusClick = () => {
    if (onUpdateStatus && pedido.detailedStatus !== "Finalizado") {
      onUpdateStatus(pedido.id);
    }
  };

  const handleTracking = () => {
    if (onOpenTracking) {
      onOpenTracking(pedido.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-300 px-6 py-4 flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-gray-900 uppercase">
              Detalle del Pedido
            </h2>
            <p className="text-sm text-gray-600">N. Pedido {pedido.id}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Left Column */}
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

              {/* Products */}
              <div className="bg-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-base">
                  Productos Solicitados
                </h3>
                <div className="space-y-2 text-sm text-gray-800">
                  {products.map((product, index) => (
                    <p key={index}>{product}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Status Tracking */}
            <div className="bg-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-6 text-base">
                Estado del Pedido
              </h3>

              {/* Status Stepper */}
              <div className="flex items-center justify-between mb-8 px-4">
                {/* Stage 1: En preparacion */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      currentStage >= 1
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-700 mt-2 text-center">
                    En preparacion
                  </p>
                </div>

                {/* Connector 1-2 */}
                <div
                  className={`flex-1 h-1 mx-2 ${
                    currentStage >= 2 ? "bg-blue-500" : "bg-gray-400"
                  }`}
                ></div>

                {/* Stage 2: En camino */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      currentStage >= 2
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-700 mt-2 text-center">
                    En camino
                  </p>
                </div>

                {/* Connector 2-3 */}
                <div
                  className={`flex-1 h-1 mx-2 ${
                    currentStage >= 3 ? "bg-blue-500" : "bg-gray-400"
                  }`}
                ></div>

                {/* Stage 3: Finalizado */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      currentStage >= 3
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-700 mt-2 text-center">
                    Finalizado
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center mt-8">
                <button
                  onClick={handleUpdateStatusClick}
                  disabled={pedido.detailedStatus === "Finalizado"}
                  className={`font-bold py-3 px-6 rounded-lg transition uppercase text-sm shadow-md ${
                    pedido.detailedStatus === "Finalizado"
                      ? "bg-gray-400 cursor-not-allowed text-gray-200"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Actualizar Estado
                </button>
                <button
                  onClick={handleTracking}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition uppercase text-sm shadow-md"
                >
                  Seguimiento
                </button>
              </div>
            </div>
          </div>

          {/* Tracking Code */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2 text-sm">
              Codigo de rastreo
            </h3>
            <p className="text-gray-700 text-sm">{trackingCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
