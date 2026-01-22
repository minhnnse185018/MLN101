import { ArrowDown, ArrowUp, Database, LandPlot } from 'lucide-react';

export default function Theory() {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)' }}>Cơ Sở Lý Luận</h1>
                <p>Mối quan hệ biện chứng giữa Cơ sở hạ tầng và Kiến trúc thượng tầng</p>
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
                    border: '1px solid var(--secondary)',
                    background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(36, 36, 36, 1) 100%)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <LandPlot color="var(--secondary)" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--secondary)' }}>Kiến Trúc Thượng Tầng</h2>
                    </div>
                    <p>Bao gồm toàn bộ hệ thống quan điểm chính trị, pháp quyền, triết học, đạo đức, tôn giáo, nghệ thuật... cùng với các thiết chế xã hội tương ứng (nhà nước, đảng phái, giáo hội...).</p>
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
                    border: '1px solid var(--primary)',
                    background: 'linear-gradient(0deg, rgba(201, 58, 58, 0.1) 0%, rgba(36, 36, 36, 1) 100%)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <Database color="var(--primary)" />
                        <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--primary)' }}>Cơ Sở Hạ Tầng</h2>
                    </div>
                    <p>Là toàn bộ những quan hệ sản xuất hợp thành cơ cấu kinh tế của một xã hội nhất định. Bao gồm:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                        <li>Quan hệ sở hữu về tư liệu sản xuất</li>
                        <li>Quan hệ tổ chức quản lý sản xuất</li>
                        <li>Quan hệ phân phối sản phẩm</li>
                    </ul>
                </div>
            </div>

            {/* Detailed Analysis */}
            <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                    <h3 style={{ color: 'var(--accent)' }}>Vai trò Quyết Định</h3>
                    <p>
                        Cơ sở hạ tầng sinh ra kiến trúc thượng tầng nào thì tương ứng với nó là kiến trúc thượng tầng ấy. Khi cơ sở hạ tầng thay đổi thì sớm hay muộn, kiến trúc thượng tầng cũng phải thay đổi theo.
                    </p>
                </div>
                <div>
                    <h3 style={{ color: 'var(--accent)' }}>Sự Tác Động Trở Lại</h3>
                    <p>
                        Kiến trúc thượng tầng không thụ động. Nó có khả năng tác động mạnh mẽ trở lại cơ sở hạ tầng theo hai hướng: thúc đẩy sự phát triển (nếu phù hợp) hoặc kìm hãm (nếu lạc hậu).
                    </p>
                </div>
            </div>

            {/* Modern Evidence Section */}
            <section style={{ marginTop: '6rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                    III. DẪN CHỨNG MỚI – HIỆN ĐẠI – THUYẾT PHỤC
                </h2>

                <div className="card" style={{ maxWidth: '800px', margin: '0 auto', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                        1. Dẫn chứng 1: Kinh tế số & lao động nền tảng (rất mới)
                    </h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Thực tiễn:</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            Khi kinh tế số phát triển:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                            <li>Grab, Shopee, Freelancer, Remote work</li>
                        </ul>

                        <p style={{ marginBottom: '1rem' }}>
                            Người lao động:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                            <li>Có thu nhập → tiếp cận giáo dục online, văn hóa số</li>
                            <li>Tham gia tranh luận chính sách, mạng xã hội</li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Phân tích theo Marx:</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            CSHT thay đổi (công nghệ, việc làm mới)
                        </p>
                        <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '1rem' }}>
                            ➡️ KTTT thay đổi:
                        </p>
                        <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                            <li>Pháp luật lao động số</li>
                            <li>Văn hóa làm việc linh hoạt</li>
                            <li>Giá trị tự do sáng tạo cá nhân</li>
                        </ul>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .section > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </div>
    );
}
