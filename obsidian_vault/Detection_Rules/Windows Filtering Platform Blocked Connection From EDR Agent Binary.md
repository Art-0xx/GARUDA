---
type: detection_rule
title: "Windows Filtering Platform Blocked Connection From EDR Agent Binary"
rule_id: bacf58c6-e199-4040-a94f-95dea0f1e45a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Filtering Platform Blocked Connection From EDR Agent Binary

## Description
Detects a Windows Filtering Platform (WFP) blocked connection event involving common Endpoint Detection and Response (EDR) agents.
Adversaries may use WFP filters to prevent Endpoint Detection and Response (EDR) agents from reporting security events.

## Log Source
```yaml
definition: 'Requirements: Audit Filtering Platform Connection needs to be enabled'
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  Application|endswith:
  - \AmSvc.exe
  - \cb.exe
  - \CETASvc.exe
  - \CNTAoSMgr.exe
  - \CrAmTray.exe
  - \CrsSvc.exe
  - \CSFalconContainer.exe
  - \CSFalconService.exe
  - \CybereasonAV.exe
  - \CylanceSvc.exe
  - \cyserver.exe
  - \CyveraService.exe
  - \CyvrFsFlt.exe
  - \EIConnector.exe
  - \elastic-agent.exe
  - \elastic-endpoint.exe
  - \EndpointBasecamp.exe
  - \ExecutionPreventionSvc.exe
  - \filebeat.exe
  - \fortiedr.exe
  - \hmpalert.exe
  - \hurukai.exe
  - \LogProcessorService.exe
  - \mcsagent.exe
  - \mcsclient.exe
  - \MsMpEng.exe
  - \MsSense.exe
  - \Ntrtscan.exe
  - \PccNTMon.exe
  - \QualysAgent.exe
  - \RepMgr.exe
  - \RepUtils.exe
  - \RepUx.exe
  - \RepWAV.exe
  - \RepWSC.exe
  - \sedservice.exe
  - \SenseCncProxy.exe
  - \SenseIR.exe
  - \SenseNdr.exe
  - \SenseSampleUploader.exe
  - \SentinelAgent.exe
  - \SentinelAgentWorker.exe
  - \SentinelBrowserNativeHost.exe
  - \SentinelHelperService.exe
  - \SentinelServiceHost.exe
  - \SentinelStaticEngine.exe
  - \SentinelStaticEngineScanner.exe
  - \sfc.exe
  - \sophos ui.exe
  - \sophosfilescanner.exe
  - \sophosfs.exe
  - \sophoshealth.exe
  - \sophosips.exe
  - \sophosLivequeryservice.exe
  - \sophosnetfilter.exe
  - \sophosntpservice.exe
  - \sophososquery.exe
  - \sspservice.exe
  - \TaniumClient.exe
  - \TaniumCX.exe
  - \TaniumDetectEngine.exe
  - \TMBMSRV.exe
  - \TmCCSF.exe
  - \TmListen.exe
  - \TmWSCSvc.exe
  - \Traps.exe
  - \winlogbeat.exe
  - \WSCommunicator.exe
  - \xagt.exe
  EventID: 5157
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://github.com/netero1010/EDRSilencer
- https://github.com/amjcyber/EDRNoiseMaker
- https://ghoulsec.medium.com/misc-series-4-forensics-on-edrsilencer-events-428b20b3f983

## Metadata
- **Author:** @gott_cyber
- **Date:** 2024-01-08
- **Rule ID:** `bacf58c6-e199-4040-a94f-95dea0f1e45a`
- **Source file:** `windows/builtin/security/object_access/win_security_wfp_endpoint_agent_blocked.yml`
