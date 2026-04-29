# YancoTV &mdash; Public Release Channel

This repository hosts the public release channel for **YancoTV**, a sideload-only
IPTV player for Fire TV, Android TV, and Android 7+ phones.

## Download

**<https://yamanaddas.github.io/yancotv-releases/>**

The download page has install instructions for Fire TV / Android TV (via the
Downloader app) and for Android phones / tablets.

All release APKs are also available on the
[Releases](https://github.com/YamanAddas/yancotv-releases/releases) page directly.

## What's in this repo

| File | Purpose |
|---|---|
| `index.html` | Download landing page (served by GitHub Pages) |
| `update.json` | Auto-update feed read by the app on launch |
| `LICENSE` | MIT |
| `README.md` | This file |

The application source code is maintained privately. Only the public release
channel lives here.

## Verifying a build (optional)

Every YancoTV APK is signed with the same key. To verify a download:

```
apksigner verify --print-certs yancotv.apk
```

The expected signing certificate SHA-256 fingerprint is:

```
B1:01:25:B4:F8:A2:F6:7A:1C:71:F4:DF:0E:1A:0D:17:F0:D1:1F:AB:52:7D:56:CF:9A:C9:A0:54:04:B7:F4:30
```

If a build shows a different fingerprint, do not install it &mdash; it didn't
come from us.

## License

[MIT](LICENSE) &copy; 2026 Yaman Addas

## Contact

**contact@yancoverse.com**
