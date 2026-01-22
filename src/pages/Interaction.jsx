import { useState } from 'react';
import { MessageSquare, BarChart2, CheckCircle } from 'lucide-react';

export default function Interaction() {
    const [pollVote, setPollVote] = useState(null);
    const [comments, setComments] = useState([
        { id: 1, name: 'Minh Anh', text: 'Đúng thực tế quá, mình đi làm thêm suốt không còn sức học.' },
        { id: 2, name: 'Hoàng Nam', text: 'AI phát triển nhanh thật, nhưng đúng là phải có máy xịn mới học được.' }
    ]);
    const [newComment, setNewComment] = useState('');

    const handlePoll = (option) => {
        setPollVote(option);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;
        setComments([...comments, { id: Date.now(), name: 'Bạn', text: newComment }]);
        setNewComment('');
    };

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)' }}>Tương Tác & Thảo Luận</h1>
                <p>Góc nhìn của bạn về mối quan hệ này?</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Poll Section */}
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <BarChart2 color="var(--accent)" />
                        <h3 style={{ margin: 0 }}>Thăm Dò Ý Kiến</h3>
                    </div>
                    <p style={{ marginBottom: '1.5rem' }}>Yếu tố vật chất nào ảnh hưởng lớn nhất đến khả năng học tập/sáng tạo của bạn?</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Thu nhập cá nhân', 'Nơi ở ổn định', 'Thiết bị công nghệ', 'Thời gian rảnh rỗi'].map((option) => (
                            <button
                                key={option}
                                onClick={() => handlePoll(option)}
                                style={{
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: pollVote === option ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                                    backgroundColor: pollVote === option ? '#FFF3C4' : 'var(--bg-secondary)',
                                    color: pollVote === option ? 'var(--secondary)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontWeight: pollVote === option ? '600' : '400'
                                }}
                            >
                                {option}
                                {pollVote === option && <CheckCircle size={16} />}
                            </button>
                        ))}
                    </div>
                    {pollVote && <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--secondary)', fontStyle: 'italic', fontWeight: '600' }}>Cảm ơn bạn đã bình chọn!</p>}
                </div>

                {/* Discussion Section */}
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        <MessageSquare color="var(--primary)" />
                        <h3 style={{ margin: 0 }}>Thảo Luận</h3>
                    </div>

                    <div style={{
                        height: '300px',
                        overflowY: 'auto',
                        marginBottom: '1.5rem',
                        paddingRight: '0.5rem'
                    }}>
                        {comments.map((comment) => (
                            <div key={comment.id} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                                <strong style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem', color: 'var(--primary)' }}>{comment.name}</strong>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{comment.text}</span>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleCommentSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            placeholder="Chia sẻ ý kiến của bạn..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border-color)',
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontSize: '0.95rem'
                            }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem' }}>Gửi</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
