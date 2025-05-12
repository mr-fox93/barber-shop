import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="mt-2 text-2xl font-semibold">Page not found</h2>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/pl"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 