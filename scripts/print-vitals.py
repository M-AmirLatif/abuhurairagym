import json

with open("lighthouse-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

audits = data.get("audits", {})
for k in ["first-contentful-paint", "largest-contentful-paint", "total-blocking-time", "cumulative-layout-shift", "speed-index"]:
    a = audits.get(k, {})
    print(f"{k}: score={a.get('score')}, value={a.get('displayValue')}")

print("\n--- Diagnostic Opportunities ---")
for k, v in audits.items():
    if v.get("details", {}).get("type") == "opportunity":
        savings = v.get("details", {}).get("overallSavingsMs", 0)
        if savings > 0:
            print(f"{k}: {savings}ms ({v.get('title')})")
