import './globals.css';
export const metadata={title:'Performance Lab — Web Performance Experiment',description:'A living experiment in web performance.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="noise">{children}</body></html>}