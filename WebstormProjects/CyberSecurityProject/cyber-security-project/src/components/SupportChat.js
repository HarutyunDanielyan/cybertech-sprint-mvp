import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SupportChat.css';

const SupportChat = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>{t('chat_header')}</h3>
                        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chat-body">
                        <p className="message">{t('chat_greeting')}</p>
                    </div>
                    <div className="chat-footer">
                        <input type="text" placeholder={t('chat_placeholder')} />
                        <button>{t('chat_send_button')}</button>
                    </div>
                </div>
            )}
            <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? ' ' : '💬'}
            </button>
        </div>
    );
};

export default SupportChat;
