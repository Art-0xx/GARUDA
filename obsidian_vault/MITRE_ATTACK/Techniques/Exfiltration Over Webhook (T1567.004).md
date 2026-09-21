---
mitre_data:
  id: T1567.004
  linker_tags:
  - mitre/attack/linker/exfiltration/exfiltration_over_webhook
  name: Exfiltration Over Webhook
  related_tactics:
  - exfiltration
tags:
- mitre/attack/technique
---



# Exfiltration Over Webhook (`T1567.004`)

Adversaries may exfiltrate data to a webhook endpoint rather than over their primary command and control channel. Webhooks are simple mechanisms for allowing a server to push data over HTTP/S to a client without the need for the client to continuously poll the server.[^fn7] Many public and commercial services, such as Discord, Slack, and `webhook.site`, support the creation of webhook endpoints that can be used by other services, such as Github, Jira, or Trello.[^fn3] When changes happen in the linked services (such as pushing a repository update or modifying a ticket), these services will automatically post the data to the webhook endpoint for use by the consuming application. 

Adversaries may link an adversary-owned environment to a victim-owned SaaS service to achieve repeated [Automated Exfiltration](https://attack.mitre.org/techniques/T1020) of emails, chat messages, and other data.[^fn6] Alternatively, instead of linking the webhook endpoint to a service, an adversary can manually post staged data directly to the URL in order to exfiltrate it.[^fn4]

Access to webhook endpoints is often over HTTPS, which gives the adversary an additional level of protection. Exfiltration leveraging webhooks can also blend in with normal network traffic if the webhook endpoint points to a commonly used SaaS application or collaboration service.[^fn2][^fn5][^fn1]


# Platform(s)

- ESXi
- Linux
- macOS
- Office Suite
- SaaS
- Windows

# Parent Technique(s)

- [[../Techniques/Exfiltration Over Web Service (T1567)|Exfiltration Over Web Service]]

# Tactic(s)

- [[../Tactics/14. Exfiltration|Exfiltration]]


# External Reference(s)

- [T1567.004](https://attack.mitre.org/techniques/T1567/004)

[^fn1]: [ Jossef Harush Kadouri. (2022, March 7). Webhook Party — Malicious packages caught exfiltrating data via legit webhook services. Retrieved July 20, 2023.](https://medium.com/checkmarx-security/webhook-party-malicious-packages-caught-exfiltrating-data-via-legit-webhook-services-6e046b07d191)
[^fn2]: [CyberArk Labs. (2023, April 13). The (Not so) Secret War on Discord. Retrieved July 20, 2023.](https://www.cyberark.com/resources/threat-research-blog/the-not-so-secret-war-on-discord)
[^fn3]: [D. (n.d.). Intro to Webhooks. Retrieved July 20, 2023.](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
[^fn4]: [Microsoft Threat Intelligence. (2023, October 3). Defending new vectors: Threat actors attempt SQL Server to cloud lateral movement. Retrieved October 3, 2023.](https://www.microsoft.com/security/blog/2023/10/03/defending-new-vectors-threat-actors-attempt-sql-server-to-cloud-lateral-movement/)
[^fn5]: [Nick Biasini, Edmund Brumaghin, Chris Neal, and Paul Eubanks. (2021, April 7). https://blog.talosintelligence.com/collab-app-abuse/. Retrieved July 20, 2023.](https://blog.talosintelligence.com/collab-app-abuse/)
[^fn6]: [Push Security. (2023, July 31). Webhooks. Retrieved August 4, 2023.](https://github.com/pushsecurity/saas-attacks/blob/main/techniques/webhooks/description.md)
[^fn7]: [RedHat. (2022, June 1). What is a webhook?. Retrieved July 20, 2023.](https://www.redhat.com/en/topics/automation/what-is-a-webhook)