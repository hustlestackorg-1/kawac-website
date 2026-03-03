"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot, Zap, Globe, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: "1",
        text: "Habari! I am the Kawac Guide. I can help you find programs, learn about our mission, or get involved. How can I support you today?",
        sender: "bot",
        timestamp: new Date()
    }
];

export function KawacAI() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages(INITIAL_MESSAGES);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: generateResponse(userMsg.text),
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateResponse = (input: string): string => {
        const lower = input.toLowerCase();
        if (lower.includes("donate") || lower.includes("invest")) return "Your support transforms lives. You can visit our donation page to make a secure contribution. Would you like the link?";
        if (lower.includes("volunteer") || lower.includes("join")) return "We'd love to have you on our team. Check out the 'Get Involved' section to see current volunteer opportunities.";
        if (lower.includes("program") || lower.includes("help")) return "We offer programs in Maternal Health, HIV/AIDS Support, and Inclusive Development. Which one would you like to explore?";
        if (lower.includes("hello") || lower.includes("hi")) return "Hello! I'm here to help you navigate the KAWAC ecosystem.";
        return "I'm still learning, but I can guide you to our 'Programs' page where you'll find detailed information about our work.";
    };

    return (
        <div className="fixed bottom-10 right-10 z-[9999]">
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute bottom-24 right-0 w-[340px] h-[500px] bg-black/60 backdrop-blur-2xl border border-white/20 rounded-[30px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
                    >
                        {/* Soft Ambient Glow */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                        </div>

                        {/* Friendly Header */}
                        <div className="relative p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-primary/80 flex items-center justify-center p-0.5 shadow-lg shadow-secondary/20">
                                    <img src="/assets/kawac_ai_logo.webp" alt="AI" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold tracking-wide text-sm">Kawac Guide</h3>
                                    <span className="text-[10px] text-white/50 font-medium flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Always Here to Help
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 active:scale-95"
                                aria-label="Close Chat"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar" ref={scrollRef}>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed relative",
                                            msg.sender === "user"
                                                ? "bg-secondary text-white rounded-br-sm shadow-md"
                                                : "bg-white/10 text-white border border-white/10 rounded-bl-sm backdrop-blur-md"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1.5 items-center border border-white/5">
                                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-5 bg-white/5 border-t border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask about our programs..."
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-secondary/50 focus:bg-black/30 transition-all text-sm backdrop-blur-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 hover:scale-105 transition-all disabled:opacity-30 disabled:scale-100"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                ) : (
                    <motion.button
                        key="trigger-button"
                        layoutId="chat-button"
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(124,58,237,0.5)] border-2 border-white/20 overflow-hidden">
                            {/* Custom AI Logo */}
                            <img src="/assets/kawac_ai_logo.webp" alt="Access AI" className="w-full h-full object-cover" />
                        </div>

                        {/* Pulse Waves */}
                        <div className="absolute -inset-2 bg-secondary/30 rounded-full -z-10 animate-ping opacity-20" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
