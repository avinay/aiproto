import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface RegistryFile {
  name: string
  path: string
  target: string
  content: string
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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params
    const registryPath = path.join(process.cwd(), 'public', 'registry-with-content.json')
    const registryContent = fs.readFileSync(registryPath, 'utf-8')
    const registry: Registry = JSON.parse(registryContent)
    
    const item = registry.registry.find((item: RegistryItem) => item.name === name)
    
    if (!item) {
      return NextResponse.json(
        { error: 'Registry item not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(item)
  } catch (error) {
    console.error('Error reading registry item with content:', error)
    return NextResponse.json(
      { error: 'Failed to load registry item with content' },
      { status: 500 }
    )
  }
}
