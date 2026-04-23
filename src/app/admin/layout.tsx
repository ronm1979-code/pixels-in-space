import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Star,
  Activity,
  Gamepad2,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const unreadMessages = await prisma.contactMessage
    .count({ where: { read: false } })
    .catch(() => 0);

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
          <SidebarLink href="/admin/messages" icon={<Mail className="h-4 w-4" />} badge={unreadMessages}>
            Messages
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
  badge,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-white hover:text-accent"
    >
      {icon}
      <span className="flex-1">{children}</span>
      {badge != null && badge > 0 && (
        <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}
