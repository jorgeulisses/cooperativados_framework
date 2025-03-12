// Página de pagamentos do trabalhador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  Calendar,
  Download,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  Clock
} from "lucide-react"

export default function TrabalhadorPagamentos() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState("atual")

  // Dados simulados de pagamentos
  const resumoFinanceiro = {
    saldoAtual: 4850.00,
    proximoPagamento: 2400.00,
    dataPagamento: "2024-04-05",
    horasTrabalhadas: 160,
    mediaHora: 42.50
  }

  const historicoTransacoes = [
    {
      id: 1,
      tipo: "recebimento",
      valor: 3200.00,
      data: "2024-03-15",
      empresa: "Construtora ABC",
      servico: "Eletricista Industrial",
      horas: 80,
      comprovante: "comprovante-marco-2024.pdf",
      status: "concluído"
    },
    {
      id: 2,
      tipo: "recebimento",
      valor: 2880.00,
      data: "2024-03-01",
      empresa: "Indústria XYZ",
      servico: "Técnico de Manutenção",
      horas: 72,
      comprovante: "comprovante-fev-2024.pdf",
      status: "concluído"
    },
    {
      id: 3,
      tipo: "pendente",
      valor: 2400.00,
      data: "2024-04-05",
      empresa: "Metalúrgica Silva",
      servico: "Soldador MIG/MAG",
      horas: 60,
      status: "pendente"
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="trabalhador" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-2">Pagamentos</h1>
          <p className="text-gray-600 mb-8">Gerencie seus pagamentos e extratos</p>

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    Disponível
                  </Badge>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Saldo Atual</h3>
                <p className="text-2xl font-bold">R$ {resumoFinanceiro.saldoAtual.toFixed(2)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    Previsto
                  </Badge>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Próximo Pagamento</h3>
                <p className="text-2xl font-bold">R$ {resumoFinanceiro.proximoPagamento.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Previsão: {resumoFinanceiro.dataPagamento}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Horas Trabalhadas</h3>
                <p className="text-2xl font-bold">{resumoFinanceiro.horasTrabalhadas}h</p>
                <p className="text-sm text-gray-500 mt-1">
                  Média: R$ {resumoFinanceiro.mediaHora.toFixed(2)}/h
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <PieChart className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600">Relatórios</h3>
                <div className="space-y-2 mt-4">
                  <Button variant="outline" className="w-full text-sm">
                    <FileText className="h-4 w-4 mr-2" />
                    Extrato Mensal
                  </Button>
                  <Button variant="outline" className="w-full text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    Informe de Rendimentos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Histórico de Transações */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Pagamentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {historicoTransacoes.map((transacao) => (
                  <div
                    key={transacao.id}
                    className="flex items-center justify-between p-4 bg-white border rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-4 ${
                        transacao.tipo === "recebimento" 
                          ? "bg-green-100" 
                          : "bg-blue-100"
                      }`}>
                        {transacao.tipo === "recebimento" ? (
                          <ArrowUpRight className={`h-5 w-5 ${
                            transacao.tipo === "recebimento"
                              ? "text-green-600"
                              : "text-blue-600"
                          }`} />
                        ) : (
                          <ArrowDownRight className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transacao.empresa}</p>
                        <p className="text-sm text-gray-500">{transacao.servico}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{transacao.data}</span>
                          <Clock className="h-4 w-4 ml-3 mr-1" />
                          <span>{transacao.horas}h</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-lg">
                        R$ {transacao.valor.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-end mt-2">
                        <Badge
                          variant="outline"
                          className={`${
                            transacao.status === "concluído"
                              ? "bg-green-50 text-green-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {transacao.status === "concluído" ? "Pago" : "Pendente"}
                        </Badge>
                        {transacao.comprovante && (
                          <Button variant="ghost" size="sm" className="ml-2">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
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