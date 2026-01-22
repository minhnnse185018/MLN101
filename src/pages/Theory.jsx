import { ArrowDown, ArrowUp, Database, LandPlot } from 'lucide-react';

export default function Theory() {
    return (
        <div className="container section">
            {/* Opening Quote */}
            <div style={{ 
                textAlign: 'center', 
                marginBottom: '3rem',
                padding: '2rem',
                backgroundColor: 'var(--bg-card)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 2px 8px var(--shadow-color)'
            }}>
                <p style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                    fontStyle: 'italic',
                    color: 'var(--text-accent)',
                    marginBottom: '1rem',
                    lineHeight: '1.8'
                }}>
                    "Đời sống vật chất của xã hội là nền tảng hiện thực <br />của mọi hình thái ý thức xã hội."
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
                    — Luận điểm trung tâm của Chủ nghĩa Mác
                </p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-accent)' }}>Cơ Sở Lý Luận</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Mối quan hệ biện chứng giữa Cơ sở hạ tầng và Kiến trúc thượng tầng</p>
            </div>

            {/* Marx Quote */}
            <div className="card" style={{ 
                marginBottom: '4rem',
                maxWidth: '900px',
                margin: '0 auto 4rem',
                backgroundColor: '#FFF3C4',
                borderLeft: '5px solid var(--primary)'
            }}>
                <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                    Nhận định của Karl Marx:
                </h3>
                <p style={{ 
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    fontStyle: 'italic',
                    color: 'var(--text-accent)',
                    lineHeight: '1.9',
                    marginBottom: '1.5rem'
                }}>
                    "Con người ta trước hết phải có <strong>ăn, ở, mặc, đi lại</strong>, sau đó mới có thể làm <strong>chính trị, khoa học, nghệ thuật, tôn giáo</strong>"
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    👉 Đây là sự khái quát súc tích mối quan hệ giữa CSHT và KTTT.
                </p>
            </div>

            {/* Interactive Diagram */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto',
                position: 'relative'
            }}>

                {/* Superstructure Block */}
                <div className="card" style={{
                    border: '2px solid #64B5F6',
                    background: 'linear-gradient(180deg, #E3F2FD 0%, var(--bg-card) 100%)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <LandPlot color="#42A5F5" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#1976D2' }}>Kiến Trúc Thượng Tầng (KTTT)</h2>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>
                        Là toàn bộ các hình thái ý thức xã hội và thiết chế tương ứng:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <li>🏛️ Nhà nước, pháp luật</li>
                        <li>⚖️ Chính trị, đạo đức</li>
                        <li>🔬 Khoa học, nghệ thuật, tôn giáo</li>
                    </ul>
                </div>

                {/* Interaction Arrows */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', height: '60px', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <ArrowUp size={32} color="var(--accent)" />
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent)' }}>Quyết Định</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <ArrowDown size={32} color="var(--primary)" />
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--primary)' }}>Tác Động Trở Lại</span>
                    </div>
                </div>

                {/* Base Block */}
                <div className="card" style={{
                    border: '2px solid var(--primary)',
                    background: 'linear-gradient(0deg, #FFF3C4 0%, var(--bg-card) 100%)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Database color="var(--primary)" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--secondary)' }}>Cơ Sở Hạ Tầng (CSHT)</h2>
                    </div>
                    <p style={{ marginBottom: '1rem' }}>
                        Là toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội. Bao gồm:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <li>💰 Quan hệ sở hữu về tư liệu sản xuất</li>
                        <li>🏭 Quan hệ tổ chức quản lý sản xuất</li>
                        <li>📊 Quan hệ phân phối sản phẩm</li>
                    </ul>
                </div>
            </div>

            {/* Quote Block - CSHT quyết định KTTT */}
            <div className="card" style={{ 
                marginTop: '4rem',
                maxWidth: '800px',
                margin: '4rem auto',
                backgroundColor: '#E3F2FD',
                borderLeft: '5px solid #1976D2'
            }}>
                <p style={{ 
                    fontStyle: 'italic',
                    color: 'var(--text-accent)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    marginBottom: 0
                }}>
                    💡 <strong>Luận điểm 2:</strong> "Không thể tách rời chính trị, pháp luật, văn hóa ra khỏi cơ sở kinh tế đã sinh ra chúng."
                </p>
            </div>

            {/* Detailed Analysis */}
            <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
                    <h3 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>👑 Vai trò Quyết Định của CSHT</h3>
                    <p style={{ lineHeight: '1.8' }}>
                        Cơ sở hạ tầng sinh ra kiến trúc thượng tầng nào thì tương ứng với nó là kiến trúc thượng tầng ấy. 
                    </p>
                    <div className="card" style={{ 
                        marginTop: '1rem',
                        backgroundColor: '#FFFDF6',
                        padding: '1rem',
                        borderLeft: '3px solid var(--accent)'
                    }}>
                        <p style={{ 
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: 'var(--text-accent)',
                            marginBottom: 0
                        }}>
                            <strong>Luận điểm 3:</strong> "Khi cơ sở kinh tế thay đổi, sớm hay muộn kiến trúc thượng tầng cũng phải biến đổi theo."
                        </p>
                    </div>
                </div>
                <div className="card" style={{ borderLeft: '4px solid #1976D2' }}>
                    <h3 style={{ color: '#1976D2', marginBottom: '1rem' }}>🔄 Sự Tác Động Trở Lại của KTTT</h3>
                    <p style={{ lineHeight: '1.8' }}>
                        Kiến trúc thượng tầng không thụ động. Nó có khả năng tác động mạnh mẽ trở lại cơ sở hạ tầng theo hai hướng:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        <li>✅ <strong>Thúc đẩy</strong> sự phát triển (nếu phù hợp)</li>
                        <li>⛔ <strong>Kìm hãm</strong> sự phát triển (nếu lạc hậu)</li>
                    </ul>
                    <div className="card" style={{ 
                        marginTop: '1rem',
                        backgroundColor: '#E3F2FD',
                        padding: '1rem',
                        borderLeft: '3px solid #1976D2'
                    }}>
                        <p style={{ 
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            color: 'var(--text-accent)',
                            marginBottom: 0
                        }}>
                            <strong>Luận điểm 4 (biện chứng):</strong> "Kiến trúc thượng tầng không thụ động, mà có khả năng tác động trở lại cơ sở hạ tầng."
                        </p>
                    </div>
                </div>
            </div>

            {/* Modern Evidence Section */}
            <section style={{ marginTop: '6rem' }}>
                <h2 style={{ 
                    textAlign: 'center', 
                    marginBottom: '2rem', 
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--text-accent)',
                    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)'
                }}>
                    Cơ sở hạ tầng – Nền tảng của mọi giá trị tinh thần trong xã hội
                </h2>

                {/* Academic Article */}
                <div className="card" style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto 3rem',
                    padding: '2.5rem',
                    backgroundColor: 'var(--bg-card)',
                    borderTop: '4px solid var(--secondary)'
                }}>
                    <p style={{ 
                        textAlign: 'justify',
                        lineHeight: '2',
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        Theo học thuyết hình thái kinh tế – xã hội của <strong style={{ color: 'var(--secondary)' }}>Karl Marx</strong>, trước khi con người có thể sáng tạo ra các giá trị tinh thần như chính trị, khoa học, nghệ thuật hay tôn giáo, thì họ phải tồn tại với tư cách là những cá nhân vật chất. Điều đó đòi hỏi các nhu cầu cơ bản như ăn, ở, mặc và đi lại phải được bảo đảm.
                    </p>

                    <p style={{ 
                        textAlign: 'justify',
                        lineHeight: '2',
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        <strong style={{ color: 'var(--primary)' }}>Cơ sở hạ tầng của xã hội</strong> – bao gồm lực lượng sản xuất và quan hệ sản xuất – chính là nền tảng quyết định sự hình thành và phát triển của <strong style={{ color: '#1976D2' }}>kiến trúc thượng tầng</strong>. Những biến đổi trong phương thức sản xuất tất yếu dẫn đến sự biến đổi trong tư tưởng, thể chế và đời sống tinh thần của xã hội.
                    </p>

                    <p style={{ 
                        textAlign: 'justify',
                        lineHeight: '2',
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: '1.5rem'
                    }}>
                        Tuy nhiên, mối quan hệ này không mang tính một chiều. Kiến trúc thượng tầng, thông qua các thiết chế chính trị – pháp luật và các hình thái ý thức xã hội, có thể <strong style={{ color: 'var(--accent)' }}>tác động mạnh mẽ trở lại cơ sở hạ tầng</strong>, thúc đẩy hoặc kìm hãm sự phát triển kinh tế.
                    </p>

                    <p style={{ 
                        textAlign: 'justify',
                        lineHeight: '2',
                        fontSize: '1.05rem',
                        color: 'var(--text-primary)',
                        marginBottom: 0,
                        fontWeight: '500'
                    }}>
                        Nhận định của Karl Marx vì vậy không chỉ đúng trong bối cảnh lịch sử ra đời của chủ nghĩa tư bản, mà còn mang <strong style={{ color: 'var(--secondary)' }}>ý nghĩa thời sự sâu sắc</strong> trong xã hội hiện đại ngày nay.
                    </p>
                </div>

                <h2 style={{ 
                    textAlign: 'center', 
                    marginBottom: '3rem', 
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--text-accent)',
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                    marginTop: '4rem'
                }}>
                    Dẫn chứng thực tiễn hiện đại
                </h2>

                <div className="card" style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto 3rem',
                    borderLeft: '5px solid #1976D2',
                    backgroundColor: '#E3F2FD'
                }}>
                    <h3 style={{ color: '#1976D2', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                        🚀 Dẫn chứng 1: Lao động số & Kinh tế nền tảng
                    </h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            📍 Thực tiễn – Khi công nghệ phát triển (CSHT mới):
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.9' }}>
                            <li>💼 Làm việc từ xa (Remote work)</li>
                            <li>📱 Kinh tế nền tảng (Grab, Shopee, Freelancer)</li>
                            <li>🌐 Nền tảng số toàn cầu</li>
                        </ul>
                    </div>

                    <div style={{ 
                        backgroundColor: 'var(--bg-card)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid var(--primary)'
                    }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            ➡️ Xuất hiện (KTTT thay đổi):
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                            <li>⚖️ Văn hóa làm việc mới</li>
                            <li>📜 Tư duy chính trị – pháp lý mới về lao động</li>
                            <li>🎯 Quan niệm về cân bằng công việc - cuộc sống</li>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto 3rem',
                    borderLeft: '5px solid #F57C00',
                    backgroundColor: '#FFF3E0'
                }}>
                    <h3 style={{ color: '#F57C00', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                        🎓 Dẫn chứng 2: Sinh viên và điều kiện sống
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="comparison-grid">
                        <div style={{ 
                            backgroundColor: '#E8F5E9',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '3px solid #388E3C'
                        }}>
                            <h4 style={{ color: '#388E3C', marginBottom: '1rem' }}>✅ Điều kiện kinh tế tốt:</h4>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                                <li>Học tập hiệu quả</li>
                                <li>Nghiên cứu, sáng tạo</li>
                                <li>Tham gia hoạt động xã hội</li>
                            </ul>
                        </div>

                        <div style={{ 
                            backgroundColor: '#FFEBEE',
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: '3px solid #E57373'
                        }}>
                            <h4 style={{ color: '#E57373', marginBottom: '1rem' }}>❌ Thiếu điều kiện:</h4>
                            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                                <li>Chỉ tập trung mưu sinh</li>
                                <li>Làm thêm quá tải</li>
                                <li>Hạn chế phát triển toàn diện</li>
                            </ul>
                        </div>
                    </div>

                    <p style={{ 
                        marginTop: '1.5rem',
                        padding: '1rem',
                        backgroundColor: 'var(--bg-card)',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: '600',
                        color: 'var(--text-accent)',
                        textAlign: 'center'
                    }}>
                        💡 Thực tiễn chứng minh luận điểm của Marx một cách rất rõ ràng
                    </p>
                </div>

                <div className="card" style={{ 
                    maxWidth: '900px', 
                    margin: '0 auto',
                    borderLeft: '5px solid #388E3C',
                    backgroundColor: '#E8F5E9'
                }}>
                    <h3 style={{ color: '#388E3C', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                        🏛️ Dẫn chứng 3: An sinh xã hội
                    </h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--secondary)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            📍 Khi Nhà nước đảm bảo:
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.9' }}>
                            <li>💼 Việc làm ổn định</li>
                            <li>🏥 Y tế toàn dân</li>
                            <li>🏠 Nhà ở xã hội</li>
                        </ul>
                    </div>

                    <div style={{ 
                        backgroundColor: 'var(--bg-card)',
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '3px solid #388E3C'
                    }}>
                        <h4 style={{ color: '#388E3C', marginBottom: '1rem', fontSize: '1.1rem' }}>
                            ➡️ Người dân:
                        </h4>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                            <li>✅ Ổn định tư tưởng</li>
                            <li>✅ Tin tưởng thể chế</li>
                            <li>✅ Tham gia chính trị – xã hội tích cực</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .section > div:nth-last-child(2) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
        </div>
    );
}
