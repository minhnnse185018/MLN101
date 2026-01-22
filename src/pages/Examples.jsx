import { Smartphone, GraduationCap, HeartHandshake, Cpu } from 'lucide-react';

const ExampleItem = ({ icon: Icon, title, context, analysis, color, align = 'left' }) => (
    <div style={{
        display: 'flex',
        flexDirection: align === 'left' ? 'row' : 'row-reverse',
        gap: '3rem',
        marginBottom: '6rem',
        alignItems: 'center'
    }} className="example-item">

        <div style={{ flex: 1 }}>
            <div style={{
                display: 'inline-flex',
                padding: '1rem',
                borderRadius: '50%',
                backgroundColor: `${color}20`,
                color: color,
                marginBottom: '1rem'
            }}>
                <Icon size={32} />
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h2>

            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.5rem' }}>Thực tiễn:</h4>
                <p>{context}</p>
            </div>

            <div className="card" style={{ borderLeft: `4px solid ${color}` }}>
                <h4 style={{ color: color, marginBottom: '0.5rem' }}>Phân tích Marxist:</h4>
                <p style={{ fontSize: '1rem' }}>{analysis}</p>
            </div>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            {/* Visual Abstract Representation could go here, for now using a colored block or placeholder */}
            <div style={{
                width: '100%',
                height: '300px',
                background: `linear-gradient(135deg, ${color}10 0%, ${color}05 100%)`,
                borderRadius: '16px',
                border: `1px dashed ${color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', opacity: 0.1, transform: 'scale(5)' }}>
                    <Icon size={100} color={color} />
                </div>
                <Icon size={80} color={color} style={{ opacity: 0.8 }} />
            </div>
        </div>
    </div>
);

export default function Examples() {
    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)' }}>Dẫn Chứng Thực Tiễn</h1>
                <p>Vận dụng lý luận vào bối cảnh thế kỷ 21</p>
            </div>

            <ExampleItem
                icon={Smartphone}
                title="Kinh Tế Số & Gig Economy"
                color="#3b82f6"
                context="Sự bùng nổ của Grab, Shopee, Freelancer tạo ra tầng lớp lao động nền tảng với thu nhập linh hoạt nhưng thiếu ổn định."
                analysis="CSHT thay đổi (công nghệ, phương thức làm việc mới) dẫn đến KTTT thay đổi: Xuất hiện luật pháp mới về lao động số, văn hóa làm việc từ xa, và sự đề cao giá trị tự do cá nhân."
                align="left"
            />

            <ExampleItem
                icon={GraduationCap}
                title="Đời Sống Sinh Viên"
                color="#f59e0b"
                context="Nhiều sinh viên phải làm thêm quá mức để trang trải chi phí sinh hoạt, dẫn đến thiếu thời gian cho học tập và nghiên cứu."
                analysis="Khi CSHT (thu nhập, điều kiện sống) chưa đảm bảo, KTTT (nhận thức chính trị, tư duy phản biện, sáng tạo khoa học) của sinh viên bị hạn chế và khó phát triển toàn diện."
                align="right"
            />

            <ExampleItem
                icon={HeartHandshake}
                title="Chính Sách An Sinh Xã Hội"
                color="#10b981"
                context="Các chính sách BHYT, nhà ở xã hội, trợ cấp thất nghiệp giúp đảm bảo mức sống cơ bản cho người dân."
                analysis="Khi Nhà nước (KTTT) tác động tích cực để đảm bảo CSHT cho người dân, niềm tin vào chế độ tăng lên, tạo ra sự ổn định chính trị và động lực phát triển kinh tế."
                align="left"
            />

            <ExampleItem
                icon={Cpu}
                title="Trí Tuệ Nhân Tạo (AI)"
                color="#8b5cf6"
                context="AI hỗ trợ sáng tạo nội dung, nghệ thuật, nghiên cứu khoa học, nhưng đòi hỏi hạ tầng thiết bị và dữ liệu lớn."
                analysis="Công nghệ (CSHT hiện đại) quyết định khả năng sáng tạo (KTTT). Chỉ khi có hạ tầng số đủ mạnh, con người mới có thể tiếp cận và phát triển các giá trị văn hóa, khoa học cao cấp."
                align="right"
            />

            <style>{`
        @media (max-width: 768px) {
          .example-item {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .example-item > div {
            width: 100%;
          }
        }
      `}</style>
        </div>
    );
}
