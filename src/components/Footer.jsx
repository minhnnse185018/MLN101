export default function Footer() {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-secondary)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-accent)' }}>
                    "Không có nền tảng vật chất ổn định thì không thể có đời sống tinh thần phát triển bền vững."
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    © 2024 Triết Học Marx Hiện Đại. Xây dựng cho mục đích giáo dục.
                </p>
            </div>
        </footer>
    );
}
