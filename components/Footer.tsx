export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Personal Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}