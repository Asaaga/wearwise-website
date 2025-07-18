export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* 🔽 New section for account deletion info */}
        <h1 className="text-6xl">wearwise</h1>
        <section className="max-w-xl text-sm sm:text-base leading-relaxed text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">
            How Users can delete their account
          </h2>
          <p className="mb-2">
            Users can delete their account directly within the app by following
            these steps:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>Open the app and log into your account.</li>
            <li>
              Go to the <strong>Settings</strong> page (usually accessible from
              the profile or menu).
            </li>
            <li>
              Navigate to Privacy and Security <strong>“Delete Account”</strong>
              .
            </li>
            <li>
              Confirm the deletion when prompted by entering your password
            </li>
          </ol>
          <p className="mb-2">
            Once confirmed, your account and all associated data will be
            permanently deleted. This action is immediate and irreversible.
          </p>
          <p>
            If you need help, please contact our support team through
            thewearwisebrand@gmail.com.
          </p>
        </section>
      </main>
    </div>
  );
}
