---
type: detection_rule
title: "New Agent Skills Installation Attempt Via Node.EXE"
rule_id: afa71271-6a97-4e47-810f-83120fb1a4ce
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.007]
---

# New Agent Skills Installation Attempt Via Node.EXE

## Description
Detects the attempt to install new skills for AI agents using the "npx skills" command.
Agent skills enhance AI agents with new capabilities, but attackers may abuse this mechanism to inject malicious commands executed by the agent on behalf of the user.
The "npx skills" command can install skills for various agents (e.g., Claude Code, Cursor, and others).
Analysts should review any installed skills to verify their legitimacy.
Note: Tune this rule based on whether AI agent tooling is allowed in your environment.
In environments where such tooling is authorized, this detection may reflect normal activity and the alert level should be adjusted accordingly.
In environments where AI agent tooling is not permitted, this activity is likely suspicious and may require immediate investigation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - npx-cli.js
  - 'skills '
  - ' add '
selection_img:
- Image|endswith: \node.exe
- OriginalFileName: node.exe
```

## MITRE ATT&CK
- T1059.007

## False Positives
- This rule will be triggered when a new agent skill is installed regardless if it is benign or malicious.
- High false positive rate expected in environments where AI agent tooling is authorized and commonly used.

## References
- https://blog.lukaszolejnik.com/supply-chain-risk-of-agentic-ai-infecting-infrastructures-via-skill-worms/
- https://github.com/vercel-labs/skills/blob/1f7fbc8d0e49c4e0601d364696bd1bdd15e80967/README.md
- https://opensourcemalware.com/blog/clawdbot-skills-ganked-your-crypto
- https://promptintel.novahunting.ai/molt

## Metadata
- **Author:** Marco Pedrinazzi (@pedrinazziM) (InTheCyber)
- **Date:** 2026-02-03
- **Rule ID:** `afa71271-6a97-4e47-810f-83120fb1a4ce`
- **Source file:** `windows/process_creation/proc_creation_win_node_new_agent_skills_installed.yml`
