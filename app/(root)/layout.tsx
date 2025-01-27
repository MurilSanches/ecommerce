import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="bg-white">
        {/* Header */}
        <Header />
        {children}
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default layout