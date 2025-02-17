
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { CTAButton } from "@/components/ui/cta-button";
import { Sprout, DollarSign, Clock, Users, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-agrogoods-light to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-agrogoods-primary/10 text-agrogoods-primary text-sm font-semibold mb-6">
              Seja um Vendedor Independente
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tenha sua própria loja agropecuária online
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Monte seu negócio online, trabalhe de onde quiser e receba suporte completo dos nossos especialistas.
            </p>
            <CTAButton href="#cadastro" className="text-xl">
              Começar agora
            </CTAButton>
            <p className="mt-4 text-sm text-gray-500">
              Comece por apenas R$ 1,00 na primeira venda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AgroGoods?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos tudo que você precisa para ter sucesso no mercado agropecuário
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sprout,
                title: "Suporte Especializado",
                description: "Conte com nossa equipe de especialistas para te ajudar em cada passo",
              },
              {
                icon: DollarSign,
                title: "Baixo Investimento",
                description: "Comece com apenas R$ 1,00 na sua primeira venda",
              },
              {
                icon: Clock,
                title: "Flexibilidade Total",
                description: "Trabalhe quando e onde quiser, sem horários fixos",
              },
              {
                icon: Users,
                title: "Comunidade Ativa",
                description: "Faça parte de uma rede de vendedores de sucesso",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-agrogoods-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-6 h-6 text-agrogoods-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-agrogoods-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Junte-se a milhares de vendedores independentes e comece sua história de sucesso hoje mesmo.
            </p>
            <CTAButton href="#cadastro" className="bg-white text-agrogoods-primary hover:bg-gray-100">
              Quero me cadastrar
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="como-funciona" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comece sua jornada em poucos passos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Faça seu cadastro",
                description: "Preencha seus dados básicos e crie sua conta gratuitamente",
              },
              {
                step: "2",
                title: "Receba treinamento",
                description: "Acesse nossas micro-aulas exclusivas e aprenda com especialistas",
              },
              {
                step: "3",
                title: "Comece a vender",
                description: "Use nosso app e comece a divulgar seus produtos",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-agrogoods-primary text-white rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-agrogoods-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="cadastro" className="py-16 bg-agrogoods-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Cadastre-se agora
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrogoods-primary focus:border-transparent"
                  required
                />
              </div>
              <CTAButton className="w-full justify-center">
                Enviar cadastro
              </CTAButton>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AgroGoods. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
