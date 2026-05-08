"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message = "Hello! I'm interested in your services." }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters except +)
    const formattedNumber = phoneNumber.replace(/[^\d+]/g, '')
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
    >
      {/* Tooltip */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none shadow-lg">
        Chat with us on WhatsApp
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 bg-gray-900" />
      </div>

      {/* Main Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Icon */}
        <MessageCircle className="relative h-5 w-5 text-white drop-shadow-sm" />
        
        {/* Subtle pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ scale: 0, opacity: 0.6 }}
          whileTap={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.div>
  )
}
