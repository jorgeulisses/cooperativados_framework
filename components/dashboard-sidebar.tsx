// Componente de barra lateral para os dashboards
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, Building, Settings, LogOut, Menu, X, Home, FileText, DollarSign, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarProps {
  userType: "admin" | "trabalhador" | "empresa"
}

export default function DashboardSidebar({ userType }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  const adminLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/admin/trabalhadores", label: "Trabalhadores", icon: <Users className="h-5 w-5" /> },
    { href: "/admin/empresas", label: "Empresas", icon: <Building className="h-5 w-5" /> },
    { href: "/admin/relatorios", label: "Relatórios", icon: <FileText className="h-5 w-5" /> },
    { href: "/admin/financeiro", label: "Financeiro", icon: <DollarSign className="h-5 w-5" /> },
    { href: "/admin/configuracoes", label: "Configurações", icon: <Settings className="h-5 w-5" /> },
  ]

  const trabalhadorLinks = [
    { href: "/trabalhador/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/trabalhador/servicos", label: "Meus Serviços", icon: <Calendar className="h-5 w-5" /> },
    { href: "/trabalhador/pagamentos", label: "Pagamentos", icon: <DollarSign className="h-5 w-5" /> },
    { href: "/trabalhador/perfil", label: "Meu Perfil", icon: <User className="h-5 w-5" /> },
  ]

  const empresaLinks = [
    { href: "/empresa/dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { href: "/empresa/trabalhadores", label: "Trabalhadores", icon: <Users className="h-5 w-5" /> },
    { href: "/empresa/contratos", label: "Contratos", icon: <FileText className="h-5 w-5" /> },
    { href: "/empresa/financeiro", label: "Financeiro", icon: <DollarSign className="h-5 w-5" /> },
    { href: "/empresa/perfil", label: "Perfil da Empresa", icon: <Building className="h-5 w-5" /> },
  ]

  const links = userType === "admin" ? adminLinks : userType === "trabalhador" ? trabalhadorLinks : empresaLinks

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="px-4 py-6">
        <h2 className="text-xl font-bold text-blue-600">Cooperativados</h2>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
              ${
                isActive(link.href)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              }
            `}
            onClick={isMobile ? toggleSidebar : undefined}
          >
            {link.icon}
            <span className="ml-3">{link.label}</span>
          </Link>
        ))}
      </nav>
      <div className="px-4 py-4 border-t">
        <Button
          variant="outline"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={() => (window.location.href = "/login")}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sair
        </Button>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <>
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black/50" onClick={toggleSidebar} aria-hidden="true" />
            <div className="relative flex flex-col w-64 max-w-xs bg-white z-10 shadow-xl">
              <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 p-1 rounded-md"
                aria-label="Close sidebar"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
              {sidebarContent}
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-white border-r">{sidebarContent}</div>
  )
}

