# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/aben00/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/aben00/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

Sum up 24 November 2026's world news in one image: a newspaper front page with 33 verified stories from Tuesday 24 November 2026 — from the Huawei verdict and the Strait of Hormuz tanker attacks to Ukraine's ship strikes, the ICJ's Rohingya genocide ruling, and Real Madrid's 5-1 Champions League win. Every headline is typeset with PIL so the spelling is exact and the text stays legible.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` (1024×1024 PNG, under 1 MiB) byte-for-byte to `/output/entry.png` and validates the copy (PNG magic, 1024×1024 dimensions, size, byte equality). It is fully deterministic: every run writes the identical bytes.

## The 33 stories

1. Huawei guilty of trade-secret theft and bank fraud in a US trial
2. Turkish Air Force helicopter crash kills five near Eskisehir
3. IRGC says it attacked a container ship in the Strait of Hormuz
4. Gunmen hold 25 hostages at a Cartagena supermarket in Colombia
5. Houthis 60 km from Aden and ready to attack, Yemen army says
6. Saudi PIF tower in Riyadh hit in suspected drone attack; 11 hurt
7. Libya's Haftar visits Turkey for the first time
8. UK sanctions Yemen's Houthis and four senior officials
9. Car bomb outside Colombian regional offices injures 23
10. Israel kills Hamas internal security chief in Gaza strike
11. Iraq orders federal control of Kurdish oilfields and crossings
12. Saudi strikes on Yemen buses and trucks: 25 dead or missing
13. Gaza issues meningitis epidemic alert after case surge
14. DR Congo searches for missing plane; rebels claim shootdown
15. Hanoi restaurant explosion kills at least six
16. Ukraine strikes Russian ships in Gulf of Finland and off Libya
17. Malaysia to send thousands of migrants back to Myanmar
18. South Korea orders shelter on Ulleungdo as Russian jets approach
19. Hasina plans return to Bangladesh from exile on 16 December
20. ICJ finds Myanmar guilty of Rohingya genocide — a historic first
21. Indonesia nominates two candidates to replace vice president
22. China sentences official to death for spying for a foreign state
23. NATO vows defence against space threat; Tripoli questions Kyiv
24. US drone helps capture 'El Chapo Isidro'; Mexico to try him
25. Bukele names three Salvadoran soldiers killed in Haiti mission
26. US loses measles elimination status after more than 25 years
27. Pentagon rebukes Canada over defence spending and F-35 review
28. US blacklists Megaspeed, firm at centre of Nvidia scandal
29. Zelensky urges Ukraine-Russia-US-Europe talks soon
30. Iran says four tankers hit mines in the Strait of Hormuz
31. Nvidia reinstates Jensen Huang as CEO after Trump intervenes
32. Senegal regain Africa Cup of Nations title after court appeal
33. Real Madrid thrash PSV 5-1 in the Champions League

Sources: Daily Summary Of (dailysummaryof.com/world/2026-11-24), Reuters, AP, AFP, BBC, France 24, The Guardian, NBC Sports, CFR Daily News Brief, Principia.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bh1grvtt&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
