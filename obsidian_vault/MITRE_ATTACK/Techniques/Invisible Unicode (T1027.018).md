---
mitre_data:
  id: T1027.018
  linker_tags:
  - mitre/attack/linker/stealth/invisible_unicode
  name: Invisible Unicode
  related_tactics:
  - stealth
tags:
- mitre/attack/technique
---



# Invisible Unicode (`T1027.018`)

Adversaries may abuse invisible or non-printing Unicode characters to conceal malicious content within files, scripts, or text. By inserting characters that do not visibly render, adversaries may hide data, alter how content is interpreted, or make malicious code appear as benign text or whitespace. Adversaries may encode these malicious payloads, using binary, Base64, or custom schemes, to be reconstructed at runtime through scripting features such as [JavaScript](https://attack.mitre.org/techniques/T1059/007) Proxy traps, `eval()`, or other dynamic execution methods. This technique enables adversaries to evade visual inspection and basic static analysis by hiding malicious encoded content in innocuous text.[^fn2][^fn5][^fn7] 

Unicode is a standardized character encoding model that assigns a unique numerical value, known as a code point, to every character across writing systems, enabling consistent text representation across platforms, applications, and languages. Code points are represented as `U+` followed by a hexadecimal value and may be encoded using formats such as `UTF-8` or `UTF-16`. Adversaries may abuse the valid code points in Unicode that are not visibly rendered but still take up bytes, such as zero-width spaces, variation selectors, or bidirectional formatting controls, to conceal malicious payloads.[^fn5][^fn1][^fn6]

Adversaries may additionally exploit Private Use Area (PUA) characters, a range of code points reserved for custom assignment. PUA characters that are not defined by a font or application are typically rendered blank.[^fn2]

Unicode characters may also be leveraged in support of other techniques such as [Phishing](https://attack.mitre.org/techniques/T1660), [Right-to-Left Override](https://attack.mitre.org/techniques/T1036/002), or [User Execution](https://attack.mitre.org/techniques/T1204). For example, some adversaries may embed artificial intelligence (AI) prompt injections using invisible Unicode characters in emails or documents that appear benign when processed by AI systems.[^fn4][^fn3]


# Platform(s)

- Linux
- macOS
- Windows

# Parent Technique(s)

- [[../Techniques/Obfuscated Files or Information (T1027)|Obfuscated Files or Information]]

# Tactic(s)

- [[../Tactics/7. Stealth|Stealth]]


# External Reference(s)

- [T1027.018](https://attack.mitre.org/techniques/T1027/018)

[^fn1]: [ Idan Dardikman. (2025, October 18). GlassWorm: First Self-Propagating Worm Using Invisible Code Hits OpenVSX Marketplace. Retrieved April 21, 2026.](https://www.koi.ai/blog/glassworm-first-self-propagating-worm-using-invisible-code-hits-openvsx-marketplace#heading-5)
[^fn2]: [Charlie Eriksen. (2025, May 13). You're Invited: Delivering malware via Google Calendar invites and PUAs. Retrieved April 21, 2026.](https://www.aikido.dev/blog/youre-invited-delivering-malware-via-google-calendar-invites-and-puas)
[^fn3]: [Ian Ch Lui. (2025, January 22). Invisible Prompt Injection: A Threat to AI Security. Retrieved April 21, 2026.](https://www.trendmicro.com/en_us/research/25/a/invisible-prompt-injection-secure-ai.html)
[^fn4]: [Idan Habler. (2025, September 12). Hiding in Plain Sight: Weaponizing Invisible Unicode to Attack LLMs. Retrieved April 21, 2026.](https://idanhabler.medium.com/hiding-in-plain-sight-weaponizing-invisible-unicode-to-attack-llms-f9033865ec10)
[^fn5]: [Rodel Mendrez. (2025, April 10). Tycoon2FA New Evasion Technique for 2025. Retrieved April 21, 2026.](https://www.levelblue.com/blogs/spiderlabs-blog/tycoon2fa-new-evasion-technique-for-2025)
[^fn6]: [Shaked Perets. (2025, December 7). Invisible Code & Hidden Prompts – How Attackers Weaponize Unicode in Repos (and How SAST Can Help). Retrieved April 21, 2026.](https://cycode.com/blog/invisible-code-hidden-prompts-unicode-attacks-sast/)
[^fn7]: [Veracode Threat Research. (2025, June 9). Down the Rabbit Hole of Unicode Obfuscation. Retrieved April 21, 2026.](https://www.veracode.com/blog/down-the-rabbit-hole-of-unicode-obfuscation/)