import Link from "next/link";

const Links = () => {

    const links = [
        {
            title: "Home",
            path: '/',
        },
        {
            title: "About",
            path: '/about',
        },
        {
            title: "Contact",
            path : '/contact',
        },
        {
            title: "Blog",
            path: '/blog',
        },
    ];

    return (
        <>
        {
            links.map((link) => {
                return (
                    <Link key={link.title} href={link.path}>{link.title}</Link>
                )
            })
        }
        </>
    )
}

export default Links;