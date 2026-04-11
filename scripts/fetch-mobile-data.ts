import https from "https";

function fetchUrl(url: string): Promise<{status: number, data: string}> {
  return new Promise((resolve) => {
    https.get(url, { timeout: 10000, headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      let d = "";
      res.on("data", (c: string) => (d += c));
      res.on("end", () => resolve({ status: res.statusCode || 0, data: d }));
    }).on("error", () => resolve({ status: 0, data: "" }));
  });
}

async function main() {
  console.log("Final verification batch:");
  const ids: [string, string][] = [
    ["ZZZ Equalizing Test", "MK9P3Rqf7_g"],
    ["WuWa v2.2", "yQXQ3s3SuIs"],
    ["AFK Journey PAX Release", "HTZBOt9440E"],
    ["SB Launch Trailer", "aFHM24c86p0"],
    ["BS Sara Carr 1", "fWuzPKIpH0s"],
    ["BS Sara Carr 2", "0cOsLTM5l9c"],
    ["BS Sara Carr 3", "UhjYfL-fdR0"],
    ["BS Toy Story AWN", "6F3pA_cwMgo"],
    ["SB Transformers", "8BCod_NjEbo"],
  ];
  for (const [name, id] of ids) {
    const r = await fetchUrl(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`);
    const d = JSON.parse(r.data);
    console.log(`  [${d.error ? 'FAIL' : 'OK'}] ${name} (${id}): ${d.title || d.error}`);
  }
}

main().catch(console.error);
