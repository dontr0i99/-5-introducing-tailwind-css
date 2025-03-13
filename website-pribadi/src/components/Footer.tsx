type FooterLinkProps = {
    text : string;
    url : string;
};

function FooterLink({ text, url } : FooterLinkProps) {
    return <a className="transition hover:text-zinc-300" href="{url}">{text}</a>;
}

export default function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16  bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-white"> 
                    <FooterLink text="Tentang Saya" url="/" />
                    <FooterLink text="Proyek" url="/projects" />
                    <FooterLink text="Esai" url="/essays" />
                </div>
                <p className="text-sm text-white">© 2025 M. Tryo Bagus Anugerah Putra. All rights reserved.</p>
            </div>
        </footer>
    );
}