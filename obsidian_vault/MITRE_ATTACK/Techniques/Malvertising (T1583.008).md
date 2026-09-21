---
mitre_data:
  id: T1583.008
  linker_tags:
  - mitre/attack/linker/resource_development/malvertising
  name: Malvertising
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Malvertising (`T1583.008`)

Adversaries may purchase online advertisements that can be abused to distribute malware to victims. Ads can be purchased to plant as well as favorably position artifacts in specific locations  online, such as prominently placed within search engine results. These ads may make it more difficult for users to distinguish between actual search results and advertisements.[^fn4] Purchased ads may also target specific audiences using the advertising network’s capabilities, potentially further taking advantage of the trust inherently given to search engines and popular websites. 

Adversaries may purchase ads and other resources to help distribute artifacts containing malicious code to victims. Purchased ads may attempt to impersonate or spoof well-known brands. For example, these spoofed ads may trick victims into clicking the ad which could then send them to a malicious domain that may be a clone of official websites containing trojanized versions of the advertised software.[^fn5][^fn2] Adversary’s efforts to create malicious domains and purchase advertisements may also be automated at scale to better resist cleanup efforts.[^fn3] 

Malvertising may be used to support [Drive-by Target](https://attack.mitre.org/techniques/T1608/004) and [Drive-by Compromise](https://attack.mitre.org/techniques/T1189), potentially requiring limited interaction from the user if the ad contains code/exploits that infect the target system's web browser.[^fn1]

Adversaries may also employ several techniques to evade detection by the advertising network. For example, adversaries may dynamically route ad clicks to send automated crawler/policy enforcer traffic to benign sites while validating potential targets then sending victims referred from real ad clicks to malicious pages. This infection vector may therefore remain hidden from the ad network as well as any visitor not reaching the malicious sites with a valid identifier from clicking on the advertisement.[^fn5] Other tricks, such as intentional typos to avoid brand reputation monitoring, may also be used to evade automated detection.[^fn4] 


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Acquire Infrastructure (T1583)|Acquire Infrastructure]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1583.008](https://attack.mitre.org/techniques/T1583/008)

[^fn1]: [BBC. (2011, March 29). Spotify ads hit by malware attack. Retrieved February 21, 2023.](https://www.bbc.com/news/technology-12891182)
[^fn2]: [FBI. (2022, December 21). Cyber Criminals Impersonating Brands Using Search Engine Advertisement Services to Defraud Users. Retrieved February 21, 2023.](https://www.ic3.gov/Media/Y2022/PSA221221)
[^fn3]: [Hegel, Tom. (2023, January 19). Breaking Down the SEO Poisoning Attack | How Attackers Are Hijacking Search Results. Retrieved February 21, 2023.](https://www.sentinelone.com/blog/breaking-down-the-seo-poisoning-attack-how-attackers-are-hijacking-search-results/)
[^fn4]: [Miller, Sarah. (2023, February 2). A surge of malvertising across Google Ads is distributing dangerous malware. Retrieved February 21, 2023.](https://www.spamhaus.com/resource-center/a-surge-of-malvertising-across-google-ads-is-distributing-dangerous-malware/)
[^fn5]: [Tal, Nati. (2022, December 28). “MasquerAds” — Google’s Ad-Words Massively Abused by Threat Actors, Targeting Organizations, GPUs and Crypto Wallets. Retrieved February 21, 2023.](https://labs.guard.io/masquerads-googles-ad-words-massively-abused-by-threat-actors-targeting-organizations-gpus-42ae73ee8a1e)