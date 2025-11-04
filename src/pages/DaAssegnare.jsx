import OrderCard from "../components/OrderCard"

export default function DaAssegnare() {

    const orders = [
        {
            Id: 0,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
        {
            Id: 1,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
        {
            Id: 2,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
        {
            Id: 3,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
        {
            Id: 4,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
        {
            Id: 5,
            Nominativo: "Andrea",
            Indirizzo: "Via Trentunesima Strada",
            Civico: 27,
            Zona: "Fano",
            Cap: "61032",
            TipoOrdine: "Domicilio",
            TipoPagamento: "Bancomat",
            IdCliente: 0     
        },
    ]

    return (
        <div className="flex flex-col gap-5 overfloy-y-auto">
            {
                orders.map(order => (
                    <OrderCard order={order}/>
                ))
            }
        </div>
    )
}

