---
title: Dealing with ACPI wakeups
layout: post
---

I've been having an issue with my laptop waking up from sleep after I've closed the lid to send it into suspend. This would drain battery and overheat the laptop, especially when placed into a backpack or bag! Very frustrating to get to wherever you're going and realize that your laptop is dead.

It's a Macbook Pro from 2015, and it's running Ubuntu 18.10.

After investigating what was happening via `/var/log/syslog` examination, I found a number of errors happening due to ARP table lookups. I spent a while trying to fix that, but eventually settled on a solution that just disabled wake-over-WiFi.

I checked what was able to wake up the device with:

`cat /proc/acpi/wakeup`

Which displayed a table that looked like this:

```
Device	S-state	  Status   Sysfs node
PEG0	  S3	*disabled  pci:0000:00:01.0
PEG1	  S3	*disabled  pci:0000:00:01.1
PEG2	  S3	*disabled
ARPT	  S4	*enabled   pci:0000:03:00.0
RP04	  S3	*disabled  pci:0000:00:1c.3
XHC1	  S3	*enabled   pci:0000:00:14.0
ADP1	  S4	*disabled  platform:ACPI0003:00
LID0	  S4	*enabled   platform:PNP0C0D:00
```

After some digging in `/var/log/syslog`, I found out that there were a number of wakeups happening because of ARP table issues. I had a hunch that the `ARPT` device was linked to that, and disabled it by creating a `/etc/rc.local` file. This file runs every time the computer boots, and mine looks like this:

```
#! /bin/sh
echo ARPT > /proc/acpi/wakeup
```

Don't forget to make it executable via a `chmod +x /etc/rc.local`!