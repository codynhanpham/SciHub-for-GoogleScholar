# SciHub-for-GoogleScholar
 A simple Chrome extension that adds an "Open with Sci-Hub" button to Google Scholar search results.
 
 ***Disclaimer: Please use Sci-Hub for personal research purposes only, and please credit the researchers properly <3***
 
 ![A screenshot demo of the extension. A "Sci-Hub" button is inserted at the first position in the footer (below the description) of each Google Scholar's search result.](https://github.com/codynhanpham/SciHub-for-GoogleScholar/blob/main/screenshot-demo.png)

---

## Installation

1. [Download](https://github.com/codynhanpham/SciHub-for-GoogleScholar/archive/refs/heads/main.zip) and Unzip this repository to your local device.
2. Go to the [`chrome://extensions/`](chrome://extensions/) page.
3. Toggle On the `Developer mode`
4. Select `Load unpacked` and navigate to the location of the repository folder on your device.
5. The extension should now appear in the list. You may have to turn on the extension itself manually, depending on your browser settings.

### Tips:
You can quickly customize the displayed `⮩ Sci-Hub` button text [(line 2)](https://github.com/codynhanpham/SciHub-for-GoogleScholar/blob/c730b35e083dc2cfed1f07c9f13ff6c1151b2704/content-script.js#L2) and the Sci-Hub domain/mirror [(line 3)](https://github.com/codynhanpham/SciHub-for-GoogleScholar/blob/c730b35e083dc2cfed1f07c9f13ff6c1151b2704/content-script.js#L3) to your liking by editing the [content-script.js](https://github.com/codynhanpham/SciHub-for-GoogleScholar/blob/main/content-script.js) file with any text editor



## Links

- [Sci-Hub](https://sci-hub.se/about)
- [Google Scholar](https://scholar.google.com)
