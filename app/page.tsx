// Página inicial do site Cooperativados
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building, Briefcase, CheckCircle, Star, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cooperativados</h1>
              <p className="text-xl mb-6">
                Conectando profissionais qualificados às empresas que precisam de seus serviços
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="/login">Acessar Sistema</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-blue-700 hover:bg-blue-700 hover:text-white"
                >
                  <Link href="/cadastro">Cadastrar-se</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Cooperativados - Conectando profissionais e empresas"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
              <p className="text-gray-600">Profissionais Cadastrados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <p className="text-gray-600">Empresas Parceiras</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1200+</div>
              <p className="text-gray-600">Contratos Realizados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A Cooperativados oferece soluções completas para conectar profissionais qualificados às empresas que
            precisam de seus serviços, com toda a segurança e agilidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Profissionais</h3>
              <p className="text-gray-600 mb-4">
                Cadastre-se e tenha acesso a diversas oportunidades de trabalho com empresas parceiras. Receba seus
                pagamentos de forma segura e pontual, sem preocupações com burocracia.
              </p>
              <Link
                href="/cadastro?tipo=trabalhador"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                Cadastrar como profissional <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Para Empresas</h3>
              <p className="text-gray-600 mb-4">
                Encontre profissionais qualificados para suas demandas de forma rápida e eficiente. Reduza custos
                operacionais e aumente a produtividade com nossa mão de obra especializada.
              </p>
              <Link href="/cadastro?tipo=empresa" className="text-blue-600 hover:underline inline-flex items-center">
                Cadastrar como empresa <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão Completa</h3>
              <p className="text-gray-600 mb-4">
                Oferecemos toda a gestão administrativa e financeira para ambas as partes. Contratos, pagamentos,
                impostos e documentação são gerenciados por nossa equipe especializada.
              </p>
              <Link href="/sobre" className="text-blue-600 hover:underline inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Como Funciona</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nosso processo é simples e eficiente, garantindo a melhor experiência para profissionais e empresas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 relative">
                <Users className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cadastro</h3>
              <p className="text-gray-600">
                Profissionais e empresas se cadastram na plataforma com suas informações e necessidades.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 relative">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Validação</h3>
              <p className="text-gray-600">Nossa equipe valida as informações e habilita o acesso à plataforma.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 relative">
                <Star className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Contratação</h3>
              <p className="text-gray-600">Empresas selecionam os profissionais de acordo com suas necessidades.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 relative">
                <Clock className="w-8 h-8 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gestão</h3>
              <p className="text-gray-600">Gerenciamos todo o processo, desde contratos até pagamentos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Sobre a Cooperativados"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Sobre a Cooperativados</h2>
              <p className="text-gray-600 mb-4">
                A Cooperativados é uma cooperativa de mão de obra especializada em conectar profissionais qualificados
                com empresas que necessitam de seus serviços.
              </p>
              <p className="text-gray-600 mb-4">
                Fundada em 2015, nossa missão é facilitar o acesso ao trabalho para nossos cooperados e oferecer às
                empresas contratantes uma solução eficiente para suas demandas de mão de obra.
              </p>
              <p className="text-gray-600 mb-6">
                Com mais de 250 profissionais cadastrados e 45 empresas parceiras, já realizamos mais de 1.200 contratos
                com alto índice de satisfação.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <Link href="/cadastro?tipo=empresa">Cadastre-se como Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Veja o que nossos clientes e cooperados dizem sobre nós.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Carlos Silva"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Carlos Silva</h4>
                  <p className="text-gray-600 text-sm">Eletricista</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Desde que me tornei um cooperado, minha vida profissional mudou completamente. Tenho trabalho constante
                e recebo meus pagamentos em dia, sem preocupações."
              </p>
              <div className="flex mt-4">
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Ana Oliveira"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Ana Oliveira</h4>
                  <p className="text-gray-600 text-sm">Técnica de TI</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "A Cooperativados me permitiu conciliar meus projetos pessoais com trabalhos bem remunerados. A
                plataforma é intuitiva e o suporte é excelente."
              </p>
              <div className="flex mt-4">
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                  alt="Roberto Mendes"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Roberto Mendes</h4>
                  <p className="text-gray-600 text-sm">Gerente de RH - Construtora XYZ</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Contratar através da Cooperativados reduziu nossos custos operacionais e nos deu acesso a profissionais
                altamente qualificados. Recomendo a todas as empresas."
              </p>
              <div className="flex mt-4">
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tem dúvidas sobre nossos serviços? Entre em contato conosco e teremos prazer em ajudar.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Fale Conosco</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

