
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, ArrowRight, Download, Book, MessageCircle } from "lucide-react";

export default function Sucesso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-agrogoods-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cadastro realizado com sucesso!
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Parabéns! Você está mais próximo de ter sua própria loja agropecuária online.
              Em breve nossa equipe entrará em contato com você.
            </p>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Próximos passos
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Download,
                    title: "Baixe nosso app",
                    description: "Acesse sua loja pelo celular"
                  },
                  {
                    icon: Book,
                    title: "Material inicial",
                    description: "Comece seus estudos"
                  },
                  {
                    icon: MessageCircle,
                    title: "Entre no grupo",
                    description: "Conheça outros vendedores"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >
                    <div className="w-12 h-12 bg-agrogoods-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <step.icon className="w-6 h-6 text-agrogoods-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Back to Home */}
            <CTAButton href="/" className="inline-flex items-center">
              Voltar para a página inicial
              <ArrowRight className="ml-2 w-5 h-5" />
            </CTAButton>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AgroGoods. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
