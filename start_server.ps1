Set-Location -LiteralPath "C:\Users\Asus\Desktop\druzhba_site"
Write-Host "Сервер запущен на http://localhost:8000"
Write-Host "Нажми Ctrl+C для остановки"
python -m http.server 8000
