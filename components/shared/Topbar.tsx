import Link from 'next/link';

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items0center gap-4">
        <Image src= "/assets/logo.svg" alt="logo" width={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>
        Topb
        </nav>
        )
}

export default Topbar;