import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="bg-gray-100">
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default layout