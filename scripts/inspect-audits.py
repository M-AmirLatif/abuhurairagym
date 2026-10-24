import json

with open("lighthouse-report.json", "r", encoding="utf-8") as f:
    data = json.load(f)

audits = data.get("audits", {})

def check(name):
    a = audits.get(name, {})
    print(f"\n=== {name} ===")
    print("Score:", a.get("score"))
    print("Explanation:", a.get("title"))
    items = a.get("details", {}).get("items", [])
    for it in items[:6]:
        print(it)

check("color-contrast")
check("heading-order")
check("label-content-name-mismatch")
check("target-size")
check("render-blocking-resources")
check("largest-contentful-paint-element")
