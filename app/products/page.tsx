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
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            Medical Pump Tech
          </Link>
          <div className="flex gap-4">
            <Link href="/products" className="flex items-center gap-1 text-sm text-secondary">
              Products
            </Link>
            <Link href="/team" className="flex items-center gap-1 text-sm text-white hover:text-secondary">
              Team
            </Link>
            <Link href="tel:+86123456789" className="flex items-center gap-1 text-sm text-white">
              <Phone className="h-4 w-4" />
              +86 123 456 789
            </Link>
            <Link href="mailto:info@company.com" className="flex items-center gap-1 text-sm text-white">
              <Mail className="h-4 w-4" />
              info@company.com
            </Link>
          </div>
        </div>
      </header>

      {/* Products Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90">Discover our range of high-precision peristaltic pumps</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "MP-600 Series",
                description: "High-precision peristaltic pump with flow rates 0.1-600 ml/min",
                features: ["±1% precision", "Touch screen", "Multiple tube sizes"],
                image: "/placeholder.svg?height=300&width=300"
              },
              {
                title: "MP-1000 Series",
                description: "Industrial-grade pump for high-volume applications",
                features: ["Flow rates up to 1L/min", "Industrial interface", "24/7 operation"],
                image: "/placeholder.svg?height=300&width=300"
              },
              {
                title: "MP-Mini Series",
                description: "Compact solution for laboratory applications",
                features: ["Portable design", "USB interface", "Quiet operation"],
                image: "/placeholder.svg?height=300&width=300"
              },
              {
                title: "MP-Dual Series",
                description: "Dual-channel peristaltic pump for parallel processing",
                features: ["Independent channel control", "Synchronized operation", "Digital calibration"],
                image: "/placeholder.svg?height=300&width=300"
              },
              {
                title: "MP-Pro Series",
                description: "Professional-grade pump for research institutions",
                features: ["Advanced flow control", "Data logging", "Remote operation"],
                image: "/placeholder.svg?height=300&width=300"
              },
              {
                title: "MP-Smart Series",
                description: "Smart peristaltic pump with IoT capabilities",
                features: ["WiFi connectivity", "Mobile app control", "Cloud monitoring"],
                image: "/placeholder.svg?height=300&width=300"
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
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
          <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  )
} 