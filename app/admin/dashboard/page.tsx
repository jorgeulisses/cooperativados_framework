// Dashboard do administrador
"use client"

import { useState } from "react"
import Image from "next/image"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Building, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [period, setPeriod] = useState("mensal")

  // Dados simulados para o gráfico de barras
  const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Receita",
        data: [65000, 78000, 95000, 81000, 105000, 156000],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Despesas",
        data: [45000, 52000, 63000, 58000, 70000, 95000],
        backgroundColor: "#ef4444",
      },
    ],
  }

  // Dados simulados para o gráfico de pizza
  const pieData = {
    labels: ["Construção Civil", "Tecnologia", "Administrativo", "Logística", "Outros"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#6b7280"],
      },
    ],
  }

  // Dados simulados para atividades recentes
  const atividadesRecentes = [
    {
      id: 1,
      tipo: "cadastro",
      nome: "João Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      descricao: "Novo trabalhador cadastrado",
      data: "15/03/2023 14:30",
    },
    {
      id: 2,
      tipo: "contrato",
      nome: "Empresa XYZ",
      logo: "https://logo.clearbit.com/companyxyz.com",
      descricao: "Novo contrato criado",
      data: "15/03/2023 11:45",
    },
    {
      id: 3,
      tipo: "pagamento",
      nome: "Empresa ABC",
      logo: "https://logo.clearbit.com/companyabc.com",
      descricao: "Pagamento recebido: R$ 12.500,00",
      data: "14/03/2023 16:20",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Dashboard Administrativo</h1>
              <p className="text-gray-600">Bem-vindo de volta, Admin</p>
            </div>
            <Tabs value={period} onValueChange={setPeriod} className="mt-4 md:mt-0">
              <TabsList>
                <TabsTrigger value="semanal">Semanal</TabsTrigger>
                <TabsTrigger value="mensal">Mensal</TabsTrigger>
                <TabsTrigger value="anual">Anual</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total de Trabalhadores</p>
                    <h3 className="text-2xl font-bold mt-1">248</h3>
                    <div className="flex items-center mt-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">12% este mês</span>
                    </div>
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
                    <p className="text-sm font-medium text-gray-500">Total de Empresas</p>
                    <h3 className="text-2xl font-bold mt-1">42</h3>
                    <div className="flex items-center mt-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">8% este mês</span>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Receita Total</p>
                    <h3 className="text-2xl font-bold mt-1">R$ 156.432</h3>
                    <div className="flex items-center mt-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">18% este mês</span>
                    </div>
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
                    <p className="text-sm font-medium text-gray-500">Contratos Ativos</p>
                    <h3 className="text-2xl font-bold mt-1">186</h3>
                    <div className="flex items-center mt-1 text-red-600">
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">3% este mês</span>
                    </div>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Desempenho Financeiro</CardTitle>
                <Button variant="outline" size="sm">
                  Exportar
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <Image
                    src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Jan','Fev','Mar','Abr','Mai','Jun'],datasets:[{label:'Receita',data:[65000,78000,95000,81000,105000,156000],backgroundColor:'%233b82f6'},{label:'Despesas',data:[45000,52000,63000,58000,70000,95000],backgroundColor:'%23ef4444'}]}}"
                    alt="Gráfico de desempenho financeiro"
                    width={500}
                    height={300}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Distribuição por Área</CardTitle>
                <Button variant="outline" size="sm">
                  Detalhes
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <Image
                    src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Construção Civil','Tecnologia','Administrativo','Logística','Outros'],datasets:[{data:[35,25,20,15,5],backgroundColor:['%233b82f6','%238b5cf6','%2310b981','%23f59e0b','%236b7280']}]}}"
                    alt="Gráfico de distribuição por área"
                    width={300}
                    height={300}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Atividades Recentes</CardTitle>
              <Button variant="outline" size="sm">
                Ver Todas
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {atividadesRecentes.map((atividade) => (
                  <div key={atividade.id} className="flex items-start p-4 bg-white border rounded-lg">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-4 flex items-center justify-center">
                      {atividade.foto ? (
                        <Image src={atividade.foto || "/placeholder.svg"} alt={atividade.nome} width={40} height={40} />
                      ) : atividade.logo ? (
                        <Image src={atividade.logo || "/placeholder.svg"} alt={atividade.nome} width={40} height={40} />
                      ) : (
                        <Users className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{atividade.nome}</h4>
                        <span className="text-sm text-gray-500">{atividade.data}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{atividade.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

