// Página de gerenciamento de trabalhadores para empresas
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
  Star, 
  MapPin, 
  Clock, 
  Phone,
  Mail,
  Calendar,
  BookOpen,
  Award,
  MessageSquare
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function EmpresaTrabalhadores() {
  const [searchTerm, setSearchTerm] = useState("")
  const [areaFilter, setAreaFilter] = useState("todas")
  const [disponibilidadeFilter, setDisponibilidadeFilter] = useState("todos")

  // Dados simulados de trabalhadores
  const trabalhadores = [
    {
      id: 1,
      nome: "Carlos Silva",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      area: "Eletricista Industrial",
      experiencia: "8 anos",
      valorHora: 45.00,
      disponibilidade: "integral",
      avaliacao: 4.8,
      certificacoes: ["NR-10", "SEP", "NR-35"],
      ultimosTrabalhos: [
        "Manutenção Preventiva - Indústria ABC",
        "Instalação Elétrica - Construtora XYZ"
      ],
      localizacao: "São Paulo, SP",
      contato: {
        telefone: "(11) 98765-4321",
        email: "carlos.silva@email.com"
      },
      status: "disponível"
    },
    {
      id: 2,
      nome: "Ana Santos",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      area: "Técnica em Segurança",
      experiencia: "5 anos",
      valorHora: 40.00,
      disponibilidade: "meio-periodo",
      avaliacao: 4.9,
      certificacoes: ["Técnico em Segurança do Trabalho", "NR-33", "NR-35"],
      ultimosTrabalhos: [
        "Consultoria em SST - Empresa DEF",
        "Treinamento NR-35 - Indústria GHI"
      ],
      localizacao: "São Paulo, SP",
      contato: {
        telefone: "(11) 98765-1234",
        email: "ana.santos@email.com"
      },
      status: "em_servico"
    },
    {
      id: 3,
      nome: "Roberto Oliveira",
      foto: "https://randomuser.me/api/portraits/men/45.jpg",
      area: "Soldador",
      experiencia: "12 anos",
      valorHora: 55.00,
      disponibilidade: "integral",
      avaliacao: 4.7,
      certificacoes: ["Solda MIG/MAG", "Solda TIG", "NR-34"],
      ultimosTrabalhos: [
        "Soldagem Industrial - Metalúrgica JKL",
        "Manutenção - Estaleiro MNO"
      ],
      localizacao: "Santos, SP",
      contato: {
        telefone: "(13) 98765-5678",
        email: "roberto.oliveira@email.com"
      },
      status: "disponível"
    }
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="empresa" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Trabalhadores</h1>
              <p className="text-gray-600">Encontre profissionais qualificados para sua empresa</p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por nome ou área..."
                  className="pl-10 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <Select value={areaFilter} onValueChange={setAreaFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Área de atuação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as áreas</SelectItem>
                  <SelectItem value="eletrica">Elétrica</SelectItem>
                  <SelectItem value="seguranca">Segurança</SelectItem>
                  <SelectItem value="soldagem">Soldagem</SelectItem>
                </SelectContent>
              </Select>

              <Select value={disponibilidadeFilter} onValueChange={setDisponibilidadeFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Disponibilidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="disponivel">Disponível</SelectItem>
                  <SelectItem value="em_servico">Em serviço</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabalhadores.map((trabalhador) => (
              <Card key={trabalhador.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Image
                        src={trabalhador.foto}
                        alt={trabalhador.nome}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">{trabalhador.nome}</h3>
                        <p className="text-sm text-gray-600">{trabalhador.area}</p>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`${
                        trabalhador.status === "disponível"
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {trabalhador.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      <span>{trabalhador.avaliacao} / 5.0</span>
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      <span>{trabalhador.experiencia}</span>
                    </div>

                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{trabalhador.localizacao}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {trabalhador.certificacoes.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-3 border-t">
                      <h4 className="text-sm font-medium mb-2">Últimos trabalhos:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {trabalhador.ultimosTrabalhos.map((trabalho, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                            {trabalho}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t mt-4">
                      <div className="text-lg font-semibold">
                        R$ {trabalhador.valorHora.toFixed(2)}/h
                      </div>
                      <div className="space-x-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Contatar
                        </Button>
                        <Button size="sm">
                          Contratar
                        </Button>
                      </div>
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