export const colors = {
    // Cores Principais
    primary: '#4a90e2',
    primaryDark: '#357abd',
    
    // Backgrounds
    background: '#f5f5f5',
    cardBackground: '#ffffff',

    // Texto
    text: '#333333',
    textSecondary: '#666666',
    textLight: '#999999',

    // Status
    error: '#e74c3c',
    success: '#2ecc71',
    warning: '#f39c12',

    // Bordas
    border: '#f0f0f0',
    shadow: '#000000',
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
}

export const typography = {
    title: {
        fontSize: 28,
        fontWeight: '700' as const,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600' as const,
    },
    body: {
        fontSize: 16,
        fontWeight: '400' as const,
    },
    caption: {
        fontSize: 14,
        fontWeight: '400' as const,
    },
    small: {
        fontSize: 12,
        fontWeight: '400' as const,
    }
}
