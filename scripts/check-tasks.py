import json

with open("lighthouse-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

items = data["audits"].get("main-thread-tasks", {}).get("details", {}).get("items", [])
for item in items:
    dur = item.get("duration", 0)
    if dur > 30:
        print(f"Start: {item.get('startTime'):.1f}ms | Duration: {dur:.1f}ms")
