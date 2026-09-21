---
mitre_data:
  id: T1204.003
  linker_tags:
  - mitre/attack/linker/execution/malicious_image
  name: Malicious Image
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Malicious Image (`T1204.003`)

Adversaries may rely on a user running a malicious image to facilitate execution. Amazon Web Services (AWS) Amazon Machine Images (AMIs), Google Cloud Platform (GCP) Images, and Azure Images as well as popular container runtimes such as Docker can be backdoored. Backdoored images may be uploaded to a public repository via [Upload Malware](https://attack.mitre.org/techniques/T1608/001), and users may then download and deploy an instance or container from the image without realizing the image is malicious, thus bypassing techniques that specifically achieve Initial Access. This can lead to the execution of malicious code, such as code that executes cryptocurrency mining, in the instance or container.[^fn1]

Adversaries may also name images a certain way to increase the chance of users mistakenly deploying an instance or container from the image (ex: [Match Legitimate Resource Name or Location](https://attack.mitre.org/techniques/T1036/005)).[^fn2]


# Platform(s)

- IaaS
- Containers

# Parent Technique(s)

- [[../Techniques/User Execution (T1204)|User Execution]]

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1204.003](https://attack.mitre.org/techniques/T1204/003)

[^fn1]: [Piper, S.. (2018, September 24). Investigating Malicious AMIs. Retrieved March 30, 2021.](https://summitroute.com/blog/2018/09/24/investigating_malicious_amis/)
[^fn2]: [Team Nautilus. (2021, June). Attacks in the Wild on the Container Supply Chain and Infrastructure. Retrieved August 26, 2021.](https://info.aquasec.com/hubfs/Threat%20reports/AquaSecurity_Cloud_Native_Threat_Report_2021.pdf?utm_campaign=WP%20-%20Jun2021%20Nautilus%202021%20Threat%20Research%20Report&utm_medium=email&_hsmi=132931006&_hsenc=p2ANqtz-_8oopT5Uhqab8B7kE0l3iFo1koirxtyfTehxF7N-EdGYrwk30gfiwp5SiNlW3G0TNKZxUcDkYOtwQ9S6nNVNyEO-Dgrw&utm_content=132931006&utm_source=hs_automation)