
import useTheme from "@/lib/hooks/useTheme";

function ThemedComponent() {
    const { isDark } = useTheme();
  
    return (
      <div style={{
        backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
        color: isDark ? 'white' : 'black',
        padding: '1rem'
      }}>
        This component changes based on the theme.
      </div>
    );
  }

export default ThemedComponent;