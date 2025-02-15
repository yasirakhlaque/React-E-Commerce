import { useRef, useEffect, useContext } from "react";
import "../styles/ShineText.css";
import { ThemeContext } from '../App';

function ShineText({ text, fontSize = "50px" }) {
    const { theme } = useContext(ThemeContext);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const textWidth = textRef.current.offsetWidth;

            // Ensure unique keyframe rule (for both themes)
            removeExistingKeyframe("shine");
            removeExistingKeyframe("shine-dark"); // New keyframe for dark theme

            const styleSheet = document.styleSheets[document.styleSheets.length - 1];

            // Add new dynamic keyframe (for light theme)
            styleSheet.insertRule(`
                @keyframes shine {
                    0% { background-position: -${textWidth}px; }
                    100% { background-position: ${textWidth * 1.5}px; }
                }
            `, styleSheet.cssRules.length);

            // Add new dynamic keyframe (for dark theme)
            styleSheet.insertRule(`
                @keyframes shine-dark {
                    0% { background-position: -${textWidth}px; }
                    100% { background-position: ${textWidth * 1.5}px; }
                }
            `, styleSheet.cssRules.length);
        }
    }, [text]); // Re-run if text changes

    return (
        <h1 className={`shine-text ${theme}`} style={{ fontSize }} ref={textRef}>
            {text}
        </h1>
    );
}

// Function to remove any existing keyframe to avoid duplication (handles both themes)
function removeExistingKeyframe(ruleName) {
    for (let sheet of document.styleSheets) {
        try {
            for (let i = 0; i < sheet.cssRules.length; i++) {
                if (sheet.cssRules[i].type === CSSRule.KEYFRAMES_RULE && sheet.cssRules[i].name === ruleName) {
                    sheet.deleteRule(i);
                    return;
                }
            }
        } catch (error) {
            console.warn("Could not access stylesheet rules due to CORS:", error);
        }
    }
}

export default ShineText;