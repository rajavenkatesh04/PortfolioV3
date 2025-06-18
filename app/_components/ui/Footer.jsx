import { FaHeart } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full z-50 bg-black/80 backdrop-blur-md text-lime-400 text-center py-6 border-t border-lime-500">
            <p className="text-sm sm:text-base flex justify-center items-center gap-2">
                Built with love <FaHeart className="text-lime-500 animate-pulse drop-shadow-md" /> by Raja

            </p>
        </footer>
    );
}