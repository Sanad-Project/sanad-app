import { View, StyleSheet, Pressable, Image, ImageSourcePropType } from "react-native"
import { P } from "."
import { colors, globalStyles, widthPixel } from "~theme"

type SquerButtonProps = {
  title: string
  onPress: () => void
  active?: boolean
  style?: object
  img?: ImageSourcePropType
  imgUri?: string
}

export const SquerButton = ({ title, onPress, active, img, imgUri, style }: SquerButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.square, active && styles.squareActive, style]}>
        <Image source={img || { uri: imgUri }} style={globalStyles.image} />
      </View>
      <P fw="medium" size={16} color={active ? colors.text : colors.textLight}>{title}</P>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: widthPixel(75),
    height: widthPixel(75),
    padding: widthPixel(20),
    borderRadius: widthPixel(20),
    backgroundColor: colors.backgroundLight
  },
  squareActive: {
    backgroundColor: colors.primaryLight
  }
})