"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  Download,
  TrendingUp,
  TrendingDown,
  Calendar,
  FileText,
  AlertCircle,
} from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function EmpresaFinanceiro() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("mensal")

  // Dados simulados
  const indicadoresFinanceiros = {
    totalPago: 45600.00,
    emAberto: 12800.00,
    mediaContrato: 8500.00,
    economiaEstimada: 15200.00
  }

  const transacoes = [
    {
      id: "TRX-2024-001",
      data: "2024-03-15",
      descricao: "Pagamento - Carlos Silva (Eletricista)",
      tipo: "debito",
      valor: 3600.00,
      status: "confirmado"
    },
    {
      id: "TRX-2024-002",
      data: "2024-03-14",
      descricao: "Pagamento - Ana Santos (Técnica)",
      tipo: "debito",
      valor: 4200.00,
      status: "pendente"
    },
    {
      id: "TRX-2024-003",
      data: "2024-03-10",
      descricao: "Pagamento - Roberto Oliveira (Soldador)",
      tipo: "debito",
      valor: 5500.00,
      status: "confirmado"
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="empresa" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Financeiro</h1>
              <p className="text-gray-600">Gestão financeira e controle de pagamentos</p>
            </div>

            <div className="mt-4 md:mt-0">
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Exportar Relatório
              </Button>
            </div>
          </div>

          {/* Cards de Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Pago</p>
                    <h3 className="text-2xl font-bold">
                      R$ {indicadoresFinanceiros.totalPago.toLocaleString('pt-BR')}
                    </h3>
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
                    <p className="text-sm text-gray-500">Em Aberto</p>
                    <h3 className="text-2xl font-bold">
                      R$ {indicadoresFinanceiros.emAberto.toLocaleString('pt-BR')}
                    </h3>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Média por Contrato</p>
                    <h3 className="text-2xl font-bold">
                      R$ {indicadoresFinanceiros.mediaContrato.toLocaleString('pt-BR')}
                    </h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Economia Estimada</p>
                    <h3 className="text-2xl font-bold">
                      R$ {indicadoresFinanceiros.economiaEstimada.toLocaleString('pt-BR')}
                    </h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <TrendingDown className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Evolução */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Evolução Financeira</CardTitle>
              <Tabs value={periodoSelecionado} onValueChange={setPeriodoSelecionado}>
                <TabsList>
                  <TabsTrigger value="mensal">Mensal</TabsTrigger>
                  <TabsTrigger value="trimestral">Trimestral</TabsTrigger>
                  <TabsTrigger value="anual">Anual</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <img 
                  src="https://quickchart.io/chart?c={type:'line',data:{labels:['Jan','Fev','Mar','Abr','Mai','Jun'],datasets:[{label:'Pagamentos',data:[42000,45000,43500,46000,44500,45600],borderColor:'rgb(34,197,94)',fill:false},{label:'Economia',data:[12000,13500,14200,14800,15000,15200],borderColor:'rgb(168,85,247)',fill:false}]}}"
                  alt="Gráfico de evolução financeira"
                  className="w-full h-full object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Tabela de Transações */}
          <Card>
            <CardHeader>
              <CardTitle>Últimas Transações</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transacoes.map((transacao) => (
                    <TableRow key={transacao.id}>
                      <TableCell>{new Date(transacao.data).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{transacao.descricao}</TableCell>
                      <TableCell>R$ {transacao.valor.toLocaleString('pt-BR')}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          transacao.status === 'confirmado' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {transacao.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}