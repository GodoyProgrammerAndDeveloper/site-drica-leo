# Rodar o projeto Vite
Write-Host "🚀 Iniciando Drica & Leo React" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host ""

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
    npm install
}

Write-Host "🚀 Servidor Vite iniciando..." -ForegroundColor Green
Write-Host "📁 Acesse: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""

npm run dev
