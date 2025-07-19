import React from 'react';
// Убрали ненужный импорт useTranslation
import './FrameworkTree.css';

const FrameworkTree = () => {
    // Убрали вызов useTranslation, так как он не используется

    // Обработчик клика для узлов (пока просто выводит сообщение в консоль)
    const handleNodeClick = (framework) => {
        console.log(`Нажат узел: ${framework}`);
    };

    return (
        <div className="tree-container">
            <div className="tree">
                <ul>
                    <li>
                        {/* Заменили <a> на <div> с ролью кнопки */}
                        <div
                            className="node root-node"
                            role="button"
                            tabIndex="0"
                            onClick={() => handleNodeClick('Root')}
                        >
                            Համապատասխանության Շրջանակներ
                        </div>
                        <ul>
                            <li>
                                <div className="node" role="button" tabIndex="0" onClick={() => handleNodeClick('SOC 2')}>SOC 2</div>
                            </li>
                            <li>
                                <div className="node" role="button" tabIndex="0" onClick={() => handleNodeClick('ISO 27001')}>ISO 27001</div>
                                <ul>
                                    <li>
                                        <div className="node" role="button" tabIndex="0" onClick={() => handleNodeClick('NIST')}>NIST</div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="node" role="button" tabIndex="0" onClick={() => handleNodeClick('GDPR')}>GDPR</div>
                                <ul>
                                    <li>
                                        <div className="node leaf-node" role="button" tabIndex="0" onClick={() => handleNodeClick('Arm Law')}>ՀՀ Օրենսդրություն</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FrameworkTree;