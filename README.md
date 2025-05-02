# hub-version-extension
This is a lightweight Chrome extension that extracts and displays information from ArcGIS Hub sites — including:

- **Opendata UI version**
- **Build date**
- **Detected locale**

The info is displayed in a small overlay when a Hub site is loaded, with a close button for convenience.

## Features

- Works on any ArcGIS Hub site, including those using custom domains
- Detects locale from page metadata
- Auto-injected overlay that doesn't interfere with the page
- Easy to use, no configuration needed

## Installation (Developer Mode)

1. Clone or download this repository.
2. Open `chrome://extensions` in your browser.
3. Enable **Developer mode** in the top-right.
4. Click **Load unpacked** and select the extension folder.
5. Visit an ArcGIS Hub site and see the overlay appear!

## Files

- `manifest.json`: Extension manifest
- `content.js`: Main script that injects the overlay
- `earth16.png`, `earth48.png`, `earth128.png`: Extension icons

## License

MIT — free to use, modify, and distribute.

---

Pull requests and improvements welcome!
