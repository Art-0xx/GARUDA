---
tags: 
  - mitre/attack/data_component
---

# Snapshot Modification (`DC0058`)

Changes made to a cloud snapshot's metadata, attributes, or control settings. These modifications may involve adjusting access permissions, changing retention policies, or altering encryption settings. 

*Data Collection Measures:*

- AWS CloudTrail
    - Tracks API calls such as `ModifySnapshotAttribute`, `ResetSnapshotAttribute`, and `ModifySnapshotTier`.
- Azure Monitor Logs
    - Logs changes via `Microsoft.Compute/snapshots/write`.
- Google Cloud Logging
    - Captures modifications through `compute.snapshots.setIamPolicy` and `compute.snapshots.patch`.





