import { Pressable } from "react-native"
import { P } from "~components"
import { useAppNavigation } from "~hooks"
import { colors, globalStyles } from "~theme"

export const NeedToRegister = () => {
  const { navigate } = useAppNavigation()

  const handlePress = () => navigate('Register')

  return <Pressable onPress={handlePress} style={[globalStyles.row, { justifyContent: 'center' }]}>
    <P size={16} color={colors.textLight}>ليس لديك حساب؟ </P>
    <P size={16} color='#666' fw="medium">قم بإنشاء حساب</P>
  </Pressable>
}