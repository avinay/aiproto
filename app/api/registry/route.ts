import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const registryPath = path.join(process.cwd(), 'public', 'registry.json')
    const registryContent = fs.readFileSync(registryPath, 'utf-8')
    const registry = JSON.parse(registryContent)
    
    return NextResponse.json(registry)
  } catch (error) {
    console.error('Error reading registry:', error)
    return NextResponse.json(
      { error: 'Failed to load registry' },
      { status: 500 }
    )
  }
}
