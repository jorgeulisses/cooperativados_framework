// Página de configurações para o administrador
"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Bell, Shield, DollarSign, Mail, Percent } from "lucide-react"

export default function AdminConfiguracoes() {
  const [saving, setSaving] = useState(false)

  // Dados simulados de configurações
  const [configs, setConfigs] = useState({
    taxaAdministrativa: 15,
    taxaSeguro: 3,
    horasMinimas: 4,
    valorMinimoHora: 30,
    notificacoesEmail: true,
    notificacoesSMS: false,
    autenticacaoDoisFatores: true,
    backupAutomatico: true,
    moedaPadrao: "BRL",
    formatoData: "DD/MM/YYYY"
  })

  const handleSave = async () => {
    setSaving(true)
    // Simulação de salvamento
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSaving(false)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Configurações do Sistema</h1>
              <p className="text-gray-600">Gerencie as configurações globais da plataforma</p>
            </div>
          </div>

          <Tabs defaultValue="geral" className="space-y-4">
            <TabsList>
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
              <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            </TabsList>

            <TabsContent value="geral">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>
                    Defina as configurações básicas do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Moeda Padrão</Label>
                      <Select value={configs.moedaPadrao} onValueChange={(value) => 
                        setConfigs({...configs, moedaPadrao: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a moeda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BRL">Real (BRL)</SelectItem>
                          <SelectItem value="USD">Dólar (USD)</SelectItem>
                          <SelectItem value="EUR">Euro (EUR)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Formato de Data</Label>
                      <Select value={configs.formatoData} onValueChange={(value) => 
                        setConfigs({...configs, formatoData: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o formato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Backup Automático</Label>
                      <div className="flex items-center space-x-2">
                        <Switch 
                          checked={configs.backupAutomatico}
                          onCheckedChange={(checked) => 
                            setConfigs({...configs, backupAutomatico: checked})}
                        />
                        <span className="text-sm text-gray-600">
                          Realizar backup diário dos dados
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financeiro">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Financeiras</CardTitle>
                  <CardDescription>
                    Configure os parâmetros financeiros da plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Taxa Administrativa (%)</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={configs.taxaAdministrativa}
                          onChange={(e) => setConfigs({
                            ...configs,
                            taxaAdministrativa: parseFloat(e.target.value)
                          })}
                        />
                        <Percent className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Taxa de Seguro (%)</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={configs.taxaSeguro}
                          onChange={(e) => setConfigs({
                            ...configs,
                            taxaSeguro: parseFloat(e.target.value)
                          })}
                        />
                        <Percent className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Horas Mínimas por Serviço</Label>
                      <Input
                        type="number"
                        value={configs.horasMinimas}
                        onChange={(e) => setConfigs({
                          ...configs,
                          horasMinimas: parseInt(e.target.value)
                        })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Valor Mínimo por Hora (R$)</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          type="number"
                          value={configs.valorMinimoHora}
                          onChange={(e) => setConfigs({
                            ...configs,
                            valorMinimoHora: parseFloat(e.target.value)
                          })}
                        />
                        <DollarSign className="h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notificacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Notificações</CardTitle>
                  <CardDescription>
                    Gerencie como as notificações são enviadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificações por Email</Label>
                        <p className="text-sm text-gray-500">
                          Enviar alertas importantes por email
                        </p>
                      </div>
                      <Switch
                        checked={configs.notificacoesEmail}
                        onCheckedChange={(checked) => 
                          setConfigs({...configs, notificacoesEmail: checked})}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificações por SMS</Label>
                        <p className="text-sm text-gray-500">
                          Enviar alertas urgentes por SMS
                        </p>
                      </div>
                      <Switch
                        checked={configs.notificacoesSMS}
                        onCheckedChange={(checked) => 
                          setConfigs({...configs, notificacoesSMS: checked})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seguranca">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Segurança</CardTitle>
                  <CardDescription>
                    Configure os parâmetros de segurança do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Autenticação de Dois Fatores</Label>
                        <p className="text-sm text-gray-500">
                          Exigir verificação adicional no login
                        </p>
                      </div>
                      <Switch
                        checked={configs.autenticacaoDoisFatores}
                        onCheckedChange={(checked) => 
                          setConfigs({...configs, autenticacaoDoisFatores: checked})}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-end">
            <Button 
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}