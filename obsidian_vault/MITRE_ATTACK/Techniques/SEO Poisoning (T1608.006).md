---
mitre_data:
  id: T1608.006
  linker_tags:
  - mitre/attack/linker/resource_development/seo_poisoning
  name: SEO Poisoning
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# SEO Poisoning (`T1608.006`)

Adversaries may poison mechanisms that influence search engine optimization (SEO) to further lure staged capabilities towards potential victims. Search engines typically display results to users based on purchased ads as well as the site’s ranking/score/reputation calculated by their web crawlers and algorithms.[^fn2][^fn1]

To help facilitate [Drive-by Compromise](https://attack.mitre.org/techniques/T1189), adversaries may stage content that explicitly manipulates SEO rankings in order to promote sites hosting their malicious payloads (such as [Drive-by Target](https://attack.mitre.org/techniques/T1608/004)) within search engines. Poisoning SEO rankings may involve various tricks, such as stuffing keywords (including in the form of hidden text) into compromised sites. These keywords could be related to the interests/browsing habits of the intended victim(s) as well as more broad, seasonably popular topics (e.g. elections, trending news).[^fn5][^fn2]

In addition to internet search engines (such as Google), adversaries may also aim to manipulate specific in-site searches for developer platforms (such as GitHub) to deceive users towards [Supply Chain Compromise](https://attack.mitre.org/techniques/T1195) lures. In-site searches will rank search results according to their own algorithms and metrics such as popularity[^fn6] which may be targeted and gamed by malicious actors.[^fn7]

Adversaries may also purchase or plant incoming links to staged capabilities in order to boost the site’s calculated relevance and reputation.[^fn1][^fn4]

SEO poisoning may also be combined with evasive redirects and other cloaking mechanisms (such as measuring mouse movements or serving content based on browser user agents, user language/localization settings, or HTTP headers) in order to feed SEO inputs while avoiding scrutiny from defenders.[^fn5][^fn3]


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Stage Capabilities (T1608)|Stage Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1608.006](https://attack.mitre.org/techniques/T1608/006)

[^fn1]: [Arntz, P. (2018, May 29). SEO poisoning: Is it worth it?. Retrieved September 30, 2022.](https://www.malwarebytes.com/blog/news/2018/05/seo-poisoning-is-it-worth-it)
[^fn2]: [Atlas Cybersecurity. (2021, April 19). Threat Actors use Search-Engine-Optimization Tactics to Redirect Traffic and Install Malware. Retrieved September 30, 2022.](https://atlas-cybersecurity.com/cyber-threats/threat-actors-use-search-engine-optimization-tactics-to-redirect-traffic-and-install-malware/)
[^fn3]: [Szappanos, G. & Brandt, A. (2021, March 1). “Gootloader” expands its payload delivery options. Retrieved September 30, 2022.](https://news.sophos.com/en-us/2021/03/01/gootloader-expands-its-payload-delivery-options/)
[^fn4]: [The DFIR Report. (2022, May 9). SEO Poisoning – A Gootloader Story. Retrieved September 30, 2022.](https://thedfirreport.com/2022/05/09/seo-poisoning-a-gootloader-story/)
[^fn5]: [Wang, J. (2018, October 17). Ubiquitous SEO Poisoning URLs. Retrieved September 30, 2022.](https://www.zscaler.com/blogs/security-research/ubiquitous-seo-poisoning-urls-0)
[^fn6]: [Yehuda Gelb. (2023, November 30). The GitHub Black Market: Gaming the Star Ranking Game. Retrieved June 18, 2024.](https://zero.checkmarx.com/the-github-black-market-gaming-the-star-ranking-game-fc42f5913fb7)
[^fn7]: [Yehuda Gelb. (2024, April 10). New Technique to Trick Developers Detected in an Open Source Supply Chain Attack. Retrieved June 18, 2024.](https://checkmarx.com/blog/new-technique-to-trick-developers-detected-in-an-open-source-supply-chain-attack/)