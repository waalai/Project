import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
      setTimeout(() => {
        setMessages(prev => [...prev, "Thanks for your message! Our team will get back to you soon."]);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 bg-primary-600 text-white rounded-t-lg">
              <h3 className="font-semibold">Chat with us</h3>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 p-2 rounded-lg ${
                    i % 2 === 0
                      ? 'bg-primary-100 ml-auto max-w-[80%]'
                      : 'bg-white max-w-[80%]'
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}