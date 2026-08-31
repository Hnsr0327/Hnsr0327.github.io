---
title: "Agent 订阅的真实成本"
date: 2026-07-31T23:00:00+09:00
status: 持续更新
tags: [ai, pricing]
ShowToc: true
---


tl;dr²
```
MSRP is Myth, List Price is Myth, List Price was never the clearing price.
2026-08-31
御三家（OpenAI / Anthropic / Google）
(17)171 刀实付，控制设备支付环境，约 (45¹)900 小时 GPT 5.6 Sol ，或约 (400¹)8000 小时 GPT 5.6 Luna
(20)100 刀实付，严格控制风控环境，约 (15²)120 小时 Opus ，或约 (0³)40 小时 Fable
20(200) 刀实付，谷歌确证地区，约 45(900⁴) 小时 Gemini 3.7 Flash
论外 Grok
99 刀实付，控制 IP 环境，约 240 小时 Grok 4.6
国产双雄（智谱清言 / 月之暗面）
158 刀实付，约 320 小时 GLM 5.3
30(100) 刀实付，约 50(150⁵) 小时 K3
品牌中转站（Charm Hyper / 腾讯Codebuddy / OpenCode Go）
20 刀实付，约 16 小时 加速⁶K3 ，或一个月每天约 2 小时 加速K3
10 刀实付，当月腾讯 AI 打二五折
10 刀实付，当月开源 AI 打一六折到六六折
```

tl;dr
```
MSRP is Myth, List Price is Myth, List Price was never the clearing price.
2026-08-31
御三家（OpenAI / Anthropic / Google）
171 刀实付 -> 27373 JPY 实付 -> "200 刀实付" -> 900 ~ 13000 刀 MSRP GPT (Codex) -> 约 60 ~ 900 小时 GPT 5.6 Sol
100 刀实付 -> ~1150 刀 MSRP 的 Claude (Claude Code) -> 约 120 小时 Opus ，或约 40 小时 Fable
20 刀实付 -> ~390 刀 MSRP 的 Gemini (Antigravity) 以及谷歌全家桶 -> 约 45 小时 Gemini 3.7 Flash
论外 Grok
99 刀实付 -> 300 刀名义付 -> ~1900 刀 MSRP 的 Grok -> 约 240 小时 Grok 4.6
国产双雄（智谱清言 / 月之暗面）
158 刀实付 -> ~1960 刀 MSRP 的 GLM (非高峰时期) -> 约 320 小时 GLM 5.3
30 刀实付 -> ~200 刀 MSRP 的 Kimi -> 约 50 小时 K3
品牌中转站（Charm Hyper / 腾讯Codebuddy / OpenCode Go）
20 刀实付 -> 100 刀 MSRP （或一个月每天过期的 12.5 刀 MSRP ）的精选模型 -> 约 16 小时 加速K3 ，或一个月每天约 2 小时 加速K3
10 刀实付 -> 40 刀 MSRP 的精选模型
10 刀实付 -> 15~60 刀 MSRP 的各路(开源)模型
```

chatgpt
```
~40x widely reported by linux.do forum
7d limit varies by "fraud index", from 200$ to 3,000$ . 
Weekly limit purchase: "80 刀" -> 1 个 Reset Weekly Limit -> 200 ~ 3000 刀 MSRP GPT 。
27373 JPY 实付 -> "200 刀实付" -> 900 ~ 13000 刀 MSRP GPT (Codex)
每个 max 思考力的 GPT 线程每个小时约 15 MSRP 刀。 (from https://deng.codexradar.com 's sol max effort)
如果维持一个不会被 OpenAI 盯上的用量，即 80% 用量，那么每周可以运行 10 ~ 160 小时 Codex 。
```

claude
```
沿用 7 月底测试的结论（规则未变），见下
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

gemini
```
20$ AI Pro，包含谷歌订阅的所有标准权益。 
Antigravity 用量：约 15 刀 / 5hr ，一周六个周限，一个订阅周期约 15 * 6 * 4.3 = ~400 刀
```

grok
```
https://linux.do/t/topic/2765603.json
https://linux.do/t/topic/2834367.json
99 刀实付 -> 300 刀名义付 -> 450 刀 MSRP Grok 每周 -> 1900 刀 MSRP Grok 每订阅周期
```

glm
```
沿用 7 月底测试的结论（规则未变），见下
https://z.ai/subscribe
https://docs.z.ai/devpack/overview#usage-instruction
https://docs.z.ai/guides/overview/pricing
典型负载：400/20/1 cached_prefill/prefill/decode
18 刀实付 -> ~140 刀 MSRP GLM (非高峰时期)
158 刀实付 -> ~1960 刀 MSRP GLM (非高峰时期)
```

kimi
```
沿用 7 月底测试的结论（规则未变），见下
假设有 AI 订阅服务 W ，人民币 199 / 月度，其在 2026 年 7 月 28 日可用最佳模型的上下文缩短版本，（均为每百万 Token ）缓存输入价格为 X*10 人民币，输入价格为 10 人民币，输出价格为 50 人民币；
某用户在 2026 年 7 月 28 日的某同一 5h session 窗口内的两个时间点，测得 [5h, 7d, subscription] limit 分别为 [0.0000, 0.4453, 0.2377] 和 [0.0952, 0.4643, 0.2417], 定义 7d limit / 5h limit = Y, sub limit / 5h limit = Z ；
某用户注销了其它 API Key ，并且注册了某个 API Key ，并只使用这一个 API Key 。这个 Key 的 [缓存输入 Token ，输入 Token ，输出 Token ] 计数，三者分别为 [7720192, 455208, 40023] 和 [7940608, 457167, 41025] 的时候，用量仪表盘显示的 5h usage 分别是 25.05% 和 25.56% ，假设 5h usage 为 A 人民币。
求 A、X、Y、Z 和 W 。
(57, 10%, 5, 24, Kimi Allegretto)
30 刀实付 -> ~200 刀 MSRP Kimi
```

charm hyper
```
hyper.charm.land
20 刀实付 -> 100 刀 MSRP 的 “精选模型”，或 12.5 刀 MSRP 每日刷新持续 30 天。
K3 保真， Charm 的 LLM 墙钟速度是官方两倍，LLM / 非 LLM 七三开，约等于 1.5 倍速。
```

codebuddy
```
懒得写了，总之 70 元买 4000 credit ，相当于 40 刀绝大多数模型，有些模型是 28 刀。
```

opencode go
```
https://opencode.ai/docs/zh-cn/go/#usage-limits
10 刀实付 -> 15~60 刀 MSRP 的各路(开源)模型，宽松的使用限制
```

模型的燃烧速度，按从慢到快排序（名义美元/小时）
```
GLM Flash 0.5
DeepSeek Flash(谷) 0.5
GPT Luna max 1
DeepSeek Pro(谷) 1
Kimi 4
GLM 6
Grok high 8
Gemini Flash median 9
GPT Sol median 12
GPT Sol max 15
```

模型的燃烧速度，按从慢到快排序（实际美元/小时）
```
GPT Luna max @ $171 Sub 0.025⁷
GPT Sol median @ $171 Sub 0.15
GLM Flash(谷) @ $158 Sub 0.17⁸
DeepSeek Flash(谷) @ $10 OpenCode 0.17⁹
GPT Sol max @ $171 Sub 0.19
Gemini Flash median @ $200 Ultra 20x 0.22
GPT Sol median @ $17 Sub 0.30
K3 @ $20 Hyper Shred 0.33
GLM Flash(峰) @ $158 Sub 0.34
GPT Sol max @ $17 Sub 0.38
Grok high @ $99 Sub 0.41
Gemini Flash median @ $20 AI Pro 0.44
Gemini Flash median @ $100 Ultra 5x 0.44
GLM(谷) @ $158 Sub 0.49
Kimi @ $30 Sub 0.60
Kimi @ $100 Sub 0.67
Opus @ $100 Sub 0.83
GLM(峰) @ $158 Sub 0.98
K3 @ $20 Hyper Pack 1.25
Opus @ $20 Sub 1.33
Fable @ $100 Sub 2.50
```


脚注及术语表
```
¹ 广泛认为 OpenAI 的 20x 是作用于周限制。
² 详读： https://she-llac.com/claude-limits
³ 没想到吧，标准用户居然没有 Fable 用 😡
⁴ https://antigravity.google/blog/changes-to-antigravity-plans & https://www.reddit.com/r/google_antigravity/comments/1qzbbnb/ultra_vs_pro_subscriptions_rate_limits/
⁵ 没错，用户也很困惑，为什么 3.3 倍的钱只能换到 3 倍的额度，但月之暗面就这么做了。
⁶ 4美元 / Hr 是标准 Kimi 订阅的燃烧速度，同墙钟时间因 Hyper 更快，故燃烧速度更快。
⁷ Luna 的订阅折扣只有 Sol 的一半，换句话说，如果你在订阅内使用 Luna ，折扣仅有约 40 倍，但 …… Well ，也蛮多的。 
⁸ GLM Flash 的订阅折扣比较少，详参官方 Credit 定价系统。
⁹ 部分模型只能享受折扣采购类订阅的 MSRP 折扣，例如 OpenCode 订阅在撰稿日可以三三折使用 DSV4F 。
¹⁰ 
¹¹ 
¹² 
¹³ 
¹⁴ 
¹⁵ 
¹⁶ 
¹⁷ 
¹⁸ 
¹⁹ 

List price is the officially published, standard price a seller advertises for a product or service, the price "on the books" before any discounts, negotiations, promotions, or volume deals are applied. In cloud/API contexts, it's the rate on the public pricing page.
MSRP (Manufacturer's Suggested Retail Price) is the price a manufacturer recommends that retailers charge for its product. It's common in physical retail: cars, electronics, appliances. The key word is "suggested": retailers are generally free to sell above or below it.

in the article I just use MSRP as List price

```


