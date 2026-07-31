---
title: "Agent 订阅的真实成本"
date: 2026-07-31T23:00:00+09:00
status: 持续更新
tags: [ai, pricing]
ShowToc: true
---


tl;dr
```
MSRP is Myth, List Price is Myth, List Price was never the clearing price.
2026-07-31
27373 JPY 实付 -> "200 刀实付" -> ~8000 刀 MSRP GPT (Codex)
100 刀实付 -> ~1150 刀 MSRP Claude (Claude Code)
158 刀实付 -> ~1960 刀 MSRP GLM (非高峰时期)
30 刀实付 -> ~200 刀 MSRP Kimi
(5)10 刀实付  -> 60 刀 MSRP GLM 5.2
```

chatgpt
```
~40x widely reported by linux.do forum
27373 JPY 实付 -> "200 刀实付" -> ~8000 刀 MSRP GPT (Codex)
updated in 08212026:
"200 刀" -> ~12000 刀 MSRP GPT
"80 刀" -> 1 个 Reset Weekly Limit -> ~3000 刀 MSRP GPT
每个 max 思考力的 GPT 线程每个小时约 60 名义美元。
如果维持一个不会被 OpenAI 盯上的用量，即 80% 用量，那么每周可以运行 40 小时 Codex 。
```

claude
```
5x 100$/mo
Claude.ai normal web: 100% 7d usage, 100% 5h usage;
Claude Cowork: 100% 7d usage, 50% 5h usage;
Claude Code: 66.7% 7d usage, 50% 5h usage.
("usage" = usage drain)
Fable List pricing: cached prefill / prefill / prefill + cache write / decode = 1$ / 10$ / 12.5$ / 50$ (/Mtok)
Claude Code [2175163, 405932, 13982] Fable <-> 21% 5h usage, 2% 7d all usage
Claude Code [5782712, 489181, 44467] Fable <-> 28% 5h usage, 3% 7d all usage
Claude Code [8552115, 558910, 62841] Fable <-> 35% 5h usage, 4% 7d all usage
Claude Code [9730133, 630959, 78351] Fable <-> 44% 5h usage, 5% 7d all usage
Claude Code [12570650, 664108, 95907] Fable <-> 48% 5h usage, 5% 7d all usage
Claude Code [19741132, 709941, 129175] Fable <-> 55% 5h usage, 6% 7d all usage
Claude Code [23843137, 742919, 149748] Fable <-> 59% 5h usage, 6% 7d all usage
Claude Code [36879380, 801078, 187385] Fable <-> 67% 5h usage, 7% 7d all usage
Claude Code [38039837, 849816, 197386] Fable <-> 73% 5h usage, 7% 7d all usage
Claude Code [38977741, 1044322, 278090] Fable <-> 100% 5h usage, 10% 7d all usage
{[2175163, 405932, 13982], 21} = 20A < 2175163X + 405932Y + 13982Z < 22A
means in the subscription usage, cache read pricing X = ~0Y, cause in Lp X = 0.1Y, but during multiple sampling, X = -0.01~0.01Y, applying Occam's Razor, it's 0.
Regular(CC) usage 7d/5h quota = 180$(270$)/13.5$(27$)
100 刀实付 -> ~1150 刀 MSRP Claude (Claude Code)
```

glm
```
https://z.ai/subscribe
https://docs.z.ai/devpack/overview#usage-instruction
https://docs.z.ai/guides/overview/pricing
典型负载：400/20/1 cached_prefill/prefill/decode
18 刀实付 -> ~140 刀 MSRP GLM (非高峰时期)
158 刀实付 -> ~1960 刀 MSRP GLM (非高峰时期)
(47.51 * 0.26 + 2.38 * 1.40 + 0.119 * 4.4) * 30 / 7 = 69.5
```

kimi
```
假设有 AI 订阅服务 W ，人民币 199 / 月度，其在 2026 年 7 月 28 日可用最佳模型的上下文缩短版本，（均为每百万 Token ）缓存输入价格为 X*10 人民币，输入价格为 10 人民币，输出价格为 50 人民币；
某用户在 2026 年 7 月 28 日的某同一 5h session 窗口内的两个时间点，测得 [5h, 7d, subscription] limit 分别为 [0.0000, 0.4453, 0.2377] 和 [0.0952, 0.4643, 0.2417], 定义 7d limit / 5h limit = Y, sub limit / 5h limit = Z ；
某用户注销了其它 API Key ，并且注册了某个 API Key ，并只使用这一个 API Key 。这个 Key 的 [缓存输入 Token ，输入 Token ，输出 Token ] 计数，三者分别为 [7720192, 455208, 40023] 和 [7940608, 457167, 41025] 的时候，用量仪表盘显示的 5h usage 分别是 25.05% 和 25.56% ，假设 5h usage 为 A 人民币。
求 A、X、Y、Z 和 W 。
(57, 10%, 5, 24, Kimi Allegretto)
30 刀实付 -> ~200 刀 MSRP Kimi
```

opencode go
```
https://opencode.ai/docs/zh-cn/go/#usage-limits
(5)10 刀实付  -> 60 刀 MSRP 的各类模型
```

Terms table:
List price is the officially published, standard price a seller advertises for a product or service, the price "on the books" before any discounts, negotiations, promotions, or volume deals are applied. In cloud/API contexts, it's the rate on the public pricing page.
MSRP (Manufacturer's Suggested Retail Price) is the price a manufacturer recommends that retailers charge for its product. It's common in physical retail: cars, electronics, appliances. The key word is "suggested": retailers are generally free to sell above or below it.

in the article I just use MSRP as List price
