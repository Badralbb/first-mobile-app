import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type ImageViewerProps = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export const ImageViewer = ({ imgSource, selectedImage }: ImageViewerProps) => {
  const imgSrc = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imgSrc} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
