
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-agrogoods-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">AgroGoods</h3>
            <p className="text-gray-300 mb-4">
              Soluções inovadoras para o agronegócio, conectando produtores e compradores com tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contato@agrogoods.com" className="text-gray-300 hover:text-white transition-colors">
                  contato@agrogoods.com
                </a>
              </li>
              <li className="flex">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Av. Paulista, 1000, São Paulo - SP, 01310-000</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="text-gray-300">Segunda a Sexta:</p>
            <p className="text-gray-300 mb-2">08:00 - 18:00</p>
            <p className="text-gray-300">Sábado:</p>
            <p className="text-gray-300">09:00 - 13:00</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgroGoods. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
