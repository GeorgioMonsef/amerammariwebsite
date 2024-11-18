import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css"; // Import global styles

export const metadata = {
    title: "Personal Website",
    description: "Welcome to my personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Global metadata */}
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}