---
type: detection_rule
title: "Suspicious Use of /dev/tcp"
rule_id: 6cc5fceb-9a71-4c23-aeeb-963abe0b279c
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
---

# Suspicious Use of /dev/tcp

## Description
Detects suspicious command with /dev/tcp

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- cat </dev/tcp/
- exec 3<>/dev/tcp/
- echo >/dev/tcp/
- bash -i >& /dev/tcp/
- sh -i >& /dev/udp/
- 0<&196;exec 196<>/dev/tcp/
- exec 5<>/dev/tcp/
- (sh)0>/dev/tcp/
- bash -c 'bash -i >& /dev/tcp/
- echo -e '#!/bin/bash\nbash -i >& /dev/tcp/
```

## False Positives
- Unknown

## References
- https://www.andreafortuna.org/2021/03/06/some-useful-tips-about-dev-tcp/
- https://book.hacktricks.xyz/shells/shells/linux
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md#atomic-test-1---port-scan

## Metadata
- **Author:** frack113
- **Date:** 2021-12-10
- **Rule ID:** `6cc5fceb-9a71-4c23-aeeb-963abe0b279c`
- **Source file:** `linux/builtin/lnx_susp_dev_tcp.yml`
