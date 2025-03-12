// Interface de abstração para o banco de dados
// Este arquivo define uma interface genérica para operações de banco de dados,
// permitindo que diferentes implementações de banco de dados sejam utilizadas

export interface DatabaseAdapter {
  // Métodos genéricos
  findOne: <T>(collection: string, query: any) => Promise<T | null>
  findMany: <T>(collection: string, query?: any, options?: any) => Promise<T[]>
  insertOne: <T>(collection: string, data: any) => Promise<T>
  updateOne: <T>(collection: string, query: any, data: any) => Promise<T | null>
  deleteOne: (collection: string, query: any) => Promise<boolean>
  count: (collection: string, query?: any) => Promise<number>

  // Métodos específicos
  transaction: <T>(callback: (session: any) => Promise<T>) => Promise<T>
  aggregate: <T>(collection: string, pipeline: any[]) => Promise<T[]>

  // Conexão
  connect: () => Promise<void>
  disconnect: () => Promise<void>
}

// Factory para criar uma instância do adaptador de banco de dados
export const createDatabaseAdapter = (type: "postgres" | "mysql" | "mongodb" | "sqlite"): DatabaseAdapter => {
  switch (type) {
    case "postgres":
      // return new PostgresAdapter()
      throw new Error("Adaptador PostgreSQL não implementado")
    case "mysql":
      // return new MySQLAdapter()
      throw new Error("Adaptador MySQL não implementado")
    case "mongodb":
      // return new MongoDBAdapter()
      throw new Error("Adaptador MongoDB não implementado")
    case "sqlite":
      // return new SQLiteAdapter()
      throw new Error("Adaptador SQLite não implementado")
    default:
      throw new Error(`Tipo de banco de dados não suportado: ${type}`)
  }
}

// Instância padrão do adaptador de banco de dados
let dbInstance: DatabaseAdapter | null = null

// Função para obter a instância do banco de dados
export const getDatabase = async (): Promise<DatabaseAdapter> => {
  if (!dbInstance) {
    // Determinar o tipo de banco de dados a partir das variáveis de ambiente
    const dbType = (process.env.DATABASE_TYPE as "postgres" | "mysql" | "mongodb" | "sqlite") || "sqlite"

    dbInstance = createDatabaseAdapter(dbType)
    await dbInstance.connect()
  }

  return dbInstance
}

// Função para fechar a conexão com o banco de dados
export const closeDatabase = async (): Promise<void> => {
  if (dbInstance) {
    await dbInstance.disconnect()
    dbInstance = null
  }
}

