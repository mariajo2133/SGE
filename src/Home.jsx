import React, { useState } from "react";
import { Coffee, Package } from "lucide-react";

export default function HomePage({ onNavigate }) {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: "cafeteria",
      name: "Cafeteria",
      icon: Coffee,
      color: "bg-gray-700 hover:bg-gray-600",
    },
    {
      id: "vandentials",
      name: "Vandentials",
      icon: Package,
      color: "bg-gray-700 hover:bg-gray-600",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Izquierdo */}
      <div className="w-64 bg-gray-900 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-gray-700">
          <div className="text-gray-400 text-xs font-semibold tracking-wider mb-4">
            VISTA GENERAL
          </div>
        </div>

        <div className="flex-1 p-4 space-y-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => {
                  setSelectedModule(module.id);
                  onNavigate(module.id);
                }}
                className={`w-full ${module.color} text-white px-6 py-5 rounded-lg flex items-center gap-4 transition-all duration-200 text-left shadow-md`}
              >
                <Icon className="w-7 h-7" />
                <span className="font-medium text-lg">{module.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
        <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <span className="text-blue-600">SGE</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-700">GESTIÓN DE ENVÍOS</span>
          </h1>
        </div>

        <div className="flex items-center justify-center h-full p-8">
          <div className="text-center">
            <div className="relative w-80 h-80 mx-auto mb-8">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-lg"
              >
                <g stroke="#3B82F6" strokeWidth="2.5" fill="none" opacity="0.5">
                  <line x1="100" y1="30" x2="150" y2="60" />
                  <line x1="100" y1="30" x2="50" y2="60" />
                  <line x1="150" y1="60" x2="170" y2="100" />
                  <line x1="150" y1="60" x2="150" y2="140" />
                  <line x1="50" y1="60" x2="30" y2="100" />
                  <line x1="50" y1="60" x2="50" y2="140" />
                  <line x1="170" y1="100" x2="150" y2="140" />
                  <line x1="30" y1="100" x2="50" y2="140" />
                  <line x1="150" y1="140" x2="100" y2="170" />
                  <line x1="50" y1="140" x2="100" y2="170" />
                  <line x1="100" y1="30" x2="100" y2="170" />
                  <line x1="30" y1="100" x2="170" y2="100" />
                  <line x1="50" y1="60" x2="150" y2="140" />
                  <line x1="150" y1="60" x2="50" y2="140" />
                </g>
                <g fill="#3B82F6">
                  <circle cx="100" cy="30" r="5" />
                  <circle cx="150" cy="60" r="5" />
                  <circle cx="50" cy="60" r="5" />
                  <circle cx="170" cy="100" r="5" />
                  <circle cx="30" cy="100" r="5" />
                  <circle cx="150" cy="140" r="5" />
                  <circle cx="50" cy="140" r="5" />
                  <circle cx="100" cy="170" r="5" />
                  <circle cx="185" cy="70" r="3" />
                  <circle cx="15" cy="70" r="3" />
                  <circle cx="185" cy="130" r="3" />
                  <circle cx="15" cy="130" r="3" />
                  <circle cx="100" cy="100" r="4" />
                </g>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black tracking-tight">
                    <span className="text-gray-800">SG</span>
                    <span className="text-blue-500">E</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl text-gray-800 font-bold mb-3">
              Sistema de Gestión de Envíos
            </h2>

            <p className="text-gray-500 text-lg mb-8">
              Selecciona un módulo del menú lateral para comenzar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
