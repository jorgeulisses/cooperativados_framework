// Página Sobre a Cooperativados
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Building, Award, Target, Heart } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça a história, missão e valores da Cooperativados, a maior cooperativa de mão de obra do Brasil.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Nossa História"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A Cooperativados nasceu em 2015, a partir da visão de um grupo de profissionais que identificou a
                necessidade de criar uma ponte entre trabalhadores qualificados e empresas que precisavam de mão de obra
                especializada.
              </p>
              <p className="text-gray-600 mb-4">
                O que começou com apenas 15 cooperados e 3 empresas parceiras, hoje se transformou na maior cooperativa
                de mão de obra do país, com mais de 250 profissionais cadastrados e 45 empresas parceiras.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo desses anos, desenvolvemos uma plataforma tecnológica que simplifica o processo de contratação,
                garantindo segurança e eficiência para ambas as partes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p className="text-gray-600">
                Conectar profissionais qualificados às empresas que precisam de seus serviços, promovendo oportunidades
                de trabalho justas e valorizando o capital humano.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a melhor e mais confiável cooperativa de mão de obra do Brasil, transformando a
                forma como as empresas contratam e os profissionais trabalham.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Transparência em todas as relações
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Compromisso com a qualidade
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Valorização do capital humano
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Inovação constante
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Responsabilidade social
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossa Equipe</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os profissionais que fazem a Cooperativados acontecer todos os dias.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="João Oliveira"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">João Oliveira</h3>
              <p className="text-blue-600 mb-2">CEO & Fundador</p>
              <p className="text-gray-600 text-sm">
                Com mais de 20 anos de experiência em gestão de recursos humanos, João fundou a Cooperativados com a
                missão de transformar o mercado de trabalho.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="Maria Santos"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Maria Santos</h3>
              <p className="text-blue-600 mb-2">Diretora de Operações</p>
              <p className="text-gray-600 text-sm">
                Especialista em processos operacionais, Maria é responsável por garantir a eficiência e qualidade de
                todos os serviços prestados pela cooperativa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Pedro Almeida"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Pedro Almeida</h3>
              <p className="text-blue-600 mb-2">Diretor Financeiro</p>
              <p className="text-gray-600 text-sm">
                Com formação em economia e finanças, Pedro garante a saúde financeira da cooperativa e o pagamento
                pontual de todos os cooperados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Ana Costa"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Ana Costa</h3>
              <p className="text-blue-600 mb-2">Diretora de Tecnologia</p>
              <p className="text-gray-600 text-sm">
                Responsável pelo desenvolvimento e manutenção da plataforma tecnológica que conecta profissionais e
                empresas de forma eficiente e segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Números</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Profissionais Cadastrados</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Building className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <p className="text-gray-600">Empresas Parceiras</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1200+</div>
              <p className="text-gray-600">Contratos Realizados</p>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <Award className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Seja como profissional ou empresa, junte-se à Cooperativados e faça parte da revolução no mercado de
            trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/cadastro?tipo=trabalhador">Cadastre-se como Profissional</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-blue-700 hover:bg-blue-700 hover:text-white">
              <Link href="/cadastro?tipo=empresa">Cadastre-se como Empresa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

