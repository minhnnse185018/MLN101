import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const navItems = [
        { name: 'Trang Chủ', path: '/' },
        { name: 'Lý Luận', path: '/theory' },
        { name: 'Dẫn Chứng', path: '/examples' },
        { name: 'Tương Tác', path: '/interaction' },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 'var(--header-height)',
            backgroundColor: 'rgba(10, 10, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none' }}>
                    Triết Học <span style={{ color: 'var(--primary)' }}>Marx</span>
                </Link>

                <nav>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    style={{
                                        color: location.pathname === item.path ? 'var(--primary)' : 'var(--text-secondary)',
                                        fontWeight: location.pathname === item.path ? '600' : '400',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
