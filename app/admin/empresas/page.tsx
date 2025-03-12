// Página de gerenciamento de empresas para o administrador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus, Edit, Trash2, Eye, Building } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AdminEmpresas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")

  // Dados simulados de empresas
  const empresas = [
    {
      id: 1,
      nome: "Construtora ABC",
      email: "contato@construtorabc.com",
      telefone: "(11) 3456-7890",
      cnpj: "12.345.678/0001-90",
      trabalhadores: 15,
      status: "ativo",
    },
    {
      id: 2,
      nome: "Indústria XYZ",
      email: "contato@industriaxyz.com",
      telefone: "(11) 2345-6789",
      cnpj: "23.456.789/0001-01",
      trabalhadores: 8,
      status: "ativo",
    },
    {
      id: 3,
      nome: "Comércio 123",
      email: "contato@comercio123.com",
      telefone: "(11) 3456-7891",
      cnpj: "34.567.890/0001-12",
      trabalhadores: 5,
      status: "inativo",
    },
    {
      id: 4,
      nome: "Empresa DEF",
      email: "contato@empresadef.com",
      telefone: "(11) 4567-8901",
      cnpj: "45.678.901/0001-23",
      trabalhadores: 12,
      status: "ativo",
    },
    {
      id: 5,
      nome: "Corporação GHI",
      email: "contato@corporacaoghi.com",
      telefone: "(11) 5678-9012",
      cnpj: "56.789.012/0001-34",
      trabalhadores: 0,
      status: "inativo",
    },
  ]

  // Filtrar empresas com base na busca e filtro de status
  const filteredEmpresas = empresas.filter((empresa) => {
    const matchesSearch =
      empresa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      empresa.cnpj.includes(searchTerm)

    const matchesStatus = statusFilter === "todos" || empresa.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Gerenciamento de Empresas</h1>
              <p className="text-gray-600">Gerencie as empresas cadastradas na plataforma</p>
            </div>
            <Button className="mt-4 md:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Nova Empresa
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Buscar por nome, email ou CNPJ"
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
                    <SelectItem value="todos">Todas</SelectItem>
                    <SelectItem value="ativo">Ativas</SelectItem>
                    <SelectItem value="inativo">Inativas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Empresas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Nome</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">CNPJ</th>
                      <th className="text-left py-3 px-4 font-medium">Trabalhadores</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-right py-3 px-4 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmpresas.map((empresa) => (
                      <tr key={empresa.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <Building className="h-5 w-5 text-blue-600" />
                            </div>
                            {empresa.nome}
                          </div>
                        </td>
                        <td className="py-3 px-4">{empresa.email}</td>
                        <td className="py-3 px-4">{empresa.cnpj}</td>
                        <td className="py-3 px-4">{empresa.trabalhadores}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <Switch checked={empresa.status === "ativo"} id={`status-${empresa.id}`} className="mr-2" />
                            <Badge variant={empresa.status === "ativo" ? "success" : "secondary"}>
                              {empresa.status === "ativo" ? "Ativa" : "Inativa"}
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

                {filteredEmpresas.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    Nenhuma empresa encontrada com os filtros aplicados
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

