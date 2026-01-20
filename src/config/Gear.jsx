import { Headphones, Keyboard, Laptop, Mouse, Phone } from "lucide-react";

export const devices = [
  {
    name: "Asus VivoBook 8GB 512GB ( Linux + Windows dual boot )",
    icon: <Laptop className="size-4" />,
  },

  {
    name: "Magic Keyboard",
    icon: <Keyboard className="size-4" />,
  },
  {
    name: "ANT Esports MK1000",
    icon: <Mouse className="size-4" />,
  },
  {
    name: "pTron + OnePlus Nord Buds 3",
    icon: <Headphones className="size-4" />,
  },
  {
    name: "Samsung S24 FE 5G (128 GB)",
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: "Dark Mode", href: "https://mybrowseraddon.com/dark-mode.html" },
  { name: "uBlock Origin", href: "https://ublockorigin.com/" },
  { name: "Responsive Viewer", href: "https://responsiveviewer.org/" },
  {
    name: "Control Panel for Twitter",
    href: "https://soitis.dev/control-panel-for-twitter",
  },
  {
    name: "Save image as Type",
    href: "https://chromewebstore.google.com/detail/gabfmnliflodkdafenbcpjdlppllnemd?utm_source=item-share-cb",
  },
  {
    name: "WhatFont",
    href: "https://chromewebstore.google.com/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en",
  },
  {
    name: "React Developer Tools",
    href: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en",
  },
  { name: "daily.dev", href: "https://daily.dev/" },
  { name: "Grammarly", href: "https://www.grammarly.com/" },
  { name: "Wappalyzer", href: "https://www.wappalyzer.com/" },
  {
    name: "ColorZilla",
    href: "https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en",
  },
];

export const software = [
  { name: "Brave", href: "https://brave.com/" },
  { name: "Notion", href: "https://www.notion.so/desktop" },
  { name: "TickTick", href: "https://ticktick.com/download" },
  { name: "Cap ( Recording for Windows )", href: "https://cap.so" },
  {
    name: "OpenScreen ( Recording for Linux )",
    href: "https://openscreen.vercel.app/",
  },
  { name: "VLC", href: "https://www.videolan.org/vlc/" },
  {
    name: "Flow Launcher ( on Windows )",
    href: "https://www.flowlauncher.com/",
  },
  { name: "Ulauncher ( on Linux )", href: "https://ulauncher.io/" },
];
