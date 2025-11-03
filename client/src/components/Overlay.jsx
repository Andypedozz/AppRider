import { motion, AnimatePresence } from "framer-motion"

export default function Overlay({ open, setOpen }) {
    return (
        <div>
            {/* Overlay when sidebar open */}
            < AnimatePresence >
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black z-40"
                    />
                )}
            </AnimatePresence >
        </div>
    )
}