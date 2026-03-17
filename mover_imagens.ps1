cd "C:\Users\User\Desktop\drica-leo-site-completo\public\images"

# Mapeamento de arquivos para pastas
$mapping = @{
    "guarda-roupas" = @(
        "Cabide Roupoas Masculinas.jpeg", "Closet Antes.jpeg", "Closet masculino.jpeg", 
        "Closet masculino_02.jpeg", "closet.jpeg", "closet2.jpeg", "closet3.jpeg", 
        "Roupas Antes.jpeg", "Roupas Antes_02.jpeg", "Roupas Depois.jpeg", 
        "Roupas Depois_02.jpeg", "Roupas Feminias antes.jpeg", "Roupas Feminias Depois.jpeg"
    )
    "cozinha" = @(
        "Despensa Antes_01.jpeg", "Despensa Antes_02.jpeg", "Despensa Depois_01.jpeg",
        "Despensa Depois_02.jpeg", "despensa.jpeg", "Louça organizada_01.jpeg", 
        "Louça organizada_02.jpeg"
    )
    "escritorio" = @(
        "Papelaria Antes.jpeg", "Papelaria Depois.jpeg"
    )
    "organizacao" = @(
        "Comeias_01.jpeg", "Organizando rasteiras nas colmeias.jpeg", 
        "Organização com colmeias.jpeg", "Organização comeias frente Antes.jpeg",
        "Organização comeias frente Depois.jpeg", "Organização comeias Lado Esquerdo Antes.jpeg",
        "Organização comeias Lado Esquerdo Depois.jpeg", "Organização de toalhas_01.jpeg",
        "Organização de toalhas_02.jpeg", "Organização pós mudança_01.jpeg",
        "Organização pós mudança_02.jpeg", "organização.jpeg", "organização2.jpeg",
        "organização3.jpeg", "organização4.jpeg", "quarto.jpeg"
    )
    "sapatos" = @(
        "Sapatos Depois.jpeg", "sapateira.jpeg", "prateleira antes.jpeg", "prateleira depois.jpeg"
    )
}

# Executar movimentação
foreach ($pasta in $mapping.Keys) {
    foreach ($arquivo in $mapping[$pasta]) {
        $fullpath = (Get-ChildItem -Filter $arquivo -ErrorAction SilentlyContinue).FullName
        if ($fullpath) {
            Move-Item -Path $fullpath -Destination "$pasta\" -Force -ErrorAction SilentlyContinue
            Write-Host "Movido: $arquivo -> $pasta"
        }
    }
}

Write-Host "`nOK - Imagens organizadas!"
Write-Host "`nResumo:"
Get-ChildItem -Directory | ForEach-Object { Write-Host "$($_.Name): $($(Get-ChildItem $_.FullName -File | Measure-Object).Count) arquivos" }
