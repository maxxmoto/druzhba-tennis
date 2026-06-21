@echo off
cd /d "C:\Users\Asus\Desktop\druzhba_site"
echo Server started at http://localhost:8000
echo Press Ctrl+C to stop
python -m http.server 8000
pause
