---
mitre_data:
  id: T1505.002
  linker_tags:
  - mitre/attack/linker/persistence/transport_agent
  name: Transport Agent
  related_tactics:
  - persistence
tags:
- mitre/attack/technique
---



# Transport Agent (`T1505.002`)

Adversaries may abuse Microsoft transport agents to establish persistent access to systems. Microsoft Exchange transport agents can operate on email messages passing through the transport pipeline to perform various tasks such as filtering spam, filtering malicious attachments, journaling, or adding a corporate signature to the end of all outgoing emails.[^fn1][^fn2] Transport agents can be written by application developers and then compiled to .NET assemblies that are subsequently registered with the Exchange server. Transport agents will be invoked during a specified stage of email processing and carry out developer defined tasks. 

Adversaries may register a malicious transport agent to provide a persistence mechanism in Exchange Server that can be triggered by adversary-specified email events.[^fn2] Though a malicious transport agent may be invoked for all emails passing through the Exchange transport pipeline, the agent can be configured to only carry out specific tasks in response to adversary defined criteria. For example, the transport agent may only carry out an action like copying in-transit attachments and saving them for later exfiltration if the recipient email address matches an entry on a list provided by the adversary. 


# Platform(s)

- Linux
- Windows

# Parent Technique(s)

- [[../Techniques/Server Software Component (T1505)|Server Software Component]]

# Tactic(s)

- [[../Tactics/5. Persistence|Persistence]]


# External Reference(s)

- [T1505.002](https://attack.mitre.org/techniques/T1505/002)

[^fn1]: [Microsoft. (2016, June 1). Transport agents. Retrieved June 24, 2019.](https://docs.microsoft.com/en-us/exchange/transport-agents-exchange-2013-help)
[^fn2]: [Faou, M. (2019, May). Turla LightNeuron: One email away from remote code execution. Retrieved June 24, 2019.](https://www.welivesecurity.com/wp-content/uploads/2019/05/ESET-LightNeuron.pdf)