import subprocess
import time
import json
import os
import urllib.request

PORT = 8085

# Start official Vercel 'serve' static server
server_proc = subprocess.Popen(
    ["npx.cmd", "serve", "out", "-p", str(PORT)],
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL
)

print(f"Waiting for Vercel static server on port {PORT}...")
ready = False
for _ in range(30):
    try:
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/", timeout=1) as res:
            if res.status == 200:
                ready = True
                break
    except Exception:
        time.sleep(0.3)

if not ready:
    print("Server failed to start!")
    server_proc.kill()
    exit(1)

print(f"Vercel static server ready on http://127.0.0.1:{PORT}")

cmd = [
    "npx.cmd", "lighthouse",
    f"http://127.0.0.1:{PORT}/",
    "--output=json",
    "--output-path=./lighthouse-report.json",
    "--chrome-flags=--headless --no-sandbox --disable-gpu",
    "--form-factor=mobile",
    "--only-categories=performance,accessibility,best-practices,seo",
    "--quiet"
]

print("Executing Lighthouse mobile audit against Vercel static server...")
try:
    subprocess.run(cmd, check=True, shell=True)
except Exception:
    pass
finally:
    try:
        subprocess.run(["taskkill", "/F", "/T", "/PID", str(server_proc.pid)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception:
        pass

if os.path.exists("lighthouse-report.json"):
    with open("lighthouse-report.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    cats = data.get("categories", {})
    print("\n================ LIGHTHOUSE AUDIT SCORES ================")
    for k, v in cats.items():
        print(f"{v.get('title')}: {int((v.get('score') or 0) * 100)}")
    print("=========================================================\n")
