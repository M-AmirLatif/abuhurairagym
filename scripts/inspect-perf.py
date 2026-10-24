import json

with open("lighthouse-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

perfaudits = data["categories"]["performance"]["auditRefs"]
for a in perfaudits:
    aid = a["id"]
    w = a.get("weight", 0)
    audit = data["audits"].get(aid, {})
    score = audit.get("score")
    val = audit.get("displayValue", "")
    print(f"{aid:30} weight: {w:2} | score: {str(score):5} | val: {val}")
