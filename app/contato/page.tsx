// Página de Contato da Cooperativados
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContatoPage() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [assunto, setAssunto] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setEnviado(true)
    setEnviando(false)

    // Limpar formulário
    setNome("")
    setEmail("")
    setTelefone("")
    setAssunto("")
    setMensagem("")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e ajudar no que for preciso.
          </p>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000, Bela Vista
                          <br />
                          São Paulo - SP, 01310-100
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-gray-600">
                          (11) 3456-7890
                          <br />
                          (11) 98765-4321
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">
                          contato@cooperativados.com.br
                          <br />
                          suporte@cooperativados.com.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                        <p className="text-gray-600">
                          Segunda a Sexta: 8h às 18h
                          <br />
                          Sábado: 9h às 13h
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>

              <Card>
                <CardContent className="p-6">
                  {enviado ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
                      <p className="text-gray-600 mb-6">
                        Agradecemos seu contato. Nossa equipe responderá o mais breve possível.
                      </p>
                      <Button onClick={() => setEnviado(false)}>Enviar Nova Mensagem</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="nome" className="text-sm font-medium">
                            Nome Completo
                          </label>
                          <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="telefone" className="text-sm font-medium">
                            Telefone
                          </label>
                          <Input
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="assunto" className="text-sm font-medium">
                            Assunto
                          </label>
                          <Select value={assunto} onValueChange={setAssunto} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o assunto" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="informacoes">Informações Gerais</SelectItem>
                              <SelectItem value="cadastro">Cadastro</SelectItem>
                              <SelectItem value="financeiro">Financeiro</SelectItem>
                              <SelectItem value="suporte">Suporte Técnico</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="mensagem" className="text-sm font-medium">
                          Mensagem
                        </label>
                        <Textarea
                          id="mensagem"
                          rows={5}
                          value={mensagem}
                          onChange={(e) => setMensagem(e.target.value)}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={enviando}>
                        {enviando ? (
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
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Enviar Mensagem
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65390548502211!3d-23.564611284681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1647532728040!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da Cooperativados"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como me cadastrar como profissional?</h3>
                <p className="text-gray-600">
                  Para se cadastrar como profissional, basta clicar no botão "Cadastrar" no menu superior, selecionar a
                  opção "Trabalhador" e preencher o formulário com seus dados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como contratar um profissional?</h3>
                <p className="text-gray-600">
                  Empresas cadastradas podem acessar o sistema, buscar profissionais por área de atuação e solicitar a
                  contratação diretamente pela plataforma.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona o pagamento?</h3>
                <p className="text-gray-600">
                  A empresa contratante paga à cooperativa, que repassa o valor ao profissional após descontar a taxa
                  administrativa. Todo o processo é transparente e seguro.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Quais documentos são necessários para cadastro?</h3>
                <p className="text-gray-600">
                  Para profissionais: RG, CPF, comprovante de residência e documentos que comprovem qualificação. Para
                  empresas: CNPJ, contrato social e documentos dos sócios.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Qual a área de atuação da cooperativa?</h3>
                <p className="text-gray-600">
                  Atualmente atendemos todo o território nacional, com maior concentração nas regiões Sul e Sudeste do
                  Brasil.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Como funciona a avaliação dos profissionais?</h3>
                <p className="text-gray-600">
                  Após cada serviço, as empresas podem avaliar os profissionais. Essa avaliação fica disponível no
                  perfil e ajuda a manter a qualidade dos serviços.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

