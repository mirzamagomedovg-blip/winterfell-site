export default function Play() {
  return (
    <div className="p-8 bg-black bg-opacity-60 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Хотите сыграть вместе? Подавайте заявку!
      </h1>

      <p className="text-blue-400 mb-4 font-bold">Winterfell</p>

      <div className="flex gap-4">
        <a
          href="https://discord.gg/KSmnk8Dn"
          target="_blank"
          className="px-6 py-2 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Discord канал
        </a>
        <a
          href="https://discord.gg/PC5enfz2"
          target="_blank"
          className="px-6 py-2 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Подать заявку
        </a>
      </div>
    </div>
  );
}
