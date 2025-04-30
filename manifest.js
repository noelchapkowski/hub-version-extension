{
  "manifest_version": 3,
  "name": "ArcGIS Hub Site Information",
  "version": "1.0",
  "description": "Displays the version of ArcGIS Hub when a site is loaded.",
  "action": {
    "default_icon": {
      "16": "earth16.png",
      "48": "earth48.png",
      "128": "earth128.png"
    }
  },
  "icons": {
    "16": "earth16.png",
    "48": "earth48.png",
    "128": "earth128.png"
  },
  "permissions": [
    "activeTab"
  ],
  "host_permissions": [
    "http://*/*",
    "https://*/*"
  ],
  "content_scripts": [
    {
      "matches": ["*://*/*"],
      "js": ["content.js"]
    }
  ]
}
