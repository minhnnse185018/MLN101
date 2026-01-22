export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border-color)',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: '0 -2px 8px rgba(139, 106, 0, 0.05)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-accent)', fontWeight: '500' }}>
                    "Không có nền tảng vật chất ổn định thì không thể có đời sống tinh thần phát triển bền vững."
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    © 2024 Triết Học Marx Hiện Đại. Xây dựng cho mục đích giáo dục.
                </p>
            </div>
        </footer>
    );
}
