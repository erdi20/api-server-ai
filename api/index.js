export default function handler(req, res) {
  // 1. Set Header agar bisa diakses dari aplikasi Mobile (CORS)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*"); // Izin untuk semua domain
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  // Handle preflight request (OPTIONS)
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // 2. Kirim data URL Server AI kamu
  res.status(200).json({
    api_url: "https://f37a0d1c5806.ngrok-free.app",
  });
}

