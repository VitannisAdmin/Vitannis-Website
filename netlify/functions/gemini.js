// netlify/functions/gemini.js

export default async (req, context) => {
    // Only allow POST requests
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const body = await req.json();
        const { prompt, systemInstruction } = body;
        
        // Securely pull the API key from Netlify's environment variables
        const apiKey = Netlify.env.get("GEMINI_API_KEY");

        if (!apiKey) {
            console.error("Missing GEMINI_API_KEY environment variable.");
            return new Response(JSON.stringify({ error: "Server configuration error." }), { status: 500 });
        }

        // Call the Gemini 3 Flash API (Latest)
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Google API Error Details:", errorData);
            throw new Error(`Google API Error: ${response.status}`);
        }

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";

        // Send the AI's response back to your website
        return new Response(JSON.stringify({ result: text }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        console.error("Function Error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
};
