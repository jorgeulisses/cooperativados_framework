// Dashboard da empresa
"use client"

import Image from "next/image"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, FileText, Calendar, Search, Filter, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmpresaDashboard() {
  // Dados simulados para o dashboard
  const contratosPendentes = [
    {
      id: 1,
      trabalhador: "Carlos Oliveira",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      funcao: "Eletricista",
      dataInicio: "20/03/2023",
      dataFim: "25/03/2023",
      status: "pendente",
    },
    {
      id: 2,
      trabalhador: "Ana Silva",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      funcao: "Técnica de TI",
      dataInicio: "22/03/2023",
      dataFim: "23/03/2023",
      status: "pendente",
    },
  ]

  const trabalhadores = [
    {
      id: 1,
      nome: "João Silva",
      foto: "https://randomuser.me/api/portraits/men/42.jpg",
      funcao: "Pedreiro",
      avaliacao: 4.8,
      valorHora: "R$ 40,00",
      disponivel: true,
    },
    {
      id: 2,
      nome: "Maria Santos",
      foto: "https://randomuser.me/api/portraits/women/24.jpg",
      funcao: "Auxiliar Administrativo",
      avaliacao: 4.9,
      valorHora: "R$ 35,00",
      disponivel: true,
    },
    {
      id: 3,
      nome: "Pedro Almeida",
      foto: "https://randomuser.me/api/portraits/men/22.jpg",
      funcao: "Técnico de Manutenção",
      avaliacao: 4.7,
      valorHora: "R$ 45,00",
      disponivel: false,
    },
  ]

  const contratosAtivos = [
    {
      id: 1,
      trabalhador: "Roberto Ferreira",
      foto: "https://randomuser.me/api/portraits/men/62.jpg",
      funcao: "Desenvolvedor Web",
      dataInicio: "01/03/2023",
      dataFim: "30/04/2023",
      valorTotal: "R$ 8.000,00",
    },
    {
      id: 2,
      trabalhador: "Juliana Costa",
      foto: "https://randomuser.me/api/portraits/women/62.jpg",
      funcao: "Designer Gráfico",
      dataInicio: "15/02/2023",
      dataFim: "15/03/2023",
      valorTotal: "R$ 5.500,00",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="empresa" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <Image
                  src="https://logo.clearbit.com/acmecorp.com"
                  alt="Empresa ABC Ltda"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Empresa ABC Ltda</h1>
                <p className="text-gray-600">Bem-vindo ao seu painel de controle</p>
              </div>
            </div>
            <Button>Solicitar Novo Contrato</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Trabalhadores Contratados</p>
                    <h3 className="text-2xl font-bold mt-1">24</h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Contratos Ativos</p>
                    <h3 className="text-2xl font-bold mt-1">12</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Valor Total (Mês)</p>
                    <h3 className="text-2xl font-bold mt-1">R$ 18.450,00</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="contratos" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="contratos">Contratos Pendentes</TabsTrigger>
              <TabsTrigger value="ativos">Contratos Ativos</TabsTrigger>
              <TabsTrigger value="trabalhadores">Buscar Trabalhadores</TabsTrigger>
            </TabsList>

            <TabsContent value="contratos">
              <Card>
                <CardHeader>
                  <CardTitle>Contratos Pendentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contratosPendentes.map((contrato) => (
                      <div key={contrato.id} className="p-4 bg-white border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <Image
                              src={contrato.foto || "/placeholder.svg"}
                              alt={contrato.trabalhador}
                              width={40}
                              height={40}
                              className="rounded-full mr-3"
                            />
                            <div>
                              <h4 className="font-medium">{contrato.trabalhador}</h4>
                              <p className="text-sm text-gray-600">Função: {contrato.funcao}</p>
                            </div>
                          </div>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
                            {contrato.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {contrato.dataInicio} até {contrato.dataFim}
                          </span>
                        </div>
                        <div className="flex justify-end mt-3 space-x-2">
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                          <Button size="sm">Aprovar</Button>
                        </div>
                      </div>
                    ))}
                    {contratosPendentes.length === 0 && (
                      <div className="text-center py-8 text-gray-500">Não há contratos pendentes no momento</div>
                    )}
                    <Button variant="outline" className="w-full mt-2">
                      Ver todos os contratos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ativos">
              <Card>
                <CardHeader>
                  <CardTitle>Contratos Ativos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contratosAtivos.map((contrato) => (
                      <div key={contrato.id} className="p-4 bg-white border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <Image
                              src={contrato.foto || "/placeholder.svg"}
                              alt={contrato.trabalhador}
                              width={40}
                              height={40}
                              className="rounded-full mr-3"
                            />
                            <div>
                              <h4 className="font-medium">{contrato.trabalhador}</h4>
                              <p className="text-sm text-gray-600">Função: {contrato.funcao}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{contrato.valorTotal}</div>
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                              Ativo
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {contrato.dataInicio} até {contrato.dataFim}
                          </span>
                        </div>
                        <div className="flex justify-end mt-3">
                          <Button size="sm" variant="outline">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      Ver todos os contratos ativos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trabalhadores">
              <Card>
                <CardHeader className="flex flex-col space-y-2">
                  <CardTitle>Buscar Trabalhadores</CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <Input placeholder="Buscar por nome ou função" className="pl-8" />
                    </div>
                    <Select defaultValue="todos">
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filtrar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="disponiveis">Disponíveis</SelectItem>
                        <SelectItem value="contratados">Já Contratados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trabalhadores.map((trabalhador) => (
                      <div key={trabalhador.id} className="p-4 bg-white border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <Image
                              src={trabalhador.foto || "/placeholder.svg"}
                              alt={trabalhador.nome}
                              width={40}
                              height={40}
                              className="rounded-full mr-3"
                            />
                            <div>
                              <h4 className="font-medium">{trabalhador.nome}</h4>
                              <p className="text-sm text-gray-600">Função: {trabalhador.funcao}</p>
                            </div>
                          </div>
                          <Badge variant={trabalhador.disponivel ? "success" : "secondary"}>
                            {trabalhador.disponivel ? "Disponível" : "Indisponível"}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(trabalhador.avaliacao) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">{trabalhador.avaliacao}</span>
                          </div>
                          <p className="text-sm font-medium">{trabalhador.valorHora}/hora</p>
                        </div>
                        {trabalhador.disponivel && (
                          <Button className="w-full mt-3" size="sm">
                            Solicitar Contratação
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      Ver todos os trabalhadores
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Próximos Pagamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white border rounded-lg">
                  <div>
                    <h4 className="font-medium">Fatura Mensal - Março/2023</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Vencimento: 10/04/2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-lg">R$ 18.450,00</div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      Pendente
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border rounded-lg">
                  <div>
                    <h4 className="font-medium">Fatura Mensal - Fevereiro/2023</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Vencimento: 10/03/2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-lg">R$ 15.780,00</div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                      Pago
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

