---
mitre_data:
  id: T1213.004
  linker_tags:
  - mitre/attack/linker/collection/customer_relationship_management_software
  name: Customer Relationship Management Software
  related_tactics:
  - collection
tags:
- mitre/attack/technique
---



# Customer Relationship Management Software (`T1213.004`)

Adversaries may leverage Customer Relationship Management (CRM) software to mine valuable information. CRM software is used to assist organizations in tracking and managing customer interactions, as well as storing customer data.

Once adversaries gain access to a victim organization, they may mine CRM software for customer data. This may include personally identifiable information (PII) such as full names, emails, phone numbers, and addresses, as well as additional details such as purchase histories and IT support interactions. By collecting this data, an adversary may be able to send personalized [Phishing](https://attack.mitre.org/techniques/T1566) emails, engage in SIM swapping, or otherwise target the organization’s customers in ways that enable financial gain or the compromise of additional organizations.[^fn3][^fn2][^fn1]

CRM software may be hosted on-premises or in the cloud. Information stored in these solutions may vary based on the specific instance or environment. Examples of CRM software include Microsoft Dynamics 365, Salesforce, Zoho, Zendesk, and HubSpot.


# Platform(s)

- SaaS

# Parent Technique(s)

- [[../Techniques/Data from Information Repositories (T1213)|Data from Information Repositories]]

# Tactic(s)

- [[../Tactics/12. Collection|Collection]]


# External Reference(s)

- [T1213.004](https://attack.mitre.org/techniques/T1213/004)

[^fn1]: [Ionut Ilascu. (2020, January 16). Customer-Owned Bank Informs 100k of Breach Exposing Account Balance, PII. Retrieved July 1, 2024.](https://www.bleepingcomputer.com/news/security/customer-owned-bank-informs-100k-of-breach-exposing-account-balance-pii/)
[^fn2]: [Lawrence Abrams. (2021, July 10). Mint Mobile hit by a data breach after numbers ported, data accessed. Retrieved July 1, 2024.](https://www.bleepingcomputer.com/news/security/mint-mobile-hit-by-a-data-breach-after-numbers-ported-data-accessed/)
[^fn3]: [Sergiu Gatlan. (2022, January 4). UScellular discloses data breach after billing system hack. Retrieved July 1, 2024.](https://www.bleepingcomputer.com/news/security/uscellular-discloses-data-breach-after-billing-system-hack/)