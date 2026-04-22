import json
import urllib.request
import urllib.error

TURSO_URL = "https://pixels-in-space-ronm055.aws-eu-west-1.turso.io/v2/pipeline"
AUTH_TOKEN = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzQ5NTUxNzIsImlkIjoiMDE5ZDQzOTItMTQwMS03NTgxLWIwMzQtZGZiNzQ5ZmM5MGJmIiwicmlkIjoiY2M3NGU4OWQtNzMxZC00YzYzLTlhMDUtNjczYmI4ZTNmNGI0In0.7ovsSPQdphTQF4MsAybgFVsK-9wX6qIEkmmauLn3OQM6hJ4CPH9kl-fzND3Or0Dp16p7lLpkoHWmxW98pWV4DQ"


def read_content(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def insert_article(article):
    sql = (
        "INSERT INTO Article (id, slug, title, content, summary, imageUrl, "
        "category, status, publishedAt, tags, createdAt, updatedAt) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    )
    args = [
        {"type": "text", "value": article["id"]},
        {"type": "text", "value": article["slug"]},
        {"type": "text", "value": article["title"]},
        {"type": "text", "value": article["content"]},
        {"type": "text", "value": article["summary"]},
        {"type": "text", "value": article["imageUrl"]},
        {"type": "text", "value": article["category"]},
        {"type": "text", "value": article["status"]},
        {"type": "text", "value": article["publishedAt"]},
        {"type": "text", "value": article["tags"]},
        {"type": "text", "value": article["createdAt"]},
        {"type": "text", "value": article["updatedAt"]},
    ]
    body = {
        "requests": [
            {"type": "execute", "stmt": {"sql": sql, "args": args}}
        ]
    }
    data = json.dumps(body).encode("utf-8")
    req = urllib.request.Request(
        TURSO_URL,
        data=data,
        headers={
            "Authorization": f"Bearer {AUTH_TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            response_body = resp.read().decode("utf-8")
            print(f"OK {article['slug']}")
            print(response_body[:500])
            return True
    except urllib.error.HTTPError as e:
        print(f"FAIL {article['slug']}: HTTP {e.code}")
        print(e.read().decode("utf-8", errors="replace"))
        return False
    except Exception as e:
        print(f"FAIL {article['slug']}: {e}")
        return False


articles = [
    {
        "id": "art_20260422_moa_peter_molyneux",
        "slug": "masters-of-albion-early-access-peter-molyneux-22cans-god-game-april-22-2026",
        "title": "Masters of Albion Launches in Early Access Today as Peter Molyneux's 22cans Returns to the God Game With a Build-by-Day, Defend-by-Night Hook",
        "content": read_content(r"C:\Ron\RonProjects\GamingWebsite\tmp_articles\masters_of_albion.html"),
        "summary": "Peter Molyneux and 22cans' ambitious new god game Masters of Albion hits Steam Early Access today at $24.99. The genre-blending project combines city-building, simulation, and action RPG in a Build by Day, Defend by Night loop.",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3165650/ad4c1b01882b7e261257f8c4b0f10d327f9c0c7c/ss_ad4c1b01882b7e261257f8c4b0f10d327f9c0c7c.1920x1080.jpg",
        "category": "news",
        "status": "published",
        "publishedAt": "2026-04-22T19:00:00.000Z",
        "tags": json.dumps(["Masters of Albion", "Peter Molyneux", "22cans", "Early Access", "God Game", "Steam", "PC"]),
        "createdAt": "2026-04-22T19:00:00.000Z",
        "updatedAt": "2026-04-22T19:00:00.000Z",
    },
    {
        "id": "art_20260422_tot_digixart",
        "slug": "tides-of-tomorrow-launch-digixart-thq-nordic-story-link-plasticpunk-april-22-2026",
        "title": "Tides of Tomorrow Launches Today as DigixArt's Plasticpunk Adventure Ties Player Choices Together Across the Community With Online Story-Link",
        "content": read_content(r"C:\Ron\RonProjects\GamingWebsite\tmp_articles\tides_of_tomorrow.html"),
        "summary": "From the creators of Road 96, Tides of Tomorrow launches today on PS5, Xbox Series X|S, and PC. The plasticpunk narrative adventure uses a novel Online Story-Link system that weaves player choices together across the community.",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2678080/32828fbf2f65901da1d3437aa60ddb0134aa820c/ss_32828fbf2f65901da1d3437aa60ddb0134aa820c.1920x1080.jpg",
        "category": "news",
        "status": "published",
        "publishedAt": "2026-04-22T17:00:00.000Z",
        "tags": json.dumps(["Tides of Tomorrow", "DigixArt", "THQ Nordic", "Narrative Adventure", "PS5", "Xbox", "PC", "Road 96"]),
        "createdAt": "2026-04-22T17:00:00.000Z",
        "updatedAt": "2026-04-22T17:00:00.000Z",
    },
    {
        "id": "art_20260407_sos_mobile_playdigious",
        "slug": "sea-of-stars-mobile-ios-android-playdigious-premium-launch-april-7-2026",
        "title": "Sea of Stars Brings Its Acclaimed Retro JRPG to iOS and Android as Playdigious Delivers a Premium, Microtransaction-Free Mobile Port",
        "content": read_content(r"C:\Ron\RonProjects\GamingWebsite\tmp_articles\sea_of_stars_mobile.html"),
        "summary": "Sabotage Studio's six-million-selling turn-based RPG Sea of Stars is now available on iOS and Android through Playdigious for $9.99. The mobile port delivers the full campaign with touch controls, controller support, and zero microtransactions.",
        "imageUrl": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244090/ss_f756ff477590284c7192ffcef99237de056e4aeb.1920x1080.jpg",
        "category": "mobile",
        "status": "published",
        "publishedAt": "2026-04-07T15:00:00.000Z",
        "tags": json.dumps(["Sea of Stars", "Sabotage Studio", "Playdigious", "Mobile", "iOS", "Android", "JRPG", "Turn-Based"]),
        "createdAt": "2026-04-07T15:00:00.000Z",
        "updatedAt": "2026-04-07T15:00:00.000Z",
    },
]


if __name__ == "__main__":
    for article in articles:
        insert_article(article)
        print("-" * 60)
