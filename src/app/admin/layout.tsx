import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Star,
  Activity,
  Gamepad2,
  ArrowLeft,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-border bg-gray-100 p-4">
        <div className="mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
          <h1 className="mt-3 flex items-center gap-2 text-lg font-bold">
            <Gamepad2 className="h-5 w-5 text-accent" />
            Admin Panel
          </h1>
        </div>
        <nav className="space-y-1">
          <SidebarLink href="/admin" icon={<LayoutDashboard className="h-4 w-4" />}>
            Dashboard
          </SidebarLink>
          <SidebarLink href="/admin/articles" icon={<Newspaper className="h-4 w-4" />}>
            Articles
          </SidebarLink>
          <SidebarLink href="/admin/reviews" icon={<Star className="h-4 w-4" />}>
            Reviews
          </SidebarLink>
          <SidebarLink href="/admin/pipeline" icon={<Activity className="h-4 w-4" />}>
            Pipeline
          </SidebarLink>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

function SidebarLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-white hover:text-accent"
    >
      {icon}
      {children}
    </Link>
  );
}
