import React, { useState, useEffect } from 'react';

function Universe({ initialHeader, initialParagraphs }) {
    const [text, setText] = useState('');
    const [header, setHeader] = useState(initialHeader);
    // Initialize paragraphs as an array of objects with text and color properties
    const [paragraphs, setParagraphs] = useState(initialParagraphs.map(p => ({ text: p, color: 'white' })));

    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleChangeHeader = (event) => {
        setHeader(event.target.value);
    };

    const handleAddParagraph = () => {
        if (text.trim() !== '') {
            // Add new paragraph with default color
            setParagraphs([...paragraphs, { text, color: 'white' }]);
            setText(''); // Clear input after adding
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (paragraphs.length > 0) {
                const colors = ['red', 'blue', 'green'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];

                // Create a new array to avoid mutating the state directly
                const newParagraphs = [...paragraphs];
                // Change the color of the last paragraph
                newParagraphs[newParagraphs.length - 1] = { ...newParagraphs[newParagraphs.length - 1], color: randomColor };

                setParagraphs(newParagraphs);
            }
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [paragraphs]);

    return (
        <div style={{ maxWidth: '300px', minWidth: '250px', marginLeft: '6vw', marginRight: '6vw', marginBottom: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={header}
                    onChange={handleChangeHeader}
                    placeholder="Header title..."
                    className='form-control'
                    style={{ marginBottom: '10px' }}
                />
                <input
                    type="text"
                    value={text}
                    onChange={handleChangeText}
                    placeholder="Type something..."
                    className='form-control'
                />
                <button onClick={handleAddParagraph} className='btn btn-primary' style={{ marginTop: '10px' }}>Add Paragraph</button>
            </div>
            <h3 style={{ textAlign: 'center', marginTop: '30px' }}>{header}</h3>
            <div className="paragraphs-container" style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1em', fontSize: '14px', textAlign: 'left', color: paragraph.color }}>
                        {paragraph.text}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Universe;