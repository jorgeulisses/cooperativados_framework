"use client"

import { useState } from "react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Building2, MapPin, Phone, Mail, Globe, Upload, Save, Trash, FileText, Download } from "lucide-react"
import Image from "next/image"

export default function EmpresaPerfil() {
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // Dados simulados da empresa
  const [dadosEmpresa, setDadosEmpresa] = useState({
    razaoSocial: "ABC Construções Ltda",
    nomeFantasia: "ABC Construções",
    cnpj: "12.345.678/0001-90",
    inscricaoEstadual: "123.456.789",
    endereco: "Av. Paulista, 1000",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01310-100",
    telefone: "(11) 3456-7890",
    email: "contato@abcconstrucoes.com.br",
    website: "www.abcconstrucoes.com.br",
    descricao: "Empresa líder no setor de construção civil, com mais de 20 anos de experiência no mercado.",
    areaAtuacao: "Construção Civil"
  })

  // Documentos da empresa
  const documentos = [
    { id: 1, nome: "Contrato_Social.pdf", tipo: "Contrato Social", data: "10/01/2024" },
    { id: 2, nome: "CNPJ.pdf", tipo: "Comprovante CNPJ", data: "10/01/2024" },
    { id: 3, nome: "Certidao_Federal.pdf", tipo: "Certidão Federal", data: "10/01/2024" },
    { id: 4, nome: "Alvara.pdf", tipo: "Alvará de Funcionamento", data: "10/01/2024" }
  ]

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError("")
    setSuccess(false)

    try {
      // Simulação de envio - em produção, isso seria uma chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
      
      // Limpar mensagem de sucesso após 3 segundos
      setTimeout(() => {
        setSuccess(false)
      }, 3000)
    } catch (err) {
      setError("Erro ao salvar as alterações. Tente novamente.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="empresa" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="https://logo.clearbit.com/abcconstrucoes.com.br"
                  alt="ABC Construções"
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Perfil da Empresa</h1>
                <p className="text-gray-600">Gerencie as informações da sua empresa</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="informacoes" className="space-y-4">
            <TabsList>
              <TabsTrigger value="informacoes">Informações Gerais</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
              <TabsTrigger value="preferencias">Preferências</TabsTrigger>
            </TabsList>

            <TabsContent value="informacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Empresa</CardTitle>
                  <CardDescription>
                    Mantenha os dados da sua empresa atualizados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="razaoSocial">Razão Social</Label>
                        <Input
                          id="razaoSocial"
                          value={dadosEmpresa.razaoSocial}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, razaoSocial: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                        <Input
                          id="nomeFantasia"
                          value={dadosEmpresa.nomeFantasia}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, nomeFantasia: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cnpj">CNPJ</Label>
                        <Input
                          id="cnpj"
                          value={dadosEmpresa.cnpj}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, cnpj: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                        <Input
                          id="inscricaoEstadual"
                          value={dadosEmpresa.inscricaoEstadual}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, inscricaoEstadual: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="endereco">Endereço</Label>
                        <Input
                          id="endereco"
                          value={dadosEmpresa.endereco}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, endereco: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cidade">Cidade</Label>
                        <Input
                          id="cidade"
                          value={dadosEmpresa.cidade}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, cidade: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="estado">Estado</Label>
                        <Input
                          id="estado"
                          value={dadosEmpresa.estado}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, estado: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cep">CEP</Label>
                        <Input
                          id="cep"
                          value={dadosEmpresa.cep}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, cep: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          value={dadosEmpresa.telefone}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, telefone: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={dadosEmpresa.email}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, email: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={dadosEmpresa.website}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, website: e.target.value})}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="areaAtuacao">Área de Atuação</Label>
                        <Input
                          id="areaAtuacao"
                          value={dadosEmpresa.areaAtuacao}
                          onChange={(e) => setDadosEmpresa({...dadosEmpresa, areaAtuacao: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="descricao">Descrição da Empresa</Label>
                      <Textarea
                        id="descricao"
                        value={dadosEmpresa.descricao}
                        onChange={(e) => setDadosEmpresa({...dadosEmpresa, descricao: e.target.value})}
                        rows={4}
                      />
                    </div>

                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-600">Alterações salvas com sucesso!</p>}

                    <Button type="submit" disabled={saving}>
                      {saving ? "Salvando..." : "Salvar Alterações"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentos">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                  <CardDescription>
                    Gerencie os documentos da empresa. Mantenha seus documentos atualizados para garantir a validação do cadastro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Enviar Novo Documento
                    </Button>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Documentos Enviados</h3>
                      <div className="space-y-2">
                        {documentos.map((documento) => (
                          <div
                            key={documento.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                          >
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-gray-500" />
                              <div>
                                <p className="font-medium">{documento.nome}</p>
                                <p className="text-sm text-gray-500">
                                  {documento.tipo} - Enviado em {documento.data}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferencias">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências</CardTitle>
                  <CardDescription>
                    Configure suas preferências de notificação e comunicação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Notificações por E-mail</h3>
                        <p className="text-sm text-gray-500">
                          Receba atualizações sobre novos profissionais e contratos
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="emailNotif" className="rounded" />
                        <Label htmlFor="emailNotif">Ativar</Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Notificações por SMS</h3>
                        <p className="text-sm text-gray-500">
                          Receba alertas importantes por mensagem de texto
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="smsNotif" className="rounded" />
                        <Label htmlFor="smsNotif">Ativar</Label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Newsletter</h3>
                        <p className="text-sm text-gray-500">
                          Receba novidades e atualizações da plataforma
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded" />
                        <Label htmlFor="newsletter">Ativar</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
