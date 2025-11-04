import Sidebar from "./components/Sidebar"
import { useState } from "react"
import Overlay from "./components/Overlay"
import TopBar from "./components/TopBar"
import { Calendar, Clock, FileText, HelpCircle, List, Package, Settings, Upload, User } from "lucide-react"

function App() {

	const [open, setOpen] = useState(false)
	const [page, setPage] = useState("Ordini consegnati oggi")

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
			<main className="flex-1 flex items-center justify-center p-6">
			</main>
		</div>
	)
}

export default App
