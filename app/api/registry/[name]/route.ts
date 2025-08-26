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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params
    const registryPath = path.join(process.cwd(), 'public', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf-8')
    const registry: Registry = JSON.parse(registryContent)
    
    const item = registry.registry.find((item: RegistryItem) => item.name === name)
    
    if (!item) {
      return NextResponse.json(
        { error: 'Registry item not found' },
        { status: 404 }
      )
    }
    
    // Read all the files referenced in the registry item
    const files = await Promise.all(
      item.files.map(async (file: RegistryFile) => {
        try {
          const filePath = path.join(process.cwd(), file.path)
          const content = fs.readFileSync(filePath, 'utf-8')
          return {
            name: file.name,
            path: file.path,
            target: file.target,
            content
          }
        } catch (error) {
          console.error(`Error reading file ${file.path}:`, error)
          return {
            name: file.name,
            path: file.path,
            target: file.target,
            content: null,
            error: 'File not found'
          }
        }
      })
    )
    
    const response = {
      ...item,
      files
    }
    
    return NextResponse.json(response)
  } catch (error) {
    console.error('Error reading registry item:', error)
    return NextResponse.json(
      { error: 'Failed to load registry item' },
      { status: 500 }
    )
  }
}
