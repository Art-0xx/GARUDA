# IOC (Indicator of Compromise) — README

This README explains how to use the **IOC Template** within your Obsidian Cyber Threat Intelligence (CTI) vault.  
IOCs serve as atomic intelligence objects that support detection engineering, threat hunting, enrichment, incident response, and long-term analytic work.

This guide covers:
- The purpose of IOC notes  
- Where and how to store IOC files  
- Best practices for documenting high-quality indicators  
- How IOC notes link to threat actors, malware, campaigns, and TTPs  
- Example Dataview queries for IOC dashboards  

---

## 📌 Purpose of IOC Notes

Indicators of Compromise (IOCs) represent **observable pieces of data** that may signal malicious activity.  
Examples include:

- IP addresses  
- Domains  
- URLs  
- Hashes  
- Filenames or paths  
- Registry entries  
- Email addresses  
- User agents  
- SSL certificates / JA3 fingerprints  

High-quality IOC documentation helps with:

- Fast pivoting during investigations  
- Building repeatable hunting workflows  
- Maintaining a clean enrichment pipeline  
- Avoiding stale/noisy indicators  
- Linking indicators to threat actors, incidents, campaigns, and malware  
- Tracking signal fidelity and expiration  

Your IOC notes will form the *atomic layer* of your intelligence foundation.

---

## 📁 Recommended Storage Structure

Create or use the following folder:
`/08_IOCs/[IOC value].md`

Examples:
`/08_IOCs/8.8.8.8.md`
`/08_IOCs/maliciousdomain[.]com.md`
`/08_IOCs/35c9b2e8d8a37a4f37f7ad3e932c6c72.md`


Use Obsidian’s auto-linking to pivot from IOCs ↔ Threat Actors ↔ Malware.

---

## 🧩 How to Use the IOC Template

### 1. **Create a New Note**

1. Copy the IOC template into a new file.  
2. Name the note after the indicator (e.g., `evilhost[.]xyz.md`).  
3. Populate the YAML Frontmatter.

---

## 🏷️ YAML Frontmatter Guidance

The IOC template includes metadata used for:

- Sorting and filtering via Dataview  
- Linking to actors/malware/campaigns  
- Tracking fidelity, expiration, and confidence  
- Recording where the IOC was observed  

Key fields to fill out:

| Field | Description |
|-------|-------------|
| `ioc_value` | The actual observable (IP, hash, domain) |
| `ioc_type` | Type/category of indicator |
| `first_seen` | When first observed (internal or vendor) |
| `last_seen` | Latest time observed anywhere |
| `associated_threat_actors` | Actors linked to this IOC |
| `associated_malware` | Malware/tooling using this IOC |
| `confidence` | Low/medium/high certainty |
| `status` | active/inactive/false_positive/etc. |
| `data_source` | Where the indicator is visible in logs |
| `network_protocol` | DNS/HTTP/SMTP/etc. |
| `added_by` | Optional analyst attribution |

Keep fields consistent to enable powerful vault-wide queries.

---

## 📝 Filling Out the Markdown Sections

After the YAML, the IOC template includes:

### **Summary**
Short explanation describing what the IOC represents and why it matters.

### **Indicator Details**
Break down the IOC itself and how it behaves:

- IOC type  
- Associated actors/malware/campaigns  
- ATT&CK technique links  
- File or network attributes  

### **Detection & Telemetry**
Document where this IOC shows up:

- Host telemetry (EDR, Sysmon)
- Network telemetry (DNS, firewall, NDR)
- Email or identity logs  

This accelerates rapid investigation.

### **Hunting Queries**
Add KQL/Splunk/Sigma searches such as:
```kql
SecurityEvent  
| where CommandLine contains "malicious.exe"
```


### **Analyst Assessment**
Record your analytic confidence, tradecraft (Admiralty), and whether the IOC is still relevant.

### **Changelog**
Track changes for audit and freshness.

---

## 🎯 IOC Best Practices

To maintain a high-quality intelligence corpus:

### **1. Avoid Storing Noisy Indicators**
Commodity IPs, dynamic DNS domains, and ephemeral URLs may not provide long-term value.

### **2. Track Expiration**
Add and maintain:

- `expiration_date`  
- `status: expired`  
- Notes on why the indicator became stale  

### **3. Link Aggressively**
Use Obsidian internal links:

- `[[APT29]]`
- `[[Cobalt Strike Beacon]]`
- `[[Phishing Campaign - 2025-02]]`

This builds an intelligence graph.

### **4. Add Hunt Queries**
Each IOC should help you build a stronger detection pipeline.

### **5. Use Confidence Modeling**
Use Sherman–Kent or Admiralty Scale to document uncertainty.

### **6. Validate Before Adding**
For each IOC:

- Check VirusTotal  
- Check OTX  
- Check WHOIS  
- Look at sandbox output  
- Note potential false positives  

### **7. Document Your Logic**
Write out your **analyst reasoning** for why the IOC matters.

---

## 📊 Useful Dataview Queries

### **1. IOC Index (Basic)**
```
table ioc_value, ioc_type, last_seen, status
from "08_IOCs"
sort last_seen desc
```

---
### **2. High-Risk/Active Indicators**

```
table ioc_value, ioc_type, associated_threat_actors, last_seen 
from "08_IOCs" 
where status = "active" 
sort last_seen desc
```

---
### **3. IOCs Associated to a Specific Threat Actor**

Replace `"APT29"` with a target actor:

```
table ioc_value, ioc_type, last_seen 
from "08_IOCs" 
where contains(associated_threat_actors, "APT29") 
sort last_seen desc
```

---

### **4. IOCs Missing Last Seen Date**

```
table ioc_value, ioc_type, status 
from "08_IOCs" 
where !last_seen
```

---

### **5. IOC Expiration Review**

```
table ioc_value, expiration_date, status 
from "08_IOCs" 
where expiration_date 
sort expiration_date asc
```

---

## ✔️ Summary

By following this guide, your IOC notes will:
- Stay structured and consistent
- Support advanced Dataview dashboards
- Provide strong tradecraft documentation
- Integrate seamlessly with actors, malware, campaigns
- Enable repeatable detection & hunting workflows
- Maintain intelligence freshness and analytic rigor

Use this README alongside the IOC Template to ensure your vault remains organized, scalable, and operationally effective across the entire CTI lifecycle.