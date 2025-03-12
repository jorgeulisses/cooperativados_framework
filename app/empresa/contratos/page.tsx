// Página de gerenciamento de contratos para empresas
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter,
  Calendar,
  Clock,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  Download,
  Eye,
  DollarSign,
  Star
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function EmpresaContratos() {
  const [statusFilter, setStatusFilter] = useState("todos")
  const [periodoFilter, setPeriodoFilter] = useState("todos")

  // Dados simulados de contratos
  const contratos = [
    {
      id: "CTR-2024-001",
      trabalhador: {
        nome: "Carlos Silva",
        foto: "https://randomuser.me/api/portraits/men/32.jpg",
        funcao: "Eletricista Industrial"
      },
      status: "ativo",
      inicio: "2024-01-15",
      fim: "2024-03-15",
      valorHora: 45.00,
      horasTrabalhadas: 160,
      valorTotal: 7200.00,
      documentos: ["Contrato.pdf", "NR10.pdf", "ASO.pdf"],
      pagamentos: [
        { data: "2024-02-01", valor: 3600.00, status: "pago" },
        { data: "2024-03-01", valor: 3600.00, status: "pendente" }
      ],
      avaliacoes: [
        { data: "2024-02-01", nota: 4.8, comentario: "Excelente profissional, muito pontual" }
      ]
    },
    {
      id: "CTR-2024-002",
      trabalhador: {
        nome: "Ana Santos",
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
        funcao: "Técnica em Segurança"
      },
      status: "pendente_aprovacao",
      inicio: "2024-02-01",
      fim: "2024-04-30",
      valorHora: 40.00,
      horasTrabalhadas: 0,
      valorTotal: 0,
      documentos: ["Proposta.pdf", "Certificados.pdf"],
      pagamentos: [],
      avaliacoes: []
    },
    {
      id: "CTR-2023-045",
      trabalhador: {
        nome: "Roberto Oliveira",
        foto: "https://randomuser.me/api/portraits/men/45.jpg",
        funcao: "Soldador"
      },
      status: "finalizado",
      inicio: "2023-11-01",
      fim: "2023-12-31",
      valorHora: 55.00,
      horasTrabalhadas: 320,
      valorTotal: 17600.00,
      documentos: ["Contrato.pdf", "RelatorioFinal.pdf"],
      pagamentos: [
        { data: "2023-12-01", valor: 8800.00, status: "pago" },
        { data: "2024-01-01", valor: 8800.00, status: "pago" }
      ],
      avaliacoes: [
        { data: "2023-12-15", nota: 4.9, comentario: "Trabalho excepcional" },
        { data: "2023-12-31", nota: 5.0, comentario: "Superou as expectativas" }
      ]
    }
  ]

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      ativo: { color: "bg-green-50 text-green-700", text: "Ativo" },
      pendente_aprovacao: { color: "bg-yellow-50 text-yellow-700", text: "Pendente Aprovação" },
      finalizado: { color: "bg-blue-50 text-blue-700", text: "Finalizado" }
    }
    const config = statusConfig[status as keyof typeof statusConfig]
    return <Badge variant="outline" className={config.color}>{config.text}</Badge>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="empresa" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Contratos</h1>
              <p className="text-gray-600">Gerencie seus contratos ativos e histórico</p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os status</SelectItem>
                  <SelectItem value="ativo">Ativos</SelectItem>
                  <SelectItem value="pendente">Pendentes</SelectItem>
                  <SelectItem value="finalizado">Finalizados</SelectItem>
                </SelectContent>
              </Select>

              <Select value={periodoFilter} onValueChange={setPeriodoFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todo período</SelectItem>
                  <SelectItem value="mes_atual">Mês atual</SelectItem>
                  <SelectItem value="ultimos_3">Últimos 3 meses</SelectItem>
                  <SelectItem value="ultimos_6">Últimos 6 meses</SelectItem>
                </SelectContent>
              </Select>

              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Novo Contrato
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {contratos.map((contrato) => (
              <Card key={contrato.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <Image
                        src={contrato.trabalhador.foto}
                        alt={contrato.trabalhador.nome}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{contrato.trabalhador.nome}</h3>
                          {getStatusBadge(contrato.status)}
                        </div>
                        <p className="text-sm text-gray-600">{contrato.trabalhador.funcao}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="text-lg font-semibold">
                        R$ {contrato.valorTotal.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">
                        R$ {contrato.valorHora.toFixed(2)}/hora
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Período do Contrato</div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(contrato.inicio).toLocaleDateString()} até{" "}
                        {new Date(contrato.fim).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Horas Trabalhadas</div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {contrato.horasTrabalhadas} horas
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium">Documentos</div>
                      <div className="flex flex-wrap gap-2">
                        {contrato.documentos.map((doc, index) => (
                          <Button key={index} variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            {doc}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {contrato.status === "ativo" && (
                    <div className="flex justify-end gap-2 mt-6">
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button variant="outline">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Pagamento
                      </Button>
                      <Button>
                        Avaliar
                      </Button>
                    </div>
                  )}

                  {contrato.status === "pendente_aprovacao" && (
                    <div className="flex justify-end gap-2 mt-6">
                      <Button variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Proposta
                      </Button>
                      <Button variant="outline" className="text-red-600 hover:text-red-700">
                        <XCircle className="h-4 w-4 mr-2" />
                        Recusar
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Aprovar
                      </Button>
                    </div>
                  )}

                  {contrato.status === "finalizado" && contrato.avaliacoes.length > 0 && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="text-sm font-medium mb-2">Avaliações</div>
                      <div className="space-y-2">
                        {contrato.avaliacoes.map((avaliacao, index) => (
                          <div key={index} className="flex items-start gap-2 text-sm">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < avaliacao.nota
                                      ? "text-yellow-400"
                                      : "text-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="text-gray-600">{avaliacao.comentario}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
