---
type: gtfobin
name: wireshark
platform: Unix
functions: [file-write, inherit]
tags: [gtfobin, unix, lotl]
---

# wireshark

## file-write

```bash
wireshark -c 1 -i lo -k -f 'udp port 12345' &
echo DATA | nc -u 127.127.127.127 12345
```
_This technique can be used to write arbitrary files, i.e., the dump of one UDP packet.

After starting Wireshark, and waiting for the capture to begin, deliver the UDP packet, e.g., with `nc` (see below). The capture then stops and the packet dump can be saved:

1. select the only received packet;

2. right-click on "Data" from the "Packet Details" pane, and select "Export Packet Bytes...";

3. choose where to save the packet dump._
**Contexts:** sudo, unprivileged

## inherit

```bash
wireshark
```
_This requires GUI interaction. Start Wireshark, then from the main menu, select "Tools" -> "Lua" -> "Evaluate". A window opens that allows to execute Lua code._
**Contexts:** sudo, unprivileged
