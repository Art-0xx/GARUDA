---
mitre_data:
  id: T1588.007
  linker_tags:
  - mitre/attack/linker/resource_development/artificial_intelligence
  name: Artificial Intelligence
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Artificial Intelligence (`T1588.007`)

Adversaries may obtain access to generative artificial intelligence tools, such as large language models (LLMs), to aid various techniques during targeting. These tools may be used to inform, bolster, and enable a variety of malicious tasks, including conducting [Reconnaissance](https://attack.mitre.org/tactics/TA0043), creating basic scripts, assisting social engineering, and even developing payloads.[^fn4] 

For example, by utilizing a publicly available LLM an adversary is essentially outsourcing or automating certain tasks to the tool. Using AI, the adversary may draft and generate content in a variety of written languages to be used in [Phishing](https://attack.mitre.org/techniques/T1566)/[Phishing for Information](https://attack.mitre.org/techniques/T1598) campaigns. The same publicly available tool may further enable vulnerability or other offensive research supporting [Develop Capabilities](https://attack.mitre.org/techniques/T1587). AI tools may also automate technical tasks by generating, refining, or otherwise enhancing (e.g., [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027)) malicious scripts and payloads.[^fn5] Finally, AI-generated text, images, audio, and video may be used for fraud, [Impersonation](https://attack.mitre.org/techniques/T1684/001), and other malicious activities.[^fn2][^fn3][^fn1]



# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Obtain Capabilities (T1588)|Obtain Capabilities]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1588.007](https://attack.mitre.org/techniques/T1588/007)

[^fn1]: [Catherine Stupp. (2019, August 30). Fraudsters Used AI to Mimic CEO’s Voice in Unusual Cybercrime Case. Retrieved March 18, 2025.](https://www.wsj.com/articles/fraudsters-use-ai-to-mimic-ceos-voice-in-unusual-cybercrime-case-11567157402)
[^fn2]: [Emily Astranova, Pascal Issa. (2024, July 23). Whose Voice Is It Anyway? AI-Powered Voice Spoofing for Next-Gen Vishing Attacks. Retrieved March 18, 2025.](https://cloud.google.com/blog/topics/threat-intelligence/ai-powered-voice-spoofing-vishing-attacks)
[^fn3]: [IC3. (2024, December 3). Criminals Use Generative Artificial Intelligence to Facilitate Financial Fraud. Retrieved March 18, 2025.](https://www.ic3.gov/PSA/2024/PSA241203)
[^fn4]: [Microsoft Threat Intelligence. (2024, February 14). Staying ahead of threat actors in the age of AI. Retrieved March 11, 2024.](https://www.microsoft.com/en-us/security/blog/2024/02/14/staying-ahead-of-threat-actors-in-the-age-of-ai/)
[^fn5]: [OpenAI. (2024, February 14). Disrupting malicious uses of AI by state-affiliated threat actors. Retrieved September 12, 2024.](https://openai.com/index/disrupting-malicious-uses-of-ai-by-state-affiliated-threat-actors/)