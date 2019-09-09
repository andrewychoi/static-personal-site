---
title: Fixing Spotify Desktop on HiDPI displays on Ubuntu 19.04
---

With the new version of Spotify delivered via `snap`, the [original fix](https://community.spotify.com/t5/Desktop-Linux/Linux-client-barely-usable-on-HiDPI-displays/td-p/1067272) references a `.desktop` file that no longer exists. The new desktop file can be found at:

`/var/lib/snapd/desktop/applications/spotify_spotify.desktop`

Adding the requisite `--force-device-scale-factor=2` before the `%U` in the `Exec` line fixed my issue!