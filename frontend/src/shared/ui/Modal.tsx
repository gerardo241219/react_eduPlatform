interface Props {
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ open, title, children, onClose}: Props) {
    if(!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">
                        {title}
                    </h2>

                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-black"
                    >X</button>
                </div>

                {children}
            </div>
        </div>
    )
}