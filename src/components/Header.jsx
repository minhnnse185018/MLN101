import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Trang Chủ', path: '/' },
        { name: 'Lý Luận', path: '/theory' },
        { name: 'Dẫn Chứng', path: '/examples' },
        { name: 'Tương Tác', path: '/interaction' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            backgroundColor: 'rgba(255, 248, 225, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border-color)',
            boxShadow: '0 2px 8px rgba(139, 106, 0, 0.08)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700', color: 'var(--text-accent)', textDecoration: 'none', zIndex: 1001 }} onClick={closeMobileMenu}>
                    Triết Học <span style={{ color: 'var(--primary)' }}>Marx</span>
                </Link>

                {/* Desktop Navigation */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    style={{
                                        color: location.pathname === item.path ? 'var(--primary)' : 'var(--text-secondary)',
                                        fontWeight: location.pathname === item.path ? '600' : '400',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={toggleMobileMenu}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-accent)',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        zIndex: 1001
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <nav 
                    style={{
                        position: 'fixed',
                        top: 'var(--header-height)',
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(255, 248, 225, 0.98)',
                        backdropFilter: 'blur(10px)',
                        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 0.3s ease',
                        padding: '2rem 1rem',
                        borderBottom: '1px solid var(--border-color)',
                        boxShadow: '0 4px 12px rgba(139, 106, 0, 0.1)'
                    }}
                    className="mobile-nav"
                >
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none' }}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    style={{
                                        color: location.pathname === item.path ? 'var(--primary)' : 'var(--text-secondary)',
                                        fontWeight: location.pathname === item.path ? '600' : '400',
                                        textDecoration: 'none',
                                        fontSize: '1.1rem',
                                        display: 'block',
                                        padding: '0.5rem 0',
                                        transition: 'color 0.2s ease'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* CSS for responsive behavior */}
            <style>{`
                @media (min-width: 769px) {
                    .desktop-nav {
                        display: block !important;
                    }
                    .mobile-menu-btn, .mobile-nav {
                        display: none !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .mobile-nav {
                        display: block !important;
                    }
                }
            `}</style>
        </header>
    );
}
