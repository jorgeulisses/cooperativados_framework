// Página de serviços disponíveis para o trabalhador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  Building,
  Star,
  Filter
} from "lucide-react"

export default function TrabalhadorServicos() {
  const [filtroStatus, setFiltroStatus] = useState("todos")

  // Dados simulados de serviços disponíveis
  const servicosDisponiveis = [
    {
      id: 1,
      empresa: "Construtora ABC",
      cargo: "Eletricista Industrial",
      local: "São Paulo, SP",
      periodo: "15 dias",
      valorHora: 45.00,
      horasDiarias: 8,
      requisitos: ["5 anos de experiência", "NR-10 atualizada", "Disponibilidade imediata"],
      beneficios: ["Vale Refeição", "Vale Transporte", "Seguro de Vida"],
      avaliacaoEmpresa: 4.8,
      dataInicio: "2024-04-01",
      status: "disponivel"
    },
    {
      id: 2,
      empresa: "Indústria XYZ",
      cargo: "Técnico de Manutenção",
      local: "Guarulhos, SP",
      periodo: "3 meses",
      valorHora: 38.00,
      horasDiarias: 8,
      requisitos: ["Curso técnico em mecânica", "Experiência com manutenção preventiva"],
      beneficios: ["Vale Refeição", "Vale Transporte", "PLR"],
      avaliacaoEmpresa: 4.5,
      dataInicio: "2024-04-05",
      status: "disponivel"
    },
    {
      id: 3,
      empresa: "Metalúrgica Silva",
      cargo: "Soldador MIG/MAG",
      local: "Campinas, SP",
      periodo: "6 meses",
      valorHora: 42.00,
      horasDiarias: 8,
      requisitos: ["Certificação em solda MIG/MAG", "3 anos de experiência"],
      beneficios: ["Vale Refeição", "Alojamento", "Seguro de Vida"],
      avaliacaoEmpresa: 4.2,
      dataInicio: "2024-04-10",
      status: "disponivel"
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="trabalhador" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Serviços Disponíveis</h1>
              <p className="text-gray-600">Encontre oportunidades de trabalho compatíveis com seu perfil</p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Buscar serviços..." 
                  className="pl-10 w-[300px]"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          {/* Filtros rápidos */}
          <div className="flex gap-2 mb-6">
            <Button 
              variant={filtroStatus === "todos" ? "default" : "outline"}
              onClick={() => setFiltroStatus("todos")}
            >
              Todos
            </Button>
            <Button 
              variant={filtroStatus === "recentes" ? "default" : "outline"}
              onClick={() => setFiltroStatus("recentes")}
            >
              Mais Recentes
            </Button>
            <Button 
              variant={filtroStatus === "proximos" ? "default" : "outline"}
              onClick={() => setFiltroStatus("proximos")}
            >
              Mais Próximos
            </Button>
            <Button 
              variant={filtroStatus === "valor" ? "default" : "outline"}
              onClick={() => setFiltroStatus("valor")}
            >
              Maior Valor
            </Button>
          </div>

          {/* Lista de Serviços */}
          <div className="space-y-6">
            {servicosDisponiveis.map((servico) => (
              <Card key={servico.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold mr-3">{servico.cargo}</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          Novo
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="mr-4">{servico.empresa}</span>
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="mr-4">{servico.local}</span>
                        <Star className="h-4 w-4 mr-2 text-yellow-400" />
                        <span>{servico.avaliacaoEmpresa}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                          <div>
                            <p className="text-sm font-medium">Valor/Hora</p>
                            <p className="text-gray-600">R$ {servico.valorHora.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium">Carga Horária</p>
                            <p className="text-gray-600">{servico.horasDiarias}h diárias</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                          <div>
                            <p className="text-sm font-medium">Período</p>
                            <p className="text-gray-600">{servico.periodo}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="font-medium mb-2">Requisitos:</p>
                        <div className="flex flex-wrap gap-2">
                          {servico.requisitos.map((requisito, index) => (
                            <Badge key={index} variant="secondary">
                              {requisito}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-medium mb-2">Benefícios:</p>
                        <div className="flex flex-wrap gap-2">
                          {servico.beneficios.map((beneficio, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700">
                              {beneficio}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
                      <p className="text-sm text-gray-600 mb-2">Início: {servico.dataInicio}</p>
                      <Button className="w-full md:w-auto">
                        Candidatar-se
                      </Button>
                      <Button variant="outline" className="mt-2 w-full md:w-auto">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}