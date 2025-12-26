"use client"

import { Zap, Settings, Building2, Globe, Headphones, Clock, Star, Network, Radio, Wifi, FileText, LucideIcon, ArrowRight, ShieldCheck, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import OemServiceLifecycleSection from "@/components/oem-service-lifecycle-section"

interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
  category?: string
}

// All Services data - easy to edit from one place
// Includes services from OEMs, Systems Integrators, and Service Providers
const allServices: ServiceItem[] = [
  // OEMs Services
  {
    title: "POC & Demos",
    description: "Comprehensive proof of concept and demonstration services to showcase product capabilities, validate technical requirements, and ensure seamless integration with your existing infrastructure.",
    icon: Zap,
    category: "OEMs"
  },
  {
    title: "Asset Lifecycle Management (DOA & RMA)",
    description: "End-to-end asset lifecycle management including Dead on Arrival (DOA) handling and Return Merchandise Authorization (RMA) processes to ensure optimal asset utilization and warranty compliance.",
    icon: Settings,
    category: "OEMs"
  },
  {
    title: "Service & Repair Centers - Carry In, Shared, On Demand",
    description: "Flexible service and repair center solutions including carry-in services, shared facility access, and on-demand repair support to minimize downtime and maximize operational efficiency.",
    icon: Building2,
    category: "OEMs"
  },
  {
    title: "Worldwide SmartHands - On Demand Field Support",
    description: "Global on-demand field support services providing skilled technicians for installation, maintenance, and troubleshooting at locations worldwide, ensuring rapid response times.",
    icon: Globe,
    category: "OEMs"
  },
  {
    title: "24 X 7 Helpdesk",
    description: "Round-the-clock helpdesk support providing immediate assistance, issue resolution, and technical guidance to ensure continuous operations and minimal service disruptions.",
    icon: Headphones,
    category: "OEMs"
  },
  {
    title: "24 X 7 TAC - Remote Support + Escalation Management",
    description: "24/7 Technical Assistance Center offering remote support, advanced troubleshooting, and intelligent escalation management to resolve complex technical issues efficiently.",
    icon: Clock,
    category: "OEMs"
  },
  {
    title: "Privileged User Support (VIP Support)",
    description: "Dedicated premium support service for privileged users and VIP customers, offering priority response, personalized assistance, and enhanced service level agreements.",
    icon: Star,
    category: "OEMs"
  },
  // Systems Integrators Services
  {
    title: "On Demand Rate Cards",
    description: "Networks, End User Equipments, Other Tech Infra Components (Passive etc)",
    icon: FileText,
    category: "Systems Integrators"
  },
  {
    title: "End to end projects",
    description: "Wired & Wireless Networks, Surveillance Systems, Platforms and Storage, Data Centers and NOCs, End User Equipment setups, Access Control & Related equipments, Backhaul & Transport Networks, Enterprise Info Security, Passive LAN",
    icon: Network,
    category: "Systems Integrators"
  },
  // Service Providers Services
  {
    title: "Transformation Services",
    description: "Comprehensive transformation services to modernize your infrastructure, optimize operations, and enhance service delivery capabilities through strategic technology integration.",
    icon: Zap,
    category: "Service Providers"
  },
  {
    title: "Backhaul",
    description: "4G & 5G Solutions, UBR. & Microwave, Tower O&M, In-building Solutions",
    icon: Radio,
    category: "Service Providers"
  },
  {
    title: "Customer Side",
    description: "End to end Wifi Networks, End to end SDWAN Solution, End to end FTTH",
    icon: Wifi,
    category: "Service Providers"
  }
]

function ServiceCard({ item }: { item: ServiceItem }) {
  // Check if description should be displayed as a list
  const commaCount = (item.description.match(/,/g) || []).length
  const endsWithPeriod = item.description.trim().endsWith(".")
  const isShort = item.description.length < 400
  
  // If it has commas, is short, and doesn't end with period (not a sentence), treat as list
  const isList = commaCount >= 1 && isShort && !endsWithPeriod
  
  // Split by comma if it's a list
  const listItems = isList 
    ? item.description.split(",").map(item => item.trim())
    : []

  return (
    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="shrink-0 p-4 bg-orange-500 rounded-xl shadow-md">
          <item.icon className="h-7 w-7 text-white" />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            {item.category && (
              <span className="inline-block px-2 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-md mb-2">
                {item.category}
              </span>
            )}
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {item.title}
            </h3>
          </div>
          {isList ? (
            <ul className="text-gray-600 text-sm leading-relaxed space-y-1 list-disc list-outside pl-5">
              {listItems.map((listItem, idx) => (
                <li key={idx} className="pl-1">{listItem}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [showQRCode, setShowQRCode] = useState(false)
  const whatsappNumber = "917715867695" // Replace with actual WhatsApp number
  const whatsappMessage = "I would like to book a consult"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home" className="py-14 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-semibold text-gray-900 leading-[1.2] text-[36px] md:text-[48px] lg:text-[60px]">
                  <span className="text-orange-600">OEM</span> Support
                  <span className="block">made easy</span>
                </h1>
                <p className="text-black leading-relaxed text-[18px] md:text-[18px] lg:text-[20px] max-w-2xl">
                  Uniserved helps OEMs cut downtime with nationwide spares depots, faster response times, and SLA-driven field service—powered by an AI-enabled platform. Real-time visibility from ticket to closure, at scale.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    const element = document.getElementById('ready-to-transform')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-yellow-400 text-gray-900 font-medium rounded-full hover:bg-yellow-500 transition-colors group text-[16px] cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/oem-collage_02.png"
                alt="Transformation Services"
                width={584}
                height={550}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* OEM Service Lifecycle Section */}
      <OemServiceLifecycleSection />

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full mx-auto mb-4">
              <ShieldCheck className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The only partner for Field Services across country
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pan India Coverage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive field service coverage across all states and union territories.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">98% Pin Codes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Extensive reach covering 98% of India's pin codes for reliable service delivery.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Spares Depots</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategically located depots ensure quick access to replacement parts nationwide.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">60 Mins onsite response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skilled technicians arrive at your location within 60 minutes for rapid support.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-skill rate card for Install & Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent pricing structure covering diverse technical skills across technology domains.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Network className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-end projects across geos</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete project management from planning to deployment across multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section id="services" className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end service capabilities for OEMs—built to improve response times, ensure spares availability, and deliver consistent SLA performance nationwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <ServiceCard key={idx} item={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="ready-to-transform" className="py-16 md:py-20 px-4 bg-linear-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Book a free consult to find out how Uniserved can help supercharge your support services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => setShowQRCode(true)}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors group text-lg cursor-pointer"
            >
              Book Consult
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* QR Code Modal */}
          {showQRCode && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
              onClick={() => setShowQRCode(false)}
            >
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full relative animate-in zoom-in-95 duration-200"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowQRCode(false)}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  aria-label="Close"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Scan to Book Consult
                    </h3>
                    <p className="text-gray-600 text-base">
                      Scan this QR code with your phone to open WhatsApp
                    </p>
                  </div>
                  <div className="flex justify-center py-6 px-4">
                    <div className="relative p-6 bg-linear-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 shadow-inner">
                      <QRCodeSVG
                        value={whatsappUrl}
                        size={240}
                        level="H"
                        includeMargin={true}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-2">
                      Don't have a QR scanner?
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold underline transition-colors"
                    >
                      Click here to open WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

