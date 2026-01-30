export default function WhatsAppFloat({
  phoneInternational,
  message,
}: {
  phoneInternational: string; // مثال: 201207005495
  message: string;
}) {
  const waLink = `https://wa.me/${phoneInternational}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full border bg-white px-4 py-3 text-sm font-semibold shadow-md hover:shadow-lg"
      aria-label="WhatsApp"
      title="WhatsApp"
    >
      WhatsApp
    </a>
  );
}
