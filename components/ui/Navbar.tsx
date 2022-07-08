import { useTheme } from "@nextui-org/react"

export const Navbar = () => {
    const {theme} = useTheme();
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <span>Soy un navbar</span>
    </div>
  )
}
