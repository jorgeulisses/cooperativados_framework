// Dashboard do trabalhador
"use client"

import Image from "next/image"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Clock, Building, CheckCircle, XCircle, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrabalhadorDashboard() {
  // Dados simulados para o dashboard
  const servicosRecentes = [
    {
      id: 1,
      empresa: "Construtora ABC",
      logo: "https://logo.clearbit.com/constructioncompany.com",
      data: "15/03/2023",
      horas: 8,
      valor: "R$ 320,00",
      status: "concluído",
    },
    {
      id: 2,
      empresa: "Indústria XYZ",
      logo: "https://logo.clearbit.com/industryxyz.com",
      data: "10/03/2023",
      horas: 6,
      valor: "R$ 240,00",
      status: "concluído",
    },
    {
      id: 3,
      empresa: "Comércio 123",
      logo: "https://logo.clearbit.com/commerce123.com",
      data: "05/03/2023",
      horas: 4,
      valor: "R$ 160,00",
      status: "concluído",
    },
  ]

  const solicitacoesPendentes = [
    {
      id: 1,
      empresa: "Empresa DEF",
      logo: "https://logo.clearbit.com/companydef.com",
      dataInicio: "20/03/2023",
      dataFim: "25/03/2023",
      descricao: "Serviço de manutenção elétrica",
    },
    {
      id: 2,
      empresa: "Corporação GHI",
      logo: "https://logo.clearbit.com/corporationghi.com",
      dataInicio: "22/03/2023",
      dataFim: "23/03/2023",
      descricao: "Instalação de equipamentos",
    },
  ]

  const avaliacoes = [
    {
      id: 1,
      empresa: "Construtora ABC",
      logo: "https://logo.clearbit.com/constructioncompany.com",
      data: "15/03/2023",
      nota: 5,
      comentario: "Excelente profissional, pontual e eficiente.",
    },
    {
      id: 2,
      empresa: "Indústria XYZ",
      logo: "https://logo.clearbit.com/industryxyz.com",
      data: "10/03/2023",
      nota: 4,
      comentario: "Bom trabalho, recomendo.",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="trabalhador" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="João Silva"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Olá, João Silva</h1>
                <p className="text-gray-600">Bem-vindo ao seu painel de controle</p>
              </div>
            </div>
            <div className="flex items-center">
              <Badge className="bg-green-100 text-green-800 mr-2">Eletricista</Badge>
              <Badge className="bg-blue-100 text-blue-800">Disponível</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Horas Trabalhadas (Mês)</p>
                    <h3 className="text-2xl font-bold mt-1">126h</h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Ganhos (Mês)</p>
                    <h3 className="text-2xl font-bold mt-1">R$ 5.040,00</h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Empresas Atendidas</p>
                    <h3 className="text-2xl font-bold mt-1">8</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="servicos" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="servicos">Serviços Recentes</TabsTrigger>
              <TabsTrigger value="solicitacoes">Solicitações Pendentes</TabsTrigger>
              <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            </TabsList>

            <TabsContent value="servicos">
              <Card>
                <CardHeader>
                  <CardTitle>Serviços Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servicosRecentes.map((servico) => (
                      <div
                        key={servico.id}
                        className="flex items-center justify-between p-4 bg-white border rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                            {servico.logo ? (
                              <Image
                                src={servico.logo || "/placeholder.svg"}
                                alt={servico.empresa}
                                width={40}
                                height={40}
                              />
                            ) : (
                              <Building className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{servico.empresa}</h4>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{servico.data}</span>
                              <Clock className="h-4 w-4 ml-3 mr-1" />
                              <span>{servico.horas}h</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{servico.valor}</div>
                          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                            {servico.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      Ver todos os serviços
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solicitacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitações Pendentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {solicitacoesPendentes.map((solicitacao) => (
                      <div key={solicitacao.id} className="p-4 bg-white border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                              {solicitacao.logo ? (
                                <Image
                                  src={solicitacao.logo || "/placeholder.svg"}
                                  alt={solicitacao.empresa}
                                  width={40}
                                  height={40}
                                />
                              ) : (
                                <Building className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                            <h4 className="font-medium">{solicitacao.empresa}</h4>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 px-2 text-green-600 border-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Aceitar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 px-2 text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <XCircle className="h-4 w-4 mr-1" />
                              Recusar
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{solicitacao.descricao}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>
                            {solicitacao.dataInicio} até {solicitacao.dataFim}
                          </span>
                        </div>
                      </div>
                    ))}
                    {solicitacoesPendentes.length === 0 && (
                      <div className="text-center py-8 text-gray-500">Não há solicitações pendentes no momento</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="avaliacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Avaliações Recebidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {avaliacoes.map((avaliacao) => (
                      <div key={avaliacao.id} className="p-4 bg-white border rounded-lg">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                              {avaliacao.logo ? (
                                <Image
                                  src={avaliacao.logo || "/placeholder.svg"}
                                  alt={avaliacao.empresa}
                                  width={40}
                                  height={40}
                                />
                              ) : (
                                <Building className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-medium">{avaliacao.empresa}</h4>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{avaliacao.data}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < avaliacao.nota ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">"{avaliacao.comentario}"</p>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-2">
                      Ver todas as avaliações
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
                    <h4 className="font-medium">Pagamento Mensal</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Previsto para 05/04/2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-lg">R$ 5.040,00</div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      Pendente
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white border rounded-lg">
                  <div>
                    <h4 className="font-medium">Bônus de Produtividade</h4>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Previsto para 10/04/2023</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-lg">R$ 500,00</div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                      Pendente
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

