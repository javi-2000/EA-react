// This script allows the proper selection of "src" for 
// 'Banners' components.

export default function FindCorrectImageSource(sourceData) {
    const windowWidth = window.innerWidth;
  
    for (const item of sourceData) {
      if (windowWidth <= item.width) {
        // console.log(windowWidth)
        // console.log(item.src)
        return item.src;
      }
    }
  }
  