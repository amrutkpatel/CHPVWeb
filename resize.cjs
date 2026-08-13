const Jimp = require('jimp');

async function resizeImage() {
  try {
    const image = await Jimp.read('C:\\Users\\AmrutPatel\\.gemini\\antigravity-ide\\brain\\0d298ae6-fd1d-4965-9f72-a6b2c981ffcf\\chandipura_virus_icon_1786611496271.jpg');
    
    await image.clone().resize(192, 192).writeAsync('public/pwa-192x192.png');
    console.log('Created pwa-192x192.png');
    
    await image.clone().resize(512, 512).writeAsync('public/pwa-512x512.png');
    console.log('Created pwa-512x512.png');
    
  } catch (err) {
    console.error(err);
  }
}

resizeImage();
