import { Menu } from "lucide-react";

export default function TopBar({ setOpen, title }) {
    return (
        <div>
            {/* Top Bar */}
            <header className="w-full bg-[#8A1538] text-white p-4 flex items-center gap-4 sticky top">
                <button onClick={() => setOpen(true)}>
                    <Menu className="w-7 h-7" />
                </button>
                <h1 className="text-xl font-semibold">{title}</h1>
            </header>
        </div>
    )
}