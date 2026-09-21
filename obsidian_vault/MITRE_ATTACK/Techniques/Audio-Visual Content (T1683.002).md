---
mitre_data:
  id: T1683.002
  linker_tags:
  - mitre/attack/linker/resource_development/audio-visual_content
  name: Audio-Visual Content
  related_tactics:
  - resource_development
tags:
- mitre/attack/technique
---



# Audio-Visual Content (`T1683.002`)

Adversaries may create or manipulate audio, image, and video content to support targeting and malicious operations. Adversaries may also use synthetic voice recordings, real-time altered audio or video during live interactions, fabricated profile photos and identity documents, or video content depicting fabricated or impersonated individuals.[^fn2]

Content may be produced manually through editing tools, generated using AI-assisted tools, or produced using third-party synthetic services.[^fn3][^fn1] AI-assisted tools have enabled adversaries to produce synthetic media at scale and generate content that is more difficult to identify as inauthentic. 

Audio-visual content produced through these methods may be used in support of other techniques, such as [Phishing](https://attack.mitre.org/techniques/T1660), [Spearphishing via Service](https://attack.mitre.org/techniques/T1566/003), [Phishing for Information](https://attack.mitre.org/techniques/T1598), [Internal Spearphishing](https://attack.mitre.org/techniques/T1534), [Social Engineering](https://attack.mitre.org/techniques/T1684), [Financial Theft](https://attack.mitre.org/techniques/T1657), or [Establish Accounts](https://attack.mitre.org/techniques/T1585).


# Platform(s)

- PRE

# Parent Technique(s)

- [[../Techniques/Generate Content (T1683)|Generate Content]]

# Tactic(s)

- [[../Tactics/2. Resource Development|Resource Development]]


# External Reference(s)

- [T1683.002](https://attack.mitre.org/techniques/T1683/002)

[^fn1]: [Europol. (2022). FACING REALITY? LAW ENFORCEMENT AND THE CHALLENGE OF DEEPFAKES. Retrieved April 17, 2026.](https://www.europol.europa.eu/cms/sites/default/files/documents/Europol_Innovation_Lab_Facing_Reality_Law_Enforcement_And_The_Challenge_Of_Deepfakes.pdf)
[^fn2]: [Google Threat Intelligence Group. (2025, November 5). GTIG AI Threat Tracker: Advances in Threat Actor Usage of AI Tools. Retrieved March 31, 2026.](https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools)
[^fn3]: [Internet Crime Complaint Center, FBI. (2025). Federal Bureau of Investigation Internet Crime Report, 2025. Retrieved April 17, 2026.](https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf)