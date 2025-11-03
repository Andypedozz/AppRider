import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ menuItems, open, setOpen, setPage }) {

    const switchPage = (page) => {
        setPage(page)
        setOpen(false)
    }

    return (
        <div>
            {/* Sidebar */}
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-0 left-0 h-full bg-white w-64 shadow-lg z-50"
                    >
                        <div className="bg-[#8A1538] text-white p-4 text-xl font-bold">Menu</div>
                        <ul className="p-2 space-y-1 mt-2">
                            {menuItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 p-3 hover:bg-gray-200 cursor-pointer rounded" onClick={() => switchPage(item.label)}>
                                    {item.icon}
                                    <span className="font-medium text-gray-700">{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </div>
    )
}