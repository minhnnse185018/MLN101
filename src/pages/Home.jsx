import { ArrowRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section - Karl Marx Quote */}
            <section className="hero-section" style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at center, rgba(201, 58, 58, 0.15) 0%, var(--bg-primary) 70%)'
            }}>
                <div className="container" style={{ 
                    opacity: Math.max(0, 1 - scrollY / 500),
                    transform: `translateY(${scrollY * 0.3}px)`
                }}>
                    <p className="hero-label" style={{ 
                        color: 'var(--primary)', 
                        fontWeight: '600', 
                        letterSpacing: '3px', 
                        textTransform: 'uppercase', 
                        marginBottom: '2rem',
                        fontSize: '0.9rem',
                        animation: 'fadeInUp 0.8s ease-out'
                    }}>
                        Karl Marx
                    </p>
                    <h1 className="hero-quote" style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: 'clamp(2rem, 6vw, 5rem)', 
                        marginBottom: '2rem', 
                        lineHeight: '1.3',
                        fontWeight: '700',
                        textShadow: '0 4px 20px rgba(201, 58, 58, 0.3)',
                        animation: 'fadeInUp 1s ease-out 0.2s backwards'
                    }}>
                        "Không phải ý thức con người <br />
                        quyết định sự tồn tại của họ, <br />
                        mà ngược lại, <br />
                        <span style={{ color: 'var(--primary)', display: 'block', marginTop: '1rem' }}>
                            sự tồn tại xã hội của họ <br />
                            quyết định ý thức của họ"
                        </span>
                    </h1>
                    <p className="hero-subtitle" style={{ 
                        fontSize: '1.1rem', 
                        maxWidth: '700px', 
                        margin: '0 auto 3rem', 
                        color: 'var(--text-secondary)',
                        lineHeight: '1.8',
                        animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
                    }}>
                        Từ cái ăn đến tư tưởng – Khám phá mối quan hệ biện chứng giữa <br />
                        <strong style={{ color: 'var(--primary)' }}>Cơ sở hạ tầng</strong> và <strong style={{ color: 'var(--secondary)' }}>Kiến trúc thượng tầng</strong> trong bối cảnh thế kỷ 21
                    </p>
                    <Link to="/theory" className="btn btn-primary" style={{ 
                        padding: '1.2rem 2.5rem', 
                        fontSize: '1.1rem',
                        animation: 'fadeInUp 1.4s ease-out 0.6s backwards',
                        boxShadow: '0 8px 24px rgba(201, 58, 58, 0.4)'
                    }}>
                        Khám phá mối quan hệ CSHT – KTTT <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: Math.max(0, 1 - scrollY / 300),
                    animation: 'bounce 2s infinite'
                }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        Cuộn xuống để khám phá
                    </p>
                    <div style={{ 
                        width: '30px', 
                        height: '50px', 
                        border: '2px solid var(--text-secondary)', 
                        borderRadius: '20px',
                        margin: '0 auto',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '4px',
                            height: '8px',
                            background: 'var(--primary)',
                            borderRadius: '2px',
                            position: 'absolute',
                            top: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            animation: 'scrollWheel 1.5s infinite'
                        }}></div>
                    </div>
                </div>
            </section>

            {/* Storytelling Section - Scroll-based Animation */}
            <section className="section storytelling-section" style={{ 
                backgroundColor: 'var(--bg-secondary)',
                padding: '6rem 0',
                position: 'relative'
            }}>
                <div className="container">
                    <h2 style={{ 
                        textAlign: 'center', 
                        marginBottom: '1rem',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontFamily: 'var(--font-serif)'
                    }}>
                        Quy Luật Vận Động Xã Hội
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--text-secondary)',
                        marginBottom: '4rem',
                        fontSize: '1.1rem'
                    }}>
                        Sự chuyển biến từ thiếu thốn đến phát triển
                    </p>

                    <div className="transformation-container" style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '2rem',
                        alignItems: 'center'
                    }}>
                        {/* Card 1: Instability - Animated on scroll */}
                        <div 
                            className="card transformation-card" 
                            style={{ 
                                borderColor: 'rgba(239, 68, 68, 0.3)',
                                transform: scrollY > 400 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                                opacity: scrollY > 400 ? 1 : 0,
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, var(--bg-card) 100%)'
                            }}
                        >
                            <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
                                <AlertTriangle size={48} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thiếu Thốn Vật Chất</h3>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                Khi nhu cầu cơ bản như <strong>ăn, ở, mặc</strong> không được đáp ứng, 
                                con người bị cuốn vào vòng xoáy sinh tồn.
                            </p>
                            <div style={{
                                borderTop: '1px solid rgba(239, 68, 68, 0.2)',
                                paddingTop: '1rem'
                            }}>
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem'
                                }}>
                                    HỆ QUẢ:
                                </p>
                                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>🔴 Bất ổn xã hội gia tăng</li>
                                    <li style={{ marginBottom: '0.5rem' }}>🔴 Giáo dục bị xem nhẹ</li>
                                    <li>🔴 Văn hóa & đạo đức suy thoái</li>
                                </ul>
                            </div>
                        </div>

                        {/* Transformation Arrow - Animated */}
                        <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            transform: scrollY > 500 ? 'scale(1)' : 'scale(0)',
                            opacity: scrollY > 500 ? 1 : 0,
                            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <ArrowRight 
                                    size={48} 
                                    color="var(--accent)" 
                                    className="desktop-only-arrow pulse-animation" 
                                    strokeWidth={2}
                                />
                                <p style={{
                                    marginTop: '1rem',
                                    color: 'var(--accent)',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    letterSpacing: '1px'
                                }}>
                                    CHUYỂN BIẾN
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Development - Animated on scroll */}
                        <div 
                            className="card transformation-card" 
                            style={{ 
                                borderColor: 'rgba(16, 185, 129, 0.3)',
                                transform: scrollY > 600 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                                opacity: scrollY > 600 ? 1 : 0,
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
                                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, var(--bg-card) 100%)'
                            }}
                        >
                            <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                                <TrendingUp size={48} strokeWidth={1.5} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Đời Sống Ổn Định</h3>
                            <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                Khi nền tảng vật chất <strong>(CSHT)</strong> vững chắc, 
                                con người có điều kiện phát triển toàn diện.
                            </p>
                            <div style={{
                                borderTop: '1px solid rgba(16, 185, 129, 0.2)',
                                paddingTop: '1rem'
                            }}>
                                <p style={{ 
                                    color: 'var(--text-secondary)', 
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '0.75rem'
                                }}>
                                    HỆ QUẢ:
                                </p>
                                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>🟢 Khoa học & Nghệ thuật thăng hoa</li>
                                    <li style={{ marginBottom: '0.5rem' }}>🟢 Thể chế chính trị ổn định</li>
                                    <li>🟢 Văn minh xã hội phát triển</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '5rem',
                        transform: scrollY > 700 ? 'translateY(0)' : 'translateY(20px)',
                        opacity: scrollY > 700 ? 1 : 0,
                        transition: 'all 0.8s ease-out 0.6s'
                    }}>
                        <p style={{ 
                            fontSize: '1.3rem', 
                            marginBottom: '2rem',
                            color: 'var(--text-accent)'
                        }}>
                            Đây chính là bằng chứng cho học thuyết của Marx
                        </p>
                        <Link to="/theory" className="btn btn-primary" style={{ 
                            padding: '1rem 2rem',
                            fontSize: '1.05rem'
                        }}>
                            Tìm hiểu chi tiết <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }

        @keyframes scrollWheel {
          0% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
          100% {
            opacity: 0;
            transform: translateY(20px) translateX(-50%);
          }
        }

        @keyframes pulse-animation {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .pulse-animation {
          animation: pulse-animation 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .desktop-only-arrow {
            transform: rotate(90deg);
            margin: 2rem 0;
          }
          
          .transformation-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </>
    );
}
