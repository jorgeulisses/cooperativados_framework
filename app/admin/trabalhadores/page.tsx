// Página de gerenciamento de trabalhadores para o administrador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AdminTrabalhadores() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")

  // Dados simulados de trabalhadores
  const trabalhadores = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@email.com",
      telefone: "(11) 98765-4321",
      area: "Construção Civil",
      valorHora: 40.0,
      percentualLucro: 20,
      status: "ativo",
    },
    {
      id: 2,
      nome: "Maria Santos",
      email: "maria.santos@email.com",
      telefone: "(11) 91234-5678",
      area: "Administrativo",
      valorHora: 35.0,
      percentualLucro: 18,
      status: "ativo",
    },
    {
      id: 3,
      nome: "Pedro Almeida",
      email: "pedro.almeida@email.com",
      telefone: "(11) 99876-5432",
      area: "Tecnologia",
      valorHora: 60.0,
      percentualLucro: 25,
      status: "inativo",
    },
    {
      id: 4,
      nome: "Ana Oliveira",
      email: "ana.oliveira@email.com",
      telefone: "(11) 95678-1234",
      area: "Saúde",
      valorHora: 50.0,
      percentualLucro: 22,
      status: "ativo",
    },
    {
      id: 5,
      nome: "Carlos Souza",
      email: "carlos.souza@email.com",
      telefone: "(11) 92345-6789",
      area: "Logística",
      valorHora: 38.0,
      percentualLucro: 20,
      status: "inativo",
    },
  ]

  // Filtrar trabalhadores com base na busca e filtro de status
  const filteredTrabalhadores = trabalhadores.filter((trabalhador) => {
    const matchesSearch =
      trabalhador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trabalhador.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trabalhador.area.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "todos" || trabalhador.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Gerenciamento de Trabalhadores</h1>
              <p className="text-gray-600">Gerencie os trabalhadores cadastrados na plataforma</p>
            </div>
            <Button className="mt-4 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Novo Trabalhador
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Buscar por nome, email ou área"
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="ativo">Ativos</SelectItem>
                    <SelectItem value="inativo">Inativos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Trabalhadores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nome</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Área</th>
                      <th className="text-left py-3 px-4 font-medium">Valor/Hora</th>
                      <th className="text-left py-3 px-4 font-medium">% Lucro</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTrabalhadores.map((trabalhador) => (
                      <tr key={trabalhador.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{trabalhador.nome}</td>
                        <td className="py-3 px-4">{trabalhador.email}</td>
                        <td className="py-3 px-4">{trabalhador.area}</td>
                        <td className="py-3 px-4">R$ {trabalhador.valorHora.toFixed(2)}</td>
                        <td className="py-3 px-4">{trabalhador.percentualLucro}%</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Switch
                              checked={trabalhador.status === "ativo"}
                              id={`status-${trabalhador.id}`}
                              className="mr-2"
                            />
                            <Badge variant={trabalhador.status === "ativo" ? "success" : "secondary"}>
                              {trabalhador.status === "ativo" ? "Ativo" : "Inativo"}
                            </Badge>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">Ver detalhes</span>
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Editar</span>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 p-0 text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Excluir</span>
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredTrabalhadores.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Nenhum trabalhador encontrado com os filtros aplicados
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

