"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
  Upload,
  X,
  DollarSign,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TrabalhadorPerfilPage() {
  const [activeTab, setActiveTab] = useState("informacoes")
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // Dados do perfil
  const [nome, setNome] = useState("João Silva")
  const [email, setEmail] = useState("joao.silva@email.com")
  const [telefone, setTelefone] = useState("(11) 98765-4321")
  const [endereco, setEndereco] = useState("Av. Paulista, 1000, Apto 123")
  const [cidade, setCidade] = useState("São Paulo")
  const [estado, setEstado] = useState("SP")
  const [cep, setCep] = useState("01310-100")
  const [cpf, setCpf] = useState("123.456.789-00")
  const [dataNascimento, setDataNascimento] = useState("15/05/1985")
  const [area, setArea] = useState("construcao")
  const [funcao, setFuncao] = useState("Eletricista")
  const [experiencia, setExperiencia] = useState(
    "10 anos de experiência em instalações elétricas residenciais e comerciais. Especialista em instalações de alta tensão e manutenção preventiva.",
  )
  const [valorHora, setValorHora] = useState("40,00")

  // Documentos
  const documentos = [
    { id: 1, nome: "RG.pdf", tipo: "Documento de Identidade", data: "10/01/2023" },
    { id: 2, nome: "CPF.pdf", tipo: "CPF", data: "10/01/2023" },
    { id: 3, nome: "Comprovante_Residencia.pdf", tipo: "Comprovante de Residência", data: "10/01/2023" },
    { id: 4, nome: "Certificado_NR10.pdf", tipo: "Certificado Profissional", data: "10/01/2023" },
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
      setError("Ocorreu um erro ao salvar as informações. Por favor, tente novamente.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="trabalhador" />

      <div className="flex-1 md:ml-64">
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Meu Perfil</h1>
              <p className="text-gray-600">Gerencie suas informações pessoais e profissionais</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <TabsTrigger value="informacoes">Informações Pessoais</TabsTrigger>
              <TabsTrigger value="profissional">Informações Profissionais</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
            </TabsList>

            <TabsContent value="informacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    Atualize suas informações pessoais. Estas informações serão exibidas publicamente, então tenha
                    cuidado com o que você compartilha.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile}>
                    {error && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="mb-4 bg-green-50 text-green-600 border-green-200">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>Informações salvas com sucesso!</AlertDescription>
                      </Alert>
                    )}

                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative">
                          <Image
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Foto de Perfil"
                            width={150}
                            height={150}
                            className="rounded-full"
                          />
                          <Button
                            size="sm"
                            variant="outline"
                            className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                          >
                            <Upload className="h-4 w-4" />
                            <span className="sr-only">Alterar foto</span>
                          </Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Clique para alterar a foto</p>
                      </div>

                      <div className="md:w-2/3 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nome">Nome Completo</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="telefone">Telefone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                className="pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                              id="cpf"
                              value={cpf}
                              onChange={(e) => setCpf(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                            <Input
                              id="dataNascimento"
                              value={dataNascimento}
                              onChange={(e) => setDataNascimento(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="endereco">Endereço</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="endereco"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cidade">Cidade</Label>
                          <Input id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="estado">Estado</Label>
                          <Select value={estado} onValueChange={setEstado}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o estado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="SP">São Paulo</SelectItem>
                              <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                              <SelectItem value="MG">Minas Gerais</SelectItem>
                              <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                              <SelectItem value="PR">Paraná</SelectItem>
                              <SelectItem value="SC">Santa Catarina</SelectItem>
                              <SelectItem value="BA">Bahia</SelectItem>
                              <SelectItem value="DF">Distrito Federal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cep">CEP</Label>
                          <Input id="cep" value={cep} onChange={(e) => setCep(e.target.value)} required />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button type="submit" disabled={saving}>
                        {saving ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Salvando...
                          </span>
                        ) : (
                          "Salvar Alterações"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profissional">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Profissionais</CardTitle>
                  <CardDescription>
                    Atualize suas informações profissionais. Estas informações serão utilizadas para encontrar
                    oportunidades adequadas ao seu perfil.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveProfile}>
                    {error && (
                      <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    {success && (
                      <Alert className="mb-4 bg-green-50 text-green-600 border-green-200">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>Informações salvas com sucesso!</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="area">Área de Atuação</Label>
                          <Select value={area} onValueChange={setArea}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione sua área" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="construcao">Construção Civil</SelectItem>
                              <SelectItem value="tecnologia">Tecnologia</SelectItem>
                              <SelectItem value="administrativo">Administrativo</SelectItem>
                              <SelectItem value="logistica">Logística</SelectItem>
                              <SelectItem value="saude">Saúde</SelectItem>
                              <SelectItem value="educacao">Educação</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="funcao">Função</Label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="funcao"
                              value={funcao}
                              onChange={(e) => setFuncao(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experiencia">Experiência Profissional</Label>
                        <Textarea
                          id="experiencia"
                          value={experiencia}
                          onChange={(e) => setExperiencia(e.target.value)}
                          rows={5}
                          placeholder="Descreva sua experiência profissional, habilidades e qualificações"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="valorHora">Valor da Hora (R$)</Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="valorHora"
                              value={valorHora}
                              onChange={(e) => setValorHora(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                          <p className="text-sm text-gray-500">
                            Este valor é uma referência e pode ser ajustado pela administração.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Button type="submit" disabled={saving}>
                        {saving ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Salvando...
                          </span>
                        ) : (
                          "Salvar Alterações"
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documentos">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                  <CardDescription>
                    Gerencie seus documentos. Mantenha seus documentos atualizados para garantir a validação do seu
                    cadastro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Documentos Enviados</h3>

                      <div className="space-y-2">
                        {documentos.map((documento) => (
                          <div
                            key={documento.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                          >
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-blue-600 mr-3" />
                              <div>
                                <p className="font-medium">{documento.nome}</p>
                                <p className="text-sm text-gray-500">
                                  {documento.tipo} - Enviado em {documento.data}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <FileText className="h-4 w-4 mr-1" />
                                Ver
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-600 hover:bg-red-50"
                              >
                                <X className="h-4 w-4 mr-1" />
                                Remover
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4">Enviar Novo Documento</h3>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="tipoDocumento">Tipo de Documento</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo de documento" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="identidade">Documento de Identidade</SelectItem>
                              <SelectItem value="cpf">CPF</SelectItem>
                              <SelectItem value="comprovante">Comprovante de Residência</SelectItem>
                              <SelectItem value="certificado">Certificado Profissional</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="arquivo">Arquivo</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 mb-2">
                              Arraste e solte um arquivo aqui, ou clique para selecionar
                            </p>
                            <p className="text-xs text-gray-400">Formatos aceitos: PDF, JPG, PNG (máx. 5MB)</p>
                            <Input id="arquivo" type="file" className="hidden" />
                            <Button variant="outline" size="sm" className="mt-4">
                              Selecionar Arquivo
                            </Button>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button>
                            <Upload className="h-4 w-4 mr-2" />
                            Enviar Documento
                          </Button>
                        </div>
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

