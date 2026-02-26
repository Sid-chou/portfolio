type FooterProps = {
    isDark: boolean;
};

export default function Footer({ isDark }: FooterProps) {
    return (
        <footer className="w-full py-12 border-t border-white/5 text-center relative overflow-hidden">
            <div className="w-full flex flex-col items-center gap-4">
                <div className="flex items-center gap-6 text-gray-500">
                    <span className="text-xs font-sans">© 2025 Sidhant Choudhury Portfolio </span>
                </div>
            </div>
        </footer>
    );
}
