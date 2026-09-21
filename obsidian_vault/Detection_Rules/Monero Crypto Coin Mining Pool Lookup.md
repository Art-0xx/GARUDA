---
type: detection_rule
title: "Monero Crypto Coin Mining Pool Lookup"
rule_id: b593fd50-7335-4682-a36c-4edcb68e4641
platform: network
level: high
status: stable
tags: [detection, sigma, network]
mitre_tags: [attack.t1496, attack.t1567]
---

# Monero Crypto Coin Mining Pool Lookup

## Description
Detects suspicious DNS queries to Monero mining pools

## Log Source
```yaml
category: dns
```

## Detection Logic
```yaml
condition: selection
selection:
  query|contains:
  - pool.minexmr.com
  - fr.minexmr.com
  - de.minexmr.com
  - sg.minexmr.com
  - ca.minexmr.com
  - us-west.minexmr.com
  - pool.supportxmr.com
  - mine.c3pool.com
  - xmr-eu1.nanopool.org
  - xmr-eu2.nanopool.org
  - xmr-us-east1.nanopool.org
  - xmr-us-west1.nanopool.org
  - xmr-asia1.nanopool.org
  - xmr-jp1.nanopool.org
  - xmr-au1.nanopool.org
  - xmr.2miners.com
  - xmr.hashcity.org
  - xmr.f2pool.com
  - xmrpool.eu
  - pool.hashvault.pro
```

## MITRE ATT&CK
- T1496
- T1567

## False Positives
- Legitimate crypto coin mining

## References
- https://www.nextron-systems.com/2021/10/24/monero-mining-pool-fqdns/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-10-24
- **Rule ID:** `b593fd50-7335-4682-a36c-4edcb68e4641`
- **Source file:** `network/dns/net_dns_pua_cryptocoin_mining_xmr.yml`
