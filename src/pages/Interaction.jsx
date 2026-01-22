import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';

const questions = [
    {
        question: 'Câu tục ngữ nào sau đây phản ánh đúng nhất nguyên lý "Vật chất quyết định ý thức" trong đời sống?',
        options: [
            'A. Uống nước nhớ nguồn.',
            'B. Có thực mới vực được đạo.',
            'C. Gần mực thì đen, gần đèn thì rạng.',
            'D. Tốt gỗ hơn tốt nước sơn.'
        ],
        correctAnswer: 'B',
        explanation: 'Phải ăn no "thực" mới lo được việc đạo lý "đạo".'
    },
    {
        question: 'Trong Triết học, "Cơ sở hạ tầng" KHÔNG bao gồm yếu tố nào sau đây?',
        options: [
            'A. Quan hệ sở hữu tư liệu sản xuất.',
            'B. Quan hệ tổ chức quản lý sản xuất.',
            'C. Đường cao tốc, sân bay, cầu cống.',
            'D. Quan hệ phân phối sản phẩm.'
        ],
        correctAnswer: 'C',
        explanation: 'Đây là bẫy phổ biến nhất. Đường sá là "Cơ sở vật chất kỹ thuật", không phải CSHT trong triết học.'
    },
    {
        question: 'Sự bùng nổ của các ứng dụng "Xe ôm công nghệ" (Grab/Be) đã buộc Nhà nước phải làm gì?',
        options: [
            'A. Cấm hoàn toàn internet.',
            'B. Sửa đổi Luật Giao thông và quy định thuế.',
            'C. Bắt người dân quay lại đi xe ngựa.',
            'D. Không làm gì cả.'
        ],
        correctAnswer: 'B',
        explanation: 'Minh chứng: Kinh tế thay đổi → Pháp luật phải thay đổi theo.'
    },
    {
        question: 'Nếu ví xã hội như một chiếc máy tính, thì "Kiến trúc thượng tầng" đóng vai trò là:',
        options: [
            'A. Phần cứng (Hardware: Chip, Ram).',
            'B. Nguồn điện.',
            'C. Hệ điều hành & Phần mềm (Software).',
            'D. Vỏ máy tính.'
        ],
        correctAnswer: 'C',
        explanation: 'Nó là cơ chế vận hành, quản lý phần cứng.'
    },
    {
        question: 'Trí tuệ nhân tạo (AI)" đang thay đổi cách chúng ta làm việc. Việc các quốc gia họp bàn để ra mắt "Luật AI" cho thấy điều gì?',
        options: [
            'A. Luật pháp đang cố gắng đuổi kịp và điều chỉnh thực tiễn công nghệ.',
            'B. Luật pháp sinh ra công nghệ.',
            'C. Công nghệ không cần luật pháp.',
            'D. Luật pháp kìm hãm sự sáng tạo.'
        ],
        correctAnswer: 'A',
        explanation: 'Thực tiễn CSHT xuất hiện cái mới → KTTT phải bổ sung luật để quản lý'
    },
    {
        question: 'Theo C.Mác, con người cần thỏa mãn nhu cầu nào trước khi tham gia làm chính trị, nghệ thuật?',
        options: [
            'A. Nhu cầu giao tiếp.',
            'B. Nhu cầu ăn, mặc, ở.',
            'C. Nhu cầu được tôn trọng.',
            'D. Nhu cầu giải trí.'
        ],
        correctAnswer: 'B',
        explanation: 'Nhu cầu vật chất cơ bản.'
    },
    {
        question: 'Tại sao "Văn hóa khởi nghiệp" lại phát triển mạnh mẽ ở Việt Nam những năm gần đây?',
        options: [
            'A. Do ngẫu nhiên.',
            'B. Do chuyển sang nền kinh tế thị trường năng động.',
            'C. Do giới trẻ thích sống ảo.',
            'D. Do nhà nước bắt buộc.'
        ],
        correctAnswer: 'B',
        explanation: 'Kinh tế thị trường (CSHT) tạo ra văn hóa cạnh tranh và khởi nghiệp (KTTT).'
    },
    {
        question: 'Yếu tố nào sau đây thuộc về "Kiến trúc thượng tầng"?',
        options: [
            'A. Nhà máy Samsung tại Thái Nguyên.',
            'B. Hệ thống Ngân hàng Vietcombank.',
            'C. Luật An ninh mạng.',
            'D. Ruộng đất của nông dân.'
        ],
        correctAnswer: 'C',
        explanation: 'Luật pháp thuộc về tư tưởng/chính trị. Các cái còn lại thuộc về kinh tế/sản xuất.'
    },
    {
        question: 'Khi một phương thức sản xuất mới ra đời (ví dụ: Kinh tế số), yếu tố nào sẽ thay đổi CHẬM nhất?',
        options: [
            'A. Công nghệ sản xuất.',
            'B. Các quy định pháp luật.',
            'C. Tâm lý, phong tục tập quán.',
            'D. Cơ cấu ngành nghề.'
        ],
        correctAnswer: 'C',
        explanation: 'Tâm lý và thói quen cũ thường rất khó bỏ, có sức ỳ lớn.'
    },
    {
        question: 'Mối quan hệ giữa Kinh tế (CSHT) và Chính trị (KTTT) là mối quan hệ:',
        options: [
            'A. Một chiều (Kinh tế áp đặt hoàn toàn).',
            'B. Biện chứng (Tác động qua lại lẫn nhau).',
            'C. Tách biệt (Không liên quan gì nhau).',
            'D. Ngẫu nhiên (Lúc thế này, lúc thế kia).'
        ],
        correctAnswer: 'B',
        explanation: 'Kinh tế quyết định Chính trị, nhưng Chính trị cũng tác động ngược lại Kinh tế.'
    }
];

export default function Interaction() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [completed, setCompleted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    const handleAnswerSelect = (option) => {
        if (showResult) return; // Không cho chọn lại sau khi đã hiển thị kết quả

        const selectedLetter = option.charAt(0);
        const correct = selectedLetter === currentQuestion.correctAnswer;
        
        setSelectedAnswer(option);
        setIsCorrect(correct);
        setShowResult(true);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            setCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setIsCorrect(false);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setIsCorrect(false);
        setCompleted(false);
    };

    if (completed) {
        return (
            <div className="container section">
                <div style={{ 
                    textAlign: 'center', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    padding: '3rem'
                }}>
                    <div style={{ 
                        fontSize: '4rem', 
                        marginBottom: '1rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Trophy color="var(--accent)" size={80} />
                    </div>
                    <h1 style={{ 
                        fontFamily: 'var(--font-serif)',
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        color: 'var(--primary)'
                    }}>
                        Chúc Mừng!
                    </h1>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}>
                        Bạn đã hoàn thành tất cả {questions.length} câu hỏi!
                    </p>
                    <button 
                        onClick={handleRestart}
                        className="btn btn-primary"
                        style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}
                    >
                        Chơi Lại
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)' }}>Mini Game: Kiến Tạo Xã Hội</h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Chủ đề: Cơ sở hạ tầng & Kiến trúc thượng tầng
                </p>
                <div style={{ 
                    marginTop: '1rem',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)'
                }}>
                    Câu {currentQuestionIndex + 1} / {questions.length}
                </div>
            </div>

            <div className="card card-no-hover" style={{ 
                maxWidth: '800px', 
                width: '100%',
                margin: '0 auto',
                position: 'relative',
                transition: 'height 0.3s ease'
            }}>
                <h2 style={{ 
                    fontSize: '1.3rem',
                    marginBottom: '2rem',
                    lineHeight: '1.6',
                    color: 'var(--text-primary)'
                }}>
                    {currentQuestion.question}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {currentQuestion.options.map((option, index) => {
                        const optionLetter = option.charAt(0);
                        const isSelected = selectedAnswer === option;
                        const isCorrectOption = optionLetter === currentQuestion.correctAnswer;
                        
                        let buttonStyle = {
                            padding: '1rem 1.5rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            cursor: showResult ? 'default' : 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontWeight: '400',
                            fontSize: '1rem'
                        };

                        if (showResult) {
                            if (isCorrectOption) {
                                buttonStyle = {
                                    ...buttonStyle,
                                    border: '2px solid #10b981',
                                    backgroundColor: '#d1fae5',
                                    color: '#065f46',
                                    fontWeight: '600'
                                };
                            } else if (isSelected && !isCorrect) {
                                buttonStyle = {
                                    ...buttonStyle,
                                    border: '2px solid #ef4444',
                                    backgroundColor: '#fee2e2',
                                    color: '#991b1b',
                                    fontWeight: '600'
                                };
                            }
                        } else if (isSelected) {
                            buttonStyle = {
                                ...buttonStyle,
                                border: '2px solid var(--primary)',
                                backgroundColor: '#FFF3C4',
                                fontWeight: '600'
                            };
                        }

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(option)}
                                disabled={showResult}
                                style={buttonStyle}
                            >
                                <span>{option}</span>
                                {showResult && isCorrectOption && (
                                    <CheckCircle size={20} color="#10b981" />
                                )}
                                {showResult && isSelected && !isCorrect && (
                                    <XCircle size={20} color="#ef4444" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Phần kết quả và nút Next - tự động mở rộng theo chiều dọc */}
                {showResult && (
                    <>
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '1.5rem',
                            backgroundColor: isCorrect ? '#d1fae5' : '#fee2e2',
                            border: `2px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
                            color: isCorrect ? '#065f46' : '#991b1b',
                            opacity: 0,
                            animation: 'fadeIn 0.4s ease forwards'
                        }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.75rem',
                                marginBottom: '0.75rem',
                                fontWeight: '600',
                                fontSize: '1.1rem'
                            }}>
                                {isCorrect ? (
                                    <>
                                        <CheckCircle size={24} />
                                        <span>Đúng rồi!</span>
                                    </>
                                ) : (
                                    <>
                                        <XCircle size={24} />
                                        <span>Sai rồi!</span>
                                    </>
                                )}
                            </div>
                            <p style={{ 
                                margin: 0,
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                <strong>Giải thích:</strong> {currentQuestion.explanation}
                            </p>
                        </div>

                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'center',
                            marginBottom: '0.5rem',
                            opacity: 0,
                            animation: 'fadeIn 0.4s ease 0.2s forwards'
                        }}>
                            <button
                                onClick={handleNext}
                                className="btn btn-primary"
                                style={{
                                    padding: '0.75rem 2rem',
                                    fontSize: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {isLastQuestion ? 'Hoàn Thành' : 'Câu Tiếp Theo'}
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
