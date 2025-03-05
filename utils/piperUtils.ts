// utils/piperUtils.ts
export const getPiperSize = () => {
  const screenWidth = Dimensions.get('window').width;
  return screenWidth > 600 
    ? require('../assets/mascot/piper-penguin@2x.png')
    : require('../assets/mascot/piper-penguin.png');
};
