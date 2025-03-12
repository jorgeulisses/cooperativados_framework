// Página de gestão financeira para administradores
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  FileText,
  AlertCircle,
  CheckCircle 
} from "lucide-react"
import { DatePicker } from "@/components/ui/date-picker"

export default function AdminFinanceiro() {
  const [period, setPeriod] = useState("mensal")

  // Dados simulados de transações recentes
  const transacoesRecentes = [
    {
      id: 1,
      tipo: "entrada",
      descricao: "Pagamento Empresa XYZ",
      valor: 12500.00,
      data: "2024-03-15",
      status: "confirmado"
    },
    {
      id: 2,
      tipo: "saida",
      descricao: "Pagamento Cooperados - Março",
      valor: 8750.00,
      data: "2024-03-14",
      status: "pendente"
    },
    {
      id: 3,
      tipo: "entrada",
      descricao: "Contrato ABC Construções",
      valor: 15000.00,
      data: "2024-03-13",
      status: "confirmado"
    }
  ]

  // Dados simulados de indicadores financeiros
  const indicadores = {
    receitaMensal: 156000.00,
    despesasMensal: 95000.00,
    lucroBruto: 61000.00,
    margemLucro: 39.1,
    inadimplencia: 2.5,
    ticketMedio: 8500.00
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Gestão Financeira</h1>
              <p className="text-gray-600">Acompanhe os indicadores financeiros da cooperativa</p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <DatePicker />
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Cards de Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Receita Mensal</p>
                    <h3 className="text-2xl font-bold">R$ {indicadores.receitaMensal.toLocaleString()}</h3>
                    <div className="flex items-center mt-2 text-green-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">12% este mês</span>
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
                    <p className="text-sm font-medium text-gray-500">Despesas Mensais</p>
                    <h3 className="text-2xl font-bold">R$ {indicadores.despesasMensal.toLocaleString()}</h3>
                    <div className="flex items-center mt-2 text-red-600">
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">8% este mês</span>
                    </div>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Lucro Bruto</p>
                    <h3 className="text-2xl font-bold">R$ {indicadores.lucroBruto.toLocaleString()}</h3>
                    <div className="flex items-center mt-2 text-blue-600">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">Margem: {indicadores.margemLucro}%</span>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico Principal */}
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Evolução Financeira</CardTitle>
              <Tabs value={period} onValueChange={setPeriod}>
                <TabsList>
                  <TabsTrigger value="semanal">Semanal</TabsTrigger>
                  <TabsTrigger value="mensal">Mensal</TabsTrigger>
                  <TabsTrigger value="anual">Anual</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {/* Aqui seria inserido o componente de gráfico */}
                <img 
                  src="https://quickchart.io/chart?c={type:'line',data:{labels:['Jan','Fev','Mar','Abr','Mai','Jun'],datasets:[{label:'Receitas',data:[120000,135000,150000,142000,160000,156000],borderColor:'rgb(34,197,94)',fill:false},{label:'Despesas',data:[85000,92000,98000,88000,95000,95000],borderColor:'rgb(239,68,68)',fill:false}]}}"
                  alt="Gráfico de evolução financeira"
                  className="w-full h-full object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Transações Recentes */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Transações Recentes</CardTitle>
              <Button variant="outline" size="sm">Ver Todas</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transacoesRecentes.map((transacao) => (
                  <div key={transacao.id} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${
                        transacao.tipo === 'entrada' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transacao.tipo === 'entrada' ? (
                          <ArrowUpRight className={`h-4 w-4 ${
                            transacao.tipo === 'entrada' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">{transacao.descricao}</p>
                        <p className="text-sm text-gray-500">{transacao.data}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className={`font-medium mr-4 ${
                        transacao.tipo === 'entrada' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transacao.tipo === 'entrada' ? '+' : '-'} R$ {transacao.valor.toLocaleString()}
                      </p>
                      {transacao.status === 'confirmado' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                      )}
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