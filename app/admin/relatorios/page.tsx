// Página de relatórios para o administrador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart, Download, Calendar, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"

export default function AdminRelatorios() {
  const [reportType, setReportType] = useState("trabalhadores")
  const [period, setPeriod] = useState("mensal")

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Relatórios</h1>
              <p className="text-gray-600">Visualize e exporte relatórios da plataforma</p>
            </div>
            <Button className="mt-4 md:mt-0">
              <Download className="h-4 w-4 mr-2" />
              Exportar Relatório
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <Tabs value={reportType} onValueChange={setReportType} className="flex-1">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="trabalhadores">Trabalhadores</TabsTrigger>
                    <TabsTrigger value="empresas">Empresas</TabsTrigger>
                    <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
                  </TabsList>
                </Tabs>

                <Tabs value={period} onValueChange={setPeriod} className="flex-1">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="semanal">Semanal</TabsTrigger>
                    <TabsTrigger value="mensal">Mensal</TabsTrigger>
                    <TabsTrigger value="anual">Anual</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Período:</span>
                  <DatePicker />
                  <span className="text-sm text-gray-500">até</span>
                  <DatePicker />
                </div>

                <div className="flex-1 md:flex-none">
                  <Select defaultValue="todos">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filtrar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos</SelectItem>
                      <SelectItem value="ativos">Apenas Ativos</SelectItem>
                      <SelectItem value="inativos">Apenas Inativos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  {reportType === "trabalhadores" && "Trabalhadores por Área"}
                  {reportType === "empresas" && "Empresas por Setor"}
                  {reportType === "financeiro" && "Receita por Período"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-300" />
                  <p className="text-gray-500 ml-4">Gráfico de barras</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {reportType === "trabalhadores" && "Status dos Trabalhadores"}
                  {reportType === "empresas" && "Status das Empresas"}
                  {reportType === "financeiro" && "Distribuição de Receita"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-gray-300" />
                  <p className="text-gray-500 ml-4">Gráfico de pizza</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {reportType === "trabalhadores" && "Evolução de Cadastros"}
                {reportType === "empresas" && "Evolução de Contratos"}
                {reportType === "financeiro" && "Evolução Financeira"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <LineChart className="h-16 w-16 text-gray-300" />
                <p className="text-gray-500 ml-4">Gráfico de linha</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

