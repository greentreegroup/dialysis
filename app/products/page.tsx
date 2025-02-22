import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as main page for consistency */}
      <header className="bg-primary">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            Magmeric
          </Link>
          <div className="flex gap-4">
            <Link href="/products" className="flex items-center gap-1 text-sm text-secondary">
              Products
            </Link>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-md w-40 mt-2">
              <Link href="/products#pumps" className="block px-4 py-2 hover:bg-gray-200">Peristalic Pumps</Link>
              <Link href="/products#blood-infusion" className="block px-4 py-2 hover:bg-gray-200">Blood Infusion</Link>
            </div>
            <Link href="/team" className="flex items-center gap-1 text-sm text-white hover:text-secondary">
              Team
            </Link>
            <Link href="tel:+12243822260" className="flex items-center gap-1 text-sm text-white">
              <Phone className="h-4 w-4" />
              224-382-2260
            </Link>
            <Link href="mailto:sales@magmeric.com" className="flex items-center gap-1 text-sm text-white">
              <Mail className="h-4 w-4" />
              sales@magmeric.com
            </Link>
          </div>
        </div>
      </header>

      {/* Products Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90">We provide cutting edge solutions for both peristalic pumping and blood infusion technology.</p>
        </div>
      </section>

      {/* Peristaltic Pumps Section */}
      <section id="pumps" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Peristaltic Pumps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "MP-600 Series",
              description: "High-precision peristaltic pump with flow rates 0.1-600 ml/min",
              features: ["±1% precision", "Touch screen", "Multiple tube sizes"],
              image: "/pump_1.jpeg",
              className: "scale-image"
            },
            {
              title: "MP-1000 Series",
              description: "Industrial-grade pump for high-volume applications",
              features: ["Flow rates up to 1L/min", "Industrial interface", "24/7 operation"],
              image: "/peristaltic_pump2.png",
              className: "scale-image"
            },
            {
              title: "MP-Mini Series",
              description: "Compact solution for laboratory applications",
              features: ["Portable design", "USB interface", "Quiet operation"],
              image: "/peristaltic_pump3.png",
              className: "scale-image"
            },
            {
              title: "MP-Dual Series",
              description: "Dual-channel peristaltic pump for parallel processing",
              features: ["Independent channel control", "Synchronized operation", "Digital calibration"],
              image: "/peristaltic_pump4.png",
              className: "scale-image"
            },
            {
              title: "MP-Pro Series",
              description: "Professional-grade pump for research institutions",
              features: ["Advanced flow control", "Data logging", "Remote operation"],
              image: "/peristaltic_pump5.png",
              className: "scale-image"
            },
            {
              title: "MP-Smart Series",
              description: "Smart peristaltic pump with IoT capabilities",
              features: ["WiFi connectivity", "Mobile app control", "Cloud monitoring"],
              image: "/peristaltic_pump6.png",
              className: "scale-image"
            }
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
              <div id="mp-600-series" className="relative h-48">
                <Image src={product.image} alt={product.title} fill className={`object-contain ${product.className || ''}`} />
              </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>


      {/* Blood Infusion Section */}
      <section id="blood-infusion" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Blood Infusion Pumps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "BI-100 Series",
                description: "High-precision blood infusion pump for clinical applications",
                features: ["±1% precision", "Touch screen", "Multiple infusion modes"],
                image: "/blood_infusion1.png",
                className: "scale-image"
              },
              {
                title: "BI-200 Series",
                description: "Industrial-grade pump for high-volume blood transfusions",
                features: ["Flow rates up to 1L/min", "Industrial interface", "24/7 operation"],
                image: "/blood_infusion2.png",
                className: "scale-image"
              },
              {
                title: "BI-Mini Series",
                description: "Compact solution for laboratory blood infusion",
                features: ["Portable design", "USB interface", "Quiet operation"],
                image: "/blood_infusion3.png",
                className: "scale-image"
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                <div className="relative h-48">
                  <Image src={product.image} alt={product.title} fill className={`object-contain ${product.className || ''}`} />
                </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-8">Our experts are here to help you find the perfect solution</p>
          <div className="flex justify-center gap-4">
            <Link href="tel:+12243822260">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                Phone Call
              </Button>
            </Link>
            <Link href="mailto:sales@magmeric.com">
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                Email
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 