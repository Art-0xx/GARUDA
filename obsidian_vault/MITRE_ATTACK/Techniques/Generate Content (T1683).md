---
mitre_data:
  id: T1683
  linker_tags:
  - mitre/attack/linker/resource_development/generate_content
  name: Generate Content
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Generate Content (`T1683`)

Adversaries may create or generate content to support targeting and operations. This content may be used to establish personas, impersonate known individuals or organizations, and support [Social Engineering](https://attack.mitre.org/techniques/T1684), fraud, or influence activities. Written materials, audio, images, video, or other media may be developed and tailored to the target and objective.[^fn1]

Content development may occur prior to or during an operation. Adversaries may develop or generate content in-house, source it through third parties, or produce it using AI-assisted tools. Adversaries may use AI to research targets, develop pretexts, and better understand the organizations and individuals they intend to target or deceive prior to generating content (i.e., [Query Public AI Services](https://attack.mitre.org/techniques/T1682)); for obtaining access to AI tools used in content generation, see [Artificial Intelligence](https://attack.mitre.org/techniques/T1588/007). 

Content may be leveraged in support of techniques such as [Phishing](https://attack.mitre.org/techniques/T1566), [Phishing for Information](https://attack.mitre.org/techniques/T1598), [Social Engineering](https://attack.mitre.org/techniques/T1684), [Financial Theft](https://attack.mitre.org/techniques/T1657), or [Establish Accounts](https://attack.mitre.org/techniques/T1585). Generated or developed content does not include malicious code or scripts (i.e., [Develop Capabilities](https://attack.mitre.org/techniques/T1587) and [Artificial Intelligence](https://attack.mitre.org/techniques/T1588/007)).


# Platform(s)

- PRE

# Sub-Technique(s)

- [[../Techniques/Written Content (T1683.001)|Written Content]]
- [[../Techniques/Audio-Visual Content (T1683.002)|Audio-Visual Content]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1683](https://attack.mitre.org/techniques/T1683)

[^fn1]: [Tim Mucci. (n.d.). What is AI-Generated Content?. Retrieved April 22, 2026.](https://www.ibm.com/think/insights/ai-generated-content)