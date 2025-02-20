import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Globe, Mail, Phone, Shield, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-white" />
            <span className="text-sm text-white">EN</span>
          </div>
          <div className="flex gap-4">
            <Link href="/products" className="flex items-center gap-1 text-sm text-white hover:text-secondary">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Advanced Peristaltic Pump Technology</h1>
              <p className="text-lg opacity-90">
                Leading manufacturer of high-precision dialysis and peristaltic pumps. ISO certified, FDA compliant,
                trusted worldwide.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Advanced Peristaltic Pump"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pumps?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "ISO 13485 Certified",
                description: "Medical device quality management system certification",
              },
              {
                icon: Zap,
                title: "High Precision",
                description: "Industry-leading flow rate accuracy of ±1%",
              },
              {
                icon: Star,
                title: "10+ Years Experience",
                description: "Trusted by medical institutions worldwide",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Peristaltic Pump Details"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">MP-600 Series Peristaltic Pump</h2>
              <ul className="space-y-4">
                {[
                  "Flow rate: 0.1-600 ml/min",
                  "Precision: ±1%",
                  "Multiple tube compatibility",
                  "Touch screen interface",
                  "RS485 communication interface",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Download Specifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Medical Equipment?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us today for customized solutions and competitive pricing</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +86 123 456 789
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@company.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li>ISO 13485:2016</li>
                <li>CE Marking</li>
                <li>FDA Registered</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 Medical Pump Technology Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

