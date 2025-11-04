export default function OrderCard({ order }) {
  return (
    <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md hover:border-gray-300">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Ordine #{order.Id}
        </h2>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {order.TipoOrdine}
        </span>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Cliente:</span>{" "}
          {order.Nominativo}
        </p>
        <p>
          <span className="font-medium text-gray-700">Indirizzo:</span>{" "}
          {order.Indirizzo}, {order.Civico}
        </p>
        <p>
          <span className="font-medium text-gray-700">Zona:</span> {order.Zona}
        </p>
        <p>
          <span className="font-medium text-gray-700">CAP:</span> {order.Cap}
        </p>
        <p>
          <span className="font-medium text-gray-700">Pagamento:</span>{" "}
          {order.TipoPagamento}
        </p>
        <p>
          <span className="font-medium text-gray-700">ID Cliente:</span>{" "}
          {order.IdCliente}
        </p>
      </div>
    </div>
  );
}
