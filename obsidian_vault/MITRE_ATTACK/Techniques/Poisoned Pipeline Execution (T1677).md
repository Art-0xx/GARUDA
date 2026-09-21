---
mitre_data:
  id: T1677
  linker_tags:
  - mitre/attack/linker/execution/poisoned_pipeline_execution
  name: Poisoned Pipeline Execution
  related_tactics:
  - execution
tags:
- mitre/attack/technique
---



# Poisoned Pipeline Execution (`T1677`)

Adversaries may manipulate continuous integration / continuous development (CI/CD) processes by injecting malicious code into the build process. There are several mechanisms for poisoning pipelines: 

* In a <b>Direct Pipeline Execution</b> scenario, the threat actor directly modifies the CI configuration file (e.g., `gitlab-ci.yml` in GitLab). They may include a command to exfiltrate credentials leveraged in the build process to a remote server, or to export them as a workflow artifact.[^fn5][^fn6]
* In an <b>Indirect Pipeline Execution</b> scenario, the threat actor injects malicious code into files referenced by the CI configuration file. These may include makefiles, scripts, unit tests, and linters.[^fn6]
* In a <b>Public Pipeline Execution</b> scenario, the threat actor does not have direct access to the repository but instead creates a malicious pull request from a fork that triggers a part of the CI/CD pipeline. For example, in GitHub Actions, the `pull_request_target` trigger allows workflows running from forked repositories to access secrets.  If this trigger is combined with an explicit pull request checkout and a location for a threat actor to insert malicious code (e.g., an `npm build` command), a threat actor may be able to leak pipeline credentials.[^fn5][^fn2] Similarly, threat actors may craft pull requests with malicious inputs (such as branch names) if the build pipeline treats those inputs as trusted.[^fn7][^fn1][^fn3] Finally, if a pipeline leverages a self-hosted runner, a threat actor may be able to execute arbitrary code on a host inside the organization’s network.[^fn4]

By poisoning CI/CD pipelines, threat actors may be able to gain access to credentials, laterally move to additional hosts, or input malicious components to be shipped further down the pipeline (i.e., [Supply Chain Compromise](https://attack.mitre.org/techniques/T1195)). 


# Platform(s)

- SaaS

# Tactic(s)

- [[../Tactics/4. Execution|Execution]]


# External Reference(s)

- [T1677](https://attack.mitre.org/techniques/T1677)

[^fn1]: [Hugo Vincent. (2024, May 22). Hijacking GitHub runners to compromise the organization. Retrieved May 22, 2025.](https://www.synacktiv.com/en/publications/hijacking-github-runners-to-compromise-the-organization)
[^fn2]: [Jaroslav Lobačevski. (2021, August 3). Keeping your GitHub Actions and workflows secure Part 1: Preventing pwn requests. Retrieved May 22, 2025.](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/)
[^fn3]: [Jaroslav Lobačevski. (2021, August 4). Keeping your GitHub Actions and workflows secure Part 2: Untrusted input. Retrieved May 22, 2025.](https://securitylab.github.com/resources/github-actions-untrusted-input/)
[^fn4]: [John Stawinski IV. (2024, January 11). Playing with Fire – How We Executed a Critical Supply Chain Attack on PyTorch. Retrieved May 22, 2025.](https://johnstawinski.com/2024/01/11/playing-with-fire-how-we-executed-a-critical-supply-chain-attack-on-pytorch/)
[^fn5]: [Omer Gilm Aviad Hahami, Asi Greenholts, and Yaron Avital. (2025, March 20). GitHub Actions Supply Chain Attack: A Targeted Attack on Coinbase Expanded to the Widespread tj-actions/changed-files Incident: Threat Assessment . Retrieved May 22, 2025.](https://unit42.paloaltonetworks.com/github-actions-supply-chain-attack)
[^fn6]: [OWASP. (n.d.). CICD-SEC-4: Poisoned Pipeline Execution (PPE). Retrieved May 22, 2025.](https://owasp.org/www-project-top-10-ci-cd-security-risks/CICD-SEC-04-Poisoned-Pipeline-Execution)
[^fn7]: [Wiz Threat Research. (2024, December 9). Ultralytics AI Library Hacked via GitHub for Cryptomining. Retrieved May 22, 2025.](https://www.wiz.io/blog/ultralytics-ai-library-hacked-via-github-for-cryptomining)