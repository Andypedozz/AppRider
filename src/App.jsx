import Sidebar from "./components/Sidebar"
import { useState } from "react"
import Overlay from "./components/Overlay"
import TopBar from "./components/TopBar"
import { Calendar, Clock, FileText, HelpCircle, List, Package, Settings, Upload, User } from "lucide-react"
import Profilo from "./pages/Profilo"
import DaAssegnare from "./pages/DaAssegnare"
import InOut from "./pages/InOut"
import InConsegna from "./pages/InConsegna"
import Impostazioni from "./pages/Impostazioni"
import Consegnati from "./pages/Consegnati"
import DaRitirare from "./pages/DaRitirare"
import Guida from "./pages/Guida"
import InAttesa from "./pages/InAttesa"

function App() {

	const [open, setOpen] = useState(false)
	const [page, setPage] = useState("Ordini consegnati oggi")

	const pages = {
		"Profilo" : <Profilo />,
		"In/Out" : <InOut />,
		"Ordini consegnati oggi" : <Consegnati />,
		"Da assegnare" : <DaAssegnare />,
		"In consegna" : <InConsegna />,
		"Da ritirare" : <DaRitirare />,
		"In attesa" : <InAttesa />,
		"Impostazioni" : <Impostazioni />,
		"Guida" : <Guida />
	}

	const menuItems = [
		{ icon: <User className="w-5 h-5" />, label: "Profilo" },
		{ icon: <Calendar className="w-5 h-5" />, label: "In/Out" },
		{ icon: <List className="w-5 h-5" />, label: "Ordini consegnati oggi" },
		{ icon: <Upload className="w-5 h-5" />, label: "Da assegnare" },
		{ icon: <FileText className="w-5 h-5" />, label: "In consegna" },
		{ icon: <Package className="w-5 h-5" />, label: "Da ritirare" },
		{ icon: <Clock className="w-5 h-5" />, label: "In attesa" },
		{ icon: <Settings className="w-5 h-5" />, label: "Impostazioni" },
		{ icon: <HelpCircle className="w-5 h-5" />, label: "Guida" },
	];

	return (
		<div>
			<Sidebar menuItems={menuItems} open={open} setOpen={setOpen} setPage={setPage}/>
			<Overlay open={open} setOpen={setOpen}/>
			<TopBar setOpen={setOpen} title={page}/>
			{/* Content */}
			<main className="p-6">
				{pages[page]}
			</main>
		</div>
	)
}

export default App
