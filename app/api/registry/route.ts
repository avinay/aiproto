import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface RegistryFile {
  name: string
  path: string
  target: string
}

interface RegistryItem {
  name: string
  type: string
  registryDependencies: string[]
  files: RegistryFile[]
}

interface Registry {
  registry: RegistryItem[]
}

export async function GET() {
  try {
    const registryPath = path.join(process.cwd(), 'public', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf-8')
    const registry: Registry = JSON.parse(registryContent)
    
    return NextResponse.json(registry)
  } catch (error) {
    console.error('Error reading registry:', error)
    return NextResponse.json(
      { error: 'Failed to load registry' },
      { status: 500 }
    )
  }
}
