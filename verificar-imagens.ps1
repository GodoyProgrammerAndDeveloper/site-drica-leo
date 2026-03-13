# Verificar imagens necessárias
Write-Host "🔍 VERIFICANDO IMAGENS NECESSÁRIAS" -ForegroundColor Cyan
Write-Host "==================================`n"

$imagensNecessarias = @(
    "guarda-roupas-1.png",
    "guarda-roupas-2.png",
    "cozinha-1.png",
    "cozinha-2.png",
    "escritorio-1.png",
    "escritorio-2.png",
    "sala-1.png",
    "kids-1.png",
    "despensa-1.png",
    "drica.png",
    "leo.png",
    "guarda-roupas-antes-1.png",
    "guarda-roupas-depois-1.png",
    "cozinha-antes-1.png",
    "cozinha-depois-1.png",
    "escritorio-antes-1.png",
    "escritorio-depois-1.png",
    "sala-antes-1.png",
    "sala-depois-1.png",
    "kids-antes-1.png",
    "kids-depois-1.png",
    "despensa-antes-1.png",
    "despensa-depois-1.png"
)

$encontradas = 0
$faltando = @()

foreach ($img in $imagensNecessarias) {
    if (Test-Path "public/images/$img") {
        Write-Host "✅ $img" -ForegroundColor Green
        $encontradas++
    } else {
        Write-Host "❌ $img" -ForegroundColor Red
        $faltando += $img
    }
}

Write-Host "`n📊 RESULTADO:" -ForegroundColor Cyan
Write-Host "   Encontradas: $encontradas de $($imagensNecessarias.Count)" -ForegroundColor Yellow

if ($faltando.Count -eq 0) {
    Write-Host "`n🎉 TODAS AS IMAGENS ESTÃO OK!" -ForegroundColor Green
    Write-Host "   Agora é só rodar: npm run dev" -ForegroundColor Cyan
} else {
    Write-Host "`n⚠️  FALTAM $($faltando.Count) IMAGENS:" -ForegroundColor Red
    foreach ($img in $faltando) {
        Write-Host "   - $img" -ForegroundColor Yellow
    }
}
