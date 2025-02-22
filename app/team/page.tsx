import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as main page for consistency */}
      <header className="bg-primary">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-bold">
            Magmeric
          </Link>
          <div className="flex gap-4">
            <Link href="/products" className="flex items-center gap-1 text-sm text-white hover:text-secondary">
              Products
            </Link>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-md w-40 mt-2">
              <Link href="/products#pumps" className="block px-4 py-2 hover:bg-gray-200">Peristalic Pumps</Link>
              <Link href="/products#blood-infusion" className="block px-4 py-2 hover:bg-gray-200">Blood Infusion</Link>
            </div>
            <Link href="/team" className="flex items-center gap-1 text-sm text-secondary">
              Team
            </Link>
            <Link href="tel:+86123456789" className="flex items-center gap-1 text-sm text-white">
              <Phone className="h-4 w-4" />
              224-382-2260
            </Link>
            <Link href="mailto:info@company.com" className="flex items-center gap-1 text-sm text-white">
              <Mail className="h-4 w-4" />
              sales@magmeric.com
            </Link>
          </div>
        </div>
      </header>

      {/* Team Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg opacity-90">Meet the experts behind our innovative pump technology.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="p-6 text-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Andrew Isaac Rosenthal",
                role: "Director",
                bio: "Leading our technical innovation with over 15 years of experience in medical device engineering.",
                image: "/AIR.png"
              },
              {
                name: "Bo Shi",
                role: "Director",
                bio: "Specializing in precision fluid dynamics and pump system optimization.",
                image: "/BOS.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of pump technology through continuous research and development."
              },
              {
                title: "Quality",
                description: "Maintaining the highest standards in every product we design and manufacture."
              },
              {
                title: "Collaboration",
                description: "Working together across disciplines to create the best solutions for our clients."
              }
            ].map((value, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 