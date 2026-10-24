import json

with open("lighthouse-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("--- AUDIT SCORES ---")
for k, v in data.get("categories", {}).items():
    score = int((v.get("score") or 0) * 100)
    print(f"{v.get('title')}: {score}")

print("\n--- AUDIT DETAILS ---")
for audit_name, audit in data.get("audits", {}).items():
    if audit.get("score") is not None and audit.get("score") < 1.0:
        print(f"[{audit_name}] (score={audit.get('score')}): {audit.get('title')}")
