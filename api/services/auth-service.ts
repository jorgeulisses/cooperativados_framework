// Serviço de autenticação
import { getDatabase } from "../db"
import { hash, compare } from "bcrypt"
import { sign, verify } from "jsonwebtoken"

// Interface para usuário
export interface User {
  id: string
  nome: string
  email: string
  senha: string
  telefone: string
  tipo: "admin" | "trabalhador" | "empresa"
  status: "ativo" | "inativo"
  data_criacao: Date
  data_atualizacao: Date
}

// Interface para token
export interface TokenPayload {
  userId: string
  email: string
  tipo: string
}

export class AuthService {
  // Registrar um novo usuário
  static async register(userData: Omit<User, "id" | "data_criacao" | "data_atualizacao">): Promise<User> {
    const db = await getDatabase()

    // Verificar se o email já está em uso
    const existingUser = await db.findOne<User>("usuarios", { email: userData.email })
    if (existingUser) {
      throw new Error("Email já está em uso")
    }

    // Criptografar a senha
    const hashedPassword = await hash(userData.senha, 10)

    // Criar o usuário
    const newUser = await db.insertOne<User>("usuarios", {
      ...userData,
      senha: hashedPassword,
      status: "ativo",
      data_criacao: new Date(),
      data_atualizacao: new Date(),
    })

    return newUser
  }

  // Autenticar um usuário
  static async login(email: string, senha: string): Promise<{ user: Omit<User, "senha">; token: string }> {
    const db = await getDatabase()

    // Buscar o usuário pelo email
    const user = await db.findOne<User>("usuarios", { email })
    if (!user) {
      throw new Error("Credenciais inválidas")
    }

    // Verificar se o usuário está ativo
    if (user.status !== "ativo") {
      throw new Error("Usuário inativo")
    }

    // Verificar a senha
    const passwordMatch = await compare(senha, user.senha)
    if (!passwordMatch) {
      throw new Error("Credenciais inválidas")
    }

    // Gerar token JWT
    const token = sign(
      { userId: user.id, email: user.email, tipo: user.tipo } as TokenPayload,
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1d" },
    )

    // Remover a senha do objeto de usuário
    const { senha: _, ...userWithoutPassword } = user

    return { user: userWithoutPassword, token }
  }

  // Verificar token
  static async verifyToken(token: string): Promise<TokenPayload> {
    try {
      const decoded = verify(token, process.env.JWT_SECRET || "secret") as TokenPayload
      return decoded
    } catch (error) {
      throw new Error("Token inválido")
    }
  }

  // Obter usuário pelo ID
  static async getUserById(id: string): Promise<Omit<User, "senha"> | null> {
    const db = await getDatabase()

    const user = await db.findOne<User>("usuarios", { id })
    if (!user) {
      return null
    }

    // Remover a senha do objeto de usuário
    const { senha: _, ...userWithoutPassword } = user

    return userWithoutPassword
  }
}

