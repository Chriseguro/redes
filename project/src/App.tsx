import React from 'react';
import { Phone, Instagram, ChevronDown, TrendingUp, Shield, Brain, BookOpen, MessageSquare } from 'lucide-react';
import FloatingCTA from './components/FloatingCTA';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Financial Planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-bold mb-6">¡Domina tus finanzas y alcanza tus metas de ahorro!</h1>
            <p className="text-xl mb-8">En CHRISEGURO, no solo somos expertos en finanzas, somos tu aliado estratégico para construir un futuro financiero sólido. Entendemos tus necesidades y te guiamos con soluciones personalizadas que protegen tu patrimonio y el de tu familia, porque tu tranquilidad financiera es nuestra prioridad.</p>
            <button className="bg-[#FF8A2B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e67a1f] transition-colors">
              QUIERO AHORRAR
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Quiénes Somos</h2>
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                  alt="Christian Vázquez" 
                  className="rounded-full absolute inset-0 w-full h-full object-cover z-10"
                />
                <div className="absolute -inset-4 bg-[#FF8A2B] rounded-full z-0 opacity-20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-lg mb-6">
              Hola, soy Christian Vázquez. Nos especializamos en ayudar a personas y familias para proteger su futuro y alcanzar sus metas financieras. Como profesional con Cédula de la Comisión Nacional de Seguros y Fianzas, ofrezco asesoría patrimonial, transparente y confiable.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-[#FF8A2B] mb-4 flex justify-center">
                  <Shield size={32} />
                </div>
                <h3 className="font-semibold mb-2">Transparencia</h3>
                <p>Compromiso total con la claridad en cada asesoría</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-[#FF8A2B] mb-4 flex justify-center">
                  <TrendingUp size={32} />
                </div>
                <h3 className="font-semibold mb-2">Confianza</h3>
                <p>Construimos relaciones duraderas basadas en resultados</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-[#FF8A2B] mb-4 flex justify-center">
                  <Brain size={32} />
                </div>
                <h3 className="font-semibold mb-2">Ética profesional</h3>
                <p>Actuamos siempre con integridad y profesionalismo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#FF8A2B] mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Asesoría Patrimonial</h3>
              <p className="mb-4">Creemos en relaciones transparentes y honestas. Ofrecemos soluciones personalizadas que realmente beneficien a nuestros clientes.</p>
              <ul className="space-y-2">
                <li>✓ Consultoría financiera personalizada</li>
                <li>✓ Análisis profundo de tu situación</li>
                <li>✓ Soluciones patrimoniales integrales</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#FF8A2B] mb-6">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ahorro Seguro</h3>
              <p className="mb-4">Aumenta tus ahorros de manera segura y efectiva con estrategias comprobadas para manejar tus finanzas.</p>
              <ul className="space-y-2">
                <li>✓ Métodos efectivos de ahorro</li>
                <li>✓ Maximización de recursos</li>
                <li>✓ Herramientas de monitoreo</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-[#FF8A2B] mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Inversiones Inteligentes</h3>
              <p className="mb-4">Maximiza tus ahorros con estrategias de inversión personalizadas y diversificación de portafolio.</p>
              <ul className="space-y-2">
                <li>✓ Portafolio personalizado</li>
                <li>✓ Asesoría especializada</li>
                <li>✓ Diversificación de riesgos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Recursos Educativos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                alt="Ahorro para retiro" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Cómo ahorrar para tu retiro</h3>
                <p className="text-gray-700">Aprende las estrategias más efectivas para asegurar tu futuro financiero.</p>
                <button className="mt-4 text-[#FF8A2B] font-semibold">Leer más →</button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                alt="Errores de inversión" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Errores comunes en inversiones</h3>
                <p className="text-gray-700">Descubre los errores más frecuentes y cómo evitarlos en tus inversiones.</p>
                <button className="mt-4 text-[#FF8A2B] font-semibold">Leer más →</button>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
                alt="Crisis financiera" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Manejo de crisis financiera</h3>
                <p className="text-gray-700">Guía práctica para superar momentos de dificultad económica.</p>
                <button className="mt-4 text-[#FF8A2B] font-semibold">Leer más →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-[#FF8A2B] focus:border-[#FF8A2B]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-[#FF8A2B] focus:border-[#FF8A2B]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-[#FF8A2B] focus:border-[#FF8A2B]" rows={4}></textarea>
                </div>
                <button className="w-full bg-[#FF8A2B] text-white py-3 rounded-lg font-semibold hover:bg-[#e67a1f] transition-colors">
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de contacto</h3>
                <div className="space-y-4">
                  <a href="tel:4794284913" className="flex items-center text-gray-600 hover:text-[#FF8A2B]">
                    <Phone className="mr-2" size={20} />
                    479 428 4913
                  </a>
                  <a href="https://instagram.com/CHRISEGURO" className="flex items-center text-gray-600 hover:text-[#FF8A2B]">
                    <Instagram className="mr-2" size={20} />
                    @CHRISEGURO
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Certificaciones</h3>
                <p className="text-gray-600">
                  Cédula otorgada por la Comisión Nacional de Seguros y Fianzas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CHRISEGURO</h3>
              <p className="text-gray-400">Protección sin límites</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">Quiénes Somos</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Servicios</a></li>
                <li><a href="#resources" className="text-gray-400 hover:text-white">Recursos</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/CHRISEGURO" className="text-gray-400 hover:text-white">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CHRISEGURO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}

export default App;