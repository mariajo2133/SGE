import React, { useState } from "react";
import { Package, Search, MoreVertical, User, ArrowLeft } from "lucide-react";

export default function VandentialsPage({ onBack }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pedidos, setPedidos] = useState([
    {
      id: "08",
      cliente: "Maria Rodriguez",
      fecha: "2025-11-20",
      estado: "Pendiente",
    },
    {
      id: "07",
      cliente: "Carlos Mendez",
      fecha: "2025-11-18",
      estado: "Pendiente",
    },
    {
      id: "06",
      cliente: "Sofia Ramirez",
      fecha: "2025-11-15",
      estado: "En ruta",
    },
    {
      id: "05",
      cliente: "Diego Fernandez",
      fecha: "2025-11-12",
      estado: "En ruta",
    },
    {
      id: "04",
      cliente: "Laura Gomez",
      fecha: "2025-11-10",
      estado: "Entregado",
    },
    {
      id: "03",
      cliente: "Pablo Martinez",
      fecha: "2025-11-08",
      estado: "Entregado",
    },
    {
      id: "02",
      cliente: "Andrea Silva",
      fecha: "2025-11-05",
      estado: "Entregado",
    },
    {
      id: "01",
      cliente: "Roberto Castro",
      fecha: "2025-11-03",
      estado: "Entregado",
    },
  ]);

  const stats = {
    pendientes: pedidos.filter((p) => p.estado === "Pendiente").length,
    enProceso: pedidos.filter((p) => p.estado === "En ruta").length,
    entregados: pedidos.filter((p) => p.estado === "Entregado").length,
  };

  const filteredPedidos = pedidos.filter(
    (pedido) =>
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.id.includes(searchTerm)
  );

  const getButtonStyle = (estado) => {
    if (estado === "Pendiente") {
      return "bg-blue-500 hover:bg-blue-600 text-white";
    } else if (estado === "En ruta") {
      return "bg-yellow-400 hover:bg-yellow-500 text-gray-900";
    } else {
      return "bg-green-500 hover:bg-green-600 text-white";
    }
  };

  const getButtonText = (estado) => {
    if (estado === "Pendiente") return "PROGRAMAR ENTREGA";
    return "Ver detalles";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <Package className="w-7 h-7 text-gray-700" />
              <h1 className="text-2xl font-bold text-gray-900">Vandentials</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md ml-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              PEDIDOS PENDIENTES
            </div>
            <div className="text-5xl font-bold text-gray-900">
              {stats.pendientes}
            </div>
          </div>

          <div className="bg-white border-2 border-yellow-300 rounded-lg p-6">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              PEDIDOS EN PROCESO
            </div>
            <div className="text-5xl font-bold text-gray-900">
              {stats.enProceso}
            </div>
          </div>

          <div className="bg-white border-2 border-green-300 rounded-lg p-6">
            <div className="text-sm font-semibold text-gray-700 mb-2">
              ENTREGADOS
            </div>
            <div className="text-5xl font-bold text-gray-900">
              {stats.entregados}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">PEDIDOS</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    N. Pedido
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Fecha Entrada
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    Accion
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPedidos.map((pedido) => (
                  <tr key={pedido.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {pedido.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {pedido.cliente}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {pedido.fecha}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {pedido.estado}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${getButtonStyle(
                          pedido.estado
                        )}`}
                      >
                        {getButtonText(pedido.estado)}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
